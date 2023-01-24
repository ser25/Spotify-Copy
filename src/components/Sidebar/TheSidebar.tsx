import React, {FC} from 'react';
import Logo from "./Logo";
import Nav from "./Nav";
import Footer from "./Footer";
import PlayListContextMenu from "../PlayListContextMenu/PlayListContextMenu";
import useContextMenu from "../../hooks/useContextMenu";

const TheSidebar: FC = () => {
    const { openContextMenu, isContextMenu, contextMenuRef} = useContextMenu()
    return (
        <aside
            id="sidebar"
            className="bg-black w-[256px] text-[#b2b2b2] overflow-hidden flex flex-col fixed lg:sticky top-0 z-30 h-screen lg:h-auto -translate-x-full target:translate-x-0 lg:translate-x-0 transition-transform peer"
            // onContextMenu={openContextMenu}
        >
            <Logo/>
            <Nav/>
            <Footer/>
            {/*{isContextMenu && (<PlayListContextMenu ref={contextMenuRef}/>)}*/}
        </aside>
    );
};

export default TheSidebar;