import styled from 'styled-components';
import { useState } from 'react';
import heroImage from './heroImage.jpg';

import Hero from '../Hero/Hero';
import Button from '../Button/Button';

const LoginContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    & h1 {
        margin-top: 2rem;
    }

    & form {
        padding: 2rem;
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
`;

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        
    }

    return(
        <LoginContainer>
            <Hero heroImage={heroImage} />
            <h1>Logowanie</h1>
            <form>
                <input 
                    type='text'
                    placeholder='E-mail'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type='password'
                    placeholder='Hasło'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <Button>Zaloguj</Button>
        </LoginContainer>
    )
};

export default Login;