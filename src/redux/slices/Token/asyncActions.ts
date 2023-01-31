import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {setAlbums, setMe} from "./slice";

export const fetchAlbums = createAsyncThunk(
    'albums/fetchAlbums',
    async (params, thunkAPI) => {
        const {dispatch} = thunkAPI
        const {data} = await axios.get("https://api.spotify.com/v1/albums", {
            headers: {
                Authorization: `Bearer ${params}`
            },
            params: {
                ids: '3YPFaTR7WMi1Hd4NVKdCJx,' +
                    '3Kbuu2tHsIbplFUkB7a5oE,' +
                    '3cGKAHAUhAaTTezK4GbBhQ,' +
                    '32iAEBstCjauDhyKpGjTuq,' +
                    '3T4tUhGYeRNVUGevb0wThu,' +
                    '47BiFcV59TQi2s9SkBo2pb,' +
                    '1kTlYbs28MXw7hwO0NLYif,' +
                    '1ORxRsK3MrSLvh7VQTF01F,' +
                    '5VoeRuTrGhTbKelUfwymwu,' +
                    '0JGOiO34nwfUdDrD612dOp,' +
                    '57TzZhbqvYoUBzJSVKFVlG'
            }
        })
        // dispatch(setAlbums(data.albums))
        return data.albums
    }
)

export const fetchMeInformation = createAsyncThunk(
    'meInformation/fetchMeInformation',
    async (params, thunkAPI) => {
        const {dispatch} = thunkAPI
        // const {token} = thunkAPI.getState() as RootState
        const {data} = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${params}`
            }
        })
        // dispatch(setMe(data))
        return data
    }
)