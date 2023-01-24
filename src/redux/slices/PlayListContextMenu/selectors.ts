import { RootState } from '../../store';

export const selectPlayListContextMenu = (state: RootState) => state.playListContextMenu.menuItems;
export const selectIsContextMenuOpen = (state: RootState) => state.playListContextMenu.isScrollWrapper
export const selectIsToastShown = (state: RootState) => state.playListContextMenu.isToastShown
export const selectAlbumUrl = (state: RootState) => state.playListContextMenu.albumUrl