import { useState } from "react";


const useCounter = (iniciaValue = 10) => {
    const [counter, setCounter] = useState(iniciaValue);

    const incrementar = (value = 1) => {
        setCounter(counter + value);
    }
    const decrementar = (value = 1) => {
        setCounter(counter - value);
    }

    const rest = () => {
        setCounter(0);
    }




    return {

        counter,
        incrementar,
        decrementar,
        rest
    }
};

export default useCounter;