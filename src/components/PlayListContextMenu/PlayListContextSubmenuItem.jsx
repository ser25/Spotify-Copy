import React, {FC, useEffect, useState} from 'react';
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {IPlayListContextSubmenuItemProps} from './type/type'
import PlayListContextMenu from "./PlayListContextMenu";
import PlayListContextMenuItem from "./PlayListContextMenuItem";


const PlayListContextSubmenuItem = ({ subMenuItems, menuPositionClasses, albumUrl}) => {


    return (
        <ul className={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default absolute ${menuPositionClasses}`}
        >
            {subMenuItems.map(({label, alternateLabel}) => (
                <PlayListContextMenuItem  key={label} alternateLabel={alternateLabel}  >{label}</PlayListContextMenuItem>
            ))}
        </ul>
    )
};

export default PlayListContextSubmenuItem;


// if (submenus) {
//     return (
//         <li className='relative'>
//             <button
//                 className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default
//                      flex justify-between items-center'
//             >
//                 {label} <ChevronRightIcon className='h-4 w-4'/>
//             </button>
//             <PlayListContextMenu
//                 classes="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default"
//                 menuItems={submenus}
//             />
//         </li>
//     );
// }
//
// return (
//     <li>
//         <button
//             className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'>
//             {label}
//         </button>
//     </li>
// );

