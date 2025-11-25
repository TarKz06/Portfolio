import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';
import '../styles/Contact.scss';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="section container contact-wrapper">
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Get in <span className="text-primary">Touch</span></h2>
                    <p className="section-subtitle">Feel free to reach out through any of these platforms.</p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="icon-box">
                            <Mail size={28} />
                        </div>
                        <h3>Email</h3>
                        <p>khematat.n@gmail.com</p>
                        <a href="mailto:khematat.n@gmail.com" className="card-link">Send Email</a>
                    </motion.div>
                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="icon-box">
                            <Facebook size={28} />
                        </div>
                        <h3>Facebook</h3>
                        <p>T'tar Khematat </p>
                        <a href="https://www.facebook.com/profile.php?id=100004354179578" className="card-link">Visit Profile</a>
                    </motion.div>
                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="icon-box">
                            <MapPin size={28} />
                        </div>
                        <h3>Location</h3>
                        <p>Bangkok, Thailand</p>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
