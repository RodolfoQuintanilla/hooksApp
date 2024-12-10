import { useRef } from "react";


const UseRefInit = () => {


    const inputRef = useRef();

    const clicks = () => {
        inputRef.current.select();
    }


    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                placeholder="Ingresa nombre: "
                className="form-control"
            />

            <button
                className="btn btn-primary mt-3"
                onClick={() => clicks()}
            >
                Set Foco
            </button>
        </div>
    );
};

export default UseRefInit;