'use client';

import React, { useEffect, useState } from 'react';
import styles from './ScrollIndicator.module.css';

const ScrollIndicator: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
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
        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
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