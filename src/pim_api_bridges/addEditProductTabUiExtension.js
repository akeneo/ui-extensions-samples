import {NODE_URL, PIM_URL} from "../env.js";
import {forwardResponse, getBearer} from "./helpers.js";

const addEditProductTabUiExtension = async (res) => {
    try {
        const response = await fetch(`${PIM_URL}/api/rest/v1/ui-extension`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${await getBearer()}`
            },
            body: JSON.stringify({
                code: 'short_view',
                position: 'edit_product_tab',
                configuration: {url: `${NODE_URL}/edit_product_tab`, labels: {en_US: 'Short view'}}
            })
        });

        await forwardResponse(res, response, 201);
    } catch (error) {
        console.error(error);
        res.send(JSON.stringify({error: error}));
    }
}

export {addEditProductTabUiExtension}
