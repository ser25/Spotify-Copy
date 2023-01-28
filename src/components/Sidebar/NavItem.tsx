import React, {FC, useRef} from 'react';
import {NavItemProps} from "./type/index";


const NavItem: FC<NavItemProps> = ({navItem, onClick}) => {
    const spanRef: any = useRef()
    function handleClick(event: any) {
        if (!onClick) return;
        event.preventDefault()

        onClick(navItem.titlePopover, navItem.textPopover, spanRef.current, navItem.label);
    }

    return (
        <a
            href="/"
            className={navItem.classes}
            onClick={handleClick}
        >
            {navItem.icon}
            <span ref={spanRef} className="ml-4 text-sm font-semibold">{navItem.label}</span>
        </a>
    );
};

export default NavItem;