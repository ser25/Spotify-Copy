import { RootState } from '../../store';

export const selectPlayListContextMenu = (state: RootState) => state.playListContextMenu.menuItems;
// export const selectPlayListContextSubmenu = (state: RootState) => state.playListContextMenu.submenus