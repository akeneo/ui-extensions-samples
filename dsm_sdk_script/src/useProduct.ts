import * as React from "react";

const useProduct = (uuid: string) => {
    const [product, setProduct] = React.useState<any>();

    React.useEffect(() => {
        uuid && PIM.api.products_uuid.get({uuid}).then((product) => {
            setProduct(product);
        });
    }, [uuid]);

    return product;
}

export {useProduct};
