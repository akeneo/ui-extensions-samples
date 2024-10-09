import React from "react";
import {EXPRESS_SERVER} from "../env.js";

const useGetProductModels = (search) => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        if(search !== '' && search !== '[]') {
            fetch(`${EXPRESS_SERVER}/getProductModels?search=${search}`).then((response) => {
                response.json().then((json) => {
                    setProducts(json);
                })
            });
        }

    }, [search]);

    return products;
}

export {useGetProductModels}
