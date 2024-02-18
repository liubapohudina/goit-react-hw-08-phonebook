import axios from "axios";

const ENDPOINT = {
    userSign: 'users/signup',
    userLog: 'users/login',
    userLogOut: 'users/logout',
    userCurrent: 'users/current',
}

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
    if(token) {
        return axios.defaults.headers.authorization = `Bearer ${token}`;
    }
    axios.defaults.headers.authorization = "";
}

export const signupRequest = async body => {
    const { data } = await axios.post(`${ENDPOINT.userSign}`, body);
    setToken(data.token);
    return data;
} 

export const loginRequest = async body => {
    const { data } = await axios.post(`${ENDPOINT.userLog}`, body);
    setToken(data.token);
    return data;
}

export const currentRequest = async (token) => {
    setToken(token);
    try {
        const {data} = await axios.get(`${ENDPOINT.userCurrent}`);
        return data;
    }
    catch(error) {
        setToken();
        throw error;
    }
}

export const logoutRequest = async token => {
    axios.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = axios.post(`${ENDPOINT.userLogOut}`);
    return data;
}

