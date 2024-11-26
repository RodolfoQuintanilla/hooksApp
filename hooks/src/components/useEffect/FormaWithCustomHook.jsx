import React, { useEffect } from 'react';
import Message from './Message';
import useForm from '../../hooks/useForm';

const FormaWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = formState;

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
            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />


            {
                (username === 'roro2') && <Message />
            }

            <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>

        </div>
    );
};

export default FormaWithCustomHook;