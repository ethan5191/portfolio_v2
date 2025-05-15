'use client';

import React, { useEffect, useRef } from 'react';
import styles from './skillsSection2.module.css';
import sectionStyles from "@/app/components/shared/sectionContent.module.css";

import ToolGroupCircle from './ToolGroupCircle';

interface Tool { name: string; iconClass?: string; }
interface ToolGroupData {
    header: string[];
    tools: Tool[];
}

const toolGroupsData: ToolGroupData[] = [
    { header: ['Programming', 'Languages'], tools: [ { name: 'Java', iconClass: 'fab fa-java' }, { name: 'SQL', iconClass: 'fas fa-database' }, { name: 'JavaScript', iconClass: 'fab fa-js' }, { name: 'MySQL', iconClass: 'fas fa-database'}], },
    { header: ['Frameworks'], tools: [ { name: 'Spring', iconClass: 'fas fa-leaf' }, { name: 'Struts 1', iconClass: 'fas fa-cog' }, { name: 'Hibernate/JPA', iconClass: 'fas fa-database' }, { name: 'SOAP', iconClass: 'fas fa-code'}, { name: 'jQuery', iconClass: 'fas fa-code'}, { name: 'React', iconClass: 'fab fa-react'}], },
    { header: ['IDEs'], tools: [ { name: 'IntelliJ IDEA', iconClass: 'fas fa-terminal' }, { name: 'WebStorm', iconClass: 'fas fa-terminal' }, ], },
    { header: ['Version Control'], tools: [ { name: 'Git', iconClass: 'fab fa-git' }, { name: 'Subversion', iconClass: 'fas fa-code-branch' }, ] },
    { header: ['Code Hosting'], tools: [ { name: 'GitLab', iconClass: 'fab fa-gitlab' }, { name: 'BitBucket', iconClass: 'fab fa-bitbucket' }, { name: 'GitHub', iconClass: 'fab fa-gitlab' }], },
    { header: ['Specialized', 'Dev Tools'], tools: [ { name: 'JasperSoft Studio', iconClass: 'fas fa-file-code' }, { name: 'Pl/SQL Developer', iconClass: 'fas fa-database' }, { name: 'Soap UI', iconClass: 'fas fa-vial' }, ], },
    { header: ['Build Tool'], tools: [ { name: 'Maven', iconClass: 'fas fa-hammer' }], },
    { header: ['Project', 'Management'], tools: [ { name: 'Jira', iconClass: 'fab fa-jira' }], },
    { header: ['App Server'], tools: [ { name: 'WebLogic', iconClass: 'fas fa-server' }], },
    { header: ['Security Tool'], tools: [ { name: 'Fortify', iconClass: 'fas fa-shield-alt' }], },
    { header: ['Methodologies'], tools: [ { name: 'Agile', iconClass: 'fas fa-tasks' }, { name: 'Scrum', iconClass: 'fas fa-users' }], }
];

