import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {useAppDispatch} from "../../redux/store";
import axios from "axios";
import {setToken} from "../../redux/slices/Token/slice";
import TrackAlbums from "./TrackAlbums";
import AlbumsHeader from "./AlbumsHeader";

const Albums = () => {
    const [album, setAlbum] = useState()
    const [tracks, setTracks] = useState()
    const dispatch = useAppDispatch()
    const {token} = useToken()
    const {id} = useParams()
    useEffect(() => {
        async function fetchAlbum() {
            try {
                const {data} = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                setAlbum(data)
                setTracks(data.tracks.items)
            } catch (error) {
                alert('error')
            }
        }

        fetchAlbum()

    }, [token])
    if (!album) {
        return <>Завантаження...</>
    }
    if (!tracks) {
        return <>Завантаження...</>
    }
    return (
        <div className={"bg-[#121212] text-[#e0dede]"}>
            <div>
                <AlbumsHeader album={album}/>
                <div className={"px-8"}>
                    <div className={'mb-4 border-b-2'}># Title</div>
                    {tracks.map((track, index) =>
                        <TrackAlbums key={track.name} track={track} singer={album.artists[0].name} namber={index}/>
                    )}
                </div>

            </div>

        </div>
    );
};

export default Albums;