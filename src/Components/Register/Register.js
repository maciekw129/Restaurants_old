import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
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
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const register = () => {
        axios
            .post('http://34.118.42.248:8089/v1/restaurants/new', {
                name: name,
                emailAddress: emailAddress,
                password: password,
                phoneNumber: phoneNumber,
                cuisine: 'AMERICAN'
            })
            .then(response => {
                console.log(response);
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
                    onChange={(e) => setEmailAddress(e.target.value)}
                />
                <input 
                    type='text' 
                    placeholder='Nr. telefonu' 
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </form>
            <Button onClick={register}>Rejestracja</Button>
        </RegisterContainer>
    )
}

export default Register;