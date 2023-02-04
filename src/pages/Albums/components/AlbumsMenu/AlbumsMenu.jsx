import React, {forwardRef} from 'react';
import AlbumsSubMenu from "./AlbumsSubMenu";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import AlbumsMenuItem from "./AlbumsMenuItem";
import useEvent from "../../../../hooks/useEvent";
import {setIsScrollWrapper} from "../../../../redux/slices/PlayListContextMenu/slice";
import {useDispatch} from "react-redux";

const AlbumsMenu = forwardRef(({openMenu, setOpenMenu}, ref) => {
    const dispatch = useDispatch()
    const items = [
        {
            label: 'Add to queue'
        },
        {
            label: 'Go to artist radio',
            // submenus: [
            //     {
            //         label: 'Copy link to playlist',
            //         alternateLabel: 'Copy Spotify URL'
            //     },
            //     {
            //         label: 'Embed playlist'
            //     },
            // ],
            // icon: <ChevronRightIcon className='h-4 w-4'/>
        },
        {
            label: 'Add to Your Library'
        },
        {
            label: 'Add to playlist'
        },
        {
            label: 'Share'
        },
        {
            label: 'Open in Desktop app'
        },
    ]
    function handleClickAway(event) {
        if (!ref.current.contains(event.target)) {
            dispatch(setIsScrollWrapper(false))
            setOpenMenu(false)
        }
    }
    useEvent('mousedown', handleClickAway, ()=>openMenu)
    // return (
    //     <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded
    //      shadow-xl cursor-default whitespace-nowrap z-60  group-hover:block">
    //         <li>
    //             <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
    //                 Add to Your Library
    //             </button>
    //         </li>
    //         <li className="relative">
    //             <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
    //                 Share
    //                 <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     className="h-4 w-4"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                 >
    //                     <path
    //                         strokeLinecap="round"
    //                         strokeLinejoin="round"
    //                         strokeWidth="2"
    //                         d="M9 5l7 7-7 7"
    //                     />
    //                 </svg>
    //             </button>
    //         </li>
    //         <li>
    //             <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
    //                 About recommendations
    //             </button>
    //         </li>
    //         <li>
    //             <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
    //                 Open in Desktop app
    //             </button>
    //         </li>
    //     </ul>
    // );
    return(
        <ul ref={ref}
            className="fixed bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded
          shadow-xl cursor-default whitespace-nowrap z-60  group-hover:block"
        >
            {items.map(item =>
                <AlbumsMenuItem key={item.label} icon={item.icon}>{item.label}</AlbumsMenuItem>
            )}
        </ul>

    )
});

export default AlbumsMenu;