import React from "react";
import {EXPRESS_SERVER} from "../env.js";

const useGetProductsFromCategory = (categoryCode, tick) => {
    const [products, setProducts] = React.useState();

    React.useEffect(() => {
        if (categoryCode) {
            fetch(`${EXPRESS_SERVER}/getProducts?search={"categories":[{"operator":"IN","value":["${categoryCode}"]}]}&limit=100`).then((response) => {
                response.json().then((json) => {
                    setProducts(json);
                })
            });
        }
    }, [categoryCode, tick]);

    return products;
}

export {useGetProductsFromCategory}
