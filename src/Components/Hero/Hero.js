import styled from 'styled-components';

const Hero = styled.div`
    content: '';
    width: 100%;
    height: 12rem;
    background-image: ${props => `url(${props.heroImage})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export default Hero;