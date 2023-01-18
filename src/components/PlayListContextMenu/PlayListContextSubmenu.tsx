import React, {FC} from 'react';
import PlayListContextSubmenuItem from "./PlayListContextSubmenuItem";
import {IPlayListContextSubmenuProps} from './type/type'

const PlayListContextSubmenu: FC<IPlayListContextSubmenuProps> = ({submenus}) => {
    return (
        <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
            {submenus.map(submenu =>
                <PlayListContextSubmenuItem key={submenu.label}>{submenu.label}</PlayListContextSubmenuItem>
            )}

        </ul>
    );
};

export default PlayListContextSubmenu;