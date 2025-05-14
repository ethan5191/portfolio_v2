'use client';

import React from 'react';
import styles from './projects2Section.module.css';
import sectionStyles from "@/app/components/shared/sectionContent.module.css";

import ProjectCard from './ProjectCard2';


const myProjects = [
    {
        id: 'mrows-travel',
        title: 'MROWS - Travel Claim Module',
        description: 'Led the development of a critical module within the MROWS system to automate the travel claim submission and processing workflow. This module integrated with the external DTMS system to streamline approvals and payments.',
        role: 'Collaborated on the full-stack design and implementation. Key contributions included architecting a new database schema, developing user interface components and backend logic, building an outgoing SOAP web service to DTMS, and designing an incoming reconciliation/rejection service to receive payment confirmations and status updates.',
        technologies: ['Java', 'Spring 5 MVC', 'jQuery', 'SOAP', 'Oracle SQL', 'JSPs'],
        technicalDetails: ['Designed and implemented a new relational database architecture to support claim data lifecycle.',
            'Developed both frontend UI components and backend logic for claims submission and tracking.',
            'Built outgoing SOAP-based web service integration with DTMS for data transmission.',
            'Designed incoming web service endpoint to handle payment reconciliation and rejections from DTMS.'],
        impact: 'Automated and accelerated a previously manual workflow, reducing the claim processing time from several weeks to just a few hours. From 2019 to 2024, the module processed an average of 2,300 travel claims annually, significantly improving financial timeliness for Marines.',
    },
    {
        id: 'mrows-dai',
        title: 'MROWS - SABRS to DAI Transition',
        description: 'Led the modernization of MROWS financial integrations by transitioning from the legacy SABRS system to the Department of Defense\’s new standard accounting system, the Defense Agencies Initiative (DAI).',
        role: 'Served as the primary developer on this high-visibility project, responsible for the full lifecycle of design, development, and deployment.',
        technologies: ['Java', 'Spring 5 MVC', 'Quartz Scheduler', 'Oracle SQL', 'JSPs'],
        technicalDetails: ['Designed and implemented an automated process to generate DAI-compliant XML records.',
            'Created two distinct scheduled jobs using Quartz Scheduler to manage secure, periodic data transmission.',
            'Ensured secure and reliable integration with DAI to meet strict DoD financial and security requirements.'],
        impact: 'Enabled MROWS to fully integrate with the DoD’s standard accounting platform, streamlining financial reporting and audit readiness. This project directly contributed to the Marine Corps achieving clean financial audit outcomes for two consecutive years..',
    },
    {
        id: 'mcpdt-slo',
        title: 'MCPDT - Funding Structure Transition (LOA to SFIS SLOA)',
        description: 'Modernized the funding allocation process within the MCPDT system by transitioning from the legacy Line of Accounting (LOA) format to the standardized SFIS-compliant Standard Line of Accounting (SLOA) structure.',
        role: 'Served as the sole developer responsible for designing, implementing, and integrating the new funding logic..',
        technologies: ['Java', 'Oracle SQL'],
        technicalDetails: ['Implemented core logic to incorporate annually generated SLOA data into each MCPDT order.',
            'Ensured accurate alignment of financial tracking with the new SFIS-compliant structure.',
            'Designed the solution to support yearly updates to SLOA data with minimal manual intervention.'],
        impact: 'Brought the MCPDT system into compliance with the updated DoD financial standards, enhancing accuracy and audit readiness. The project is currently ongoing, with phased improvements continuing.',
        // status: 'Ongoing, expected completion 9/30/2025' // Add status if desired
    },
    {
        id: 'mrows-sep',
        title: 'MROWS - Separation Requests (PCS Travel)',
        description: 'Developed a new module within the MROWS system to support financial accounting for separation-related travel under Permanent Change of Station (PCS) orders.',
        role: 'Served as the sole developer responsible for the full lifecycle of the module—from initial design through implementation and deployment..',
        technologies: ['Java', 'jQuery', 'Spring 5', 'Oracle SQL', 'SOAP Web Services'],
        technicalDetails: ['Designed and implemented a new UI, backend logic, and supporting database structure.',
            'Built the end-to-end workflow to transmit funding requests to MCPDT and DAI.',
            'Ensured integration with existing financial systems while maintaining data accuracy and reliability.'],
        impact: 'Enabled precise financial tracking for the return-travel portion of PCS orders, addressing a longstanding gap in accountability. The new module significantly improved accuracy in reporting and managing separation-related travel expenses..',
    },
    {
        id: 'mrows-mcpdt-soap',
        title: 'MROWS & MCPDT - SOAP Web Services Development & Enhancement',
        description: 'Led a series of projects to design, build, and enhance SOAP-based web services that enabled automated data exchange and process integration between MROWS, MCPDT, and external financial systems..',
        role: 'Developed multiple new web services (three in MROWS, one in MCPDT) and updated the business logic for several existing services to support evolving integration needs..',
        technologies: ['Java', 'SOAP Web Services', 'Oracle SQL'],
        technicalDetails: ['Built integration services such as MROWS-to-MCPDT order search and DTMS-to-MCPDT-to-DAI reconciliation.',
            'Enhanced existing services to improve reliability, data integrity, and performance.',
            'Focused on secure, real-time communication and automated workflows across systems.'],
        impact: 'Improved audit compliance by centralizing and standardizing user access points. Enhanced financial transparency and accuracy by automating payment updates and reconciliation processes..',
    },
    {
        id: 'personal-learning-app',
        title: 'Full-Stack Learning Application', // Or a functional name
        description: 'Built a full-stack web application as a personal project to gain hands-on experience with modern development tools and frameworks.',
        role: 'Sole developer responsible for the end-to-end design and implementation of the application..',
        technologies: ['React', 'Java 17', 'Spring Boot 6', 'Spring Data JPA (Hibernate)', 'RESTful APIs', 'MySQL', 'Tomcat (embedded)'],
        technicalDetails: ['Developed a dynamic React frontend with multiple views and interactive components.',
            'Built a Spring Boot 6 backend exposing RESTful APIs for client-server communication',
            'Used Spring Data JPA with Hibernate for ORM and MySQL as the persistent data layer.',
            'Implemented business logic for processing, storing, and displaying data in real time.'],
        impact: 'Demonstrates practical application of modern full-stack technologies and showcases the ability to design, build, and deploy a complete web application from scratch.',
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