import styled from 'styled-components';
import heroImage from './heroImage.jpg';
import Hero from '../Hero/Hero';

const YourRestaurantContainer = styled.section`

`;

function YourRestaurant () {
    return(
        <YourRestaurantContainer>
            <Hero heroImage={heroImage} />
        </YourRestaurantContainer>
    )
}

export default YourRestaurant;