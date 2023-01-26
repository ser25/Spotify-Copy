import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import ButtonLogin from "../../UI/BaseButton/ButtonLogin";
import BaseButton from "../../UI/BaseButton/BaseButton";
import {useDispatch, useSelector} from "react-redux";
import {selectPopover, selectPopoverAll} from "../../redux/slices/Popover/selectors";
import {hide, setTitle} from "../../redux/slices/Popover/slice";

const Popover = forwardRef((_, ref) => {
    // const [classes, setClasses] = useState('opacity-0 pointer-events-none')
    const dispatch = useDispatch()
    const classes = useSelector(selectPopover)
    const nodeRef = useRef();
    const {title, text, top, right} = useSelector(selectPopoverAll)

    // useEffect(() => {
    //     if (classes === 'opacity-1') {
    //         // console.log(title)
    //         // dispatch(setTitle('ok)'))
    //     }
    // }, [classes])

    useEffect(() => {
        function handleClickAway({target}) {
            if (classes === 'opacity-1') {
                if (!nodeRef.current.contains(target)) dispatch(hide());
            }

        }

        document.addEventListener('mousedown', handleClickAway);

        return () => document.removeEventListener('mousedown', handleClickAway);
    });


    function hidePopover() {
        dispatch(hide())

    }

    function moveTO() {
        nodeRef.current.style.top = `${top}px`;
        nodeRef.current.style.left = `${right}px`;
    }

    useEffect(() => {
        if (classes === 'opacity-1') {
            moveTO()
        }
    }, [top, right])


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
})

export default Popover;