// components/ProjectCards.tsx
'use client';

import React, {useState} from 'react';
import styles from '../../page.module.css';
import cardGrid from "../shared/cardGrid.module.css";
import projectStyles from "./projectSection.module.css";
import ProjectModal from './ProjectModal';

// Define a type for your project data structure
// You should ensure your project data in page.tsx matches this structure
interface Project {
    id: string; // Unique ID
    title: string;
    description: string; // Brief description
    role: string; // Full detail
    technologies: string[];
    technicalDetails: string; // Full detail
    impact: string; // Full detail
}

interface ProjectCardsProps {
    projects: Project[]; // Component accepts an array of projects
}

const ProjectCards: React.FC<ProjectCardsProps> = ({projects}) => {
    // State to manage the visibility of the modal (true = open, false = closed)
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State to store the data of the project currently selected to show in the modal
    // Initialize as null, will hold a Project object when a card is clicked
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Function to open the modal and set the selected project data
    const openModal = (project: Project) => {
        setSelectedProject(project); // Set the project data for the modal
        setIsModalOpen(true); // Open the modal
    };

    // Function to close the modal and clear the selected project data
    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
        setSelectedProject(null); // Clear the selected project data
    };

    // The useEffect for click listeners on cards for *expanding* is no longer needed.
    // We will add an onClick handler directly to the card element in the JSX.


    return (
        // Use a React Fragment <> to render multiple top-level elements (the grid and the modal)
        <>
            {/* This is the grid container for the project cards */}
            <div className={cardGrid.projectsGrid}>
                {/* Map over the projects data array to render each project card */}
                {projects.map(project => (
                    // Each project card is an article element
                    // Add the onClick handler to open the modal with this project's data
                    <article
                        key={project.id} // Use a unique key for React list rendering
                        className={`${projectStyles.projectCard} ${styles.infoContent}`}
                        onClick={() => openModal(project)} // *** Add onClick handler here ***
                        role="button" // Indicate this element is interactive
                        tabIndex={0} // Make it focusable for keyboard navigation
                        // aria-haspopup="dialog" // Optional ARIA attribute indicating a dialog will open
                    >
                        {/* *** Content visible on the initial project card (Summary) *** */}
                        {/* This content should be concise */}
                        <div className={projectStyles.projectSummary}>
                            {/* Project Title */}
                            <h3>{project.title}</h3>
                            {/* Brief Description */}
                            <p>
                                {project.description}
                            </p>

                            {/* Optional: Include Technologies or Links on the summary card if they fit */}
                            {/* You can reuse styles from the previous attempt */}
                            <div className={projectStyles.projectTech}>
                                <h4>Technologies:</h4>
                                <ul>
                                    {project.technologies.map(tech => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </article>
                ))}
            </div>

            {/* *** Include the Modal component *** */}
            {/* Conditionally render the modal only when isModalOpen is true AND selectedProject has data */}
            {isModalOpen && selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal}/>
            )}
        </>
    );
};

export default ProjectCards; // Export the component