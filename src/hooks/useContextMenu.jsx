import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useAppDispatch} from "../redux/store";
import {setIsScrollWrapper} from "../redux/slices/PlayListContextMenu/slice";
import useContextMenuPosition from "./useContextMenuPosition";
import useEvent from "./useEvent";


function useContextMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useAppDispatch()
    const ref = useRef(null)
    const updateClickCoordinates = useContextMenuPosition(ref, isOpen)


    useEffect(() => {
        if (!isOpen) return

        function handleClickAway(event) {
            if (!ref.current.contains(event.target)) {
                setIsOpen(false)
                dispatch(setIsScrollWrapper(false))
            }
        }


        document.addEventListener('mousedown', handleClickAway)
        // document.addEventListener('keydown', handleEsc)

        return () => {
            document.removeEventListener('mousedown', handleClickAway)
            // document.removeEventListener('keydown', handleEsc)
        }
    })

    const handleEsc = (e) => {
        if (e.keyCode === 27) {
            setIsOpen(false)
            dispatch(setIsScrollWrapper(false))
        }
    }

    useEvent('keydown', handleEsc, ()=> isOpen)

    const openContextMenu = (e) => {
        e.preventDefault()

        updateClickCoordinates(e.clientX, e.clientY)
        setIsOpen(true)
        dispatch(setIsScrollWrapper(true))


    }

    return {openContextMenu, isOpen, ref, setIsOpen}
}

export default useContextMenu