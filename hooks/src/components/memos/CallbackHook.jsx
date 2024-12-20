import  { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

  const increment = useCallback(
        (value) => {
            setCounter((c) => c+value);
        },
        [],
    );

/* const increment =()=>{
    setCounter(counter + 1);
} */

    return (
        <>
         <h1>useCallback Hook: {counter} </h1> 
         <hr />
         <ShowIncrement increment={increment}/>  
        </>
    );
};

export default CallbackHook;