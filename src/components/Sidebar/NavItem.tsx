import React, {FC} from 'react';
import {NavItemProps} from "./type/index";


const NavItem: FC<NavItemProps> = ({navItem}) => {
    return (
        <a
            href="/"
            className={navItem.classes}
        >
            {navItem.icon}
            <span className="ml-4 text-sm font-semibold">{navItem.label}</span>
        </a>
    );
};

export default NavItem;