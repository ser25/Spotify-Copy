import React, {FC, useEffect, useRef} from 'react';
import {IPlayListContextMenuProps} from "./type/type";
import {useDispatch, useSelector} from "react-redux";
import {selectPlayListContextMenu} from "../../redux/slices/PlayListContextMenu/selectors";
import PlayListContextMenuItem from "./PlayListContextMenuItem";
import {closeContextMenu} from "../../redux/slices/PlayListContextMenu/slice";
import PlayListContextMenuItemWithSubmenu from "./PlayListContextMenuItemWithSubmenu";

const PlayListContextMenu = ({menuItems, albumUrl}, ref) => {
    let closePreviousSubmenu = null;

    function closePreviousSubmenuIfOpen(closeSubmenu = null) {
        if (closePreviousSubmenu) {
            closePreviousSubmenu();
        }

        closePreviousSubmenu = closeSubmenu;
    }
    // const menuItems = useSelector(selectPlayListContextMenu)
    return (
        <ul className="fixed bg-[#282828] text-[#eaeaea]
                text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10"
            ref={ref}
        >
            {menuItems.map(menuItem => {
                    if (menuItem.submenus) {
                        return (
                            <PlayListContextMenuItemWithSubmenu key={menuItem.label}
                                                                subMenuItems={menuItem.submenus}
                                                                closePreviousSubmenuIfOpen={closePreviousSubmenuIfOpen}
                                                                albumUrl={albumUrl}

                            >
                                {menuItem.label}
                            </PlayListContextMenuItemWithSubmenu>
                        )
                    } else {
                        return (
                            <PlayListContextMenuItem key={menuItem.label} closePreviousSubmenuIfOpen={closePreviousSubmenuIfOpen}
                            >
                                {menuItem.label}
                            </PlayListContextMenuItem>
                        )
                    }

                }
            )}
        </ul>
    );
};

export default React.forwardRef(PlayListContextMenu);