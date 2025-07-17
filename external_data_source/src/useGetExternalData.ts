import {useEffect, useState} from "react";
import { JsonValue } from "./JsonRenderer";

const useGetExternalData = () => {
    const [data, setData] = useState<JsonValue | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        globalThis.PIM.api.external.call({method: 'GET'})
        .then(async (res: Response) => {
            if (!res.ok) {
                setError(`Error: ${res.status}`);
                setLoading(false);
                return;
            }
            const json = await res.json();
            setData(json);
            setLoading(false);
        })
        .catch((error) => {
            setError('Error fetching external data: ' + error.message);
            setLoading(false);
        });
    }, []);

    return { data, loading, error };
}

export {useGetExternalData};