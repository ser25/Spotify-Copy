import React, {useState} from 'react';
import AlbumsButtonPlay from "./AlbumsButtonPlay";
import {EllipsisHorizontalIcon, HeartIcon} from "@heroicons/react/24/outline";
import {useDispatch} from "react-redux";
import {openModalRecommendation} from "../../redux/slices/Modal/slice";
import AlbumsContextMenu from "./AlbumsContextMenu";

const AlbumsIconBlock = ({name}) => {
    const [classes, setClasses] = useState('')
    const [contextMenu, setContextMenu] = useState('opacity-0')
    const dispatch = useDispatch()

    function handleEnter() {
        setClasses('relative')
        setContextMenu('opacity-1')

    }

    function handleLeave() {
        setContextMenu('opacity-0')
        setClasses('')
    }

    return (
        <>
            <div className={"flex gap-6 mb-10 "}>
                <AlbumsButtonPlay/>
                <div className={"relative w-fit"}>
                    <HeartIcon onMouseEnter={handleEnter}
                               onMouseLeave={handleLeave}
                               className={`h-10 w-10`}
                    />
                    <AlbumsContextMenu contextMenu={contextMenu}>Save to Your Liberty</AlbumsContextMenu>
                </div>
                <div className={"relative w-fit"}>
                    <EllipsisHorizontalIcon
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                        className={'h-10 w-10'}/>
                    <AlbumsContextMenu contextMenu={contextMenu}>More options for {name}</AlbumsContextMenu>
                </div>
            </div>

        </>

    );
};

export default AlbumsIconBlock;