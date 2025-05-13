// components/ProjectModal.tsx
'use client';

import React, {useEffect, useRef} from 'react';
import projectStyles from "./projectSection.module.css";

// Define the Project type again (or import from a shared types file)
interface Project {
    id: string;
    title: string;
    description: string; // Brief (can also show in modal)
    role: string; // Full detail
    technologies: string[];
    technicalDetails: string; // Full detail
    impact: string; // Full detail
}

interface ProjectModalProps {
    project: Project; // The project data to display in the modal
    onClose: () => void; // Function to call when the modal should close
}

const ProjectModal: React.FC<ProjectModalProps> = ({project, onClose}) => {
    // Ref for the modal content to potentially focus it when it opens (accessibility)
    const modalContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Optional: Focus the modal content when it opens for accessibility
        modalContentRef.current?.focus();

        // Add event listener to close the modal when the Escape key is pressed
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose(); // Call the onClose function passed from the parent
            }
        };
        document.addEventListener('keydown', handleEscapeKey);

        // Clean up the event listener when the modal component unmounts
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [onClose]); // Effect depends on onClose function


    // Function to prevent clicks inside the modal content from closing the modal
    // This allows clicking/selecting text within the modal
    const handleContentClick = (event: React.MouseEvent) => {
        event.stopPropagation(); // Stop the click event from bubbling up to the overlay
    };

    // If project data is null or undefined (though selectedProject in parent is checked),
    // you might return null or a loading state, but parent handles null check here.


    return (
        // *** Modal Overlay ***
        // Clicking on the overlay (outside the content) will close the modal
        <div className={projectStyles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true"
             aria-labelledby="modal-title">

            {/* *** Modal Content Box *** */}
            {/* Clicking inside this div will *not* close the modal due to handleContentClick */}
            {/* tabIndex="-1" makes it programmatically focusable but not part of natural tab order */}
            <div className={projectStyles.modalContent} onClick={handleContentClick} ref={modalContentRef} tabIndex={-1}>
                {/* *** Close Button *** */}
                {/* Positioned absolutely relative to the modal content box */}
                <button className={projectStyles.modalCloseButton} onClick={onClose} aria-label="Close modal">
                    &times; {/* HTML entity for multiplication sign (a common close icon) */}
                </button>

                {/* *** Project Details (Full Information) *** */}
                {/* Use the data from the 'project' prop to display details */}
                <h3 id="modal-title">{project.title}</h3> {/* Project Title */}

                {/* Display the brief description too, or just the full details */}
                <p>{project.description}</p>

                <p className={projectStyles.projectRole}>My Role: {project.role}</p> {/* Full Role */}


                <div className={projectStyles.projectImpact}>
                    <h4>Impact & Results:</h4>
                    <p>{project.impact}</p>
                </div>

                <div className={projectStyles.projectTechnicalDetails}>
                    <h4>Technical Details:</h4>
                    <p>{project.technicalDetails}</p>
                </div>

                {/* Technologies Used (Repeat from card or only show here) */}
                <div className={projectStyles.projectTech}>
                    <h4>Technologies:</h4>
                    <ul>
                        {project.technologies.map(tech => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ProjectModal; // Export the component