import { useState } from "react";

const useForm = () => {
    const [values, setValues] = useState({
        restaurantName: '',
        password: '',
        confirmPassword: '',
        emailAddress: '',
        phoneNumber: '',
        cuisine: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    };

    return { values, handleChange };
}

export default useForm;