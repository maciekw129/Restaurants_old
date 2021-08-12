import styled from 'styled-components';
import { useState } from 'react';
import heroImage from './heroImage.jpg';

import Hero from '../Hero/Hero';
import Button from '../Button/Button';

const RegisterContainer = styled.section`
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
`;

function Register () {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    const register = () => {
        fetch('http://34.118.42.248:8089/v1/restaurants/new', {
            method: 'POST',
            body: {
                'emailAddress': email,
                'password': password,
                'phoneNumber': tel,
            }
        }). then((response) => {
            console.log(response)
        })
    }

    return(
        <RegisterContainer>
            <Hero heroImage={heroImage} />
            <h1>Rejestracja</h1>
            <form>
                <input 
                    type='text' 
                    placeholder="Nazwa restauracji" 
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='password' 
                    placeholder="Hasło" 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type='text' 
                    placeholder='E-mail' 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type='text' 
                    placeholder='Nr. telefonu' 
                    onChange={(e) => setTel(e.target.value)}
                />
            </form>
            <Button onClick={register}>Rejestracja</Button>
        </RegisterContainer>
    )
}

export default Register;