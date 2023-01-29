import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface CounterState {
    isOpen: boolean
}

const initialState: CounterState = {
    isOpen: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state) {
            state.isOpen = true
        },
        closeModal(state) {
            state.isOpen = false
        }
    },
})


export const {openModal, closeModal} = modalSlice.actions

export default modalSlice.reducer