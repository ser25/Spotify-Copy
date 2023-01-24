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
    isScrollWrapper: false, //for scroll wrapper
    isToastShown: false,
    albumUrl: ''


}


export const PlayListContextMenuSlice = createSlice({
    name: 'playListContextMenu',
    initialState,
    reducers: {
        setIsScrollWrapper(state, action){ //for scroll wrapper
            state.isScrollWrapper = action.payload
        },
        setIsToastShown(state, action){
            state.isToastShown = action.payload
        },
        setAlbumUrl(state, action){
            state.albumUrl = action.payload
        }
    },
})

export const {setIsScrollWrapper, setIsToastShown, setAlbumUrl} = PlayListContextMenuSlice.actions

export default PlayListContextMenuSlice.reducer