import { useState } from "react"


export const useForm = ( inicialState = {} ) => {
    const [values, setValue] = useState(inicialState);

    const reset = () => {
        setValue(inicialState);
    };

    const handleImputChange = ({ target }) => {
        setValue({
            ...values,
            [target.name]: target.value 
        });

    };

    return [values, handleImputChange, reset];
};