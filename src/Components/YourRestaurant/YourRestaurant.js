import styled from 'styled-components';
import heroImage from './heroImage.jpg';
import Hero from '../Hero/Hero';
import { LoggedContext } from '../../LoggedContext';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';

const YourRestaurantContainer = styled.section`

`;

const RestaurantInformations = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2rem;
`


function YourRestaurant () {

    const { restaurantId, token } = useContext(LoggedContext);

    const fetchRestaurantData = (restaurantId, token) => {
        axios.get(`https://100liki.com:8089/v1/restaurants/${restaurantId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(response => {
                console.log(response);
            })
    }

    useEffect(() => {
        fetchRestaurantData(restaurantId, token);
    }, [])

    return(
        <YourRestaurantContainer>
            <Hero heroImage={heroImage} />
            <RestaurantInformations>
                <h2>Twoja Restauracja</h2>
                <ul>
                    <li></li>
                </ul>
            </RestaurantInformations>
        </YourRestaurantContainer>
    )
}

export default YourRestaurant;