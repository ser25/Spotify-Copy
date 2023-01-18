import React from 'react';
import {IMenuItems} from './type/type'
import PlayListContextSubmenuItem from "./PlayListContextSubmenuItem";


const PlayListContextMenu = () => {

    const menuItems: IMenuItems[] = [
        {
            label: ' Add to Your Library'
        },
        {
            label: 'Share',
            submenus: [
                {
                    label: 'Copy link to playlist'
                },
                {
                    label: 'Embed playlist'
                },
            ],
        },
        {
            label: 'About recommendations'
        },
        {
            label: 'Open in Desktop app'
        },
    ]

    return (
        <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block">
            {menuItems.map(menuItem =>
                <PlayListContextSubmenuItem key={menuItem.label}
                                            submenus={menuItem.submenus}
                >
                    {menuItem.label}
                </PlayListContextSubmenuItem>
            )}
        </ul>
    );
};

export default PlayListContextMenu;