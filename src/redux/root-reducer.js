import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice  from "./auth/auth-slice";



const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ["token"]
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice );

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    // 2: 2,

})

export default rootReducer;