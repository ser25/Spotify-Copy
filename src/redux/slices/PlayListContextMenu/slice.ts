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
                    label: 'Copy link to playlist'
                },
                {
                    label: 'Embed playlist'
                },
            ],
        },
        {
            label: 'About recommendations'
        },
        {
            label: 'Open in Desktop app'
        },
    ],

}


export const PlayListContextMenuSlice = createSlice({
    name: 'playListContextMenu',
    initialState,
    reducers: {},
})

export const {} = PlayListContextMenuSlice.actions

export default PlayListContextMenuSlice.reducer