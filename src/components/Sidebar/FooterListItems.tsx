import React, {FC} from 'react';
import {FooterListItemsProps} from "./type";

const FooterListItems: FC<FooterListItemsProps> = ({footerName}) => {
    return (
        <li>
            <a href="/" className="text-[11px] hover:underline py-2">
                {footerName}
            </a>
        </li>
    );
};

export default FooterListItems;