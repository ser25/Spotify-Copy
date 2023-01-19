export type MenuItem = {
    label: string
    submenus?: { label: string }[]
}

export interface PlayListContextMenuSliceState {
    menuItems: MenuItem[]

}