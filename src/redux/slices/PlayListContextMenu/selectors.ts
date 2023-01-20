import { RootState } from '../../store';

export const selectPlayListContextMenu = (state: RootState) => state.playListContextMenu.menuItems;
export const selectIsContextMenuOpen = (state: RootState) => state.playListContextMenu.isContextMenuOpen