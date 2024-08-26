import {PIM_URL} from "../env.js";
import {getHeaders} from "./helpers.js";

const getProducts = async (categoryCode) => {
    const response = await fetch(`${PIM_URL}/api/rest/v1/products-uuid?search={"categories":[{"operator":"IN","value":["${categoryCode}"]}]}&limit=100`, {
        headers: await getHeaders(),
    });
    const json = await response.json();

    return json._embedded.items;
}

export {getProducts}
