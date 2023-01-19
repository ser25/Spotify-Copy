import { RootState } from '../../store';

export const selectPlayListContextMenu = (state: RootState) => state.playListContextMenu.menuItems;