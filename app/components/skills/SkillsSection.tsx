import cardGrid from "../shared/cardGrid.module.css";
import skills from "./skillsSection.module.css";
import sectionStyles from "../shared/sectionContent.module.css";
import React from "react";

export default function SkillsSection() {
    return (<section id="skills" className={sectionStyles.section}>
        <h2>Skills</h2>
        <div className={cardGrid.projectsGrid}>
            <div className={`${skills.skillCategoryCard} ${sectionStyles.infoContent}`}>
                <h3>Programming Languages</h3>
                <ul>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>MySQL</li>
                </ul>
            </div>
            <div className={`${skills.skillCategoryCard} ${sectionStyles.infoContent}`}>
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
            <div className={`${skills.skillCategoryCard} ${sectionStyles.infoContent}`}>
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
            <div className={`${skills.skillCategoryCard} ${sectionStyles.infoContent}`}>
                <h3>Methodologies</h3>
                <ul>
                    <li>Agile</li>
                    <li>Scrum</li>
                </ul>
            </div>
        </div>
    </section>);
}