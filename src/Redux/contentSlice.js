import { createSlice } from "@reduxjs/toolkit";
import { getUserContactsOperation, addUserContactOperation } from 'Redux/operations'



const initialState = []


export const contentSlice = createSlice({
    name: 'userContacts',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getUserContactsOperation.fulfilled](state, actions) {
            return state = actions.payload;
        },
        [addUserContactOperation.fulfilled](state, actions) {
            state.push(actions.payload);
        },
    }
});
