import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';
import useForm from '../../customHooks/useForm';
import heroImage from './heroImage.jpg';
import axios from 'axios';
import Hero from '../Hero/Hero';
import Button from '../Button/Button';
import validate from './validate';

const RegisterContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    & h1 {
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
`;

function Register () {

    const { values, handleChange } = useForm();
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if(isSubmitting && Object.keys(errorMessages).length === 0) {
            axios.post(`https://100liki.com:8079/v1/restaurants/new`, {
            name: values.restaurantName,
            emailAddress: values.emailAddress,
            password: values.password,
            phoneNumber: values.phoneNumber,
            cuisine: 'AMERICAN',
        })
        .then(response => {
            console.log(response);
        })
        } 
    }, [errorMessages]);

    const register = () => {
        setErrorMessages(validate(values));
        setIsSubmitting(true);
    }

    return(
        <RegisterContainer>
            <Hero heroImage={heroImage} />
            <h1>Rejestracja</h1>
            <form>
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
            </form>
            <Button onClick={register}>Rejestracja</Button>
        </RegisterContainer>
    )
}

export default Register;