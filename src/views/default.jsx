import Navigation1 from "../components/navs/navigation1";
import '../assets/css/home.css';
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ModalProvider } from "../contexts/ModalContext";
import ModalManager from "../Managers/ModalManager";
import Footer1 from "../components/footer/footer1";


export default function GuestDefault() {
    const location = useLocation();
    const [activeNavLink, setActiveNavLink] = useState("Home");



    /**
     * Scroll up every change location
     */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);




    /**
     * Render
     */
    return(
        <ModalProvider>
            <main style={{position: "relative", width: "100%", height: "100%"}}>
                <ModalManager/>
                <Navigation1 activeNavLink={activeNavLink}/>
                <Outlet context={{setActiveNavLink}}/>
                <Footer1/>
            </main>
        </ModalProvider>
    )
}