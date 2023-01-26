import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    classes: 'opacity-0 translate-x-1 pointer-events-none',
    title: '',
    text: '',
    top: 0,
    right: 0,
    height: 0,
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
        },
        setTitle(state, action){
            state.title = action.payload
        },
        setText(state, action){
            state.text = action.payload
        },
        setCoordinate(state, action){
            state.top = action.payload.top
            state.right = action.payload.right
            state.height = action.payload.height
        }
    },
})

export const {show, hide, setTitle, setText, setCoordinate} = PopoverSlice.actions

export default PopoverSlice.reducer