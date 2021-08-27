import styled from 'styled-components/macro';
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
        color: ${props => props.messageColor};
        margin-bottom: 1rem;
    }
`;

function Register () {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('red')

    const register = () => {

        if(password !== confirmPassword) {
            setMessage('Hasło zostało niepoprawnie powtórzone!');
        } else if (password === '' || name === '' || emailAddress === '' || phoneNumber === '') {
            setMessage('Pola nie mogą być puste!')
        }

        axios.post('https://100liki.com:8079/v1/restaurants/new', {
                name: name,
                emailAddress: emailAddress,
                password: password,
                phoneNumber: phoneNumber,
                cuisine: 'AMERICAN'
            })
            .then(response => {
                console.log(response)
                if(response.status === 200) {
                    setMessageColor('green');
                    setMessage('Rejestracja przebiegła pomyślnie, możesz się teraz zalogować.s');
                    setName('');
                    setEmailAddress('');
                    setPassword('');
                    setConfirmPassword('');
                    setPhoneNumber('');
                } else {
                    setMessage('Coś poszło nie tak, spróbuj jeszcze raz.')
                }
            })
    }

    return(
        <RegisterContainer messageColor={messageColor}>
            <Hero heroImage={heroImage} />
            <h1>Rejestracja</h1>
            <form>
                <input 
                    type='text' 
                    placeholder="Nazwa restauracji"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='password' 
                    placeholder="Hasło"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Powtórz hasło'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input 
                    type='text' 
                    placeholder='E-mail'
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                />
                <input 
                    type='text' 
                    placeholder='Nr. telefonu'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </form>
            <p>{message}</p>
            <Button onClick={register}>Rejestracja</Button>
        </RegisterContainer>
    )
}

export default Register;
