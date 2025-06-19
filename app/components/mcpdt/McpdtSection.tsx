import accomplishments from "../shared/accomplishmentList.module.css";
import React from "react";
import sectionBase from "@/app/components/shared/sectionBase.module.css";
import styles from "./mcpdtSection.module.css";

export default function McpdtSection() {
    return (<section id="mcpdt" className={`${sectionBase.sectionBase} ${styles.mcpdtSection}`}>
        <h2>MCPDT
            <span className={styles.acronymTooltip}>Marine Corps Permanent Duty Travel</span>
        </h2>
        <div className={styles.contentColumn}>
            <p className={styles.contentColumn}>MCPDT is a Java 8 web application that provides per diem and travel funding calculations for Permanent
                Change of Station (PCS) and Permanent Change of Assignment (PCA) orders.</p>
            <h4>Related Projects:</h4>
            <ul className={accomplishments.accomplishmentsList}>
                <li><span className={accomplishments.accomplishmentTitle}>End-of-Year Setup:</span>
                    <span className={accomplishments.accomplishmentDetails}>Developed annual database scripts to prepare funding lines for the new fiscal year.</span>
                </li>
                <li><span className={accomplishments.accomplishmentTitle}>DAI Reconciliation Service:</span>
                    <span className={accomplishments.accomplishmentDetails}>Built a new service to process DTMS financial data and transmit reconciliation lines to DAI, enhancing audit readiness.</span>
                </li>
                <li><span className={accomplishments.accomplishmentTitle}>PCS Travel Integration:</span>
                    <span className={accomplishments.accomplishmentDetails}>Updated logic and services to support the new work flow introduced by MROWS separation-related PCS orders.</span>
                </li>
                <li><span className={accomplishments.accomplishmentTitle}>Reporting Enhancements:</span>
                    <span className={accomplishments.accomplishmentDetails}>Delivered yearly Excel report updates to support budgeting and financial forecasting.</span>
                </li>
                <li><span className={accomplishments.accomplishmentTitle}>Low-Cost Order Support:</span>
                    <span className={accomplishments.accomplishmentDetails}>Added logic to handle new funding types, improving accuracy in cost tracking and estimation.</span>
                </li>
            </ul>
        </div>
    </section>);
}