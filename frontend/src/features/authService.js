import axios from 'axios';
const API_URL = "http://localhost:8000/api/users";

const register = async (userData) => {
    console.log(userData);
    const response = await axios.post(API_URL, userData);
    console.log(userData);
    if (response.data) {
        localStorage.setItem('user', (response.data));
    }
    return response.data;
}

const authService = {
    register,
};

export default authService;