import {useEffect, useRef, useState} from "react";

function useContentSubMenu(items, subMenuRef, closePreviousSubmenuIfOpen) {

    const [menuState, setMenuState] = useState({
        isOpen: false,
        positionClasses: '',
    });

    const closeMenuTimer = useRef(null);


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
        const menuHeight = menuItem.offsetHeight * items.length;
        const menuItemBottomCoordY = menuItem.getBoundingClientRect().bottom;
        const shouldMoveMenuUp = menuHeight > windowHeight - menuItemBottomCoordY;

        return shouldMoveMenuUp ? 'bottom-0' : 'top-0';

    }

    function getMenuPositionClasses() {
        return `${getSubMenuPositionYClasses()} ${getSubMenuPositionXClasses()}`;
    }


    const openSubMenu = () => {
        closePreviousSubmenuIfOpen(startCloseMenuTimer)

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
        closeMenuTimer.current = setTimeout(closeSubMenu, 100);
    }

    function stopCloseMenuTimer() {
        clearTimeout(closeMenuTimer.current);
    }

    useEffect(() => stopCloseMenuTimer)

    return {openSubMenu, ...menuState}
}

export default useContentSubMenu