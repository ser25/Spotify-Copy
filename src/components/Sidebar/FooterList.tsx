import React, {FC} from 'react';
import FooterListItems from "./FooterListItems";

const FooterList: FC = () => {
    const footerNames: string[] = [
        'Cookies',
        'Privacy',
    ]
    return (
        <ul>
            {footerNames.map(footerName =>
                <FooterListItems key={footerName}  footerName={footerName}/>
            )}
        </ul>
    );
};

export default FooterList;