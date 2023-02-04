import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {useAppDispatch} from "../../redux/store";
import axios from "axios";
import {setToken} from "../../redux/slices/Token/slice";
import TrackAlbums from "./TrackAlbums";
import AlbumsHeader from "./components/AlbumsHeader";
import {ClockIcon, HeartIcon, EllipsisHorizontalIcon} from "@heroicons/react/24/outline";
import Copyrights from "./components/Copyrights";
import AlbumsButtonPlay from "./components/AlbumsButtonPlay";
import AlbumsIconBlock from "./components/AlbumsIconBlock";
import AlbumsMenu from "./components/AlbumsMenu/AlbumsMenu";

const Albums = () => {
    const [album, setAlbum] = useState({})
    const [tracks, setTracks] = useState()
    const [copyrights, setCopyrights] = useState()

    const dispatch = useAppDispatch()
    const {token} = useToken()
    const {id} = useParams()
    useEffect(() => {
        function localAlbum(){
            let isAlbum = window.localStorage.getItem('album')
            if (isAlbum) {
                isAlbum = JSON.parse(isAlbum)
                setAlbum(isAlbum)
                setTracks(isAlbum.tracks.items)
                setCopyrights(isAlbum.copyrights)
                return
            }
        }
        async function fetchAlbum() {
            try {
                const {data} = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                window.localStorage.setItem("album", JSON.stringify(data))
                setAlbum(data)
                setTracks(data.tracks.items)
                setCopyrights(data.copyrights)
            } catch (error) {
                console.log('error')
            }
        }
        localAlbum()
        // fetchAlbum()

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
                    <AlbumsIconBlock name={album?.name}/>
                    <div className={'border-b-2 flex justify-between'}>
                        <div className={'mb-4 '}># Title</div>
                        <ClockIcon className={'h-6 w-6'}/>
                    </div>

                    {tracks.map((track, index) =>
                        <TrackAlbums key={track.name} track={track} singer={album?.artists[0].name} namber={index}/>
                    )}

                    <Copyrights copyrights={copyrights} />
                </div>

                <div className={"relative"}>


                </div>

            </div>

        </div>
    );
};

export default Albums;