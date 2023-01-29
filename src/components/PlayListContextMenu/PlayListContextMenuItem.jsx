import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {
    setAlbumUrl,
    setIsScrollWrapper,
    setIsToastShown
} from "../../redux/slices/PlayListContextMenu/slice";
import {setCoordinate, setText, setTitle, show} from "../../redux/slices/Popover/slice";
import {openModal} from "../../redux/slices/Modal/slice";


const PlayListContextMenuItem = ({
                                     children: originalLabel,
                                     closePreviousSubmenuIfOpen,
                                     alternateLabel,
                                     albumUrl,
                                     setIsOpen
                                 }) => {
    const dispatch = useDispatch()


    function openToast() {
        if (originalLabel === 'Add to Your Library') {
            dispatch(setTitle('Enjoy Your Library'))
            dispatch(setText('Log in to see saved songs, podcasts, artists, and playlists in Your Library.'))
            dispatch(setCoordinate({top: 176.96875, right: 137.34375, height: 20}))
            dispatch(setIsScrollWrapper(false))
            dispatch(show())
        } else if (originalLabel === 'About recommendations') {
            dispatch(setIsScrollWrapper(false))
            setIsOpen(false)
            dispatch(openModal())
        }
        if (alternateLabel) {
            dispatch(setIsToastShown(true))
            dispatch(setAlbumUrl(albumUrl))

        }
    }

    const [label, setLabel] = useState(originalLabel);


    useEffect(() => {
        if (!alternateLabel) return;

        function handleAltKeydown(event) {
            if (event.altKey) {
                event.preventDefault()
                setLabel(alternateLabel)
            }
        }

        function handleAltKeyup(event) {
            if (event.altKey) {
                event.preventDefault()
                setLabel(originalLabel)
            }
        }

        document.addEventListener('keydown', handleAltKeydown);
        document.addEventListener('keyup', handleAltKeyup);

        return () => {
            document.removeEventListener('keydown', handleAltKeydown);
            document.removeEventListener('keyup', handleAltKeyup);
        };
    });


    return (
        <li onClick={openToast} onMouseEnter={() => closePreviousSubmenuIfOpen ? closePreviousSubmenuIfOpen() : null}>
            <button
                className={`w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default 
               ${alternateLabel ? 'min-w-[150px]' : ''}`}>
                {label}
            </button>
        </li>
    );
};

export default PlayListContextMenuItem;