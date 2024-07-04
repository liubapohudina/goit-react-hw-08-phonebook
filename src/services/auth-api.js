import axios from 'axios';

const ENDPOINT = {
  userSign: 'api/users/register',
  userLog: 'api/users/login',
  userVerify: 'api/users/verify/',
  userLogOut: 'api/users/logout',
  userCurrent: 'api/users/current',
};

axios.defaults.baseURL = process.env.REACT_APP_URL;

const setToken = token => {
  if (token) {
    return (axios.defaults.headers.authorization = `Bearer ${token}`);
  }
  axios.defaults.headers.authorization = '';
};

export const signupRequest = async body => {
  const { data } = await axios.post(`${ENDPOINT.userSign}`, body);
  return data;
};

export const userverifyMail = async verificationToken => {
  try {
    const { data } = await axios.get(
      `${ENDPOINT.userVerify}${verificationToken}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const loginRequest = async body => {
  const { data } = await axios.post(`${ENDPOINT.userLog}`, body);
  setToken(data.token);
  return data;
};

export const currentRequest = async token => {
  setToken(token);
  try {
    const { data } = await axios.get(`${ENDPOINT.userCurrent}`);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logoutRequest = async token => {
  axios.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = axios.post(`${ENDPOINT.userLogOut}`);
  return data;
};
