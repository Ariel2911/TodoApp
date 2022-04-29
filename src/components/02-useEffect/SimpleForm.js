import { useEffect, useState } from 'react'
import '../../style.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        console.log('hola')
    }, []);

    useEffect( () => {
        // console.log('formaState cambió')
    }, [formState]);

    useEffect( () => {
        // console.log('email cambió')
    }, [email]);

    const handleImputChange = ({ target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value 
        })

    };
    
    return(
        <>
        <h1>useEffect</h1>
        <hr />

        <div>
            <input
                type= 'text'
                name= 'name'
                className='form-control'
                placeholder= 'Tu nombre'
                autoComplete= 'off'
                value= { name }
                onChange = { handleImputChange }
            />
        </div>
        <div>
            <input
                type= 'text'
                name= 'email'
                className='form-control'
                placeholder= 'Tu email'
                autoComplete= 'off'
                value= { email }
                onChange = { handleImputChange }
            />
        </div>

        { (name==='123') && <Message /> }
        </>
    )
}