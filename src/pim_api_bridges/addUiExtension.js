import {PIM_URL} from "../env.js";
import {forwardResponse, getBearer} from "./helpers.js";

const flatSearchParameters = (parameters, prefix) => {
    if (prefix === void 0) { prefix = ''; }
    var result = {};
    for (var parameterKey in parameters) {
        if (Object.prototype.hasOwnProperty.call(parameters, parameterKey)) {
            var flattenKey = prefix ? "".concat(prefix, "[").concat(parameterKey, "]") : parameterKey;
            if (typeof parameters[parameterKey] === 'object' && parameters[parameterKey] !== null) {
                Object.assign(result, flatSearchParameters(parameters[parameterKey], flattenKey));
            }
            else {
                result[flattenKey] = parameters[parameterKey];
            }
        }
    }
    return result;
};

const addUiExtension = async (res, req) => {
    const code = req.body.code;
    try {
        const formData = new FormData();
        if (req.body.configuration.file) {
            const data = req.body.configuration.file;
            formData.set('file', new Blob([data]), "customer_script.js");
        }
        formData.set('code', code);
        formData.set('type', req.body.type);
        formData.set('position', req.body.position);
        const flatParameters = flatSearchParameters(req.body.configuration, 'configuration');
        delete(flatParameters['configuration[file]']);
        Object.keys(flatParameters).forEach((k) => {
            formData.set(`${k}`, flatParameters[k]);
        });

        const response = await fetch(`${PIM_URL}/api/rest/v1/ui-extension/${code}`, {
            headers: {
                'Authorization': `Bearer ${await getBearer()}`,
            },
            body: formData,
            method: 'POST'
        });

        await forwardResponse(res, response, 201);
    } catch (error) {
        console.error(error);
        res.send(JSON.stringify({error: error}));
    }
}

export {addUiExtension}