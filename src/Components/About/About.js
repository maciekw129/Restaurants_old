import styled from 'styled-components';
import heroImage from './heroImage.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '../Button/Button';
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
    }

    & article {
        display: flex;
        justify-content: center;
        padding: 1rem;
    }
`;

function About () {
    return(
       <AboutContainer>
           <Hero 
            heroImage={heroImage}
           />
           <div className="reservationContainer">
               <h4>Znajdź lokal i złóż rezerwację!</h4>
               <Button>Rezerwuję</Button>
           </div>
           <article>
               <h2>O Nas</h2>
           </article>
       </AboutContainer> 
    )
}

export default About;