import TheSidebar from "./components/Sidebar/TheSidebar";
import TheHeader from "./components/Header/TheHeader";
import TheMain from "./components/Main/TheMain";
import TheRegistration from "./components/RegistrationBlock/TheRegistration";
import TheSidebarOverlay from "./components/TheSidebarOverlay";
import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {selectRegistration} from "./redux/slices/Token/selectors";
import {setToken} from "./redux/slices/Token/slice";
import {selectIsContextMenuOpen, selectIsToastShown} from "./redux/slices/PlayListContextMenu/selectors";
import Toast from "./components/Toast/Toast";
import useShowToast from "./hooks/useShowToast";
import Popover from "./components/Popover/Popover";
import Modal from "./UI/Modal/Modal";
import {selectModal} from "./redux/slices/Modal/selectors";
import useEvent from "./hooks/useEvent";
import ModalRecommendation from "./components/ModalRecommendation/ModalRecommendation";
import ModalEmbedPlaylist from "./components/ModalEmbedPlalist/ModalEmbedPlalist";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Albums from "./pages/Albums/Albums";

function App() {
    const [registration, setRegistration] = useState(true)
    const {isOpenRecommendation, isOpenEmbed} = useSelector(selectModal)
    const registrationRef = useRef(registration)
    const contentWrapperRef = useRef()
    const isScrollingEnable = useSelector(selectIsContextMenuOpen)

    function handleScrolling(e) {
        if (!isScrollingEnable) return
        e.preventDefault()
        e.stopPropagation()
    }


    useEvent('mousewheel', handleScrolling, () => isScrollingEnable, contentWrapperRef.current)


    return (
        <>
            <div className="flex grow overflow-auto">
                <TheSidebar showPopover={''}/>
                <TheSidebarOverlay/>
                <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
                    <TheHeader/>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<TheMain />}/>
                            <Route path="/albumsPage/:id" element={<Albums />}/>
                        </Routes>
                    </BrowserRouter>

                </div>
            </div>
            {registrationRef.current && <TheRegistration setRegistration={setRegistration}/>}
            <Toast>Link copied to clipboard</Toast>
            <Popover/>
            {isOpenRecommendation && <ModalRecommendation/>}
            {isOpenEmbed && <ModalEmbedPlaylist/>}

        </>
    )
}

export default App