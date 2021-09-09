import styled from 'styled-components';
import Button from '../Button/Button';

const RestaurantInformations = styled.article`
    background-color: hsl(0, 0%, 98%);
    width: 85%;
    border-radius: 15px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 2rem 0;

    & h3 {
        align-self: flex-start;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        margin-left: 2rem;
    }

    & ul {
        display: flex;
        flex-direction: column;
    }

    & li {
        margin-bottom: 2rem;  
    }

    & form {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        & input {
            margin: 1rem;
        }
    }
`;

function MainData({ toggleIsEditingData, restaurant }) {
    return(
    <RestaurantInformations>
        <h3>Główne informacje</h3>
        <ul>
            <li>Nazwa: {restaurant.name}</li>
            <li>Typ kuchni: {restaurant.cuisine}</li>
            <li>E-mail: {restaurant.emailAddress}</li>
            <li>Numer telefonu: {restaurant.phoneNumber}</li>
        </ul>
        <Button onClick={toggleIsEditingData}>Edytuj dane</Button>
    </RestaurantInformations>
    )
}

function MainDataForm() {
    return(
    <RestaurantInformations>
        <h3>Główne informacje</h3>
        <form>
            <div>
                <label htmlFor='restaurantName' >Nazwa:</label>
                <input 
                    type='text' 
                    name='restaurantName'
                />
            </div>
            <div>
                <label htmlFor='cuisine' >Typ kuchni:</label>
                <input 
                    type='text' 
                    name='cuisine'
                />
            </div>
            <div>
                <label htmlFor='emailAddress' >E-mail:</label>
                <input 
                    type='text' 
                    name='emailAddress'
                />
            </div>
            <div>
                <label htmlFor='phoneNumber' >Numer telefonu:</label>
                <input 
                    type='text' 
                    name='phoneNumber'
                />
            </div>
        </form>
        <Button>Zmień dane</Button>
    </RestaurantInformations>
    )
};

function OpeningHours({ toggleIsEditingOpeningHours }) {
    return(
        <RestaurantInformations>
            <h3>Godziny otwarcia</h3>
            <ul>
                <li>Poniedziałek:</li>
                <li>Wtorek:</li>
                <li>Środa:</li>
                <li>Czwartek:</li>
                <li>Piątek:</li>
                <li>Sobota:</li>
                <li>Niedziela:</li>
            </ul>
            <Button onClick={toggleIsEditingOpeningHours}>Edytuj dane</Button>
        </RestaurantInformations>
    )
}

function OpeningHoursForm() {
    return(
        <RestaurantInformations>
            <h3>Godziny otwarcia</h3>
            <form>
                <div>
                    <label htmlFor='monday' >Poniedziałek:</label>
                    <input 
                        type='text' 
                        name='monday'
                    />
                </div>
                <div>
                    <label htmlFor='tuesday' >Wtorek:</label>
                    <input 
                        type='text' 
                        name='tuesday' 
                    />
                </div>
                <div>
                    <label htmlFor='wednesday' >Środa</label>
                    <input 
                        type='text' 
                        name='wednesday'
                    />
                </div>
                <div>
                    <label htmlFor='thursday' >Czwartek:</label>
                    <input 
                        type='text' 
                        name='thursday'
                    />
                </div>
                <div>
                    <label htmlFor='friday' >Piątek:</label>
                    <input 
                        type='text' 
                        name='friday'
                    />
                </div>
                <div>
                    <label htmlFor='saturday' >Sobota:  </label>
                    od
                    <input 
                        type='text' 
                        name='saturday'
                    />
                    do
                    <input />
                </div>
                <div>
                    <label htmlFor='sunday' >Niedziela:</label>
                    <input 
                        type='text' 
                        name='sunday'
                    />
                </div>
            </form>
            <Button>Zmień dane</Button>
        </RestaurantInformations>
    )
}

function Address({ toggleIsEditingAddress }) {
    return(
    <RestaurantInformations>
        <h3>Adres</h3>
        <ul>
            <li>Ulica : </li>
            <li>Kod pocztowy: </li>
            <li>Numer budynku: </li>
        </ul>
        <Button onClick={toggleIsEditingAddress}>Edytuj dane</Button>
    </RestaurantInformations>
    )
};

function AddressForm({ values, handleChange, handleAddressChange }) {
    return(
    <RestaurantInformations>
        <h3>Adres</h3>
        <form>
            <div>
                <label htmlFor='street' >Ulica:</label>
                <input 
                    type='text' 
                    name='street'
                    value={values.street}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='zipCode' >Kod pocztowy:</label>
                <input 
                    type='text' 
                    name='zipCode'
                    value={values.zipCode}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='apartmentNumber' >Number budynku</label>
                <input 
                    type='text' 
                    name='apartmentNumber'
                    value={values.apartmentNumber}
                    onChange={handleChange}
                />
            </div>
        </form>
        <Button onClick={handleAddressChange}>Zmień dane</Button>
    </RestaurantInformations>
    )
}

export { MainData, MainDataForm, Address, AddressForm, OpeningHours, OpeningHoursForm };

