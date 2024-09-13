import {NODE_URL, PIM_URL} from "../env.js";
import {forwardResponse, getBearer} from "./helpers.js";

const addEditProductHeaderUiExtension = async (res) => {
    try {
        const response = await fetch(`${PIM_URL}/api/rest/v1/ui-extension`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${await getBearer()}`
            },
            body: JSON.stringify({
                code: 'custom_button',
                position: 'edit_product_header',
                type: 'simple_button',
                configuration: {url: `https://akeneo.com`, labels: {en_US: 'My custom button'}}
            })
        });

        await forwardResponse(res, response, 201);
    } catch (error) {
        console.error(error);
        res.send(JSON.stringify({error: error}));
    }
}

export {addEditProductHeaderUiExtension}
