import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';
import useForm from '../../customHooks/useForm';

import Hero from '../Hero/Hero';
import Button from '../Button/Button';

import heroImage from './heroImage.jpg';
import validate from './validate';
import requests from '../../utilites/requests';

const RegisterContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    & h1 {
        margin-top: 2rem;
    }

    & h3 {
        margin-top: 2rem;
    } 

    & form {
        padding: 1rem;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        & input {
            margin: 1rem;
            border: none;
            background-color: hsl(0, 0%, 95%);
            border-radius: 5px;
            padding: 0.75rem 1rem;
            text-align: center;
        }
    }

    & p {
        color: red;
        margin-bottom: 1rem;
    }

    & span {
        color: green;
    }
`;

function Register () {

    const { values, handleChange } = useForm();
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if(isSubmitting && Object.keys(errorMessages).length === 0) {
            requests.register(values)
            .then(response => {
                if(response.status === 200) {
                    console.log(response);
                    setMessage('Rejestracja przebiegła pomyślnie! Możesz się teraz zalogować.')
                }
            })
        } 
    }, [errorMessages]);

    const register = () => {
        setMessage('');
        setErrorMessages(validate(values));
        setIsSubmitting(true);
    }

    return(
        <RegisterContainer>
            <Hero heroImage={heroImage} />
            <h1>Rejestracja</h1>
            <form>
                <h3>Główne informacje</h3>
                <input 
                    type='text' 
                    placeholder="Nazwa restauracji"
                    value={values.restaurantName}
                    name='restaurantName'
                    onChange={handleChange}
                />
                {errorMessages.restaurantName ? <p>{errorMessages.restaurantName}</p> : null}
                <input
                    type='password' 
                    placeholder='Hasło'
                    value={values.password}
                    name='password'
                    onChange={handleChange}
                />
                {errorMessages.password ? <p>{errorMessages.password}</p> : null}
                <input
                    type='password'
                    placeholder='Powtórz hasło'
                    value={values.confirmPassword}
                    name='confirmPassword'
                    onChange={handleChange}
                />
                {errorMessages.confirmPassword ? <p>{errorMessages.confirmPassword}</p> : null}
                <input 
                    type='email' 
                    placeholder='E-mail'
                    value={values.emailAddress}
                    name='emailAddress'
                    onChange={handleChange}
                />
                {errorMessages.emailAddress ? <p>{errorMessages.emailAddress}</p> : null}
                <input 
                    type='number' 
                    placeholder='Nr. telefonu'
                    value={values.phoneNumber}
                    name='phoneNumber'
                    onChange={handleChange}
                />
                {errorMessages.phoneNumber ? <p>{errorMessages.phoneNumber}</p> : null}
            <h3>Adres</h3>

            <input 
                    type='text' 
                    placeholder='Ulica'
                    value={values.address.street}
                    name='street'
                    onChange={handleChange}
                />
            <input 
                    type='number' 
                    placeholder='Kod pocztowy'
                    value={values.address.zipCode}
                    name='zipCode'
                    onChange={handleChange}
                />
            <input 
                    type='number' 
                    placeholder='Numer budynku'
                    value={values.address.apartmentNumber}
                    name='apartmentNumber'
                    onChange={handleChange}
                />
                </form>
            <p><span>{message}</span></p>
            <Button onClick={register}>Rejestracja</Button>
        </RegisterContainer>
    )
}

export default Register;