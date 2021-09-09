import styled from 'styled-components';
import heroImage from './heroImage.jpg';
import { useState, useEffect } from 'react';
import requests from '../../utilites/requests';
import Hero from '../Hero/Hero';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

const MainPageContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ReservationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F9ECDB;
    padding: 1.5rem 0;

    & h4 {
         padding-bottom: 0.5rem;
    }

    & input {
         border: 2px solid #FC8E1B;
         border-radius: 50px;
         padding: 0.5rem 2rem;
         background-color: white;
         text-align: center;
    }
`

const RestaurantsContainer = styled.div`

`

function MainPage () {

    const [restaurant, setRestaurant] = useState('');
    const [allRestaurants, setAllRestaurants] = useState([]);
    
    useEffect(() => {
        requests.getAllRestaurants()
        .then(response => {
            setAllRestaurants(response.data);
        })
    })

    return(
       <MainPageContainer>
            <Hero 
            heroImage={heroImage}
            />
            <ReservationContainer>
               <h4>Znajdź lokal i złóż rezerwację!</h4>
               <input 
                    type='text' 
                    placeholder='Nazwa restauracji' 
                    onChange={(e) => setRestaurant(e.target.value)}
                    value={restaurant}
                />
            </ReservationContainer>
            <RestaurantsContainer>
                {allRestaurants.map((restaurant, index) => 
                    <RestaurantCard name={restaurant.name} email={restaurant.emailAddress} phoneNumber={restaurant.phoneNumber} key={index} />
                )}
            </RestaurantsContainer>
       </MainPageContainer> 
    )
}

export default MainPage;