import accomplishments from "../shared/accomplishmentList.module.css";
import React from "react";
import sectionBase from "@/app/components/shared/sectionBase.module.css";
import styles from './mrowsSection.module.css';

export default function MrowsSection() {
    return (<section id="mrows" className={`${sectionBase.sectionBase} ${styles.mrowsSection}`}>
        <h2>MROWS
            <span className={styles.acronymTooltip}>Marine Resource Order Writing System</span>
        </h2>
        <div className={styles.contentColumn}>
            <p className={styles.acronymDefinition}>MROWS is a monolithic Java 8 web application used to create and
                certify orders for reserve Marines.</p>
            <h4>Related Projects:</h4>
            <ul className={accomplishments.accomplishmentsList}>
                <li><span className={accomplishments.accomplishmentTitle}>Framework Migration:</span>
                    <span className={accomplishments.accomplishmentDetails}>Led migration from Struts 1 to Spring 5, improving performance and maintainability.</span>
                </li>
                <li><span className={accomplishments.accomplishmentTitle}>Permissions Refactor:</span>
                    <span className={accomplishments.accomplishmentDetails}>Rebuilt static permission logic into a dynamic, database-driven system for easier management.</span>
                </li>
                <li><span className={accomplishments.accomplishmentTitle}>Security Remediation:</span>
                    <span className={accomplishments.accomplishmentDetails}>Resolved multiple HP Fortify findings to strengthen application security.</span>
                </li>
                <li><span className={accomplishments.accomplishmentTitle}>Inbox Optimization:</span>
                    <span className={accomplishments.accomplishmentDetails}>Upgraded all inbox components to jQuery for better performance and reduced code duplication..</span>
                </li>
                <li><span className={accomplishments.accomplishmentTitle}>Reporting Upgrade:</span>
                    <span className={accomplishments.accomplishmentDetails}>Migrated legacy reports from iReport 1.2 to JasperSoft Studio, cutting compile times and improving reliability.</span>
                </li>
            </ul>
        </div>
    </section>);
}