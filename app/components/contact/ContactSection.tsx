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
                    <p>Phone: 812-701-6110</p>
                    <p>Email: <a href="mailto:evanderbur3@gmail.com">evanderbur3@gmail.com</a></p>
                    <p>Lets Connect: <a href="https://www.linkedin.com/in/ethan-vanderbur-2797aa260/"
                                        target="_blank"
                                        rel="noopener noreferrer">LinkedIn</a>
                    </p>
                    <p>Resume: <a href="/VanderburEthan_2025.pdf" target="_blank"
                                  rel="noopener noreferrer">
                        Download my Resume PDF</a></p>
                </div>
            </div>
        </section>);
}