import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import '../styles/Projects.scss';

const projectsData = [

    {
        id: 1,
        title: "PODD Platform Analysis",
        category: "Reverse Engineering / Documentation",
        image: "https://placehold.co/600x400/1ABC9C/FFFFFF?text=PODD",
        description: "Analysed the existing PODD disease surveillance platform (podd.cmu.ac.th) and its codebase, producing system documentation, UI flow charts, and architecture diagrams to clarify structure and interactions.",
        link: "https://podd.cmu.ac.th/"
    },
    {
        id: 2,
        title: "Travel Insurance Feature",
        category: "Razor Pages / C#",
        image: "https://placehold.co/600x400/00AEEF/FFFFFF?text=Travel+Insurance",
        description: "Developed a travel insurance system with real-time data validation and policy management.",
        link: "https://vinsure.viriyah.co.th/insurance/online/v-travel-comprehensive?utm_source=viriyah.com&utm_medium=referral&utm_campaign=menu_travel&utm_content=header_travel_insurance"
    },
    {
        id: 3,
        title: "Neuro Balance Course Website",
        category: "React / Tailwind CSS",
        image: "https://placehold.co/600x400/8E44AD/FFFFFF?text=Neuro+Balance",
        description: "Implemented a content-driven course page using React and Tailwind CSS, integrating with a headless CMS to render dynamic sections such as intro, process, brain mapping, and neurofeedback.",
        link: "https://neurobalance.co/"
    },
    {
        id: 4,
        title: "Hospital Management System",
        category: ".NET Core / Angular",
        image: "https://placehold.co/600x400/FFEB3B/333333?text=Hospital+System",
        description: "Built backend services for patient data management and scheduling features."
    },
    {
        id: 5,
        title: "Dialysis Clinic Management",
        category: ".NET Core / Angular",
        image: "https://placehold.co/600x400/FF6B6B/FFFFFF?text=QOL",
        description: "Built a management platform for a dialysis clinic based on the HealthNext architecture, covering patient registration, visit scheduling, treatment workflows, and operational reporting."
    },
    {
        id: 6,
        title: "Banking Website Development",
        category: "Sitecore / Salesforce",
        image: "https://placehold.co/600x400/333333/FFFFFF?text=Banking+Web",
        description: "Developed Sitecore-based web apps and integrated customer support workflows through Salesforce."
    }
];

const Projects = () => {
    return (
        <div className="projects-page">
            <section className="section container">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">My <span className="text-primary">Work</span></h2>
                    <p className="section-subtitle">A selection of my projects.</p>
                </motion.div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-img-container">
                                <img src={project.image} alt={project.title} className="project-img" />
                                {project.link && (
                                    <div className="project-overlay">
                                        <a
                                            href={project.link}
                                            className="project-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={24} />
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
