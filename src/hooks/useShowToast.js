import {useEffect, useRef} from "react";
import {setAlbumUrl, setIsScrollWrapper, setIsToastShown} from "../redux/slices/PlayListContextMenu/slice";
import {useDispatch, useSelector} from "react-redux";
import {selectIsToastShown} from "../redux/slices/PlayListContextMenu/selectors";
import useContextMenu from "./useContextMenu";

function useShowToast() {

    const dispatch = useDispatch()
    const closeToastTimer = useRef();
    const IsToastShown = useSelector(selectIsToastShown)
    const {isOpen, setIsOpen} = useContextMenu()

    useEffect(() => {
        function hideToast() {
            dispatch(setIsToastShown(false))
            // dispatch(setAlbumUrl(''))

        }

        function openToast() {

            closeToastTimer.current = setTimeout(hideToast, 3000);
        }

        if (IsToastShown) {
            clearTimeout(closeToastTimer.current)
            dispatch(setIsScrollWrapper(false))
            setIsOpen(false)
            openToast()
        }
    }, [IsToastShown])


}

export default useShowToast