import { useState } from 'react';

const useForm = (inicialForm = {}) => {
    const [formState, setFormState] = useState({ inicialForm });



    function onInputChange({ target }) {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    function onResetForm() {

        setFormState({
            inicialForm
        })

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
};

export default useForm;