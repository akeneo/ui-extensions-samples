import {useEffect, useState} from "react";

const useGetProduct = (productUuid: string) => {
    const [product, setProduct] = useState<any>();
    useEffect(() => {
        globalThis.PIM.api.product_uuid.get({uuid: productUuid}).then((product) => {
            setProduct(product);
        });
    }, []);

    return product;
}

export {useGetProduct};
