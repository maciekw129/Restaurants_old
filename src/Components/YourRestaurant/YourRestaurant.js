import styled from 'styled-components';
import heroImage from './heroImage.jpg';
import Hero from '../Hero/Hero';
import { LoggedContext } from '../../LoggedContext';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';

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

    margin-top: 2rem;

    & ul {
        display: flex;
        flex-direction: column;
    }

    & li {
        padding: 0.5rem;
        margin: 1rem  
    }
`


function YourRestaurant () {

    const [restaurant, setRestaurant] = useState({})
    const { restaurantId, token } = useContext(LoggedContext);

    const fetchRestaurantData = (restaurantId, token) => {
        axios.get(`https://100liki.com:8079/v1/restaurants/${restaurantId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(response => {
                setRestaurant(response.data);
                console.log(response);
            })
    }

    useEffect(() => {
        fetchRestaurantData(restaurantId, token);
    }, [])

    return(
        <YourRestaurantContainer>
            <Hero heroImage={heroImage} />
            <h2>Twoja Restauracja</h2>
            <RestaurantInformations>
                <ul>
                    <li>Nazwa: {restaurant.name}</li>
                    <li>Adres: {restaurant.address}</li>
                    <li>Typ kuchni: {restaurant.cuisine}</li>
                    <li>E-mail: {restaurant.emailAddress}</li>
                    <li>Numer telefonu: {restaurant.phoneNumber}</li>
                </ul>
            </RestaurantInformations>
        </YourRestaurantContainer>
    )
}

export default YourRestaurant;