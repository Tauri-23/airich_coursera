import Navigation1 from "../components/navs/navigation1";
import '../assets/css/home.css';
import { Outlet } from "react-router-dom";
import { useState } from "react";


export default function GuestDefault() {
    const [activeNavLink, setActiveNavLink] = useState("Home");
    return(
        <>
            <Navigation1 activeNavLink={activeNavLink}/>
            <Outlet context={{setActiveNavLink}}/>         
        </>
    )
}