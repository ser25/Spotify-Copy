import {useLayoutEffect, useRef} from "react";

const clickPosition = {x: null, y: null}
function useContextMenuPosition(ref, isOpen) {


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
            ? `${clickPosition.y - menuHeight}px`
            : `${clickPosition.y}px`;
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