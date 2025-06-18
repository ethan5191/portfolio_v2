import React from "react";
import styles from "@/app/page.module.css";
import HomeSection from "@/app/components/home/HomeSection";
import AboutSection from "../app/components/aboutMe/AboutSection";
import MrowsSection from "../app/components/mrows/MrowsSection";
import McpdtSection from "../app/components/mcpdt/McpdtSection";
import Projects2Section from "@/app/components/projects2/Projects2Section";
import SkillsSection2 from "@/app/components/skills2/SkillsSection2";
import ContactSection from "@/app/components/contact/ContactSection";

export default function Home() {
    return (
        <>
            <div className={styles.mainContentArea}>
                <div>
                    <HomeSection/>
                    <AboutSection/>
                    <MrowsSection/>
                    <McpdtSection/>
                    <Projects2Section/>
                    <SkillsSection2/>
                    <ContactSection/>
                </div>
            </div>
        </>
    );
}