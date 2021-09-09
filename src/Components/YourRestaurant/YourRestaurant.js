import styled from 'styled-components';
import { useState, useEffect } from 'react';

import heroImage from './heroImage.jpg';
import Hero from '../Hero/Hero';
import requests from '../../utilites/requests';
import useForm  from '../../customHooks/useForm';
import { MainData, MainDataForm, Address, AddressForm, OpeningHours, OpeningHoursForm } from './YourRestaurantComponents';

const YourRestaurantContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    & h2 {
        margin-top: 2rem;
    }
`;

function YourRestaurant ({ isLogged }) {

    const [restaurant, setRestaurant] = useState({});
    const [isEditingData, setIsEditingData] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [isEditingOpeningHours, setIsEditingOpeningHours] = useState(false);
    const { values, handleChange } = useForm();
    const userData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        requests.fetchRestaurantData(userData.restaurantId, userData.token)
        .then(response => {
            console.log(response);
            setRestaurant(response.data);
        })
    }, []);

    const handleAddressChange = () => {
        console.log(values);
        requests.newAddress(userData.restaurantId, values, userData.token);
        setIsEditingAddress(!isEditingAddress);
    };

    const toggleIsEditingData = () => {
        setIsEditingData(!isEditingData);
    };

    const toggleIsEditingOpeningHours = () => {
        setIsEditingOpeningHours(!isEditingOpeningHours);
    };

    const toggleIsEditingAddress = () => {
        setIsEditingAddress(!isEditingAddress);
    };

    return(
        <YourRestaurantContainer>
            <Hero heroImage={heroImage} />
            <h2>Twoja Restauracja</h2>
            {isEditingData ? 
            <MainDataForm 
                
            /> 
                : 
            <MainData 
                restaurant={restaurant} 
                toggleIsEditingData={toggleIsEditingData} 
            />}

            {isEditingOpeningHours ?
            <OpeningHoursForm />
                :
            <OpeningHours 
                toggleIsEditingOpeningHours={toggleIsEditingOpeningHours}
            />}

            {isEditingAddress ? 
            <AddressForm 
                values={values} 
                handleAddressChange={handleAddressChange} 
                handleChange={handleChange} 
            /> 
                : 
            <Address 
                toggleIsEditingAddress={toggleIsEditingAddress} 
            />}
        </YourRestaurantContainer>
    )
}

export default YourRestaurant;