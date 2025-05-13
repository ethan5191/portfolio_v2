import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {Analytics} from "@vercel/analytics/next"
import "./globals.css";
import React from "react";
import styles from "@/app/page.module.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Ethan Vanderbur - Portfolio',
    description: 'Full-Stack Java web developer portfolio',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>Ethan Vanderbur - Portfolio</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <header>
            <a href="#home" className="header-home-link">
                <i className="fas fa-home"></i>
            </a>
            <nav>
                <div>
                    <a href="#about">ABOUT</a>
                    <a href="#mrows">MROWS</a>
                    <a href="#mcpdt">MCPDT</a>
                    <a href="#work">WORK</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#contact">CONTACT</a>
                </div>
            </nav>
        </header>
        {children}
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