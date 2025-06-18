'use client';

import { Inter } from "next/font/google";
import {Analytics} from "@vercel/analytics/next"
import "./globals.css";
import React from 'react';
import ScrollIndicator from "@/app/components/scroll/ScrollIndicator";
import './variables.css';
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" className={inter.variable}>
        <head>
            <title>Ethan Vanderbur - Portfolio</title>
            <meta name="description" content="Full-Stack Java web developer portfolio"/>
        </head>
        <body className={`antialiased dark-mode`}>
        <Header/>
        <main>
            {children}
        </main>
        <Analytics/>
        <ScrollIndicator/>
        <Footer/>
        </body>
        </html>
    );
}