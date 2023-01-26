

export interface INavItems {
    label: string,
    classes: string,
    icon: JSX.Element
    action?: any
    titlePopover?: string
    textPopover?: string
}

export interface NavItemProps {
    navItem: INavItems
    onClick: any
}

export interface FooterListItemsProps {
    footerName: string
}