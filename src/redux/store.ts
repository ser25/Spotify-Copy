import {configureStore} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import playListContextMenu from "./slices/PlayListContextMenu/slice";
import registration from './slices/Registration/slice'
import popover from './slices/Popover/slice'

export const store = configureStore({
    reducer: {
        playListContextMenu,
        registration,
        popover
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch