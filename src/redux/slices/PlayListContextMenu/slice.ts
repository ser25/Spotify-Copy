import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PlayListContextMenuSliceState} from "./types";


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

}


export const PlayListContextMenuSlice = createSlice({
    name: 'playListContextMenu',
    initialState,
    reducers: {
        setIsContextMenuOpen(state, action){
            state.isContextMenuOpen = action.payload
        },
        closeContextMenu(state, action){
            state.isContextMenuOpen = false
        }
    },
})

export const {setIsContextMenuOpen, closeContextMenu} = PlayListContextMenuSlice.actions

export default PlayListContextMenuSlice.reducer