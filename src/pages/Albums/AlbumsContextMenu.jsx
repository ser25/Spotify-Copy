import React from 'react';

const AlbumsContextMenu = ({contextMenu: classes, children: label}) => {
    return (
        <div className={`absolute bottom-[52px] left-[-50px] z-30 bg-[#828282] text-white tracking-wide rounded-lg shadow-3xl 
             min-w-[200px] p-1 select-none transition duration-300 ${classes}`}>
            <div className={'text-center text-xs'}>{label}</div>

        </div>
    );
};

export default AlbumsContextMenu;