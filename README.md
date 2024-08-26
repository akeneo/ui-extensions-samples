# Sample Simple Iframe

This mini application allows to display several screens in a PIM.

By default, it is accessible in `http://localhost:8090`

This application is separated into 2 parts:

### A React server

The role of the React server is to display React elements. It displays 3 pages:
- The homepage (`/`)
- The content of the Edit Product Tab (`/edit_product_tab`)
- The content of the Edit Category Tab (`/edit_category_tab`)

### An Express server

The role of the Express server is to listen for calls coming from React server, then call the PIM API, and finally return the result to the React server.
Indeed, the PIM API cannot be used to directly be called by a browser (i.e. this is a server-to-server API), so we need to add some bridges.

Here is a non-exhaustive list of the endpoints:
- Get attributes (`/getAttributes?codes=sku,description`)
- Get product (`/getProduct?uuid=this-is-a-uuid`)
- ...

If this server never authenticate, a first call is done to get an access_token.

> [!WARNING]  
> There is no API authorization token retry process; once the auth_token is done (after 1 hour), you need to stop and run the Express server to clear cache. 

# How to run it?

## How to deploy

### Install dependencies

```
npm install
```

### Fill the env variables

Create a new Connection in your PIM, then fill the `env.js` file.

### Build react 

```
npm run build
```

### Init gcloud

Init gcloud then follow the process and choose on which project you want to deploy your app:
```
gcloud init
```

### deploy the app

```
gcloud app deploy
```

## Local setup

### Install dependencies

```
npm install
npm install -g serve
```

### Fill the env variables

Create a new Connection in your PIM, then fill the `env.js` file.

### Run the server:

To build and serve the server, run
```
npm run build
node src/server.js
```

[Optional] To run the Express server in watch mode, install `nodemon`, then
```
nodemon src/server.js
```

# The PIM UI Extensions API

There are 4 endpoints: create, update, delete and list.
Each of this endpoint will return a 404 id the feature flag `enable-ui-extension` is disabled.

## Create a UI Extension

Call `/api/rest/v1/ui-extension'` with a `POST`. The body should look like this:

```json
{
  "code": "my_category_extension",
  "position": "edit_category_tab",
  "configuration": {
    "url": "https://mycustomerwebsite.com/iframe/",
    "labels": {
      "en_US": "My custom iframe"
    }
  }
}
```

It returns:
- 201 if UI extension is created
- 422 if there is a violation error
- 400 if JSON is invalid

The `configuration` depends on the `position`. Available positions are `edit_product_tab` and `edit_category_tab`.
For now, the only configuration keys are the same for both positions:

### url

The URL of the iframe to display. For example:
```json
{
  "url": "https://mycustomerwebsite.com/iframe"
}
```

### labels (optional)

An object of locale*label. For example:
```json
{
  "labels": {
    "en_US": "My english label",
    "fr_FR": "My french label"
  }
}
```

## Update a UI Extension

Call `/api/rest/v1/ui-extension/ui_extension_code` with a `PATCH`. The body is the same as Create method.

It returns:
- 204 if UI extension is updated
- 404 if the UI extension does not exist
- 422 if there is a violation error
- 400 if JSON is invalid

## Delete a UI Extension

Call `/api/rest/v1/ui-extension/ui_extension_code` with a `DELETE`.

It returns:
- 204 if ui_extension_code is deleted
- 404 if ui_extension_code does not exist

## List UI Extensions

Call `/api/rest/v1/ui-extension` with a `GET`.

There is no search and no filter.

It returns all UI extensions in this format:

```json
[
  {
    "code": "my_category_extension_1",
    "position": "edit_category_tab",
    "configuration": {
      "config_key_a": "value_key_a",
      "config_key_b": "value_key_b"
    }
  },
  {
    "code": "my_category_extension_2",
    "position": "edit_category_tab",
    "configuration": {
      "config_key_a": "value_key_a",
      "config_key_b": "value_key_b"
    }
  }
]
```

# The UI Extension parameters

When loading an iframe, several parameters are send as SearchParameters in a GET query, so the server knows who is the connected user (insecure) and in which context the iframe is opened.

For example, when `url` is `https://customerwebsite.com/iframe/`, the called URL is `https://customerwebite.com/iframe/?paramA=valueA&paramB=valueB`

For all positions, parameters relative to the connected user are sent:
- `user[catalog_locale]`
- `user[catalog_scope]`
- `user[ui_locale]`
- `user[username]`
- `user[email]`

For `edit_product_tab` position, these parameters are sent:
- `product[uuid]`
- `product[identifier]`

For `edit_category_tab` position, this parameter is sent:
- `category[code]`
