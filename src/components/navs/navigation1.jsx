import { Link } from "react-router-dom";

export default function Navigation1() {
    return(
        <nav className="navigation1 ff-karla">
            <Link className="navigation1-logo">
                <img src="/media/logo/Logo1.svg"/>
            </Link>
            <ul className="navigation1-links">
                <li>
                    <Link className="navigation1-link">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link className="navigation1-link">
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link className="navigation1-link">
                        MENU
                    </Link>
                </li>
                <li>
                    <Link className="navigation1-link">
                        RESERVATIONS
                    </Link>
                </li>
                <li>
                    <Link className="navigation1-link">
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