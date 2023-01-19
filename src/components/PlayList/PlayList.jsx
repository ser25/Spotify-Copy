import React, {FC, useState} from 'react';
import PlayListContextMenu from "../PlayListContextMenu/PlayListContextMenu";
import PlayListCover from "./PlayListCover";
import PlayListButtonPlay from "./PlayListButtonPlay";
import PlayListTitle from "./PlayListTitle";
import PlayListDescription from "./PlayListDescription";
import {useSelector} from "react-redux";
import {selectPlayListContextMenu} from "../../redux/slices/PlayListContextMenu/selectors";

const PlayList = ({title, url, singer}) => {
    const [isContextMenu, setIsContextMenu] = useState(false)
    const bgClasses = isContextMenu ? 'bg-[#272727]' : 'bg-[#181818] hover:bg-[#272727]'
    const openContextMenu = (e) => {
        e.preventDefault()
        setIsContextMenu(true)
    }
    const closeContextMenu = () => {
        setIsContextMenu(false)

    }
    return (
        <a
            href="/"
            className={`relative p-4 rounded-md  duration-200 group ${bgClasses}`}
            onContextMenu={(event) => openContextMenu(event)}
            onClick={event => event.preventDefault()}
        >
            <div className="relative">
                <PlayListCover url={url}/>
                <PlayListButtonPlay/>
            </div>
            <PlayListTitle title={title}/>
            <PlayListDescription singer={singer}/>
            {isContextMenu && (<PlayListContextMenu onClose={closeContextMenu} />)}

        </a>
    );
};

export default PlayList;


// hidden 3xl:block