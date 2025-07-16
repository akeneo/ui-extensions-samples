import {useEffect, useState} from "react";

const useGetExternalData = () => {
    const [datas, setData] = useState<any>();

    useEffect(() => {
        globalThis.PIM.api.external.call({method: 'GET'}).then((data) => {
            console.log('call made to external from the ext');
            setData(data);
        }).catch((error) => {
            console.error('Error fetching external data:', error);
        });
    }, []);

    return datas;
}

export {useGetExternalData};