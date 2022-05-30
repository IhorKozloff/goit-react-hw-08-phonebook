import { createSlice } from "@reduxjs/toolkit";
import { userRegistrationOperation, userLogInOperation, userLogOut } from 'Redux/operations'

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
}



export const authenticationSlice = createSlice({
    name: 'registerAndLogIn',
    initialState,
    reducers: {

    },
    extraReducers: {
        [userRegistrationOperation.fulfilled](state, actions) {
            state.user = actions.payload.user
            state.token = actions.payload.token
            state.isLoggedIn = true
        },
        [userLogInOperation.fulfilled](state, actions) {
            state.user = actions.payload.user
            state.token = actions.payload.token
            state.isLoggedIn = true
        },
        [userLogOut.fulfilled](state){
            state.user = {name: null, email: null}
            state.token = null
            state.isLoggedIn = false
        }
    }
});
