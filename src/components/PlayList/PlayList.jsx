import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';
import PlayListContextMenu from "../PlayListContextMenu/PlayListContextMenu";
import PlayListCover from "./PlayListCover";
import PlayListButtonPlay from "./PlayListButtonPlay";
import PlayListTitle from "./PlayListTitle";
import PlayListDescription from "./PlayListDescription";
import {useDispatch, useSelector} from "react-redux";
import {
    selectIsContextMenu, selectIsContextMenuOpen,
    selectIsToastShown,
    selectPlayListContextMenu
} from "../../redux/slices/PlayListContextMenu/selectors";
import {
    closeContextMenu,
    setIsContextMenu,
    setIsContextMenuOpen,
    setIsToastShown
} from "../../redux/slices/PlayListContextMenu/slice";
import {useAppDispatch} from "../../redux/store";
import useContextMenu from "../../hooks/useContextMenu";
import Toast from "../Toast/Toast";


const clickPosition = {x: null, y: null}
const PlayList = ({title, url, singer, albumUrl}) => {
    const dispatch = useAppDispatch()
    const closeToastTimer = useRef();
    const menuItems = useSelector(selectPlayListContextMenu)
    const IsToastShown = useSelector(selectIsToastShown)

    const {openContextMenu, isOpen, ref, setIsOpen} = useContextMenu()


    const bgClasses = isOpen ? 'bg-[#272727]' : 'bg-[#181818] hover:bg-[#272727]'



    useEffect(() => {
        function hideToast() {
            dispatch(setIsToastShown(false))
        }
        function openToast() {

            closeToastTimer.current = setTimeout(hideToast, 1000);
        }
        if (IsToastShown) {
            setIsOpen(false)
            openToast()
        }
    })


    return (
        <>
            <a
                href="/"
                className={`relative p-4 rounded-md  duration-200 group ${bgClasses}`}
                onContextMenu={openContextMenu}
                onClick={event => event.preventDefault()}
            >
                <div className="relative">
                    <PlayListCover url={url}/>
                    <PlayListButtonPlay/>
                </div>
                <PlayListTitle title={title}/>
                <PlayListDescription singer={singer}/>
                {isOpen && (<PlayListContextMenu menuItems={menuItems} ref={ref} albumUrl={albumUrl}/>)}

            </a>
            {IsToastShown && <Toast albumUrl={albumUrl}/>}
        </>

    );
};

export default PlayList;


// hidden 3xl:block