import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PlayListContextMenuSliceState} from "./types";
import useContextMenu from "../../../hooks/useContextMenu";


const initialState = {
    menuItems: [
        {
            label: ' Add to Your Library'
        },
        {
            label: 'Share',
            submenus: [
                {
                    label: 'Copy link to playlist',
                    alternateLabel: 'Copy Spotify URL'
                },
                {
                    label: 'Embed playlist'
                },
                // {
                //     label: 'Embed playlist 2'
                // },
                // {
                //     label: 'Embed playlist 3'
                // },
                // {
                //     label: 'Embed playlist 4'
                // },
                // {
                //     label: 'Embed playlist 5'
                // },
            ],
        },
        {
            label: 'About recommendations'
        },
        {
            label: 'Open in Desktop app'
        },
    ],
    isContextMenuOpen: false,
    isToastShown: false


}


export const PlayListContextMenuSlice = createSlice({
    name: 'playListContextMenu',
    initialState,
    reducers: {
        setIsContextMenuOpen(state, action){
            state.isContextMenuOpen = action.payload
        },
        setIsToastShown(state, action){
            state.isToastShown = action.payload
            // state.isContextMenuOpen = false
        }
    },
})

export const {setIsContextMenuOpen, setIsToastShown} = PlayListContextMenuSlice.actions

export default PlayListContextMenuSlice.reducer