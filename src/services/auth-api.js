import axios from "axios";

const ENDPOINT = {
    userSign: 'users/signup',
    userLog: 'users/login',
    userLogOut: 'users/logout',
    userCurrent: 'users/current',
}

const authInstatance = axios.create({
    baseURL: `https://connections-api.herokuapp.com/`
})

export const signupRequest = async body => {
    const { data } = await authInstatance.post(`${ENDPOINT.userSign}`, body);
    return data;
} 

export const loginRequest = async body => {
    const { data } = await authInstatance.post(`${ENDPOINT.userLog}`, body);
    return data;
}

export const currentRequest = async token => {
    authInstatance.defaults.headers.authorization = `Bearer ${token}`;
    try {
        const { data } = await authInstatance.get(`${ENDPOINT.userCurrent}`)
        return data;
    } catch (error) {
        authInstatance.defaults.headers.authorization = '';
        throw error;
    }
}
