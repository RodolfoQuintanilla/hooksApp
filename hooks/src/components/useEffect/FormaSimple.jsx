import React, { useEffect, useState } from 'react';
import Message from './Message';

const FormaSimple = () => {
    const [formState, setFormState] = useState({
        username: 'roro',
        email: 'rqm@outlook.es'
    });

    const { username, email } = formState;

    function onInputChange({ target }) {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }


/*     useEffect(() => {
        console.log('se llamo');
    }, []);

    useEffect(() => {
        console.log('se llamo 2');
    }, [formState]);

    useEffect(() => {
        console.log('se llamo email');
    }, [email]);

 */

    
    return (
        <div>
            <h1>Formulario simple</h1>
            <hr />


            <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="rqm@outlok.es"
                name="email"
                value={email}
                onChange={onInputChange}
            />


            {
                (username === 'roro2') && <Message />
            }



        </div>
    );
};

export default FormaSimple;