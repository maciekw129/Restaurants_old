import styled from 'styled-components';
import requests from '../../utilites/requests';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../customHooks/useForm';
import heroImage from './heroImage.jpg';

import Hero from '../Hero/Hero';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';

const LoginContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    & h1 {
        margin-top: 2rem;
    }

    & form {
        padding: 2rem;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;

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
        margin: 1.75rem 0;
    }
`;

function Login ({ setIsLogged, isLogged }) {

    const [message, setMessage] = useState(' ')
    const [isLoading, setIsLoading] = useState(false);
    const { values, handleChange } = useForm();

    const history = useHistory();

    useEffect(() => {
        if(isLogged) {
            history.push('/');
        }
    })

    const login = () => {
        setMessage(' ');
        setIsLoading(true)
        requests.login(values)
        .then(response => {
            console.log(response);
            if(response.status === 200) {
                localStorage.setItem('userData', JSON.stringify(response.data));
                setIsLogged(true);
                history.push('/');
            } else {
                setIsLoading(false);
                setMessage('Coś poszło nie tak, spróbuj jeszcze raz.');
            }
        })
    }

    return(
        <LoginContainer>
            <Hero heroImage={heroImage} />
            <h1>Logowanie</h1>
            <form>
                <input 
                    type='text'
                    placeholder='E-mail'
                    value={values.emailAddress}
                    name='emailAddress'
                    onChange={handleChange}
                />
                <input 
                    type='password'
                    placeholder='Hasło'
                    value={values.password}
                    name='password'
                    onChange={handleChange}
                />
            </form>
            {isLoading ?
            <Loading />
            : <p>{message}</p>}
            <Button onClick={login}>Zaloguj</Button>
        </LoginContainer>
    )
};

export default Login;