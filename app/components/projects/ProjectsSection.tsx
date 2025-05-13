import sectionStyles from "../shared/sectionContent.module.css";
import ProjectCards from "@/app/components/projects/ProjectCards";
import React from "react";

// Define a type for your project data structure
interface Project {
    id: string; // Unique ID for keys
    title: string;
    description: string; // Brief
    role: string; // Full detail
    technologies: string[];
    technicalDetails: string; // Full detail
    impact: string; // Full detail
}

const myProjects: Project[] = [
    {
        id: 'mrows-travel',
        title: 'MROWS - Travel Claim Module',
        description: 'Developed a significant module within the MROWS system to automate travel claim processing, integrating with the external DTMS system.',
        role: 'Collaborated on the full-stack design and implementation. My key contributions included creating new database architecture, developing both the user interface elements (UI) and backend processing logic, building the outgoing SOAP web service integration with DTMS, and designing the incoming reconciliation/rejection web service that received payment information.',
        technologies: ['Java', 'Spring 5 MVC', 'jQuery', 'SOAP', 'Oracle SQL', 'JSPs'],
        technicalDetails: 'Designed and implemented new database architecture; developed UI elements and backend processing logic; built the outgoing web service call to DTMS; designed the incoming reconciliation web service.',
        impact: 'This project significantly streamlined the travel claim submission process, reducing a manual workflow that previously took weeks down to just a couple of hours before a Marine received payment. Between 2019 and 2024, the module successfully processed an average of 2300 travel claims annually.',
    },
    {
        id: 'mrows-dai',
        title: 'MROWS - SABRS to DAI Transition',
        description: 'Led the development effort to transition funding information from the MROWS system to the Department of Defense\'s official accounting system, DAI.',
        role: 'Served as the main developer on this critical transition project.',
        technologies: ['Java', 'Spring 5 MVC', 'Quartz Scheduler', 'Oracle SQL', 'JSPs'],
        technicalDetails: 'Designed and implemented the automated process for creating DAI records and securely transmitting this data via XML on a scheduled basis, setting up two distinct scheduled jobs.',
        impact: 'Successfully enabled MROWS to integrate with the DoD\'s standard accounting system, significantly streamlining the audit process. This transition contributed to the Marine Corps achieving clean financial audits for the past two years.',
    },
    {
        id: 'mcpdt-slo',
        title: 'MCPDT - Funding Structure Transition (LOA to SFIS SLOA)',
        description: 'Updated the funding allocation process within the MCPDT system to transition from a legacy LOA structure to the standardized SFIS SLOA.',
        role: 'Served as the sole developer responsible for designing and implementing this new logical process.',
        technologies: ['Java', 'Oracle SQL'],
        technicalDetails: 'Developed the core logic to integrate the new, annually generated SLOA data with each order created in MCPDT, ensuring accurate financial tracking according to the updated structure.',
        impact: 'Aligned the funding process with the new official financial structure, improving compliance and accuracy. Project is ongoing.',
        // status: 'Ongoing, expected completion 9/30/2025' // Add status if desired
    },
    {
        id: 'mrows-sep',
        title: 'MROWS - Separation Requests (PCS Travel)',
        description: 'Developed an entirely new module within the MROWS system to specifically handle financial accounting for separation requests related to Permanent Change of Station (PCS) travel.',
        role: 'Served as the sole developer responsible for the full lifecycle of this new module.',
        technologies: ['Java', 'jQuery', 'Spring 5', 'Oracle SQL', 'SOAP Web Services'],
        technicalDetails: 'Created the complete new module, including designing the UI, developing backend processes, and establishing a new database structure. Implemented the workflow to send requests to MCPDT and DAI for funding.',
        impact: 'Provided significantly more accurate financial accounting for funds spent on the return travel portion of PCS orders by enabling precise tracking previously not possible.',
    },
    {
        id: 'mrows-mcpdt-soap',
        title: 'MROWS & MCPDT - SOAP Web Services Development & Enhancement',
        description: 'A collection of projects focused on developing and enhancing critical SOAP web services to enable data exchange and process automation between systems.',
        role: 'Created multiple new web services (three in MROWS, one in MCPDT) and updated business logic for existing services.',
        technologies: ['Java', 'SOAP Web Services', 'Oracle SQL'],
        technicalDetails: 'Developed integration services (e.g., MROWS to MCPDT order search, MCPDT to DAI reconciliation) facilitating data exchange and automation.',
        impact: 'Improved audit compliance by centralizing user access and enhanced financial auditability by automating payment updates.',
    },
    {
        id: 'personal-learning-app',
        title: 'Full-Stack Learning Application', // Or a functional name
        description: 'A personal full-stack web application built to explore and gain hands-on experience with modern web development technologies.',
        role: 'Sole developer.',
        technologies: ['React', 'Java 17', 'Spring Boot 6', 'Spring Data JPA (Hibernate)', 'RESTful APIs', 'MySQL', 'Tomcat (embedded)'],
        technicalDetails: 'React frontend with multiple views; Java 17/Spring Boot backend with RESTful APIs; MySQL database with Hibernate; Implemented data display and processing logic.',
        impact: 'Demonstrates ability to learn and apply modern full-stack technologies and architectural patterns.',
    },
];

export default function ProjectsSection() {
    return (<section id="work" className={sectionStyles.section}>
            <h2>My Work / Projects</h2>
            <ProjectCards projects={myProjects}/>
        </section>);
}