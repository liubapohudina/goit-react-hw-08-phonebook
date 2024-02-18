import axios from "axios";

/*-------------------QUERY FOR MOCKAPI----------------*/
// const API_KEY = '65bf80cf25a83926ab9515a4';
 const ENDPOINT = 'contacts';
// const contactsInstance = axios.create({
//     baseURL: `https://${API_KEY}.mockapi.io/api`
// })
//axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/api`;




export const requestContacts = async () => {
    const { data } = await axios.get(`/${ENDPOINT}`);
    return data;
   
};

export const requestAddContacts = async contact => {
    const { data } = await axios.post(`${ENDPOINT}`, contact)
    return data;
}

export const requestDeleteContact = async id => {
    const { data } = await axios.delete(`${ENDPOINT}/${id}`);
    return data;
}




