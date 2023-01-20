import React, {useEffect, useRef, useState} from 'react';
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import PlayListContextMenu from "./PlayListContextMenu";
import PlayListContextSubmenuItem from "./PlayListContextSubmenuItem";

const PlayListContextMenuItemWithSubmenu = ({children: label, subMenuItems}) => {
    const [menuState, setMenuState] = useState({
        isOpen: false,
        positionClasses: '',
    });
    const subMenuRef = useRef(null)
    let closeMenuTimer = null;

    function getSubMenuPositionXClasses() {
        const menuItem = subMenuRef.current;
        const menuItemWidth = menuItem.offsetWidth;
        const windowWidth = window.innerWidth;
        const menuItemRightCoordX = menuItem.getBoundingClientRect().right;
        const shouldMoveMenuLeft = menuItemWidth > windowWidth - menuItemRightCoordX;
        return shouldMoveMenuLeft ? 'right-full' : 'left-full';

    }

    function getSubMenuPositionYClasses() {
        const windowHeight = window.innerHeight;
        const menuItem = subMenuRef.current;
        const menuHeight = menuItem.offsetHeight * subMenuItems.length;
        const menuItemBottomCoordY = menuItem.getBoundingClientRect().bottom;
        const shouldMoveMenuUp = menuHeight > windowHeight - menuItemBottomCoordY;

        return shouldMoveMenuUp ? 'bottom-0' : 'top-0';

    }

    function getMenuPositionClasses() {
        return `${getSubMenuPositionYClasses()} ${getSubMenuPositionXClasses()}`;
    }

    const openSubMenu = () => {
        if (closeMenuTimer) {
            stopCloseMenuTimer()

            return
        }
        setMenuState({
            isOpen: true,
            positionClasses: getMenuPositionClasses(),
        });
    }
    const closeSubMenu = () => {
        setMenuState({
            isOpen: false,
            positionClasses: '',
        });
    }

    function startCloseMenuTimer() {
        closeMenuTimer = setTimeout(closeSubMenu, 100);
    }

    function stopCloseMenuTimer() {
        clearTimeout(closeMenuTimer);
    }

    useEffect(() => stopCloseMenuTimer);


    return (
        <li className='relative' onMouseEnter={openSubMenu} onMouseLeave={startCloseMenuTimer} ref={subMenuRef}>
            <button
                className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default
                     flex justify-between items-center'
            >
                {label}
                <ChevronRightIcon className='h-4 w-4'/>
            </button>
            {menuState.isOpen && <PlayListContextSubmenuItem
                subMenuItems={subMenuItems} menuPositionClasses={menuState.positionClasses}
            />}

        </li>
    )


};

export default PlayListContextMenuItemWithSubmenu;