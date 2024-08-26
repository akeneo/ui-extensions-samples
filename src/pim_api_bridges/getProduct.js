import {PIM_URL} from "../env.js";
import {getHeaders} from "./helpers.js";

const getProduct = async (productUuid) => {
    const response = await fetch(`${PIM_URL}/api/rest/v1/products-uuid/${productUuid}`, {
        headers: await getHeaders(),
    });

    return await response.json();
}

export {getProduct}
