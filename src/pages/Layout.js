import { Outlet, Link, NavLink } from "react-router-dom";
import "./Layout.css";
import logo from '../assets/img/logo/logo-brand.jpg';
import { useState } from "react";

const Layout=()=>{
    const [navOpen, setNavOpen] = useState(false);

    const navToggle = ()=>{
        setNavOpen(!navOpen)
    };

    return(
        <>{/* wajib */}
            <header>
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo"/>
                    </Link>
                </div>
                <div className="nav-container">
                    <button className="toggle-nav" onClick={navToggle}>&#9776;</button>
                    <nav id="nav-active" className={`navbar ${navOpen?'open' : ''}`}>
                        <NavLink exact='true' to="/" id="beranda" className="navigator" activeclassname="active">Home</NavLink>
                        <NavLink to="/menu" className="navigator" activeclassname="active">Our Menu</NavLink>
                        <NavLink to="/contact" className="navigator" activeclassname="active">Contact</NavLink>
                    </nav>
                </div>
            </header>
            <Outlet/>
        </>
    )
};

export default Layout;

