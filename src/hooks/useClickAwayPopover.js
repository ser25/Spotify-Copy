import {useDispatch, useSelector} from "react-redux";
import {selectPopover, selectPopoverAll} from "../redux/slices/Popover/selectors";
import {useEffect, useRef} from "react";
import {clearPopover, hide, setCoordinate} from "../redux/slices/Popover/slice";
import useEvent from "./useEvent";

function useClickAwayPopover() {
    const dispatch = useDispatch()
    const classes = useSelector(selectPopover)
    const nodeRef = useRef();
    const {title, text, top, right, height, label} = useSelector(selectPopoverAll)

    function handleClickAway(e) {
        if (classes === 'opacity-1') {
            if (!nodeRef.current.contains(e.target)) {
                if (label === e.target.innerHTML) {
                    return
                }
                dispatch(clearPopover())
                dispatch(hide())


            }
        }

    }

    useEvent('mousedown', handleClickAway, () => top)


    function hidePopover() {
        dispatch(hide())

    }

    function moveTO() {

        nodeRef.current.style.top = `${top - (height / 3) * 2}px`;
        nodeRef.current.style.left = `${right + 30}px`;
    }

    useEffect(() => {
        if (classes === 'opacity-1') {

            moveTO()
        }
    }, [top, right])

    return {classes, nodeRef, title, text, hidePopover}

}

export default useClickAwayPopover