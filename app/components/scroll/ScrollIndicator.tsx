'use client';

import React, {useEffect, useState} from 'react';
import styles from './ScrollIndicator.module.css';

const ScrollIndicator: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const sectionIds = ['about', 'mrows', 'mcpdt', 'work', 'skills', 'contact'];
        const sections = sectionIds.map(id => document.getElementById(id)).filter(el => el !== null) as HTMLElement[];

        const contactSection = document.getElementById('contact');

        if (!contactSection) {
            console.warn("Contact section element with ID 'contact' not found. Scroll indicator hiding based on section will not work.");
            return;
        }
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;

            const contactSectionTop = contactSection.getBoundingClientRect().top;

            const hideOffset = 100;

            const shouldBeHidden = contactSectionTop.valueOf() <= viewportHeight - hideOffset;
            setIsVisible(!shouldBeHidden);
        };
        const handleIndicatorClick = () => {
            const currentScrollY = window.scrollY;

            let nextSection: HTMLElement | null = null;
            for (const section of sections) {
                const sectionTop = section.offsetTop;

                if (sectionTop > currentScrollY + 5) {
                    nextSection = section;
                    break;
                }
            }

            if (nextSection) {
                window.scrollTo({
                    top: nextSection.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.log("No next section found to scroll to.");
            }
        };

        const indicatorElement = document.querySelector(`.${styles.scrollDownIndicator}`) as HTMLDivElement | null;

        window.addEventListener('scroll', handleScroll);

        if (indicatorElement) {
            indicatorElement.addEventListener('click', handleIndicatorClick);
        } else {
            console.warn("Scroll indicator element not found in DOM on mount. Click listener not attached.");
        }

        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (indicatorElement) {
                indicatorElement.removeEventListener('click', handleIndicatorClick);
            }
        };
    }, []);

    return (
        <div className={`${styles.scrollDownIndicator} ${!isVisible ? styles.hidden : ''}`}>
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-chevron-down"></i>
        </div>
    );
};

export default ScrollIndicator;