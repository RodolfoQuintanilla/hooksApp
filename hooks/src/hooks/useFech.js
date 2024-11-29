import { useEffect, useState } from "react";


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
        setLoadingState();
        const resp = await fetch(url);

        await new Promise(resolver => setTimeout(resolver, 1500))

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

    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }

};

export default useFech;