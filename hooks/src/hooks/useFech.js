import { useEffect, useState } from "react";


const localCache = {}


const useFech = (url) => {

    const [state, setState] = useState({
        date: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFech();
    }, [url]);

    const setLoadingState = () => {
        setState({
            date: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }


    const getFech = async () => {


        if (localCache[url]) {
            console.log("Usando cache");
            
            setState({
                date: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })
            return;
        }

        setLoadingState();
        const resp = await fetch(url);

        await new Promise(resolver => setTimeout(resolver, 500))

        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                }
            });
            return;
        }

        const data = await resp.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        })

        localCache[url] = data;


    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }

};

export default useFech;