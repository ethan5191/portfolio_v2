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
                    <h2>About Me</h2>
                    {/* Content for your About section */}
                    <p>This is where you'll talk about yourself.</p>
                    <div style={{ height: '400px', backgroundColor: '#eee', margin: '20px', padding: '20px' }}>
                        About Me Content Placeholder
                    </div>
                </section>

                {/* Projects Section */}
                <section id="work" className={styles.section}>
                    <h2>My Work / Projects</h2>
                    {/* Content for your Projects section */}
                    <p>Showcase your best projects here.</p>
                    <div style={{ height: '400px', backgroundColor: '#ddd', margin: '20px', padding: '20px' }}>
                        Projects Content Placeholder
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className={styles.section}>
                    <h2>Skills</h2>
                    {/* Content for your Skills section */}
                    <p>List your technical skills.</p>
                    <div style={{ height: '400px', backgroundColor: '#eee', margin: '20px', padding: '20px' }}>
                        Skills Content Placeholder
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className={styles.section}>
                    <h2>Contact</h2>
                    {/* Content for your Contact section */}
                    <p>How to get in touch.</p>
                    <div style={{ height: '400px', backgroundColor: '#ddd', margin: '20px', padding: '20px' }}>
                        Contact Content Placeholder
                    </div>
                    {/* Add some padding to the bottom of the last section so the last content isn't hidden by a potential footer */}
                </section>

            </div> {/* End .mainContentAndHome */}

            {/* This is your sticky right sidebar navigation */}
            {/* It's a sibling of the main scrolling column */}
            {/* Using <aside> for semantic correctness */}
            <aside className={styles.sidebarNav}>
                {/* Content previously in .secondSection */}
                <div><a href="#about">ABOUT</a></div>
                <div><a href="#work">WORK</a></div>
                <div><a href="#skills">SKILLS</a></div>
                <div><a href="#contact">CONTACT</a></div>
            </aside>

        </div>
    );
}