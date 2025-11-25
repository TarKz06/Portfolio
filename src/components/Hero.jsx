import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="hero-title">
                        Building <span className="highlight">Bright</span> Digital Experiences
                    </h1>
                    <p className="hero-subtitle">
                        Software Engineer specialized in C# .NET Core, SQL Server, and Modern Web Technologies.
                    </p>
                    <div className="hero-actions">
                        <Link to="/projects" className="btn btn-primary">
                            View Work <ArrowRight size={20} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="blob-shape"></div>
                    {/* Placeholder for a hero image or illustration */}
                    <img src="https://placehold.co/600x400/00AEEF/FFFFFF?text=Creative+Dev" alt="Creative Developer" className="hero-img" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
