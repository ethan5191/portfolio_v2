import React from 'react';
import projectEntryStyles from './projectEntry.module.css';
import { Project } from './project';

interface ProjectEntryProps {
    project: Project;
}

const ProjectEntry: React.FC<ProjectEntryProps> = ({ project }) => {
    return (
        <div id={`project-${project.id}`} className={projectEntryStyles.projectEntry}>
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