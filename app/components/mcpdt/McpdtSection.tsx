import styles from "@/app/page.module.css";
import accomplishments from "../shared/accomplishmentList.module.css";
import React from "react";

export default function McpdtSection() {
    return (<section id="mcpdt" className={styles.section}>
            <h2>Marine Corps Permanent Duty Travel (MCPDT)</h2>
            <div className={`${styles.aboutContent} ${styles.infoContent}`}>
                <p>MCPDT is a Java 8 web application that owns multiple web services that are called by
                    other TSO owned systems. It is used to calculate per diem and travel funding lines for PCS and
                    PCA orders.</p>
                <h4>Related Projects:</h4>
                <ul className={accomplishments.accomplishmentsList}>
                    <li><span className={accomplishments.accomplishmentTitle}>End of Year:</span>
                        <span className={accomplishments.accomplishmentDetails}>End of fiscal year process involves the creation
                                    of numerous database scripts to ensure the next FYs funding lines were properly setup.</span>
                    </li>
                    <li><span className={accomplishments.accomplishmentTitle}>DAI Reconciliation:</span>
                        <span className={accomplishments.accomplishmentDetails}>Created a new web service in MCPDT to take in
                                    financial data from DTMS and send a reconciliation funding line to DAI. This improves
                                    MCPDTs financial auditability.</span>
                    </li>
                    <li><span className={accomplishments.accomplishmentTitle}>Updates for MROWS PCS travel:</span>
                        <span className={accomplishments.accomplishmentDetails}>The 'MROWS - Separation Requests (PCS Travel)'
                                    project also caused changes in MCPDT. I updated the application to handle the new logic
                                    flow that existed due to this new process, this was an update to the existing web service.</span>
                    </li>
                    <li><span className={accomplishments.accomplishmentTitle}>Report changes:</span>
                        <span className={accomplishments.accomplishmentDetails}>Yearly report changes to build new tabs
                                    on an excel spreadsheet for the new fiscal year to assist with accounting and estimation of funds.</span>
                    </li>
                    <li><span className={accomplishments.accomplishmentTitle}>Low cost funding changes:</span>
                        <span className={accomplishments.accomplishmentDetails}>Added new funding types to properly account
                                    for low cost order types. This improved financial auditability and estimation of funds.</span>
                    </li>
                </ul>
            </div>
        </section>);
}