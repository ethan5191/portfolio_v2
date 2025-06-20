import React from 'react';
import styles from './skillsSection.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface Tool {
    name: string;
    iconClass?: IconProp;
}

interface SkillCategoryCardProps {
    headerText: string[];
    tools: Tool[];
    modifierClassName?: string;
}

const SkillsCategoryCard: React.FC<SkillCategoryCardProps> = ({ headerText, tools, modifierClassName }) => {
    return (
        <div className={`${styles.skillCard} ${modifierClassName ? styles[modifierClassName] : ''}`}>
            <h3 className={styles.cardHeader}>
                {headerText.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        {index < headerText.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </h3>
            <div className={styles.toolsList}>
                {tools.map((tool) => (
                    <div key={tool.name} className={styles.toolItem}>
                        {tool.iconClass && <FontAwesomeIcon icon={tool.iconClass}/>}&nbsp;
                        <span>{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsCategoryCard;