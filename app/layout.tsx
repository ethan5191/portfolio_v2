// app/layout.tsx
'use client';

import {Geist, Geist_Mono} from "next/font/google";
import {Analytics} from "@vercel/analytics/next"
import "./globals.css";
import styles from "@/app/page.module.css";
import React, {useEffect} from 'react';


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    useEffect(() => {
        // Use the styles object within a template literal to get the hashed class name string
        // document.querySelector needs the exact string from the DOM
        const hamburgerButton = document.querySelector(`.${styles.hamburgerIcon}`) as HTMLButtonElement | null; // Corrected line

        const body = document.body; // Reference to the body element

        // Check if the button was found before proceeding
        if (hamburgerButton) {
            const toggleMobileNav = () => {
                // This string must exactly match the class name used inside :global() in your CSS
                body.classList.toggle('mobile-nav-open');
            };

            // Add the click event listener to the found button
            hamburgerButton.addEventListener('click', toggleMobileNav);

            // Cleanup function: Remove the event listener when the component unmounts
            return () => {
                hamburgerButton.removeEventListener('click', toggleMobileNav);
            };
        }
    }, [styles.hamburgerIcon]);

    return (
        <html lang="en">
        <head>
            <title>Ethan Vanderbur - Portfolio</title>
            <meta name="description" content="Full-Stack Java web developer portfolio"/>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className={styles.pageHeader}>
            <a href="#home">
                <i className="fas fa-home"></i>
            </a>
            <nav className={styles.mainNavDesktop}>
                {/*<a href="#about">ABOUT</a>*/}
                <a href="#mrows">MROWS</a>
                <a href="#mcpdt">MCPDT</a>
                <a href="#work">WORK</a>
                <a href="#skills">SKILLS</a>
                <a href="#contact">CONTACT</a>
            </nav>
            <button className={styles.hamburgerIcon} aria-label="Toggle navigation">
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </button>
        </header>
        <nav className={styles.mobileNavPanel}>
            {/*<a href="#about">ABOUT</a>*/}
            <a href="#mrows">MROWS</a>
            <a href="#mcpdt">MCPDT</a>
            <a href="#work">WORK</a>
            <a href="#skills">SKILLS</a>
            <a href="#contact">CONTACT</a>
        </nav>
        <main className={styles.mainContentArea}>
            {children}
        </main>
        <Analytics/>
        <footer className={styles.footer}>
            <blockquote className={styles.footerQuote}>
                "The winner ain't the one with the fastest car, it's the one who refuses to lose."
                <cite>- Dale Earnhardt</cite>
            </blockquote>
        </footer>
        </body>
        </html>
    );
}