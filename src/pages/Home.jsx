import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="hero-badge">Hi, I&apos;m Khematat – Software Engineer</span>
                        <h1 className="hero-title">
                            Building Digital <br />
                            <span className="text-gradient">Experiences</span>
                        </h1>
                        <p className="hero-subtitle">
                            I build scalable and user-focused web applications using modern technologies, with a strong emphasis on clean architecture and great user experiences.
                        </p>
                        <div className="hero-cta">
                            <Link to="/projects" className="btn btn-primary">
                                View My Work <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="visual-circle"></div>
                        <div className="visual-card card-1">
                            <Code size={24} />
                            <span>Clean Code</span>
                        </div>
                        <div className="visual-card card-2">
                            <Zap size={24} />
                            <span>Fast Performance</span>
                        </div>
                        <div className="visual-card card-3">
                            <Layers size={24} />
                            <span>Scalable Arch</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Marquee */}
            <div className="tech-marquee">
                <div className="marquee-content">
                    <span>React</span>
                    <span>Angular</span>
                    <span>TypeScript</span>
                    <span>.NET Core</span>
                    <span>C#</span>
                    <span>SQL Server</span>
                    <span>PostgreSQL</span>
                    <span>Docker</span>
                    <span>GitLab CI/CD</span>
                    <span>Tailwind CSS</span>
                    <span>React</span>
                    <span>Angular</span>
                    <span>TypeScript</span>
                    <span>.NET Core</span>
                    <span>C#</span>
                </div>
            </div>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to start your next project?</h2>
                        <p>Let&apos;s collaborate and build something amazing together.</p>
                        <Link to="/contact" className="btn btn-white">Get in Touch</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
