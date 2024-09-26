import {PIM_URL} from "../env.js";
import {forwardResponse, getHeaders} from "./helpers.js";

const updateProductCategoryCodes = async (res, productUuid, productCategoryCodesWithoutCategoryCode) => {
    const response = await fetch(`${PIM_URL}/api/rest/v1/products-uuid/${productUuid}`, {
        method: 'PATCH',
        headers: await getHeaders(),
        body: JSON.stringify({
            categories: productCategoryCodesWithoutCategoryCode,
        }),
    });
    forwardResponse(res, response, 204);
}

export {updateProductCategoryCodes}
