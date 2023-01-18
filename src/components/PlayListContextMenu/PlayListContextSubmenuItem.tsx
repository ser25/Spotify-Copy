import React, {FC} from 'react';
import PlayListContextSubmenu from "./PlayListContextSubmenu";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {IPlayListContextSubmenuItemProps} from './type/type'


const PlayListContextSubmenuItem: FC<IPlayListContextSubmenuItemProps> = ({children: label, submenus}) => {
    let classes: string = ''
    let buttonClasses: string = 'w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'
    let icon = null
    let submenu = null
    if (submenus) {
        classes = 'relative'
        buttonClasses = `${buttonClasses} flex justify-between items-center`
        icon = <ChevronRightIcon className='h-4 w-4'/>
        submenu = <PlayListContextSubmenu submenus={submenus}/>
    }
    return (
        <li className={classes}>
            <button
                className={buttonClasses}>
                {label} {icon}
            </button>
            {submenu}
        </li>
    );
};

export default PlayListContextSubmenuItem;


