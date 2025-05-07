import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.home}>
                <h1>Ethan Vanderbur</h1>
                <span>Experienced developer in Java, Spring, SQL, and Soap web services.</span>
            </div>
            <div className={styles.secondSection}>
                <div>ABOUT</div>
                <div>WORK</div>
                <div>SKILLS</div>
                <div>CONTACT</div>
            </div>
        </div>
    );
}
