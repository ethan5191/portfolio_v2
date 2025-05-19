import sectionStyles from "../shared/sectionContent.module.css";
import React from "react";

export default function AboutSection() {
    return (<section id="about" className={sectionStyles.section}>
        <h2>About Me</h2>
        <div className={`${sectionStyles.sectionContentWrapper} ${sectionStyles.infoContent}`}>
            <p>I began my journey into software development during my sophomore year of college, after realizing that
                graphic design wasn't the right fit for me. Drawing on my early exposure to Visual Basic in high school,
                I pivoted toward programming and quickly developed a strong interest in Java and C#. Java, in
                particular, became my language of choice, and I’ve been building with it ever since.</p>
            <p>My professional experience as a full-stack Java developer in the United States Marine Corps has
                solidified my passion for solving complex problems, building scalable systems, and working on projects
                that have real-world impact. One of the most rewarding aspects of my role was contributing to systems
                that directly affect Marines—ensuring their pay is accurate and timely.</p>
            <p>Throughout my career, I’ve contributed to a range of high-impact projects, from developing new system
                modules to managing critical transitions between legacy and modern platforms. These experiences have
                deepened my expertise in Java, Spring 5, Oracle SQL, and SOAP-based web services.</p>
            <p>I’m now seeking a mid-level engineering position where I can continue honing my craft in hands-on
                development, especially with Java, Spring, and SQL. While I’m fully capable of taking on senior-level
                responsibilities, I’m most energized when I’m writing code, solving real problems, and making software
                work better.</p>
            <p>You can <a href="/VanderburEthan_2025_V3.pdf" target="_blank"
                          rel="noopener noreferrer">Download my Resume PDF</a>.</p>
        </div>
    </section>);
}