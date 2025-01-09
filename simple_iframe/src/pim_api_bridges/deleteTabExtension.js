import {PIM_URL} from "../env.js";
import {forwardResponse, getHeaders} from "./helpers.js";

const deleteTabExtension = async (res, uuid) => {
    try {
        const response = await fetch(`${PIM_URL}/api/rest/v1/ui-extensions/${uuid}`, {
            method: 'DELETE',
            headers: await getHeaders(),
        });

        await forwardResponse(res, response, 204);
    } catch (error) {
        console.error(error);
        res.send(JSON.stringify({error: error}));
    }
}

export {deleteTabExtension};
