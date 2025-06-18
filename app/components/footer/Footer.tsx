import styles from "./footer.module.css";
import React from "react";

export default function Footer() {
    return(<>
            <footer className={styles.footer}>
                <blockquote className={styles.footerQuote}>
                    "The winner ain't the one with the fastest car, it's the one who refuses to lose."
                    <cite>- Dale Earnhardt</cite>
                </blockquote>
            </footer>
        </>
    )
}