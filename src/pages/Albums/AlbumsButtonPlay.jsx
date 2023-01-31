import React from 'react';
import {PlayIcon} from "@heroicons/react/20/solid";

const AlbumsButtonPlay = () => {
    return (
        <button
            className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl flex justify-center
             items-center cursor-auto duration-200 opacity-1 hover:scale-105">
            <PlayIcon className="h-4 w-4 fill-black"/>
        </button>
    );
};

export default AlbumsButtonPlay;