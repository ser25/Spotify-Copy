import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import ModalRecommendation from "../../../components/ModalRecommendation/ModalRecommendation";

export interface CounterState {
    isOpenRecommendation: boolean
    isOpenEmbed: boolean
}

const initialState: CounterState = {
    isOpenRecommendation: false,
    isOpenEmbed: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalRecommendation(state) {
            state.isOpenRecommendation = true
        },
        closeModalRecommendation(state) {
            state.isOpenRecommendation = false
        },
        openModalEmbed(state) {
            state.isOpenEmbed = true
        },
        closeModalEmbed(state) {
            state.isOpenEmbed = false
        },
    },
})


export const {openModalRecommendation, closeModalRecommendation, openModalEmbed, closeModalEmbed} = modalSlice.actions

export default modalSlice.reducer