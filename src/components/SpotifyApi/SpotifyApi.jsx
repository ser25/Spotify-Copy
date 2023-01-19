import React, {useEffect, useState} from 'react';
import axios from "axios";

const SpotifyApi = () => {
    const CLIENT_ID = "308eaac3036f4c8480889a8119cf0a89"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"


    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem('token')

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("\thttps://api.spotify.com/v1/albums", {
            headers: {
                Authorization: `Bearer ${token}`
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
                    '0JGOiO34nwfUdDrD612dOp',
                // type: "tracks"
            }
        })

        setArtists(data.albums)
        console.log(data.albums)
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>Spotify React</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>
                }


                {token ?
                    <form onSubmit={searchArtists}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>

                    : <h2>Please login</h2>
                }

                {renderArtists()}

            </header>
        </div>
    );
};

export default SpotifyApi;