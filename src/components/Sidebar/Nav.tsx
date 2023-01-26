import React, {FC} from 'react';
import {
    HomeIcon,
    MagnifyingGlassIcon,
    PlusCircleIcon,
    HeartIcon,
    BuildingLibraryIcon
} from '@heroicons/react/24/outline'
import NavItem from "./NavItem";
import {INavItems} from './type/index'
import {useDispatch} from "react-redux";
import {setCoordinate, setText, setTitle, show} from "../../redux/slices/Popover/slice";
import * as events from "events";

const Nav: FC<any> = ({showPopover}) => {
    const dispatch = useDispatch()
    const activeNavItemsClasses = "flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded"
    const navItemClasses = "flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300"
    const navItems: INavItems[] = [
        {
            label: 'Home',
            classes: activeNavItemsClasses,
            icon: <HomeIcon className="h-6 w-6"/>,

        },
        {
            label: 'Search',
            classes: navItemClasses,
            icon: <MagnifyingGlassIcon className="w-6 h-6"/>,

        },
        {
            label: 'Your liberty',
            classes: `${navItemClasses} mb-6`,
            icon: <BuildingLibraryIcon className="w-6 h-6"/>,
            titlePopover: 'Enjoy Your Library',
            textPopover: 'Log in to see saved songs, podcasts, artists, and playlists in Your Library.'


        },
        {
            label: 'Create Playlist',
            classes: navItemClasses,
            icon: <PlusCircleIcon className="w-6 h-6"/>,
            // action: showPopover
            titlePopover: 'Create a playlist',
            textPopover: 'Log in to create and share playlists.'

        },
        {
            label: 'Liked Songs',
            classes: navItemClasses,
            icon: <HeartIcon className="w-6 h-6"/>,
            titlePopover: 'Enjoy your Liked Songs',
            textPopover: 'Log in to see all the songs you\'ve liked in one easy playlist.'

        },
    ]

    function getCoordinate(target: any){
        const { top, right, height } = target.getBoundingClientRect();
        return { top, right, height }
    }


    function openPopover(title: string, text: string, target: events) {
        if (title === undefined) return
        const { top, right, height } = getCoordinate(target)
        console.log({ top, right, height })
        dispatch(setCoordinate({ top, right, height }))
        dispatch(setTitle(title))
        dispatch(setText(text))
        dispatch(show())

    }

    return (
        <nav>
            {navItems.map(navItem =>
                <NavItem key={navItem.label} navItem={navItem} onClick={openPopover}/>
            )}
        </nav>
    );
};

export default Nav;