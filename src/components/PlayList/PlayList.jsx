import React, {FC} from 'react';
import PlayListContextMenu from "../PlayListContextMenu/PlayListContextMenu";
import PlayListCover from "./PlayListCover";
import PlayListButtonPlay from "./PlayListButtonPlay";
import PlayListTitle from "./PlayListTitle";
import PlayListDescription from "./PlayListDescription";
import {useSelector} from "react-redux";
import {selectPlayListContextMenu} from "../../redux/slices/PlayListContextMenu/selectors";

const PlayList = ({title, url, singer}) => {
    console.log('pop', title, url, singer)
    const menuItems = useSelector(selectPlayListContextMenu)
    return (
        <a
            href="/"
            className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
        >
            <div className="relative">
                <PlayListCover url={url}/>
                <PlayListButtonPlay/>
            </div>
            <PlayListTitle title={title}/>
            <PlayListDescription singer={singer}/>
            <PlayListContextMenu menuItems={menuItems}
                classes="absolute top-9 left-9 bg-[#282828] text-[#eaeaea]
                text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden
                group-hover:block"
            />
        </a>
    );
};

export default PlayList;