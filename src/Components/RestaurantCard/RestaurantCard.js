import styled from 'styled-components/macro';
import Button from '../Button/Button';

const RestaurantCardContainer = styled.div`
position: relative;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: hsl(0, 0%, 98%);
    margin: 1rem;
    border-radius: 5px;
    box-shadow: 0px 0px 0.5rem lightgray;
    padding: 1rem;

    & p {
        padding: 0.5rem;
    }

    & button {
        width: 30%;
        position: absolute;
        bottom: 0.75rem;
        right: 0.75rem;
    }
`;

function RestaurantCard( {name, email, phoneNumber} ) {
    return(
        <RestaurantCardContainer>
            <h2>{name}</h2>
            <p>E-mail: {email}</p>
            <p>Nr. telefonu: {phoneNumber}</p>
            <Button>Więcej</Button>
        </RestaurantCardContainer>
    )
}

export default RestaurantCard;