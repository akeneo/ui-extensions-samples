package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"strings"
)

// Function to execute the CLI command
func executeCommand(command string) (string, error) {
	log.Println("Executing command:", command)
	cmd := exec.Command("sh", "-c", command)
	var out bytes.Buffer
	cmd.Stdout = &out
	cmd.Stderr = &out
	err := cmd.Run()
	if err != nil {
		return "", err
	}
	return out.String(), nil
}

// Function to parse the output and extract credentials
func parseOutput(output string) (map[string]string, error) {
	log.Println("Parsing command output")
	credentials := make(map[string]string)
	re := regexp.MustCompile(`(Client ID|Secret|Username|Password):\s*(.*)`)
	matches := re.FindAllStringSubmatch(output, -1)
	for _, match := range matches {
		credentials[match[1]] = match[2]
	}
	return credentials, nil
}

// Function to write credentials to a file
func writeCredentialsToFile(credentials map[string]string, filePath string) error {
	log.Println("Writing credentials to file:", filePath)
	file, err := os.Create(filePath)
	if err != nil {
		return err
	}
	defer file.Close()

	for key, value := range credentials {
		_, err := file.WriteString(fmt.Sprintf("%s: %s\n", key, value))
		if err != nil {
			return err
		}
	}
	return nil
}

// Function to check if the credentials file exists
func credentialsFileExists(filePath string) bool {
	log.Println("Checking if credentials file exists:", filePath)
	_, err := os.Stat(filePath)
	return !os.IsNotExist(err)
}

// Function to read credentials from a file
func readCredentialsFromFile(filePath string) (map[string]string, error) {
	log.Println("Reading credentials from file:", filePath)
	credentials := make(map[string]string)
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		parts := strings.SplitN(line, ": ", 2)
		if len(parts) == 2 {
			credentials[parts[0]] = parts[1]
		}
	}

	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return credentials, nil
}

// Function to authenticate with the Akeneo PIM API
func authenticate(credentials map[string]string) (string, error) {
	log.Println("Authenticating with Akeneo PIM API")
	client := &http.Client{}
	data := url.Values{}
	data.Set("grant_type", "password")
	data.Set("client_id", credentials["Client ID"])
	data.Set("client_secret", credentials["Secret"])
	data.Set("username", credentials["Username"])
	data.Set("password", credentials["Password"])

	req, err := http.NewRequest("POST", "http://localhost:8080/api/oauth/v1/token", strings.NewReader(data.Encode()))
	if err != nil {
		return "", err
	}
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	var result map[string]interface{}
	err = json.Unmarshal(body, &result)
	if err != nil {
		return "", err
	}

	return result["access_token"].(string), nil
}

// Function to remove the credentials file
func removeCredentialsFile(filePath string) error {
	log.Println("Removing credentials file:", filePath)
	return os.Remove(filePath)
}

// Function to read UI extensions from a file
func readUIExtensionsFromFile(filePath string) ([]map[string]interface{}, error) {
	log.Println("Reading UI extensions from file:", filePath)
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var uiExtensions []map[string]interface{}
	err = json.NewDecoder(file).Decode(&uiExtensions)
	if err != nil {
		return nil, err
	}

	return uiExtensions, nil
}

// Function to create UI extensions
func createUIExtensions(accessToken string, uiExtensions []map[string]interface{}) error {
	log.Println("Creating UI extensions")
	client := &http.Client{}

	for _, extension := range uiExtensions {
		code := extension["code"].(string)
		extensionJSON, err := json.Marshal(extension)
		if err != nil {
			return err
		}

		req, err := http.NewRequest("POST", fmt.Sprintf("http://localhost:8080/api/rest/v1/ui-extension/%s", code), bytes.NewBuffer(extensionJSON))
		if err != nil {
			return err
		}
		req.Header.Set("Authorization", "Bearer "+accessToken)
		req.Header.Set("Content-Type", "application/json")

		resp, err := client.Do(req)
		if err != nil {
			return err
		}
		defer resp.Body.Close()

		if resp.StatusCode != http.StatusCreated {
			body, _ := ioutil.ReadAll(resp.Body)
			return fmt.Errorf("failed to create UI extension: %s", body)
		}

		log.Printf("UI extension created: %v\n", extension)
	}

	return nil
}

func main() {
	// Define the file path in the home directory
	homeDir, err := os.UserHomeDir()
	if err != nil {
		log.Fatalf("Error getting home directory: %v\n", err)
	}
	credentialsFilePath := filepath.Join(homeDir, "akeneo_credentials.txt")
	uiExtensionsFilePath := filepath.Join(homeDir, "ui-extensions.json")

	// Check if the credentials file exists
	if credentialsFileExists(credentialsFilePath) {
		// Read the credentials from the file
		credentials, err := readCredentialsFromFile(credentialsFilePath)
		if err != nil {
			log.Fatalf("Error reading credentials from file: %v\n", err)
		}
		log.Println("Read credentials:", credentials)

		// Authenticate with the Akeneo PIM API
		accessToken, err := authenticate(credentials)
		if err != nil {
			log.Println("Error authenticating with Akeneo PIM API:", err)
			// Remove the credentials file if authentication fails
			err = removeCredentialsFile(credentialsFilePath)
			if err != nil {
				log.Fatalf("Error removing credentials file: %v\n", err)
			}
		} else {
			log.Println("Access Token:", accessToken)

			// Read UI extensions from the file
			uiExtensions, err := readUIExtensionsFromFile(uiExtensionsFilePath)
			if err != nil {
				log.Fatalf("Error reading UI extensions from file: %v\n", err)
			}
			log.Println("Read UI extensions:", uiExtensions)

			// Create UI extensions
			err = createUIExtensions(accessToken, uiExtensions)
			if err != nil {
				log.Fatalf("Error creating UI extensions: %v\n", err)
			}

			return
		}
	}

	// Define the CLI command
	command := "APP_ENV=dev docker compose run php bin/console akeneo:connectivity-connection:create testaymeric2"

	// Execute the CLI command
	output, err := executeCommand(command)
	if err != nil {
		log.Fatalf("Error executing command: %v\n", err)
	}
	log.Println("Command output:", output)

	// Parse the output to extract credentials
	credentials, err := parseOutput(output)
	if err != nil {
		log.Fatalf("Error parsing output: %v\n", err)
	}
	log.Println("Extracted credentials:", credentials)

	// Write the credentials to the file
	err = writeCredentialsToFile(credentials, credentialsFilePath)
	if err != nil {
		log.Fatalf("Error writing credentials to file: %v\n", err)
	}

	// Authenticate with the Akeneo PIM API
	accessToken, err := authenticate(credentials)
	if err != nil {
		log.Fatalf("Error authenticating with Akeneo PIM API: %v\n", err)
	}
	log.Println("Access Token:", accessToken)

	// Read UI extensions from the file
	uiExtensions, err := readUIExtensionsFromFile(uiExtensionsFilePath)
	if err != nil {
		log.Fatalf("Error reading UI extensions from file: %v\n", err)
	}
	log.Println("Read UI extensions:", uiExtensions)

	// Create UI extensions
	err = createUIExtensions(accessToken, uiExtensions)
	if err != nil {
		log.Fatalf("Error creating UI extensions: %v\n", err)
	}

	log.Printf("Credentials file is ready at %s\n", credentialsFilePath)
}
