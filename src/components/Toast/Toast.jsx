import React, {useState, forwardRef, useImperativeHandle, useEffect} from 'react';
import {useSelector} from "react-redux";
import {selectAlbumUrl, selectIsToastShown} from "../../redux/slices/PlayListContextMenu/selectors";
import useShowToast from "../../hooks/useShowToast";

const Toast = ({children}) => {
    const IsToastShown = useSelector(selectIsToastShown)
    const [opacityClass, setOpacityClass] = useState('opacity-0')
    const albumUrl = useSelector(selectAlbumUrl)
    navigator.clipboard.writeText(albumUrl)

    // useShowToast()

    useEffect(() => {
        if (IsToastShown) {
            setOpacityClass('opacity-1')

        } else {
            setOpacityClass('opacity-0')
        }
    }, [IsToastShown])


    return (
        <div className={`fixed left-1/2 bottom-28 -translate-x-1/2 z-30 bg-[#2e76d0] text-white tracking-wide
        whitespace-nowrap rounded-lg shadow-3xl py-3 px-8 pointer-events-none transition-opacity duration-700 ${opacityClass}`}
        >
            {children}
        </div>
    );
};

export default Toast;