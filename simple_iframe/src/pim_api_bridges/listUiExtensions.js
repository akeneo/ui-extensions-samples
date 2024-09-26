import {getHeaders} from "./helpers.js";
import {PIM_URL} from "../env.js";

const listUiExtensions = async () => {
    const response = await fetch(`${PIM_URL}/api/rest/v1/ui-extension`, {
        method: 'GET',
        headers: await getHeaders(),
    });

    return await response.json();
}

export {listUiExtensions}
