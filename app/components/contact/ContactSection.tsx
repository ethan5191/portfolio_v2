import contact from "./contactSection.module.css";
import sectionStyles from "../shared/sectionContent.module.css";
import React from "react";

export default function ContactSection() {
    return (<section id="contact" className={sectionStyles.section}>
            <h2>Contact</h2>
            <div className={`${contact.contactContent} ${sectionStyles.infoContent}`}>
                <h3>Ethan Vanderbur</h3>
                <p>Columbus, Indiana</p>
                <div className={contact.contactMethods}>
                    <p><i className="fas fa-phone"></i> (812)-701-6110</p>
                    <p><i className="fas fa-envelope"></i> <a href="mailto:evanderbur3@gmail.com">E.Vanderbur.3@gmail.com</a></p>
                    <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/ethan-vanderbur-2797aa260/"
                                        target="_blank"
                                        rel="noopener noreferrer">LinkedIn</a>
                    </p>
                    <p><i className="fas fa-file-pdf"></i> <a href="/VanderburEthan_2025_V3.pdf" target="_blank"
                                                              rel="noopener noreferrer">
                        Download my Resume PDF</a></p>
                </div>
            </div>
        </section>);
}