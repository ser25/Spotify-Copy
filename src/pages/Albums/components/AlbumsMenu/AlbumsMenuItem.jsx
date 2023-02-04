import React from 'react';
import AlbumsSubMenu from "./AlbumsSubMenu";

const AlbumsMenuItem = ({children: label, icon}) => {
    return (
        <>
            <li>
                <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    {label}
                    {icon}
                </button>
            </li>
            {icon && <AlbumsSubMenu/>}
        </>

    );
};

export default AlbumsMenuItem;