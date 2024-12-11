import { Link } from "react-router-dom";

export default function Footer1() {
    return(
        <footer className="footer1 ff-karla">
            <figure className="footer1-logo">
                <img src="/media/logo/Logo2.png" alt="logo2" />
            </figure>

            <section className="d-flex flex-direction-y">
                <div className="text-m1 mar-bottom-2">Company</div>

                <ul className="footer1-links">
                    <li>
                        <Link className="footer1-link">Home</Link>
                    </li>
                    <li>
                        <Link className="footer1-link">About</Link>
                    </li>
                    <li>
                        <Link className="footer1-link">Menu</Link>
                    </li>
                    <li>
                        <Link className="footer1-link">Reservation</Link>
                    </li>
                    <li>
                        <Link className="footer1-link">Order Online</Link>
                    </li>
                </ul>
            </section>

            <section className="d-flex flex-direction-y">
                <div className="text-m1 mar-bottom-2">Contact Us</div>
                <ul className="footer1-links">
                    <li className="footer1-link">
                        <p className="text-m2 fw-bold">Address</p>
                        <p className="text-m3">Lemon Street</p>
                    </li>
                    <li className="footer1-link">
                        <p className="text-m2 fw-bold">Phone Number</p>
                        <p className="text-m3">0-000-000-000</p>
                    </li>
                    <li className="footer1-link">
                        <p className="text-m2 fw-bold">Email</p>
                        <p className="text-m3">lilemon@gmail.com</p>
                    </li>
                </ul>
            </section>

            <section className="d-flex flex-direction-y">
                <div className="text-m1 mar-bottom-2">Social Media Links</div>
                <ul className="footer1-links">
                    <li>
                        <Link className="footer1-link">Facebook</Link>
                    </li>
                    <li>
                        <Link className="footer1-link">Instagram</Link>
                    </li>
                    <li>
                        <Link className="footer1-link">LinkedIn</Link>
                    </li>
                </ul>
            </section>
        </footer>
    )
}