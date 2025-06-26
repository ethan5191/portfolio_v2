import styles from "./HomeSection.module.css";
import sectionBase from '../shared/sectionBase.module.css';
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons/faLaptopCode";

export default function HomeSection() {
    return (<>
        <section id="home" className={`${styles.homeSection} ${sectionBase.sectionBase}`}>
            <div className={styles.homeContent}>
                <h1 className={styles.myName}>Ethan Vanderbur</h1>
                <h3 className={styles.roleTagline}>
                    Full-Stack Web Developer with 10 Years of Experience.
                    <FontAwesomeIcon icon={faLaptopCode} className={styles.roleIcon}/>
                </h3>
                <p className={styles.summaryParagraph}>
                    I'm a passionate full-stack developer with professional experience in the United States Marine
                    Corps. I'm driven by solving complex problems and building scalable systems, leveraging expertise in
                    Java, Spring, and SQL to create software that has real-world impact.
                </p>
            </div>
        </section>
    </>);
}