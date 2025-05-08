import styles from './page.module.css';
import ProjectCards from '../app/components/ProjectCards';
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

export default function Home() {
    return (
        <div className={styles.pageBodyWrapper}>
            <div className={styles.mainContentAndHome}>

                <section id="home" className={styles.home}>
                    <h1>Ethan Vanderbur</h1>
                    <span>Experienced full-stack Java web developer working with Java, Spring, SQL, and Soap web services.</span>
                </section>

                {/* About Me Section */}
                <section id="about" className={styles.section}>
                    <h2>About Me</h2>
                    <div className={`${styles.aboutContent} ${styles.infoContent}`}>
                        <p>I transitioned to software development in my sophomore year of college. Having realized
                            graphic design wasn't my path, my high school experience with Visual Basic led me to explore
                            Java and C/C#. I was immediately drawn to coding, finding my stride particularly with
                            Java.</p>
                        <p>My subsequent experience as a full-stack Java developer in the United States Marine Corps has
                            deeply reinforced what I value most in software development: solving challenging problems,
                            building effective systems, and contributing to a meaningful cause. The systems my team
                            supports directly impact Marines by ensuring accurate and timely pay, a mission I find
                            particularly rewarding.</p>
                        <p>My role provided opportunities to apply my growing expertise across various impactful
                            projects, from developing new modules to facilitating critical system transitions. These
                            experiences were instrumental in deepening my proficiency with Java, Spring 5, Oracle SQL,
                            and Soap web services.</p>
                        <p>In my next position, I am seeking a mid-level engineer role where I can focus extensively on
                            daily development with Java, Spring, and SQL. Although I am fully comfortable with the
                            responsibilities of a senior developer, I am most energized by hands-on problem-solving
                            within the code itself, a type of work I have had less opportunity to engage in during
                            recent senior roles.</p>
                        <p>You can download my latest resume <a href="/VanderburEthan_2025.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="work" className={styles.section}>
                    <h2>My Work / Projects</h2>
                    <ProjectCards projects={myProjects}/> {/* Pass your project data here */}
                </section>

                {/* Skills Section */}
                <section id="skills" className={styles.section}>
                    <h2>Skills</h2>
                    <div className={styles.projectsGrid}>
                        <div className={`${styles.skillCategoryCard} ${styles.infoContent}`}>
                            <h3>Programming Languages</h3>
                            <ul>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>SQL</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div className={`${styles.skillCategoryCard} ${styles.infoContent}`}>
                            <h3>Frameworks & Libraries</h3>
                            <ul>
                                <li>Spring MVC</li>
                                <li>Struts 1.1</li>
                                <li>Hibernate/JPA</li>
                                <li>Soap Web Services</li>
                                <li>jQuery</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className={`${styles.skillCategoryCard} ${styles.infoContent}`}>
                            <h3>Tools</h3>
                            <ul>
                                <li>IntelliJ</li>
                                <li>Git</li>
                                <li>Subversion</li>
                                <li>Maven</li>
                                <li>Fortify</li>
                                <li>GitLab</li>
                                <li>JIRA</li>
                                <li>JasperSoft Studios</li>
                                <li>Soap UI</li>
                                <li>WebStorm</li>
                            </ul>
                        </div>
                        <div className={`${styles.skillCategoryCard} ${styles.infoContent}`}>
                            <h3>Methodologies</h3>
                            <ul>
                                <li>Agile</li>
                                <li>Scrum</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className={styles.section}>
                    <h2>Contact</h2>
                    <div className={`${styles.contactContent} ${styles.infoContent}`}>
                        <p>Ethan Vanderbur</p>
                        <p>Columbus, Indiana</p>
                        <div className={styles.contactMethods}>
                            <p>Phone: 812-701-6110</p>
                            <p>Email: <a href="mailto:evanderbur3@gmail.com">evanderbur3@gmail.com</a></p>
                            <p>LinkedIn: <a href="https://www.linkedin.com/in/ethan-vanderbur-2797aa260/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ethan-vanderbur-2797aa260</a></p>
                            <p>Resume: <a href="/VanderburEthan_2025.pdf" target="_blank" rel="noopener noreferrer">Download Resume PDF</a></p>
                        </div>
                    </div>
                </section>
            </div>
            {/* End .mainContentAndHome */}

            {/* It's a sibling of the main scrolling column */}
            <aside className={styles.sidebarNav}>
                <div><a href="#about">ABOUT</a></div>
                <div><a href="#work">WORK</a></div>
                <div><a href="#skills">SKILLS</a></div>
                <div><a href="#contact">CONTACT</a></div>
            </aside>

        </div>
    );
}