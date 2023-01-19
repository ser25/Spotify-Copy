import React, {FC, useEffect, useRef} from 'react';
import {IPlayListContextMenuProps} from "./type/type";
import {useSelector} from "react-redux";
import {selectPlayListContextMenu} from "../../redux/slices/PlayListContextMenu/selectors";
import PlayListContextMenuItem from "./PlayListContextMenuItem";

const PlayListContextMenu = ({onClose}) => {
    const menuItems = useSelector(selectPlayListContextMenu)
    const menuRef = useRef(null)
    useEffect(() => {
        const handleClickAway = (e) => {
            if(!menuRef.current.contains(e.target)){
                onClose()
            }
        }
        const handleEsc = (e) => {
            if(e.keyCode === 27){
                onClose()
            }
        }
        document.addEventListener('mousedown', handleClickAway)
        document.addEventListener('keydown', handleEsc)

        return () => {
            document.removeEventListener('mousedown', handleClickAway)
            document.removeEventListener('keydown', handleEsc)
        }
    }, [])
    console.log(menuRef.current)
    return (
        <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea]
                text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10"
            ref={menuRef}
        >
            {menuItems.map(menuItem =>
                <PlayListContextMenuItem key={menuItem.label}
                                         subMenuItems={menuItem.submenus}
                >
                    {menuItem.label}
                </PlayListContextMenuItem>
            )}
        </ul>
    );
};

export default PlayListContextMenu;