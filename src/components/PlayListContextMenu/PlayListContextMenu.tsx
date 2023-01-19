import React, {FC} from 'react';
import PlayListContextSubmenuItem from "./PlayListContextSubmenuItem";
import {IPlayListContextMenuProps} from "./type/type";

const PlayListContextMenu: FC<IPlayListContextMenuProps> = ({classes, menuItems}) => {
    return (
        <ul className={classes}
        >
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