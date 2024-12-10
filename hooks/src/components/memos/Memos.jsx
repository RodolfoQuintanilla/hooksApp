import { useState } from "react";
import useCounter from "../../hooks/useCounter";
import Small from "./Small";

const Memos = () => {
  const [show, setShow] = useState(true);

 const { counter, incrementar } = useCounter(10);
    return (
        <div>
          <h1>Couter <Small value={counter}/></h1>  
          <hr />
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

export default Memos;