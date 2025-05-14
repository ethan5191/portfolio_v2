'use client';

import React, { useRef, useState } from 'react';
import styles from './projects2Section.module.css';
import Project from "./project";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    // *** Each instance of ProjectCard gets its own state and ref ***
    const [expanded, setExpanded] = useState(false);
    const detailsRef = useRef<HTMLDivElement>(null);

    const toggleDetails = () => {
        setExpanded(prev => !prev);
    };

    return (
        <div id={`project-${project.id}`} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p><strong>Description:</strong> {project.description}</p>
            <p>
                <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>

            <button className={`${styles.toggleButton} ${expanded ? styles.expandedButton : ''}`}
                    onClick={toggleDetails}>
                {expanded ? 'Show Less' : 'Show More'}
            </button>

            <div ref={detailsRef}
                 className={`${styles.details} ${expanded ? styles.detailsExpanded : ''}`}
            >
                <div className={styles.detailsInner}>
                    <p><strong>Role:</strong> {project.role}</p>
                    <p><strong>Technical Highlights:</strong> {project.technicalDetails}</p>
                    <p><strong>Impact:</strong> {project.impact}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;