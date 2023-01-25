import TheSidebar from "./components/Sidebar/TheSidebar";
import TheHeader from "./components/Header/TheHeader";
import TheMain from "./components/Main/TheMain";
import TheRegistration from "./components/RegistrationBlock/TheRegistration";
import TheSidebarOverlay from "./components/TheSidebarOverlay";
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {selectRegistration} from "./redux/slices/Registration/selectors";
import {setToken} from "./redux/slices/Registration/slice";
import {selectIsContextMenuOpen, selectIsToastShown} from "./redux/slices/PlayListContextMenu/selectors";
import Toast from "./components/Toast/Toast";
import useShowToast from "./hooks/useShowToast";
import Popover from "./components/Popover/Popover";

function App() {
    const [registration, setRegistration] = useState(false)
    const registrationRef = useRef(registration)
    const contentWrapperRef = useRef(null)
    const popoverRef = useRef()
    const isScrollingEnable = useSelector(selectIsContextMenuOpen)

    function handleScrolling(e) {
        if (!isScrollingEnable) return

        e.preventDefault()
        e.stopPropagation()
    }

    useEffect(() => {

        const contentWrapper = contentWrapperRef.current

        contentWrapper.addEventListener('mousewheel', handleScrolling)

        return () => {
            contentWrapper.removeEventListener('mousewheel', handleScrolling)
        }
    })

    // useShowToast()

    // function showPopover() {
    //     // popoverRef.current.show();
    // }

    return (
        <>
            <div className="flex grow overflow-auto">
                <TheSidebar showPopover={''}/>
                <TheSidebarOverlay/>
                <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
                    <TheHeader/>
                    <TheMain/>
                </div>
            </div>
            {registrationRef.current && <TheRegistration setRegistration={setRegistration}/>}
            <Toast>Link copied to clipboard</Toast>
            <Popover ref={popoverRef}/>

        </>
    )
}

export default App;
