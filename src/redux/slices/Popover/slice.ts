import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    classes: 'opacity-0 translate-x-1 pointer-events-none'
}

export const PopoverSlice = createSlice({
    name: 'popover',
    initialState,
    reducers: {
        show(state){
            state.classes = 'opacity-1'
        },
        hide(state){
            state.classes = 'opacity-0 translate-x-1 pointer-events-none'
        }
    },
})

export const {show, hide} = PopoverSlice.actions

export default PopoverSlice.reducer