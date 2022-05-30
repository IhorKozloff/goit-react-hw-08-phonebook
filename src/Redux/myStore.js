import { configureStore } from "@reduxjs/toolkit"
import {authenticationSlice} from 'Redux/userSlice'
import { contentSlice } from 'Redux/contentSlice'

export const phonebookStore = configureStore({
    reducer: {
        registerAndLogIn: authenticationSlice.reducer,
        contacts: contentSlice.reducer,
    },
});