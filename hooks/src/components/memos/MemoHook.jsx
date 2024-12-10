import { useMemo, useState } from "react";
import useCounter from "../../hooks/useCounter";


const  heavyStuff =(interationNumber =100)=>{
  for (let i = 0; i < interationNumber; i++) {
   console.log('Ahi vamos...');
  }
  return `${interationNumber} iteraciones realizadas`
}



const MemoHook = () => {
  const [show, setShow] = useState(true);

 const { counter, incrementar } = useCounter(0);


 const memorizarValue= useMemo(() => heavyStuff(counter), [counter])

    return (
        <div>
          <h1>Couter <p>{counter}</p> </h1>  
          <hr />
          <h4>{memorizarValue}</h4>
          <button
          className="btn btn-primary"
          onClick={()=>incrementar()}
          >
            +1
          </button>

          <button
            className="btn btn- btn-outline-primary"
            onClick={()=>setShow(!show)}
          >

            Show/Hide{JSON.stringify(show)}
          </button>
        </div>
    );
};

export default MemoHook;