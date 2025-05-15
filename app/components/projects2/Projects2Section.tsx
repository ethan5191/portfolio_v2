'use client';

import React from 'react';
import styles from './projects2Section.module.css';
import sectionStyles from "@/app/components/shared/sectionContent.module.css";

import ProjectCard from './ProjectCard2';


const myProjects = [
    {
        id: 'mrows-travel',
        title: 'MROWS - Travel Claim Module',
        description: 'Led development of a full-stack module to automate travel claim submissions in MROWS, integrating with the DTMS system for payment processing and status reconciliation.',
        // role: 'Collaborated on the full-stack design and implementation. Key contributions included architecting a new database schema, developing user interface components and backend logic, building an outgoing SOAP web service to DTMS, and designing an incoming reconciliation/rejection service to receive payment confirmations and status updates.',
        technologies: ['Java', 'Spring 5 MVC', 'jQuery', 'SOAP', 'Oracle SQL', 'JSPs'],
        technicalDetails: ['Designed new database architecture and implemented UI/backend for claim workflows.',
            'Developed both frontend UI components and backend logic for claims submission and tracking.',
            'Built outbound SOAP integration with DTMS for approvals.',
            'Developed inbound reconciliation service to process payment updates.'],
        impact: 'Reduced claim processing from weeks to hours, with ~2,300 claims processed annually (2019–2024), significantly improving payment timelines for Marines..',
    },
    {
        id: 'mrows-dai',
        title: 'MROWS - SABRS to DAI Transition',
        description: 'Led the transition from SABRS to the DoD’s Defense Agency Initiative (DAI) accounting system, modernizing MROWS financial integrations.',
        // role: 'Served as the primary developer on this high-visibility project, responsible for the full lifecycle of design, development, and deployment.',
        technologies: ['Java', 'Spring 5 MVC', 'Quartz Scheduler', 'Oracle SQL', 'JSPs'],
        technicalDetails: ['Designed automated generation of DAI-compliant XML records.',
            'Developed scheduled jobs (Quartz) for secure, periodic data transmission.',
            'Ensured compliance with DoD financial and security standards.'],
        impact: 'Enabled seamless DAI integration, improving audit readiness and supporting two consecutive clean financial audits for the Marine Corps.',
    },
    {
        id: 'mcpdt-slo',
        title: 'MCPDT - Funding Structure Transition (LOA to SFIS SLOA)',
        description: 'Modernized MCPDT’s funding logic by transitioning from legacy LOA to the SFIS-compliant SLOA structure.',
        // role: 'Served as the sole developer responsible for designing, implementing, and integrating the new funding logic..',
        technologies: ['Java', 'Oracle SQL'],
        technicalDetails: ['Integrated annually generated SLOA data into MCPDT order workflows.',
            'Ensured accurate financial tracking aligned with DoD standards.',
            'Designed for seamless yearly updates with minimal manual effort.'],
        impact: 'Improved compliance and auditability by aligning funding processes with DoD financial standards. Project remains in active development with phased rollouts.',
        // status: 'Ongoing, expected completion 9/30/2025' // Add status if desired
    },
    {
        id: 'mrows-sep',
        title: 'MROWS - Separation Requests (PCS Travel)',
        description: 'Developed a new MROWS module to handle financial tracking for separation-related Permanent Change of Station (PCS) travel.',
        // role: 'Served as the sole developer responsible for the full lifecycle of the module—from initial design through implementation and deployment..',
        technologies: ['Java', 'jQuery', 'Spring 5', 'Oracle SQL', 'SOAP Web Services'],
        technicalDetails: ['Built full-stack solution: UI, backend, and database.',
            'Implemented workflow to send funding requests to MCPDT and DAI.',
            'Ensured accurate integration with existing financial systems.'],
        impact: 'Improved visibility and accuracy in tracking separation-related PCS travel funding, enabling more precise financial estimates and better alignment with actual spending.',
    },
    {
        id: 'mrows-mcpdt-soap',
        title: 'MROWS & MCPDT - SOAP Web Services Development & Enhancement',
        description: 'Led initiatives to build and upgrade SOAP-based web services enabling automated data exchange across MROWS, MCPDT, and external financial systems.',
        // role: 'Developed multiple new web services (three in MROWS, one in MCPDT) and updated the business logic for several existing services to support evolving integration needs..',
        technologies: ['Java', 'SOAP Web Services', 'Oracle SQL'],
        technicalDetails: ['Developed four new services (three in MROWS, one in MCPDT).',
            'Improved logic and performance of existing services.',
            'Built integrations for order search and reconciliation workflows.'],
        impact: 'Streamlined system communication and improved data reliability, enhancing audit compliance and financial transparency through automation.',
    },
    {
        id: 'personal-learning-app',
        title: 'Full-Stack Learning Application', // Or a functional name
        description: 'Designed and built a personal full-stack web app to gain hands-on experience with modern development tools and frameworks.',
        // role: 'Sole developer responsible for the end-to-end design and implementation of the application..',
        technologies: ['React', 'Java 17', 'Spring Boot 6', 'Spring Data JPA (Hibernate)', 'RESTful APIs', 'MySQL', 'Tomcat (embedded)'],
        technicalDetails: ['Created a dynamic React frontend with multiple views.',
            'Built RESTful backend using Spring Boot 6 and Java 17.',
            'Integrated MySQL with Spring Data JPA (Hibernate) for data persistence.'],
        impact: 'Showcases proficiency in full-stack development and the ability to architect, implement, and deploy a complete web application independently.',
    },
];

const Projects2Section = () => {
    return (
        <section id="work" className={sectionStyles.section}>
            <h2>My Work / Projects</h2>
            <div className={styles.projectGrid}>
                {myProjects.map(project => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </section>
    );
};

export default Projects2Section;