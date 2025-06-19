'use client';

import React, { useState, useEffect, useRef } from 'react';
import projectEntryStyles from './projectEntry.module.css';
import { Project } from './project';

interface ProjectEntryProps {
    project: Project;
}

const ProjectEntry: React.FC<ProjectEntryProps> = ({ project }) => {

    const [isVisible, setIsVisible] = useState(false);
    const projectRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // if (projectRef.current) {
                        //     observer.unobserve(projectRef.current);
                        // }
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );
        if (projectRef.current) {
            observer.observe(projectRef.current);
        }
        return () => {
            if (projectRef.current) {
                observer.unobserve(projectRef.current);
            }
            observer.disconnect();
        }
    }, []);

    return (
        <div id={`project-${project.id}`}
             ref={projectRef}
             className={`${projectEntryStyles.projectEntry} ${isVisible ? projectEntryStyles.fadeIn : ''}`}>
            <div className={projectEntryStyles.projectNameColumn}>
                <h3 className={projectEntryStyles.projectTitleWithTooltip}>
                    {project.shortName}
                    <span className={projectEntryStyles.projectTooltip}>
                        {project.title}
                    </span>
                </h3>
            </div>
            <div className={projectEntryStyles.projectDetailsColumn}>
                <p><strong>Description:</strong> {project.description}</p>
                <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                {/*{project.role && <p><strong>Role:</strong> {project.role}</p>}*/}
                <p><strong>Technical Highlights:</strong></p>
                <ul className={projectEntryStyles.technicalHighlightsList}>
                    {project.technicalDetails.map((detail, index) => (
                        <li key={index}>
                            {detail}
                        </li>
                    ))}
                </ul>
                <p><strong>Impact:</strong> {project.impact}</p>
            </div>
        </div>
    );
};

export default ProjectEntry;