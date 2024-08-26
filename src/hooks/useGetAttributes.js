import React from "react";
import {EXPRESS_SERVER} from "../env.js";

const useGetAttributes = (attributeCodes) => {
    const [attributes, setAttributes] = React.useState();

    React.useEffect(() => {
        if (attributeCodes.length) {
            fetch(`${EXPRESS_SERVER}/getAttributes?codes=${attributeCodes.join(',')}`).then((response) => {
                response.json().then((json) => {
                    setAttributes(json);
                })
            });
        }
    }, [attributeCodes]);

    return attributes || [];
}

export {useGetAttributes}
