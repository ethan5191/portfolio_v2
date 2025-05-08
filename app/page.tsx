import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.pageBodyWrapper}>

            {/* This is the main column that contains ALL your sections (Home, About, Work, etc.) and will scroll */}
            {/* It sits on the left side and takes up the primary content area */}
            <div className={styles.mainContentAndHome}>

                <section id="home" className={styles.home}>
                    <h1>Ethan Vanderbur</h1>
                    <span>Experienced full-stack Java web developer working with Java, Spring, SQL, and Soap web services.</span>
                </section>

                {/* All your other sections go here, stacked vertically below the home section */}

                {/* About Me Section */}
                <section id="about" className={styles.section}>
                    <div className={styles.aboutContent}>
                        <h2>About Me</h2>
                        <p>I transitioned to software development in my sophomore year of college. Having realized
                            graphic design wasn't my path, my high school experience with Visual Basic led me to explore
                            Java and C/C#. I was immediately drawn to coding, finding my stride particularly with
                            Java.</p>
                        <p>My subsequent experience as a full-stack Java developer in the United States Marine Corps has
                            deeply reinforced what I value most in software development: solving challenging problems,
                            building effective systems, and contributing to a meaningful cause. The systems my team
                            supports directly impact Marines by ensuring accurate and timely pay, a mission I find
                            particularly rewarding.</p>
                        <p>My role provided opportunities to apply my growing expertise across various impactful
                            projects, from developing new modules to facilitating critical system transitions. These
                            experiences were instrumental in deepening my proficiency with Java, Spring 5, Oracle SQL,
                            and Soap web services.</p>
                        <p>In my next position, I am seeking a mid-level engineer role where I can focus extensively on
                            daily development with Java, Spring, and SQL. Although I am fully comfortable with the
                            responsibilities of a senior developer, I am most energized by hands-on problem-solving
                            within the code itself, a type of work I have had less opportunity to engage in during
                            recent senior roles.</p>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="work" className={styles.section}>
                    <div className={styles.aboutContent}>
                        <h2>My Work / Projects</h2>
                        <h3>MROWS - Travel Claim Module</h3>
                        <p><b>Description</b>: Developed a significant module within the MROWS system to automate the
                            submission and reconciliation of travel claims through integration with an external system
                            (DTMS).</p>
                        <p><b>My Role</b>: Collaborated on the full-stack design and implementation. My key
                            contributions included creating new database architecture, developing both the user
                            interface elements (UI) and backend processing logic, building the outgoing SOAP web service
                            integration with DTMS, and designing the incoming reconciliation/rejection web service that
                            received payment information.</p>
                        <p><b>Technologies</b>: Java, Spring 5 MVC, jQuery, SOAP, Oracle SQL, JSPs.</p>
                        <p><b>Impact & Results</b>: This project significantly streamlined the travel claim submission
                            process, reducing a manual workflow that previously took weeks down to just a couple of
                            hours before a Marine received payment. Between 2019 and 2024, the module successfully
                            processed an average of 2300 travel claims annually.</p>

                        <h3>MROWS - SABRS to DAI Transition</h3>
                        <p><b>Description</b>: Led the technical effort to transition the MROWS system's financial
                            funding information from an older accounting system (SABRS) to the Department of Defense's
                            official accounting system (DAI).</p>
                        <p><b>My Role</b>: Served as the main developer on this critical transition project.</p>
                        <p><b>Technologies</b>: Java, Spring 5 MVC, Quartz Scheduler, Oracle SQL, JSPs</p>
                        <p><b>Technical Details</b>: Designed and implemented the automated process for creating DAI
                            records containing funding information and securely transmitting this data via XML. This
                            involved setting up a robust background process with two distinct scheduled jobs: one
                            running every 10 minutes to build the DAI records and another executing every 4 hours to
                            generate and send the XML file.</p>
                        <p><b>Impact & Results</b>: Successfully enabled MROWS to integrate with the DoD's standard
                            accounting system, significantly streamlining the audit process for financial data
                            originating from MROWS. This transition has been a contributing factor to the Marine Corps
                            achieving clean financial audits for the past two years.</p>


                        <h3>MCPDT - Funding Structure Transition (LOA to SFIS SLOA)</h3>
                        <p><b>Description</b>: Updated the funding allocation process within the MCPDT system to
                            transition from a legacy Line of Accounting (LOA) structure to the standardized SFIS Line of
                            Accounting (SLOA). </p>
                        <p><b>My Role</b>: Served as the sole developer responsible for designing and implementing this
                            new logical process.</p>
                        <p><b>Technologies</b>: Java, Oracle SQL.</p>
                        <p><b>Technical Details</b>: Developed the core logic to integrate the new, annually generated
                            SLOA data with each order created in MCPDT, ensuring accurate financial tracking according
                            to the updated structure.</p>
                        <p><b>Project Status</b>: Ongoing, with an expected completion date of September 30, 2025.</p>

                        <h3>MROWS - Separation Requests (PCS Travel)</h3>
                        <p><b>Description</b>: Developed an entirely new module within the MROWS system to handle
                            financial processing for separation requests related to Permanent Change of Station (PCS)
                            travel.</p>
                        <p><b>My Role</b>: Served as the sole developer responsible for the full lifecycle of this new
                            module.</p>
                        <p><b>Technologies</b>: Java, jQuery, Spring 5, Oracle SQL, SOAP Web Services.</p>
                        <p><b>Technical Details</b>: Created the complete new module, including designing the user
                            interface (UI), developing the backend processes, and establishing a new database structure.
                            Implemented the workflow to send these separation requests to the MCPDT system to obtain the
                            official funding line and ensure that funding information was transmitted to the accounting
                            system (DAI).</p>
                        <p><b>Impact & Benefit</b>: Provided significantly more accurate financial accounting for money
                            spent on the return travel portion of PCS orders. Prior to this feature, it was not possible
                            to precisely track these specific expenditures within MROWS PCS orders. This new module
                            filled that gap, improving financial visibility.</p>

                        <h3>MROWS & MCPDT - SOAP Web Services Development & Enhancement</h3>
                        <p><b>Description</b>: A collection of projects focused on developing and enhancing critical
                            SOAP web services to enable data exchange and process automation between the MROWS and MCPDT
                            systems, and integrating with external financial systems.</p>
                        <p><b>My Role</b>: Over the years, I created four new web services (three within MROWS and one
                            within MCPDT) and updated the business logic for existing SOAP web services in MCPDT. </p>
                        <p><b>Technologies</b>: Java, SOAP Web Services, Oracle SQL. </p>
                        <p><b>Technical Details / Examples of Services</b>:
                            Developed a web service enabling MROWS users to securely search for and retrieve specific
                            order information from MCPDT based on user permissions.</p>
                        <p>Created a new web service in MCPDT designed to accept document details and payment amounts.
                            Upon finding a matching order, this service automatically sent reconciliation information to
                            the DAI accounting system to improve financial accuracy. </p>
                        <p><b>Impacts & Benefits</b>: The benefits of these services varied, each contributing to
                            improved system functionality and data flow:
                            The MROWS to MCPDT search service enhanced audit compliance by allowing us to centralize
                            user access through MROWS, enabling the removal of direct end-user access to MCPDT.</p>
                        <p>The MCPDT web service integrating with DTMS improved financial auditability by automating
                            the update of paid amounts within the DAI accounting system.</p>

                        <h3>Full-Stack Learning Application (React, Hibernate, MySql)</h3>
                        <p><b>Description</b>: A personal full-stack web application developed to gain hands-on
                            experience with modern frontend and backend technologies.</p>
                        <p><b>Technologies</b>: React, Java 17, Spring Boot 6, Spring Data JPA (Hibernate), RESTful
                            APIs, MySQL, Tomcat (embedded).</p>
                        <p><b>Key Features & Progress</b>:

                            Developed a React frontend featuring multiple views capable of fetching and displaying data
                            from the backend.
                            Built a Java 17 backend using Spring Boot 6, implementing RESTful APIs via Spring
                            Controllers.
                            Integrated the backend with a MySQL database utilizing Hibernate (Spring Data JPA) for
                            object-relational mapping.
                            Created backend logic for data processing, including features for creating new records and
                            managing data transitions between different tables.</p>
                        <p><b>Purpose & Learning</b>: This ongoing project serves as a practical environment to deepen
                            my proficiency in key modern technologies and architectural patterns, particularly focusing
                            on React, RESTful API design, and Hibernate/JPA. It showcases my commitment to continuous
                            learning and expanding my technical skillset.</p>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className={styles.section}>
                    <h2>Skills</h2>
                    {/* Content for your Skills section */}
                    <p>List your technical skills.</p>
                    <div style={{height: '400px', backgroundColor: '#eee', margin: '20px', padding: '20px'}}>
                        Skills Content Placeholder
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className={styles.section}>
                    <h2>Contact</h2>
                    {/* Content for your Contact section */}
                    <p>How to get in touch.</p>
                    <div style={{height: '400px', backgroundColor: '#ddd', margin: '20px', padding: '20px'}}>
                        Contact Content Placeholder
                    </div>
                    {/* Add some padding to the bottom of the last section so the last content isn't hidden by a potential footer */}
                </section>

            </div>
            {/* End .mainContentAndHome */}

            {/* It's a sibling of the main scrolling column */}
            <aside className={styles.sidebarNav}>
                <div><a href="#about">ABOUT</a></div>
                <div><a href="#work">WORK</a></div>
                <div><a href="#skills">SKILLS</a></div>
                <div><a href="#contact">CONTACT</a></div>
            </aside>

        </div>
    );
}