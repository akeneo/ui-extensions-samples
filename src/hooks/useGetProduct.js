import React from "react";
import {EXPRESS_SERVER} from "../env.js";

const useGetProduct = (uuid) => {
    const [product, setProduct] = React.useState(undefined);

    React.useEffect(() => {
        fetch(`${EXPRESS_SERVER}/getProduct?uuid=${uuid}`).then((response) => {
            response.json().then((json) => {
                setProduct(json);
            })
        });
    }, [uuid]);

    return product;
}

export {useGetProduct}
