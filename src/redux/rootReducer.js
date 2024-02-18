import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import authReducer from "./auth/auth-slice";
import contactReducer from "./contacts/contacts-slice";
import filterReducer from './filter/filter-slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["token"],
}

const persisterAuthreducer = persistReducer(persistConfig, authReducer )

const rootReducer = combineReducers({
    auth: persisterAuthreducer,
    contacts: contactReducer,
    filter: filterReducer,
})

export default rootReducer;
