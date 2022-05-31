import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {authenticationSlice} from 'Redux/userSlice'
import { contentSlice } from 'Redux/contentSlice'

const persistConfig = {
    key: 'registerAndLogIn',
    storage,
    whitelist: ['token'],
}


export const phonebookStore = configureStore({
    reducer: {
        registerAndLogIn: persistReducer(persistConfig, authenticationSlice.reducer),
        contacts: contentSlice.reducer,
    },
});
export const persistor = persistStore(phonebookStore);