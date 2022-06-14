import { createStore } from "redux";
import Reducer from "./Reducer";
import storage from 'redux-persist/lib/storage';
import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
const persistConfig = {
    key: 'counter',
    storage,
};
const persistedReducer = persistReducer(persistConfig, Reducer);
// const store=createStore(Reducer)
export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
// export default store