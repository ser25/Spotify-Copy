import React, {forwardRef, useEffect, useRef} from 'react';
import ButtonLogin from "../../UI/BaseButton/ButtonLogin";
import BaseButton from "../../UI/BaseButton/BaseButton";
import useClickAwayPopover from "../../hooks/useClickAwayPopover";

const Popover = () => {

    const {classes, nodeRef, title, text, hidePopover} = useClickAwayPopover()


    return (
        <div
            className={`fixed top-[227px] left-[200px] z-30 bg-[#0e72ea] text-white tracking-wide rounded-lg shadow-3xl
             p-4 min-w-[330px] select-none transition duration-300 ${classes}`}
            ref={nodeRef}
        >
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-xs">{text}</p>
            <div className="mt-6 text-right">
                <BaseButton onClick={hidePopover}>Not now</BaseButton>
                <ButtonLogin/>
            </div>
            <div
                className="w-20 h-20 absolute -top-4 -left-20 flex justify-end items-center overflow-hidden pointer-events-none">
                <div className="w-3 h-3 bg-[#0e72ea] shadow-3xl translate-x-1/2 rotate-45 pointer-events-auto"/>
            </div>
        </div>
    );
}

export default Popover;