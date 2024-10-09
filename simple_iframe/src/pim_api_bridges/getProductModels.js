import {PIM_URL} from "../env.js";
import {getHeaders} from "./helpers.js";

const getProductModels = async (search) => {
    if (search === '') {
        return [];
    }

    const response = await fetch(`${PIM_URL}/api/rest/v1/product-models?search=${search}`, {
        headers: await getHeaders(),
    });

    const json = await response.json();
    if(json._embedded === undefined) {
        return [];
    }
    return json._embedded.items;
}

export {getProductModels}