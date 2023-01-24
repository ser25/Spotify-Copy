import React, {useEffect, useRef, useState} from 'react';


const PlayListContextMenuItem = ({children: originalLabel, closePreviousSubmenuIfOpen, alternateLabel}) => {

    const [label, setLabel] = useState(originalLabel);

    useEffect(() => {
        if (!alternateLabel) return;

        function handleAltKeydown(event) {
            if (event.altKey) {
                setLabel(alternateLabel)
            }
        }

        function handleAltKeyup(event) {
            if (event.altKey) {
                setLabel(originalLabel)
            }
        }

        document.addEventListener('keydown', handleAltKeydown);
        document.addEventListener('keyup', handleAltKeyup);

        return () => {
            document.removeEventListener('keydown', handleAltKeydown);
            document.removeEventListener('keyup', handleAltKeyup);
        };
    }, []);


    return (
        <li onMouseEnter={() => closePreviousSubmenuIfOpen ? closePreviousSubmenuIfOpen() : null}>
            <button
                className={`w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default 
               ${alternateLabel ? 'min-w-[150px]' : ''}`}>
                {label}
            </button>
        </li>
    );
};

export default PlayListContextMenuItem;