import { combineReducers } from "redux";

import authSlice from "./auth/auth-slice";
import contactsSlice from "./contacts/contacts-slice";
import filterSlice from './filter/filter-slice';



const rootReducer = combineReducers({
    auth: authSlice,
    contacts: contactsSlice,
    filter: filterSlice,
})

export default rootReducer;
