import TheSidebar from "./components/Sidebar/TheSidebar";
import TheHeader from "./components/Header/TheHeader";
import TheMain from "./components/Main/TheMain";
import TheRegistration from "./components/RegistrationBlock/TheRegistration";
import TheSidebarOverlay from "./components/TheSidebarOverlay";

function App() {
    return (
        <>
            <div className="flex flex-grow overflow-auto">
                <TheSidebar />
                <TheSidebarOverlay />
                <div className="flex-1 overflow-auto">
                    <TheHeader />
                    <TheMain />
                </div>
            </div>
           <TheRegistration />
        </>
    )
}

export default App;
