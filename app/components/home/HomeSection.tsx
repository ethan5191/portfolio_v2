import styles from "./HomeSection.module.css";
import React from "react";

export default function HomeSection() {
    return (<section id="home" className={styles.home}>
        <h1>Ethan Vanderbur</h1>
        <span>Experienced full-stack web developer working with Java, Spring, SQL, and Soap web services.</span>
    </section>);
}