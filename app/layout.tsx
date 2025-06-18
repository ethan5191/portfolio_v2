// app/layout.tsx
'use client';

import {Geist, Geist_Mono} from "next/font/google";
import {Analytics} from "@vercel/analytics/next"
import "./globals.css";
import styles from "@/app/page.module.css";
import React, {useEffect} from 'react';
import ScrollIndicator from "@/app/components/scroll/ScrollIndicator";
import './variables.css';
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

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
        <Header/>
        <main className={styles.mainContentArea}>
            {children}
        </main>
        <Analytics/>
        <ScrollIndicator/>
        <Footer/>
        </body>
        </html>
    );
}