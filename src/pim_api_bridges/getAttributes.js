import {PIM_URL} from "../env.js";
import {getHeaders} from "./helpers.js";

const getAttributes = async (attributeCodes) => {
    const response = await fetch(`${PIM_URL}/api/rest/v1/attributes?search={"code":[{"operator":"IN","value":${attributeCodes}}]}&limit=100`, {
        headers: await getHeaders(),
    });
    const json = await response.json();

    return json._embedded.items;
}

export {getAttributes};