const SkillsSection = () => {
    const circlesContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("useEffect running. circlesContainerRef.current:", circlesContainerRef.current);

        const checkCollision = (rect1: { top: number; left: number; right: number; bottom: number; }, rect2: { top: number; left: number; right: number; bottom: number; }) => {

            return !(
                rect1.right < rect2.left ||
                rect1.left > rect2.right ||
                rect1.bottom < rect2.top ||
                rect1.top > rect2.bottom
            );
        };

        const setRandomPositions = () => {
            const container = circlesContainerRef.current;
            if (!container) {
                console.error("Circles container ref is not attached!");
                return;
            }

            const circleElements = container.querySelectorAll(`.${styles.toolGroupCircle}`) as NodeListOf<HTMLDivElement>;

            circleElements.forEach(circleElement => {

                const circleWidth = circleElement.offsetWidth;
                const circleHeight = circleElement.offsetHeight;
                const circleCenterX = circleWidth / 2;
                const circleCenterY = circleHeight / 2;
                const circleRadius = Math.min(circleWidth, circleHeight) / 2;

                const headerElement = circleElement.querySelector(`.${styles.groupHeader}`) as HTMLDivElement;
                let headerRect = null;
                if (headerElement) {
                    const headerOffsetTop = headerElement.offsetTop;
                    const headerOffsetLeft = headerElement.offsetLeft;
                    const headerWidth = headerElement.offsetWidth;
                    const headerHeight = headerElement.offsetHeight;

                    headerRect = {
                        top: headerOffsetTop,
                        left: headerOffsetLeft,
                        right: headerOffsetLeft + headerWidth,
                        bottom: headerOffsetTop + headerHeight,
                    };
                }

                const toolItems = circleElement.querySelectorAll(`.${styles.toolItem}`) as NodeListOf<HTMLDivElement>;

                const occupiedRects: { top: number; left: number; right: number; bottom: number; }[] = [];
                if (headerRect) {
                    occupiedRects.push(headerRect);
                }

                toolItems.forEach(item => {
                    const itemWidth = item.offsetWidth;
                    const itemHeight = item.offsetHeight;

                    let potentialItemTop, potentialItemLeft;
                    let attempts = 0;
                    const maxAttempts = 800;
                    let isPositionValid = false;

                    do {
                        const r = Math.sqrt(Math.random()) * circleRadius;
                        const theta = Math.random() * 2 * Math.PI;
                        const offsetX = r * Math.cos(theta);
                        const offsetY = r * Math.sin(theta);
                        potentialItemLeft = circleCenterX + offsetX - itemWidth / 2;
                        potentialItemTop = circleCenterY + offsetY - itemHeight / 2;
                        attempts++;
                        const distFromCircleCenterToItemCenter = Math.sqrt(
                            Math.pow(potentialItemLeft + itemWidth / 2 - circleCenterX, 2) +
                            Math.pow(potentialItemTop + itemHeight / 2 - circleCenterY, 2)
                        );
                        const itemHalfDiagonal = Math.sqrt(Math.pow(itemWidth/2, 2) + Math.pow(itemHeight/2, 2));
                        const isInsideCircle = (distFromCircleCenterToItemCenter + itemHalfDiagonal) <= circleRadius;
                        let hasCollision = false;
                        const potentialItemRect = {
                            top: potentialItemTop,
                            left: potentialItemLeft,
                            right: potentialItemLeft + itemWidth,
                            bottom: potentialItemTop + itemHeight,
                        };

                        for (let i = 0; i < occupiedRects.length; i++) {
                            if (checkCollision(potentialItemRect, occupiedRects[i])) {
                                hasCollision = true;
                                break;
                            }
                        }

                        isPositionValid = isInsideCircle && !hasCollision;

                        if (attempts >= maxAttempts) {
                            console.warn(`Max attempts reached (${maxAttempts}) for item "${item.textContent?.trim()}" in "${headerElement?.textContent?.trim()}". Could not find a non-colliding position inside the circle.`);
                            isPositionValid = true;
                        }

                    } while (!isPositionValid && attempts < maxAttempts);

                    if (isPositionValid && attempts < maxAttempts) {
                        item.style.position = 'absolute';
                        item.style.top = `${potentialItemTop}px`;
                        item.style.left = `${potentialItemLeft}px`;
                        item.style.right = 'auto';
                        item.style.bottom = 'auto';

                        const finalItemRect = {
                            top: potentialItemTop,
                            left: potentialItemLeft,
                            right: potentialItemLeft + itemWidth,
                            bottom: potentialItemTop + itemHeight,
                        };
                        occupiedRects.push(finalItemRect);
                    }
                });
            });
        };
        const animationFrameId = requestAnimationFrame(setRandomPositions);
        const handleResize = () => { requestAnimationFrame(setRandomPositions); };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };

    }, []);

    return (
        <section id="skills" className={sectionStyles.section}>
            <h2>My Skills & Tools</h2>
            <div className={styles.toolCirclesContainer} ref={circlesContainerRef}>
                {toolGroupsData.map((group) => (
                    <ToolGroupCircle
                        key={group.header.join(' ')}
                        headerText={group.header}
                        tools={group.tools}
                    />
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;