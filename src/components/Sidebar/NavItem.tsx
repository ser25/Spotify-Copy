import React, {FC} from 'react';
import {NavItemProps} from "./type/index";


const NavItem: FC<NavItemProps> = ({navItem, onClick}) => {
    function handleClick(event: any) {
        if (!onClick) return;

        event.preventDefault();


        onClick(navItem.titlePopover, navItem.textPopover, event.currentTarget);
    }

    return (
        <a
            href="/"
            className={navItem.classes}
            onClick={handleClick}
        >
            {navItem.icon}
            <span className="ml-4 text-sm font-semibold">{navItem.label}</span>
        </a>
    );
};

export default NavItem;