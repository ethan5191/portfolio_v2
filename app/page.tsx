import styles from './page.module.css';
import React from "react";
import AboutSection from "../app/components/aboutMe/AboutSection";
import MrowsSection from "../app/components/mrows/MrowsSection";
import McpdtSection from "../app/components/mcpdt/McpdtSection";
import ProjectsSection from "@/app/components/projects/ProjectsSection";
import SkillsSection from "@/app/components/skills/SkillsSection";
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
                    <SkillsSection/>
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