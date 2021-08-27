import styled from 'styled-components';
import axios from 'axios';
import { LoggedContext } from '../../LoggedContext';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
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

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(' ')
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
    const { toggleIsLogged, setToken, setRestaurantId } = useContext(LoggedContext);

    const login = () => {
        setMessage(' ');
        setIsLoading(true)
        axios.post('https://100liki.com:8079/v1/restaurants/auth', {
            emailAddress: email,
            password: password,
        })
        .then(response => {
            console.log(response)
            if(response.status === 200) {
                setToken(response.data.token);
                setRestaurantId(response.data.restaurantId);
                toggleIsLogged();
                history.push('/your-restaurant');
            } else {
                setIsLoading(false);
                setMessage('Coś poszło nie tak, spróbuj jeszcze raz.');
            }
        })
        .catch(error => {
            setIsLoading(false);
            console.log(error);
            setMessage('Coś poszło nie tak, spróbuj jeszcze raz.');
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type='password'
                    placeholder='Hasło'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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