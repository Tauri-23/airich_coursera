import Navigation1 from "../components/navs/navigation1";
import '../assets/css/home.css';
import { Outlet } from "react-router-dom";


export default function GuestDefault() {
    return(
        <>
            <Navigation1/>
            <Outlet/>         
        </>
    )
}