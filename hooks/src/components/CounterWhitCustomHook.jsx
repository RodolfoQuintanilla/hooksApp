import useCounter from "../hooks/useCounter";


const CounterWhitCustomHook = () => {
    const { counter, incrementar, decrementar, rest } = useCounter()
    return (
        <div>
            <h1>CounterWhitCustomHook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={()=>incrementar(3)}>+1</button>
            <button className="btn btn-primary" onClick={rest} >Reset</button>
            <button className="btn btn-primary" onClick={()=>decrementar(3)}>-1</button>
        </div>
    );
};

export default CounterWhitCustomHook;