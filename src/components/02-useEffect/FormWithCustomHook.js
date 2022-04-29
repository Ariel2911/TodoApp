import { useForm } from '../../hooks/useForm';

import '../../style.css'

export const FormWithCustomHoock = () => {

    const [ formValues, handleImputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }
    return(
        <form onSubmit={ handleSubmit }>
        <h1>Form with custom hoock</h1>
        <hr />

        <div className='form-group'>
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
        <div className='form-group'>
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
        <div className='form-group'>
            <input
                type= 'password'
                name= 'password'
                className='form-control'
                placeholder= '********'
                value= { password }
                onChange = { handleImputChange }
            />
        </div>

        <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    )
}