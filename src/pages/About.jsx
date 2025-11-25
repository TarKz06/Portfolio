import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Database,
    Server,
    Layout,
    Terminal,
    Globe,
    Briefcase,
    GraduationCap,
    Languages,
    Cpu,
    Cloud
} from 'lucide-react';
import '../styles/About.scss';
import profileImage from '../assets/profile.jpeg';

const About = () => {
    const skills = {
        frontend: [
            { name: 'Angular', icon: <Globe size={24} /> },
            { name: 'React', icon: <Code size={24} /> },
            { name: 'TypeScript', icon: <Code size={24} /> },
            { name: 'JavaScript', icon: <Code size={24} /> },
            { name: 'HTML', icon: <Layout size={24} /> },
            { name: 'CSS / SCSS', icon: <Layout size={24} /> },
            { name: 'Bootstrap', icon: <Layout size={24} /> },
            { name: 'Tailwind CSS', icon: <Layout size={24} /> },
            { name: 'DevExtreme', icon: <Layout size={24} /> },
            { name: 'Razor Pages', icon: <Layout size={24} /> },
        ],
        backend: [
            { name: 'C# .NET Core', icon: <Terminal size={24} /> },
            { name: 'Java', icon: <Terminal size={24} /> },
            { name: 'Spring Boot', icon: <Terminal size={24} /> },
            { name: 'Python', icon: <Terminal size={24} /> },
            { name: 'Django', icon: <Server size={24} /> },
            { name: 'FastAPI', icon: <Server size={24} /> },
            { name: 'SQL Server', icon: <Database size={24} /> },
            { name: 'PostgreSQL', icon: <Database size={24} /> },
        ],
        tools: [
            { name: 'Sitecore', icon: <Cpu size={24} /> },
            { name: 'Salesforce', icon: <Cloud size={24} /> },
            { name: 'Git', icon: <Code size={24} /> },
            { name: 'Postman', icon: <Terminal size={24} /> },
            { name: 'Katalon Studio', icon: <Terminal size={24} /> },
            { name: 'Docker', icon: <Server size={24} /> },
            { name: 'GitLab CI/CD', icon: <Server size={24} /> },
            { name: 'GitHub Actions', icon: <Server size={24} /> },
        ]
    };

    const experience = [
        {
            title: "Software Developer",
            company: "Draco Venture Co., Ltd",
            date: "Dec 2023 - Present",
            description: [
                "Developed and maintained backend services using C# .NET Core for enterprise applications.",
                "Designed and optimized SQL Server and PostgreSQL queries to improve performance.",
                "Built and integrated RESTful APIs with AngularJS frontend applications.",
                "Led the development of a travel insurance feature using Razor Pages for Viriya Insurance.",
                "Worked on a hospital management system for Sikarin Hospital."
            ]
        },
        {
            title: "Frontend Developer – Neuro Balance Course Website",
            company: "Neuro Balance",
            date: "2025",
            description: [
                "Led the frontend implementation of a course website using React and Tailwind CSS.",
                "Built reusable, content-driven sections such as banner, intro, process, brain mapping, and neurofeedback, powered by a headless CMS.",
                "Implemented responsive layouts, smooth animations, and rich-content rendering for an engaging user experience."
            ]
        },
        {
            title: "Technical Consultant",
            company: "I&I Group PLC.",
            date: "Nov 2022 - Nov 2023",
            description: [
                "Developed and customized web applications using Sitecore for Krungthai Bank.",
                "Implemented business logic, workflows, and automation in Salesforce for customer service.",
                "Contributed to backend development for Salesforce call centers and Sitecore web apps."
            ]
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero container">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="hero-tagline">Hi, I&apos;m Khematat Suphamittanont</span>
                        <h1>Building Digital<br />Experiences</h1>
                        <p className="subtitle">
                            Software Engineer specialized in building scalable applications with modern technologies.
                            Passionate about clean code and user-centric design.
                        </p>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Exp.</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-image-container"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="hero-img-wrapper">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="hero-img"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="section-title text-center">Technical</h2>
                        <p className="section-subtitle text-center">Tools and technologies I work with</p>
                    </motion.div>

                    <div className="skills-categories">
                        <div className="skills-category">
                            <h3 className="category-title"><Layout className="text-primary" /> Frontend Development</h3>
                            <div className="skills-grid">
                                {skills.frontend.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="skill-card"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="skill-icon text-primary">{skill.icon}</div>
                                        <span className="skill-name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="skills-category">
                            <h3 className="category-title"><Server className="text-primary" /> Backend & Database</h3>
                            <div className="skills-grid">
                                {skills.backend.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="skill-card"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="skill-icon text-accent">{skill.icon}</div>
                                        <span className="skill-name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="skills-category">
                            <h3 className="category-title"><Briefcase className="text-primary" /> Enterprise Tools</h3>
                            <div className="skills-grid">
                                {skills.tools.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="skill-card"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="skill-icon text-primary">{skill.icon}</div>
                                        <span className="skill-name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="timeline-section container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title text-center">Professional Journey</h2>
                    <p className="section-subtitle text-center">My career path and key milestones</p>
                </motion.div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-card">
                                    <span className="timeline-date">{exp.date}</span>
                                    <h3 className="timeline-title">{exp.title}</h3>
                                    <h4 className="timeline-company">{exp.company}</h4>
                                    <ul className="timeline-desc">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education & Languages */}
            <section className="section container">
                <div className="info-grid">
                    {/* Card 1: University */}
                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-header">
                            <GraduationCap size={32} className="info-icon" />
                            <h3>Education</h3>
                        </div>
                        <div>
                            <h4>Bachelor of Software Engineering (B.Sc.)</h4>
                            <p className="text-grey">Chiang Mai University</p>
                            <p className="text-primary font-bold">Graduated Mar 2024</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Japanese school แยกออกมา */}
                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="info-header">
                            <GraduationCap size={32} className="info-icon" />
                            <h3>Japanese Studies</h3>
                        </div>
                        <div>
                            <h4>Japanese Language Course</h4>
                            <p className="text-grey">Joto Japanese Language School</p>
                            <p className="text-primary font-bold">Mar 2024 – Mar 2025</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Languages */}
                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="info-header">
                            <Languages size={32} className="info-icon" />
                            <h3>Languages</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center mb-2">
                                <span>Thai (Native)</span>
                                <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary-blue w-full"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span>English (Intermediate)</span>
                                <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary-blue w-3/4"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Japanese (Learning)</span>
                                <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary-blue w-1/3"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default About;
