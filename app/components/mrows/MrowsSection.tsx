import styles from "@/app/page.module.css";
import accomplishments from "../shared/accomplishmentList.module.css";
import React from "react";

export default function MrowsSection() {
    return (<section id="mrows" className={styles.section}>
        <h2>Marine Resource Order Writing System (MROWS)</h2>
        <div className={`${styles.sectionContentWrapper} ${styles.infoContent}`}>
            <p>MROWS is a monolith Java 8 web application, its main purposes is for the creation and
                certification of orders for reserve Marines.</p>
            <h4>Related Projects:</h4>
            <ul className={accomplishments.accomplishmentsList}>
                <li><span className={accomplishments.accomplishmentTitle}>HP Fortify findings:</span>
                    <span className={accomplishments.accomplishmentDetails}>Remediated numerous findings to improve
                                    application security.</span>
                </li>
                <li><span className={accomplishments.accomplishmentTitle}>Struts 1 to Spring 5:</span>
                    <span className={accomplishments.accomplishmentDetails}>Led the migration from Struts 1 to
                                    Spring 5 to improve performance and application security.</span>
                </li>
                <li><span className={accomplishments.accomplishmentTitle}>Permissions system refactor:</span>
                    <span className={accomplishments.accomplishmentDetails}>Changed the static Java based permissions system into a
                                    database driven system, allowing for easier and quicker permissions updates.</span>
                </li>
                <li><span className={accomplishments.accomplishmentTitle}>jQuery inbox migration:</span>
                    <span className={accomplishments.accomplishmentDetails}>Led the migration effort to update all inboxes to utilize the
                                    JavaScript jQuery framework to improve application performance and reduce duplicate
                                    code.</span>
                </li>
                <li><span className={accomplishments.accomplishmentTitle}>Report migration:</span>
                    <span className={accomplishments.accomplishmentDetails}>Led the migration of our reports from iReport 1.2 to JasperSoft
                                    Studio improving our report compile times.</span>
                </li>
            </ul>
        </div>
    </section>);
}