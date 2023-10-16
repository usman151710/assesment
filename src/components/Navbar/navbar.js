import React, { useState } from "react";
import "./navbar.css";
import { FaHome, FaSearch, FaWindowClose, FaSortDown } from 'react-icons/fa';

const items = [
    {
        id: 1,
        label: "Team",
    },
    {
        id: 2,
        label: "Work",
    },
    {
        id: 3,
        label: "Price",
    },
    {
        id: 4,
        label: "Contact",
    },
    {
        id: 5,
        label: "Dropdown",
    },
]

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={`navbar ${showMenu ? "active" : ""}`}>
            <div className="nav-container">
                <div className="logo">
                    <FaHome /> Logo
                </div>
                <nav className="desktop-nav">
                    {items.map((item) => (
                        <a key={item.id} href="#">{item.label}{item.id === 5 && <FaSortDown />}</a>
                    ))}
                </nav>
            </div>
            <div className="search">
                <FaSearch />
            </div>
            <div className="nav-action" >
                <ul className={`nav-links ${showMenu ? "show" : ""}`}>
                    {items.map((item) => (
                        <li key={item.id}><a href="#">{item.label}</a></li>
                    ))}
                </ul>
                <div className="menu-toggle" onClick={toggleMenu}>
                    {showMenu ? (
                        <div>
                            <FaWindowClose />
                        </div>
                    ) : (
                        <>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
