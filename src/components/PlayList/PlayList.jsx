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
    closeContextMenu, setAlbumUrl,
    setIsContextMenu,
    setIsContextMenuOpen, setIsScrollWrapper,
    setIsToastShown
} from "../../redux/slices/PlayListContextMenu/slice";
import {useAppDispatch} from "../../redux/store";
import useContextMenu from "../../hooks/useContextMenu";
import useShowToast from "../../hooks/useShowToast";
import {selectPopover} from "../../redux/slices/Popover/selectors";


const PlayList = ({title, url, singer, albumUrl}) => {
    const dispatch = useAppDispatch()
    const closeToastTimer = useRef();
    const menuItems = useSelector(selectPlayListContextMenu)
    const IsToastShown = useSelector(selectIsToastShown)
    const openPopover = useSelector(selectPopover)
    const {openContextMenu, isOpen, ref, setIsOpen} = useContextMenu()


    const bgClasses = isOpen ? 'bg-[#272727]' : 'bg-[#181818] hover:bg-[#272727]'


    useEffect(() =>{
        if (openPopover === 'opacity-1' && isOpen){
            setIsOpen(false)
        }
    }, [openPopover])

    useEffect(() => {
        function hideToast() {
            dispatch(setIsToastShown(false))
            // dispatch(setAlbumUrl(''))

        }
        function openToast() {

            closeToastTimer.current = setTimeout(hideToast, 1000);
        }
        if (IsToastShown) {
            setIsOpen(false)
            dispatch(setIsScrollWrapper(false))
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
                {isOpen && (<PlayListContextMenu menuItems={menuItems} ref={ref} albumUrl={albumUrl}
                                                 setIsOpen={setIsOpen} isOpen={isOpen}/>)}

            </a>
        </>

    );
};

export default PlayList;


// hidden 3xl:block