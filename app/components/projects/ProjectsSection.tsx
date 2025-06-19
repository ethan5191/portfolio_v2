import styles from './projectsSection.module.css';
import sectionBase from "@/app/components/shared/sectionBase.module.css";
import {projectsData} from "./projectsData";
import ProjectEntry from "@/app/components/projects/ProjectEntry";
import React from 'react';

export default function ProjectsSection() {
    return (<section id="work" className={`${sectionBase.sectionBase} ${styles.projectsSection}`}>
        <h2>Notable Projects</h2>
        <div className={styles.projectListContainer}>
            {projectsData.map((project, index) => (
                <React.Fragment key={project.id}>
                    <ProjectEntry project={project} />
                    {index < projectsData.length - 1 && (
                        <hr className={styles.projectDivider} />
                    )}
                </React.Fragment>
            ))}
        </div>
    </section>)
}