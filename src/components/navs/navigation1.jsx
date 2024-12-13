import { Link, useLocation } from "react-router-dom";

export default function Navigation1({activeNavLink}) {
    return(
        <nav className="navigation1 ff-karla">
            <Link className="navigation1-logo">
                <img src="/media/logo/Logo1.svg"/>
            </Link>
            <ul className="navigation1-links">
                <li>
                    <Link className={`navigation1-link ${activeNavLink === "Home" ? 'active' : ''}`}>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to={''} className={`navigation1-link ${activeNavLink === "About" ? 'active' : ''}`}>
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link className={`navigation1-link ${activeNavLink === "Menu" ? 'active' : ''}`}>
                        MENU
                    </Link>
                </li>
                <li>
                    <Link to={'/reservations'} className={`navigation1-link ${activeNavLink === "Reservations" ? 'active' : ''}`}>
                        RESERVATIONS
                    </Link>
                </li>
                <li>
                    <Link className={`navigation1-link ${activeNavLink === "Order Online" ? 'active' : ''}`}>
                        ORDER ONLINE
                    </Link>
                </li>
                <li>
                    <Link className="navigation1-link">
                        LOGIN
                    </Link>
                </li>
            </ul>
        </nav>
    )
}