import styles from "./AboutSection.module.css";
import baseStyles from "../../page.module.css";
import React from "react";

export default function AboutSection() {
    return (<section id="about" className={baseStyles.section}>
        <h2>About Me</h2>
        <div className={`${styles.aboutContent} ${baseStyles.infoContent}`}>
            <p>I transitioned to software development in my sophomore year of college. Having realized
                graphic design wasn't my path, my high school experience with Visual Basic led me to
                explore Java and C/C#. I was immediately drawn to coding, finding my stride particularly
                with Java.</p>
            <p>My subsequent experience as a full-stack Java developer in the United States Marine Corps
                has deeply reinforced what I value most in software development: solving challenging
                problems, building effective systems, and contributing to a meaningful cause. The
                systems my team supports directly impact Marines by ensuring accurate and timely pay, a
                mission I find particularly rewarding.</p>
            <p>My role provided opportunities to apply my growing expertise across various impactful
                projects, from developing new modules to facilitating critical system transitions. These
                experiences were instrumental in deepening my proficiency with Java, Spring 5, Oracle
                SQL, and Soap web services.</p>
            <p>In my next position, I am seeking a mid-level engineer role where I can focus extensively
                on daily development with Java, Spring, and SQL. Although I am fully comfortable with
                the responsibilities of a senior developer, I am most energized by hands-on
                problem-solving within the code itself.</p>
            <p>You can <a href="/VanderburEthan_2025.pdf" target="_blank"
                          rel="noopener noreferrer">Download my Resume PDF</a>.</p>
        </div>
    </section>);
}
