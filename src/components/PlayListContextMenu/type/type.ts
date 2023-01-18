export interface IMenuItems {
    label: string
    submenus?: { label: string }[]
}

export interface IPlayListContextSubmenuItemProps {
    children: string
    submenus?: { label: string }[]

}

export interface IPlayListContextSubmenuProps {
    submenus: { label: string }[]

}