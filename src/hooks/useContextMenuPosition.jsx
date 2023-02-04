import {useLayoutEffect, useRef, useState} from "react";

const clickPosition = {x: null, y: null}

function useContextMenuPosition(ref, isOpen, positionAlbums = 0) {
    const [shouldMoveUp, setShouldMoveUp] = useState()


    useLayoutEffect(() => {
        if (isOpen) {
            updateContextMenuPosition()
        }
    })

    const updateContextMenuPosition = () => {
        updateContextMenuVerticalPosition();
        updateContextMenuHorizontalPosition();
    }


    function updateContextMenuVerticalPosition() {
        const menuHeight = ref.current.offsetHeight;
        const shouldMoveUp = menuHeight > window.innerHeight - clickPosition.y;


        ref.current.style.top = shouldMoveUp
            ? `${clickPosition.y - positionAlbums - menuHeight}px`
            : `${clickPosition.y + positionAlbums}px`;
    }

    function updateContextMenuHorizontalPosition() {
        const menuWidth = ref.current.offsetWidth;
        const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x;

        ref.current.style.left = shouldMoveLeft
            ? `${clickPosition.x - menuWidth}px`
            : `${clickPosition.x}px`;
    }

    function updateClickCoordinates(x, y) {
        clickPosition.x = x
        clickPosition.y = y
    }

    return updateClickCoordinates


}

export default useContextMenuPosition