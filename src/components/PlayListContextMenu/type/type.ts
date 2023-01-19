import {MenuItem} from "../../../redux/slices/PlayListContextMenu/types";

export interface IPlayListContextMenuProps {
    classes: string
    menuItems: MenuItem[]

}
export interface IPlayListContextSubmenuItemProps {
    children: string
    submenus?: { label: string }[]

}

export interface IPlayListContextSubmenuProps {
    submenus: { label: string }[]

}