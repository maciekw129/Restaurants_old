import styled from 'styled-components/macro';
import { useEffect } from 'react';
import Hero from '../Hero/Hero';
import heroImage from './heroImage.jpg';

import requests from '../../utilites/requests';

const RestaurantTablesContainer = styled.section`

`;

function RestaurantTables() {

    const userData = JSON.parse(localStorage.getItem('userData'));

    return(
        <RestaurantTablesContainer>
            <Hero heroImage={heroImage} />

        </RestaurantTablesContainer>
    )
}

export default RestaurantTables;