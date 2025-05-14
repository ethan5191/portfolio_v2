import styles from './page.module.css';
import React from "react";
import HomeSection from "@/app/components/home/HomeSection";
// import AboutSection from "../app/components/aboutMe/AboutSection";
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
                    <HomeSection/>
                    {/*<AboutSection/>*/}
                    <MrowsSection/>
                    <McpdtSection/>
                    <ProjectsSection/>
                    <SkillsSection/>
                    <ContactSection/>
                </div>
            </div>
        </>
    );
}