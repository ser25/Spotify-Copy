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

const Nav: FC = () => {
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

        },
        {
            label: 'Create Playlist',
            classes: navItemClasses,
            icon: <PlusCircleIcon className="w-6 h-6"/>,

        },
        {
            label: 'Liked Songs',
            classes: navItemClasses,
            icon: <HeartIcon className="w-6 h-6"/>,

        },
    ]
    return (
        <nav>
            {navItems.map(navItem =>
                <NavItem key={navItem.label} navItem={navItem}/>
            )}
        </nav>
    );
};

export default Nav;