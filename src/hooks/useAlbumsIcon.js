import {OPACITY_0, OPACITY_1} from "../utils/constAll";

function useAlbumsIcon(openMenu, setPopoverAlbum, setPopoverAlbum2) {
    function handlePopoverAlbumEnter() {
        setPopoverAlbum(OPACITY_1)
    }

    function handlePopoverAlbumLeve() {
        setPopoverAlbum(OPACITY_0)
    }

    function handlePopoverAlbumEnter2() {
        setPopoverAlbum2(OPACITY_1)
    }

    function handlePopoverAlbumLeve2() {
        setPopoverAlbum2(OPACITY_0)
    }

    return {
        handlePopoverAlbumEnter,
        handlePopoverAlbumEnter2,

        //leve
        handlePopoverAlbumLeve,
        handlePopoverAlbumLeve2,
    }
}

export default useAlbumsIcon