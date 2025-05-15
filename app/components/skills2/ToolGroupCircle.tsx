import React from 'react';
import styles from './skillsSection2.module.css';

interface Tool {
    name: string;
    iconClass?: string;
}

interface ToolGroupCircleProps {
    headerText: string[];
    tools: Tool[];
    modifierClassName?: string;
}

const ToolGroupCircle: React.FC<ToolGroupCircleProps> = ({headerText, tools , modifierClassName}) => {

    return (
        <div className={`${styles.toolGroupCircle} ${modifierClassName ? styles[modifierClassName] : ''}`}>
            <div className={styles.groupHeader}>
                <h3>
                    {headerText.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < headerText.length - 1 && <br/>}
                        </React.Fragment>
                    ))}
                </h3>
            </div>
            {tools.map((tool) => (
                <div key={tool.name} className={styles.toolItem}>
                    {tool.iconClass && <i className={tool.iconClass}></i>}
                    <span>{tool.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ToolGroupCircle;