import styles from './skillsSection.module.css';
import baseSection from '../shared/sectionBase.module.css';
import SkillsCategoryCard from './SkillsCategoryCard';
import React from "react";
import {
    faJava, faJs, faReact, faGit, faGitlab, faBitbucket, faJira, faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase, faLeaf, faCog, faCode, faTerminal, faCodeBranch, faFileCode,
    faVial, faHammer, faServer, faShieldAlt, faTasks, faUsers
} from '@fortawesome/free-solid-svg-icons';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface Tool {
    name: string;
    iconClass?: IconProp;
}

interface ToolGroupData {
    header: string[];
    tools: Tool[];
    modifierClassName?: string;
}

const toolGroupsData: ToolGroupData[] = [
    {
        header: ['Programming', 'Languages'],
        tools: [{name: 'Java', iconClass: faJava}, {
            name: 'SQL',
            iconClass: faDatabase
        }, {name: 'JavaScript', iconClass: faJs}, {name: 'MySQL', iconClass: faDatabase}],
        modifierClassName: 'languagesCard',
    },
    {
        header: ['Frameworks'],
        tools: [{name: 'Spring', iconClass: faLeaf}, {
            name: 'Struts 1',
            iconClass: faCog
        }, {name: 'Hibernate/JPA', iconClass: faDatabase}, {
            name: 'SOAP',
            iconClass: faCode
        }, {name: 'jQuery', iconClass: faCode}, {name: 'React', iconClass: faReact}],
        modifierClassName: 'frameworksCard',
    },
    {
        header: ['IDEs'],
        tools: [{name: 'IntelliJ IDEA', iconClass: faTerminal}, {
            name: 'WebStorm',
            iconClass: faTerminal
        },],
        modifierClassName: 'idesCard',
    },
    {
        header: ['Specialized', 'Dev Tools'],
        tools: [{name: 'JasperSoft Studio', iconClass: faFileCode}, {
            name: 'Pl/SQL Developer',
            iconClass: faDatabase
        }, {name: 'Soap UI', iconClass: faVial},],
        modifierClassName: 'specializedCard',
    },
    {
        header: ['Version Control'],
        tools: [{name: 'Git', iconClass: faGit}, {name: 'Subversion', iconClass: faCodeBranch},],
        modifierClassName: 'vcCard',
    },
    {
        header: ['Code Hosting'],
        tools: [{name: 'GitLab', iconClass: faGitlab}, {
            name: 'BitBucket',
            iconClass: faBitbucket
        }, {name: 'GitHub', iconClass: faGithub}],
        modifierClassName: 'codeHostingCard',
    },
    {header: ['Build Tool'], tools: [{name: 'Maven', iconClass: faHammer}], modifierClassName: 'buildCard',},
    {header: ['App Server'], tools: [{name: 'WebLogic', iconClass: faServer}], modifierClassName: 'appServerCard',},
    {header: ['Security Tool'], tools: [{name: 'Fortify', iconClass: faShieldAlt}], modifierClassName: 'securityCard',},
    {header: ['Project', 'Management'], tools: [{name: 'Jira', iconClass: faJira}], modifierClassName: 'pmCard',},
    {
        header: ['Methodologies'],
        tools: [{name: 'Agile', iconClass: faTasks}, {name: 'Scrum', iconClass: faUsers}],
        modifierClassName: 'agileCard',
    }
];

export default function SkillsSection() {
    return (<section id="skills" className={`${baseSection.sectionBase} ${styles.skillsSection}`}>
            <h2>My Skills & Tools</h2>
            <div className={styles.skillsGridContainer}>
                {toolGroupsData.map((group) => (
                    <SkillsCategoryCard
                        key={group.header.join(' ')}
                        headerText={group.header}
                        tools={group.tools}
                        modifierClassName={group.modifierClassName}
                    />
                ))}
            </div>
        </section>
    )
}