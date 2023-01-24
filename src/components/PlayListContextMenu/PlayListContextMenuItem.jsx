import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {setIsContextMenuOpen, setIsToastShown} from "../../redux/slices/PlayListContextMenu/slice";
import {selectIsToastShown} from "../../redux/slices/PlayListContextMenu/selectors";


const PlayListContextMenuItem = ({children: originalLabel, closePreviousSubmenuIfOpen, alternateLabel, albumUrl}) => {
    const dispatch = useDispatch()


    function openToast(){
        if (alternateLabel){
            dispatch(setIsToastShown(true))
        }
    }

    const [label, setLabel] = useState(originalLabel);

    useEffect(() => {
        if (!alternateLabel) return;

        function handleAltKeydown(event) {
            if (event.altKey) {
                setLabel(alternateLabel)
            }
        }

        function handleAltKeyup(event) {
            if (event.altKey) {
                setLabel(originalLabel)
            }
        }

        document.addEventListener('keydown', handleAltKeydown);
        document.addEventListener('keyup', handleAltKeyup);

        return () => {
            document.removeEventListener('keydown', handleAltKeydown);
            document.removeEventListener('keyup', handleAltKeyup);
        };
    }, []);



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