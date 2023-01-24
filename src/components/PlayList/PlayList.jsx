import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';
import PlayListContextMenu from "../PlayListContextMenu/PlayListContextMenu";
import PlayListCover from "./PlayListCover";
import PlayListButtonPlay from "./PlayListButtonPlay";
import PlayListTitle from "./PlayListTitle";
import PlayListDescription from "./PlayListDescription";
import {useDispatch, useSelector} from "react-redux";
import {selectIsContextMenu, selectPlayListContextMenu} from "../../redux/slices/PlayListContextMenu/selectors";
import {closeContextMenu, setIsContextMenu, setIsContextMenuOpen} from "../../redux/slices/PlayListContextMenu/slice";
import {useAppDispatch} from "../../redux/store";
import useContextMenu from "../../hooks/useContextMenu";


const clickPosition = {x: null, y: null}
const PlayList = ({title, url, singer}) => {
    // const [isContextMenu, setIsContextMenu] = useState(false)
    // const dispatch = useAppDispatch()
    // // const isContextMenu = useSelector(selectIsContextMenu)
    // const bgClasses = isContextMenu ? 'bg-[#272727]' : 'bg-[#181818] hover:bg-[#272727]'
    //
    // const contextMenuRef = useRef(null)
    //
    // function updateContextMenuVerticalPosition() {
    //     const menuHeight = contextMenuRef.current.offsetHeight;
    //     const shouldMoveUp = menuHeight > window.innerHeight - clickPosition.y;
    //
    //     contextMenuRef.current.style.top = shouldMoveUp
    //         ? `${clickPosition.y - menuHeight}px`
    //         : `${clickPosition.y}px`;
    // }
    //
    // function updateContextMenuHorizontalPosition() {
    //     const menuWidth = contextMenuRef.current.offsetWidth;
    //     const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x;
    //
    //     contextMenuRef.current.style.left = shouldMoveLeft
    //         ? `${clickPosition.x - menuWidth}px`
    //         : `${clickPosition.x}px`;
    // }
    //
    // useLayoutEffect(() => {
    //     if (isContextMenu) {
    //         updateContextMenuPosition()
    //     }
    // })
    //
    // useEffect(() => {
    //     if (!isContextMenu) return
    //
    //     function handleClickAway(event) {
    //         if (!contextMenuRef.current.contains(event.target)) {
    //             setIsContextMenu(false)
    //             dispatch(setIsContextMenuOpen(false))
    //         }
    //     }
    //
    //     const handleEsc = (e) => {
    //         if (e.keyCode === 27) {
    //             setIsContextMenu(false)
    //             dispatch(setIsContextMenuOpen(false))
    //         }
    //     }
    //
    //     document.addEventListener('mousedown', handleClickAway)
    //     document.addEventListener('keydown', handleEsc)
    //
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickAway)
    //         document.removeEventListener('keydown', handleEsc)
    //     }
    // })
    // const updateContextMenuPosition = () => {
    //     // contextMenuRef.current.style.top = `${clickPosition.y}px`
    //     // contextMenuRef.current.style.left = `${clickPosition.x}px`
    //     updateContextMenuVerticalPosition();
    //     updateContextMenuHorizontalPosition();
    // }
    //
    // const openContextMenu = (e) => {
    //     e.preventDefault()
    //
    //     clickPosition.x = e.clientX
    //     clickPosition.y = e.clientY
    //     setIsContextMenu(true)
    //     dispatch(setIsContextMenuOpen(true))
    //
    //
    // }

    const menuItems = useSelector(selectPlayListContextMenu)

    const {openContextMenu, isContextMenu, contextMenuRef} = useContextMenu()

    const bgClasses = isContextMenu ? 'bg-[#272727]' : 'bg-[#181818] hover:bg-[#272727]'

    return (
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
            {isContextMenu && (<PlayListContextMenu menuItems={menuItems} ref={contextMenuRef}/>)}

        </a>
    );
};

export default PlayList;


// hidden 3xl:block