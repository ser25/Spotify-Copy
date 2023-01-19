import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {PlayListContextMenuSliceState} from "./types";


const initialState = {
    token: true

}


export const RegistrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setToken(state, action){
            state.token = false
        }
    },
})

export const {setToken} = RegistrationSlice.actions

export default RegistrationSlice.reducer