import React, {useEffect, useRef, useState} from 'react';
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import PlayListContextMenu from "./PlayListContextMenu";
import PlayListContextSubmenuItem from "./PlayListContextSubmenuItem";
import useContentSubMenu from "../../hooks/useContentSubMenu";

const PlayListContextMenuItemWithSubmenu = ({children: label, subMenuItems, closePreviousSubmenuIfOpen, albumUrl}) => {

    const subMenuRef = useRef(null)

    const submenu = useContentSubMenu(subMenuItems, subMenuRef, closePreviousSubmenuIfOpen)

    const bgClasses = submenu.isOpen ? 'bg-[#3e3e3e]' : 'hover:bg-[#3e3e3e]'

    return (
        <li className='relative' onMouseEnter={submenu.openSubMenu} ref={subMenuRef}>
            <button
                className={`w-full p-3 text-left hover:text-white  cursor-default
                     flex justify-between items-center ${bgClasses}`}
            >
                {label}
                <ChevronRightIcon className='h-4 w-4'/>
            </button>
            {submenu.isOpen && <PlayListContextSubmenuItem
                subMenuItems={subMenuItems} menuPositionClasses={submenu.positionClasses}
                albumUrl={albumUrl}
            />}

        </li>
    )


};

export default PlayListContextMenuItemWithSubmenu;