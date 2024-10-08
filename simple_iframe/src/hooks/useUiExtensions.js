import React from "react";
import {EXPRESS_SERVER} from "../env.js";

const useUiExtensions = (tick) => {
    const [uiExtensions, setUiExtensions] = React.useState(undefined);
    React.useEffect(() => {
        fetch(`${EXPRESS_SERVER}/listUiExtensions`).then(response => {
            response.json().then(json => {
                setUiExtensions(json);
            })
        }).catch((e) => {
            console.error(e);
            setUiExtensions(null);
        })
    }, [tick]);

    return uiExtensions;
};

export {useUiExtensions}
