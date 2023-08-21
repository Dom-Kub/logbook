import { NavLink } from "react-router-dom";
import './navbar.css';

function Navbar(){

    return (
        <nav className="navbar-container">
            <NavLink  to="/my-account">Account</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/cars">Cars</NavLink>
        </nav>
    )
}

export { Navbar }