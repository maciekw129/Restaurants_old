import styled from 'styled-components';
import heroImage from './heroImage.jpg';
import { useState } from 'react';

import Hero from '../Hero/Hero';

const AboutContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .reservationContainer {
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
    }

    & article {
        display: flex;
        justify-content: center;
        padding: 1rem;
    }
`;

function MainPage () {

    const [restaurant, setRestaurant] = useState('');

    return(
       <AboutContainer>
           <Hero 
            heroImage={heroImage}
           />
           <div className="reservationContainer">
               <h4>Znajdź lokal i złóż rezerwację!</h4>
               <input 
                    type='text' 
                    placeholder='Nazwa restauracji' 
                    onChange={(e) => setRestaurant(e.target.value)}
                    value={restaurant}
                />
           </div>
       </AboutContainer> 
    )
}

export default MainPage;