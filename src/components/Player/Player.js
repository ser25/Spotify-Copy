import React, {useEffect} from 'react';
import axios from "axios";
import buttonLogin from "../../UI/BaseButton/ButtonLogin";
import {useSelector} from "react-redux";
import {selectToken} from "../../redux/slices/Token/selectors";


const Player = () => {
    const {token} = useSelector(selectToken)

    function searchArtists1(){

    }
    if (!token) return null
    return (
        <>
            <div>play</div>
            <button onClick={searchArtists1}>click</button>
        </>

    );
};

export default Player;