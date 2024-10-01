import React from "react";
import {EXPRESS_SERVER} from "../env.js";

const useGetProducts = (search) => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        if(search !== '') {
            fetch(`${EXPRESS_SERVER}/getProducts?search=${search}`).then((response) => {
                response.json().then((json) => {
                    setProducts(json);
                })
            });
        }

    }, [search]);

    return products;
}

export {useGetProducts}
