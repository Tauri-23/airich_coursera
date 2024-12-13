import Navigation1 from "../components/navs/navigation1";
import '../assets/css/home.css';
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ModalProvider } from "../contexts/ModalContext";
import ModalManager from "../Managers/ModalManager";
import Footer1 from "../components/footer/footer1";


export default function GuestDefault() {
    const [activeNavLink, setActiveNavLink] = useState("Home");
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