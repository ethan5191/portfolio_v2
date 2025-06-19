import contact from "./contactSection.module.css";
import React from "react";
import sectionBase from "@/app/components/shared/sectionBase.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFilePdf, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import styles from "@/app/components/home/HomeSection.module.css";

export default function ContactSection() {
    return (<section id="contact" className={`${sectionBase.sectionBase} ${contact.contentSection}`}>
        <h2>Contact</h2>
        <div>
            <h1 className={styles.myName}>Ethan Vanderbur</h1>
            <p>Columbus, Indiana</p>
            <div className={contact.contactMethods}>
                <p><FontAwesomeIcon icon={faPhone}/> (812)-701-6110</p>
                <p><FontAwesomeIcon icon={faEnvelope}/> <a
                    href="mailto:evanderbur3@gmail.com">E.Vanderbur.3@gmail.com</a></p>
                <p><FontAwesomeIcon icon={faLinkedin}/> <a href="https://www.linkedin.com/in/ethan-vanderbur-2797aa260/"
                                                           target="_blank"
                                                           rel="noopener noreferrer">LinkedIn</a>
                </p>
                <p><FontAwesomeIcon icon={faFilePdf}/> <a href="/VanderburEthan_2025_V3.pdf" target="_blank"
                                                          rel="noopener noreferrer">
                    Download my Resume PDF</a></p>
            </div>
        </div>
    </section>);
}