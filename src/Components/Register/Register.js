import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

        & input, select {
            margin: 1rem;
            border: none;
            background-color: hsl(0, 0%, 95%);
            border-radius: 5px;
            padding: 0.75rem 1rem;
            text-align: center;
            text-align-last:center
        }

        &select::invalid {
            color: gray;
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

function Register ({ isLogged }) {

    const { values, handleChange } = useForm();
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const history = useHistory();

    useEffect(() => {
        if(isLogged) {
            history.push('/');
        }
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
                <select name='cuisine' onChange={handleChange} >
                    <option value='' disabled selected hidden>Kuchnia</option>
                    <option value='AMERICAN'>Amerykańska</option>
                    <option value='POLISH'>Polska</option>
                    <option value='CHINESE'>Chińska</option>
                    <option value='GREEK'>Grecka</option>
                    <option value='INDIAN'>Indyjska</option>
                    <option value='MEXICAN'>Meksykańska</option>
                    <option value='ITALIAN'>Włoska</option>
                    <option value='PIZZA'>Pizza</option>
                    <option value='BURGERS'>Burgery</option>
                    <option value='SUSHI'>Sushi</option>
                    <option value='ASIAN'>Azjatycka</option>
                    <option value='TURKISH'>Turecka</option>
                    <option value='KEBAB'>Kebab</option>
                    <option value='THAI'>Tajska</option>
                    <option value='VEGETARIAN'>Wegetariańska</option>
                    <option value='GEORGIAN'>Gruzińska</option>
                    <option value='SPANISH'>Hiszpańska</option>
                    <option value='ARABIC'>Arabska</option>
                    <option value='INTERNATIONAL'>Międzynarodowa</option>
                    <option value='FRENCH'>Francuska</option>
                </select>
            <h3>Adres</h3>

            <input 
                    type='text' 
                    placeholder='Ulica'
                   
                    name='street'
                    onChange={handleChange}
                />
            <input 
                    type='number' 
                    placeholder='Kod pocztowy'
                   
                    name='zipCode'
                    onChange={handleChange}
                />
            <input 
                    type='number' 
                    placeholder='Numer budynku'
                    
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