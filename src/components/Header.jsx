import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import "../styles/Header.scss";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleNavClick = (path) => {
        if (location.pathname !== path) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <Link
                    to="/"
                    className="logo"
                    onClick={() => handleNavClick('/')}
                >
                    Portfolio<span className="text-primary">.</span>
                </Link>

                <nav className="nav-desktop">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    onClick={() => handleNavClick(link.path)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list-mobile">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`nav-link-mobile ${location.pathname === link.path ? 'active' : ''}`}
                                    onClick={() => handleNavClick(link.path)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
