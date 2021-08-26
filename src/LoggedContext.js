import React, { useState, createContext } from 'react';

export const LoggedContext = createContext();

export const LoggedProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState(false);
    const [token, setToken] = useState('');
    const [restaurantId, setRestaurantId] = useState('');

    const toggleIsLogged = () => {
        setIsLogged(!isLogged);
    }

    return(
    <LoggedContext.Provider 
        value={{
            isLogged,
            toggleIsLogged,
            token,
            setToken,
            restaurantId,
            setRestaurantId,
        }}
    >
        {children}
    </LoggedContext.Provider>
    )
}