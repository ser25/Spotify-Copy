import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import AlbumsButtonPlay from "./AlbumsButtonPlay";
import {EllipsisHorizontalIcon, HeartIcon} from "@heroicons/react/24/outline";
import AlbumsContextMenu from "./AlbumsContextMenu";
import AlbumsMenu from "./AlbumsMenu/AlbumsMenu";
import useContextMenuPosition from "../../../hooks/useContextMenuPosition";
import {OPACITY_0} from '../../../utils/constAll'
import useAlbumsIcon from "../../../hooks/useAlbumsIcon";
import {setIsScrollWrapper} from "../../../redux/slices/PlayListContextMenu/slice";
import {useDispatch} from "react-redux";


const AlbumsIconBlock = ({name}) => {
    const positionAlbums = 30
    const dispatch = useDispatch()
    const [popoverAlbum, setPopoverAlbum] = useState(OPACITY_0)
    const [popoverAlbum2, setPopoverAlbum2] = useState(OPACITY_0)
    const [openMenu, setOpenMenu] = useState(false)

    const ref = useRef()
    const updateClickCoordinates = useContextMenuPosition(ref, openMenu, positionAlbums)

    function handleClick(e) {
        e.preventDefault()
        updateClickCoordinates(e.clientX, e.clientY)
        handlePopoverAlbumLeve()
        handlePopoverAlbumLeve2()
        setOpenMenu(true)
        dispatch(setIsScrollWrapper(true))
    }


    const {
        handlePopoverAlbumEnter,
        handlePopoverAlbumEnter2,
        handlePopoverAlbumLeve,
        handlePopoverAlbumLeve2,
    }
        = useAlbumsIcon(openMenu, setPopoverAlbum, setPopoverAlbum2)


    return (
        <>
            <div className={"flex gap-6 mb-10 "}>
                <AlbumsButtonPlay/>
                <div className={"relative w-fit"}>
                    <HeartIcon onMouseEnter={handlePopoverAlbumEnter}
                               onMouseLeave={handlePopoverAlbumLeve}
                               className={`h-10 w-10`}
                    />
                    <AlbumsContextMenu contextMenu={popoverAlbum}>Save to Your Liberty</AlbumsContextMenu>
                </div>
                <div className={"relative w-fit"}>
                    <EllipsisHorizontalIcon
                        onMouseEnter={handlePopoverAlbumEnter2}
                        onMouseLeave={handlePopoverAlbumLeve2}
                        onClick={handleClick}
                        className={'h-10 w-10'}/>
                    <AlbumsContextMenu contextMenu={popoverAlbum2}>More options for {name}</AlbumsContextMenu>
                    {openMenu && <AlbumsMenu openMenu={openMenu} setOpenMenu={setOpenMenu} ref={ref}/>}
                </div>
            </div>

        </>

    );
};

export default AlbumsIconBlock;