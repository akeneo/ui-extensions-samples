import {CLIENT_ID, CLIENT_SECRET, PASSWORD, PIM_URL, USERNAME} from "../env.js";

const forwardResponse = async (res, response, expectedCode) => {
    if (response.status === expectedCode) {
        console.log(`Server returns expected status ${expectedCode}`);
        res.send(JSON.stringify({status: response.status}));
    } else if (response.status === 422) {
        const json = await response.json();
        console.warn(`Server returns 422: ${JSON.stringify(json.errors)}`);
        res.send(JSON.stringify({error: json.errors}));
    } else if (response.status === 404) {
        const json = await response.json();
        console.warn(`Server returns 404: ${JSON.stringify(json.message)}`);
        res.send(JSON.stringify({error: json.message}));
    } else {
        console.error(`Unknown status ${response.status}`);
        response.json().then((body) => {
            console.error(body);
        })
    }
}

let access_token = null;
const getBearer = async () => {
    if (access_token === null) {
        console.log('Get auth token...');
        const basicAuthentication = `${CLIENT_ID}:${CLIENT_SECRET}`;
        const encodedAuthentication = btoa(basicAuthentication);

        const responseToken = await fetch(`${PIM_URL}/api/oauth/v1/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedAuthentication}`,
            },
            body: JSON.stringify({
                'grant_type': 'password',
                'username': USERNAME,
                'password': PASSWORD,
            }),
        });

        const jsonToken = await responseToken.json();
        access_token = jsonToken.access_token;
    }

    return access_token;
}

const getHeaders = async () => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${await getBearer()}`
    };
}

export {forwardResponse, getBearer, getHeaders}
