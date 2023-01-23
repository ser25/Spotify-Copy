import React, {useEffect, useRef, useState} from 'react';


const PlayListContextMenuItem = ({children: label, closePreviousSubmenuIfOpen}) => {



    return (
        <li onMouseEnter={() => closePreviousSubmenuIfOpen()}>
            <button
                className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'>
                {label}
            </button>
        </li>
    );
};

export default PlayListContextMenuItem;