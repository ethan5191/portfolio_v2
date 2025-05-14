import styles from "./HomeSection.module.css";
import React from "react";

export default function HomeSection() {
    return (<>
        <section id="home" className={styles.home}>
            <h1>Ethan Vanderbur</h1>
            <p>Full-Stack Web Developer with 10 Years of Experience.</p>
            <p className={styles.summaryParagraph}>
                I'm a passionate full-stack developer with professional experience in the United States Marine
                Corps. I'm driven by solving complex problems and building scalable systems, leveraging expertise in
                Java, Spring, and SQL to create software that has real-world impact.
            </p>
        </section>
    </>);
}