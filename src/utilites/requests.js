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

    newAddress(restaurantId, values, token) {
        return axios.post(API + restaurantId + '/newAddress', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },

            body: {
                street: values.street,
                zipCode: values.zipCode,
                apartmentNumber: values.apartmentNumber,
                zipCode: values.zipCode,
            },
        });
    },

    getReservations(restaurantId, token) {
        return axios.get(API + 'reservations/all/' + restaurantId, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    },

    newTable(restaurantId, token, values) {
        return axios.post(API + restaurantId + '/tables/new', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },

            body: {
                peopleQuantity: values.peopleQuantity,
                description: values.description,
            }
        });
    },
}

export default requests;