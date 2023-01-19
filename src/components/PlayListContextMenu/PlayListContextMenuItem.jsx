import React, {useState} from 'react';
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import PlayListContextMenu from "./PlayListContextMenu";
import PlayListContextSubmenuItem from "./PlayListContextSubmenuItem";

const PlayListContextMenuItem = ({children: label, subMenuItems}) => {
    const [isSubMenu, setIsSubMenu] = useState(false)
    const openSubMenu = (e) => {
        e.preventDefault()
        setIsSubMenu(true)
    }

    if (subMenuItems) {

        return (
            <li className='relative' onClick={openSubMenu}>
                <button
                    className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default
                     flex justify-between items-center'
                >
                    {label}
                    <ChevronRightIcon className='h-4 w-4'/>
                </button>
                {isSubMenu && <PlayListContextSubmenuItem
                    subMenuItems={subMenuItems}
                />}

            </li>
        )
    }

    return (
        <li>
            <button
                className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'>
                {label}
            </button>
        </li>
    );
};

export default PlayListContextMenuItem;