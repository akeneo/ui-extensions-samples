import {useEffect, useState} from "react";

const useGetExternalData = () => {
    const [datas, setData] = useState<any>();

    useEffect(() => {
        globalThis.PIM.api.external.call({method: 'GET'})
        .then((res) => {
            setData(res);
        })
        .catch((error) => {
            console.error('Error fetching external data:', error);
        });
    }, []);

    return datas;
}

export {useGetExternalData};