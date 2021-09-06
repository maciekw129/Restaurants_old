import styled from 'styled-components';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


const HeaderContainer = styled.header`
    position: relative;
    z-index: 99;
    width: 100%;
    height: 5rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;

    & i {
        font-size: 1.5rem;
    }

    & i:hover, h1 {
        cursor: pointer;
    }
`;

const NavBar = styled.nav`
    position: absolute;
    width: 100%;
    height: 12rem;
    left: ${props => props.isNavVisible ? '0' : '-100%'};
    top: 5rem;
    transition: left 0.5s ease-in-out;
    background-color: white;

    & ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    & ul li {
        padding: 0.75rem 0;
        text-align: center;
        cursor: pointer;
    }
`

function Header() {

    const [isNavVisible, setIsNavVisible] = useState(false);
    const history = useHistory();
    const userData = localStorage.getItem('userData');

    const handleClick = () => {
        setIsNavVisible(!isNavVisible);
    }

    const logout = () => {
        localStorage.removeItem('userData');
        history.push('/');
    }

    return(
        <HeaderContainer>
            <Link to='/'><h1>Restaurants</h1></Link>
            <i className={isNavVisible ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick}></i>
            <NavBar isNavVisible={isNavVisible}>
                {userData ? 
                <ul onClick={handleClick}>
                    <Link to='/your-restaurant'><li>Twoja restauracja</li></Link>
                    <Link to='/my-restaurant-reservations'><li>Podgląd rezerwacji</li></Link>
                    <li onClick={logout}>Wyloguj się</li>
                </ul>
                :
                <ul onClick={handleClick}>
                    <Link to='/'><li>Strona Główna</li></Link>
                    <Link to='/login'><li>Logowanie</li></Link>
                    <Link to='/register'><li>Rejestracja</li></Link>
                </ul>
                }
            </NavBar>
        </HeaderContainer>
    );
}

export default Header