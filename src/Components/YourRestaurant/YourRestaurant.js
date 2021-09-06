import styled from 'styled-components';
import heroImage from './heroImage.jpg';
import Hero from '../Hero/Hero';
import requests from '../../utilites/requests';
import  useForm  from '../../customHooks/useForm';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';

const YourRestaurantContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    & h2 {
        margin-top: 2rem;
    }
`;

const RestaurantInformations = styled.article`
    background-color: hsl(0, 0%, 98%);
    width: 85%;
    border-radius: 15px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 2rem 0;

    & h3 {
        align-self: flex-start;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        margin-left: 2rem;
    }

    & ul {
        display: flex;
        flex-direction: column;
    }

    & li {
        margin-bottom: 2rem;  
    }

    & form {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        & input {
            margin: 1rem;
        }
    }
`;


function YourRestaurant () {

    const [restaurant, setRestaurant] = useState({});
    const [isEditingData, setIsEditingData] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const { values, handleChange } = useForm();
    const userData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        requests.fetchRestaurantData(userData.restaurantId, userData.token)
        .then(response => {
            console.log(response);
            setRestaurant(response.data);
        })
    }, []);

    const updateData = () => {

    }

    const dataList =
    <RestaurantInformations>
        <h3>Główne informacje</h3>
        <ul>
            <li>Nazwa: {restaurant.name}</li>
            <li>Typ kuchni: {restaurant.cuisine}</li>
            <li>E-mail: {restaurant.emailAddress}</li>
            <li>Numer telefonu: {restaurant.phoneNumber}</li>
        </ul>
        <Button onClick={() => setIsEditingData(!isEditingData)}>Edytuj dane</Button>
    </RestaurantInformations>;
                    
    const dataForm = 
    <RestaurantInformations>
        <h3>Główne informacje</h3>
        <form>
            <div>
                <label htmlFor='restaurantName' >Nazwa:</label>
                <input 
                    type='text' 
                    name='restaurantName'
                />
            </div>
            <div>
                <label htmlFor='cuisine' >Typ kuchni:</label>
                <input 
                    type='text' 
                    name='cuisine'
                />
            </div>
            <div>
                <label htmlFor='emailAddress' >E-mail:</label>
                <input 
                    type='text' 
                    name='emailAddress'
                />
            </div>
            <div>
                <label htmlFor='phoneNumber' >Numer telefonu:</label>
                <input 
                    type='text' 
                    name='phoneNumber'
                />
            </div>
        </form>
        <Button onClick={() => setIsEditingData(!isEditingData)}>Zmień dane</Button>
    </RestaurantInformations>;

    const addressList =
    <RestaurantInformations>
        <h3>Adres</h3>
        <ul>
            <li>Ulica: </li>
            <li>Kod pocztowy: </li>
            <li>Numer budynku: </li>
        </ul>
        <Button onClick={() => setIsEditingAddress(!isEditingAddress)}>Edytuj dane</Button>
    </RestaurantInformations>;

    const addressForm = 
    <RestaurantInformations>
        <h3>Adres</h3>
        <form>
            <div>
                <label htmlFor='street' >Ulica:</label>
                <input 
                    type='text' 
                    name='street'
                />
            </div>
            <div>
                <label htmlFor='zipCode' >Kod pocztowy:</label>
                <input 
                    type='text' 
                    name='zipCode'
                />
            </div>
            <div>
                <label htmlFor='apartmentNumber' >Number budynku</label>
                <input 
                    type='text' 
                    name='apartmentNumber'
                />
            </div>
        </form>
        <Button onClick={() => setIsEditingAddress(!isEditingAddress)}>Zmień dane</Button>
    </RestaurantInformations>;

    return(
        <YourRestaurantContainer>
            <Hero heroImage={heroImage} />
            <h2>Twoja Restauracja</h2>
            {isEditingData ? dataForm : dataList}
            {isEditingAddress ? addressForm : addressList}
        </YourRestaurantContainer>
    )
}

export default YourRestaurant;