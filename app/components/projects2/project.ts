export interface Project {
    id: string; // Unique ID for keys
    title: string;
    description: string; // Brief
    role: string; // Full detail
    technologies: string[];
    technicalDetails: string; // Full detail
    impact: string; // Full detail
}

export default Project;