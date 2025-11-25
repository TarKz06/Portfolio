import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Portfolio<span className="text-primary">.</span></h3>
                        <p>Creating bright digital experiences.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/khematat-suphamittanont-90b859271/">LinkedIn</a></li>
                            <li><a href="https://github.com/TarKz06">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
