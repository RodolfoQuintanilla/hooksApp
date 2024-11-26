
import { useState } from 'react';

const ConterApp = () => {
    const [{ counter1, counter2, counter3 }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });
    return (
        <div>
            <h1>Contar: {counter1}</h1>
            <h1>Contar: {counter2}</h1>
            <h1>Contar: {counter3}</h1>
            <hr />
            <button onClick={() => setCounter(counter1 + 1)} >+1</button>
        </div>
    );
};

export default ConterApp;