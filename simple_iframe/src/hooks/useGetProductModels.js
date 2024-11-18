import React from "react";
import {EXPRESS_SERVER} from "../env.js";

const useGetProductModels = (search) => {

    const [productModels, setProductModels] = React.useState([]);

    React.useEffect(() => {
        if(search !== '' && search !== undefined && search !== 'null') {
            fetch(`${EXPRESS_SERVER}/getProductModels?search=${search}`).then((response) => {
                response.json().then((json) => {
                    setProductModels(json);
                })
            });
        }

    }, [search]);

    return productModels;
}

export {useGetProductModels}
