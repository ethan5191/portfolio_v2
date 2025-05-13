import styles from './page.module.css';
import React from "react";
import AboutSection from "../app/components/aboutMe/AboutSection";
import MrowsSection from "../app/components/mrows/MrowsSection";
import McpdtSection from "../app/components/mcpdt/McpdtSection";
import ProjectsSection from "@/app/components/projects/ProjectsSection";
import ContactSection from "@/app/components/contact/ContactSection";

export default function Home() {
    return (
        <>
            <div className={styles.pageBodyWrapper}>
                <div className={styles.mainContentAndHome}>

                    <section id="home" className={styles.home}>
                        <h1>Ethan Vanderbur</h1>
                        <span>Experienced full-stack web developer working with Java, Spring, SQL, and Soap web services.</span>
                    </section>

                    <AboutSection/>
                    <MrowsSection/>
                    <McpdtSection/>
                    <ProjectsSection/>

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

                    <ContactSection/>
                </div>
                {/* End .mainContentAndHome */}

                {/* It's a sibling of the main scrolling column */}
                <aside className={styles.sidebarNav}>
                    <div><a href="#about">ABOUT</a></div>
                    <div><a href="#mrows">MROWS</a></div>
                    <div><a href="#mcpdt">MCPDT</a></div>
                    <div><a href="#work">WORK</a></div>
                    <div><a href="#skills">SKILLS</a></div>
                    <div><a href="#contact">CONTACT</a></div>
                </aside>

            </div>
            <footer className={styles.footer}>
                <blockquote className={styles.footerQuote}>
                    "The winner ain't the one with the fastest car, it's the one who refuses to lose."
                    <cite>- Dale Earnhardt</cite>
                </blockquote>
            </footer>
        </>
    );
}