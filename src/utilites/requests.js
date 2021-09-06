import axios from 'axios';

const API = 'https://100liki.com:8079/v1/restaurants/';

const requests = {
    register(values) {
        return axios.post(API + 'new', {
            name: values.restaurantName,
            emailAddress: values.emailAddress,
            password: values.password,
            phoneNumber: values.phoneNumber,
            cuisine: 'AMERICAN',
        });
    },

    login(values) {
        return axios.post(API + 'auth', {
            emailAddress: values.emailAddress,
            password: values.password,
        });
    },
    
    fetchRestaurantData(restaurantId, token) {
        return axios.get(API + restaurantId, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    },

    newAddress(restaurantId, address) {
        return axios.post(API + restaurantId + '/newAddress', {
                street: address.street,
                zipCode: address.zipCode,
                apartmentNumber: address.apartmentNumber,
        });
    },
}

export default requests;