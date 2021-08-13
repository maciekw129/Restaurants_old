import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

const RestaurantsListContainer = styled.section`

`;

function RestaurantsList () {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const fetchRestaurants = async () => {
        await axios.get('http://34.118.42.248:8089/v1/restaurants/all')
        .then((response) => {
            setRestaurants(response.data)
        })
    }


    return(
        <RestaurantsListContainer>
            <ul>
                {restaurants.map((restaurant, index) => {
                    return <li key={index}>{restaurant.name}</li>
                })}
            </ul>
        </RestaurantsListContainer>
    )
}

export default RestaurantsList;