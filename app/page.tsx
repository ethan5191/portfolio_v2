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
                    <h2>My Work / Projects</h2>
                    {/* Content for your Projects section */}
                    <p>Showcase your best projects here.</p>
                    <div style={{height: '400px', backgroundColor: '#ddd', margin: '20px', padding: '20px'}}>
                        Projects Content Placeholder
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