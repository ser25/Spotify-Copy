import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useAppDispatch} from "../redux/store";
import {setIsContextMenuOpen} from "../redux/slices/PlayListContextMenu/slice";
import useContextMenuPosition from "./useContextMenuPosition";

// const clickPosition = {x: null, y: null}

function useContextMenu() {
    const [isContextMenu, setIsContextMenu] = useState(false)
    const dispatch = useAppDispatch()
    const contextMenuRef = useRef(null)
    const updateClickCoordinates = useContextMenuPosition(contextMenuRef, isContextMenu)

    // const contextMenuRef = useRef(null)
    //
    // function updateContextMenuVerticalPosition() {
    //     const menuHeight = contextMenuRef.current.offsetHeight;
    //     const shouldMoveUp = menuHeight > window.innerHeight - clickPosition.y;
    //
    //     contextMenuRef.current.style.top = shouldMoveUp
    //         ? `${clickPosition.y - menuHeight}px`
    //         : `${clickPosition.y}px`;
    // }
    //
    // function updateContextMenuHorizontalPosition() {
    //     const menuWidth = contextMenuRef.current.offsetWidth;
    //     const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x;
    //
    //     contextMenuRef.current.style.left = shouldMoveLeft
    //         ? `${clickPosition.x - menuWidth}px`
    //         : `${clickPosition.x}px`;
    // }
    //
    // useLayoutEffect(() => {
    //     if (isContextMenu) {
    //         updateContextMenuPosition()
    //     }
    // })

    useEffect(() => {
        if (!isContextMenu) return

        function handleClickAway(event) {
            if (!contextMenuRef.current.contains(event.target)) {
                setIsContextMenu(false)
                dispatch(setIsContextMenuOpen(false))
            }
        }

        const handleEsc = (e) => {
            if (e.keyCode === 27) {
                setIsContextMenu(false)
                dispatch(setIsContextMenuOpen(false))
            }
        }

        document.addEventListener('mousedown', handleClickAway)
        document.addEventListener('keydown', handleEsc)

        return () => {
            document.removeEventListener('mousedown', handleClickAway)
            document.removeEventListener('keydown', handleEsc)
        }
    })
    // const updateContextMenuPosition = () => {
    //     // contextMenuRef.current.style.top = `${clickPosition.y}px`
    //     // contextMenuRef.current.style.left = `${clickPosition.x}px`
    //     updateContextMenuVerticalPosition();
    //     updateContextMenuHorizontalPosition();
    // }

    const openContextMenu = (e) => {
        e.preventDefault()

        updateClickCoordinates(e.clientX, e.clientY)
        setIsContextMenu(true)
        dispatch(setIsContextMenuOpen(true))


    }

    return { openContextMenu, isContextMenu, contextMenuRef}
}

export default useContextMenu