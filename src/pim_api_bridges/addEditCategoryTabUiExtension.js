import {NODE_URL, PIM_URL} from "../env.js";
import {forwardResponse, getHeaders} from "./helpers.js";

const addEditCategoryTabUiExtension = async (res) => {
    try {
        const response = await fetch(`${PIM_URL}/api/rest/v1/ui-extension`, {
            method: 'POST',
            headers: await getHeaders(),
            body: JSON.stringify({
                code: 'linked_products',
                position: 'edit_category_tab',
                type: 'simple_iframe',
                configuration: {url: `${NODE_URL}/edit_category_tab`, labels: {en_US: 'Linked Products'}}
            })
        });

        await forwardResponse(res, response, 201);
    } catch (error) {
        console.error(error);
        res.send(JSON.stringify({error: error}));
    }
}

export {addEditCategoryTabUiExtension}
