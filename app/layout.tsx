import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {Analytics} from "@vercel/analytics/next"
import "./globals.css";

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
                    <a href="mailto:evanderbur3@gmail.com"><i
                        className="fas fa-envelope"></i> E.Vanderbur.3@gmail.com</a>
                    <span className="separator"> | </span>
                    <a href="https://www.linkedin.com/in/ethan-vanderbur-2797aa260" target="_blank"
                       rel="noopener noreferrer" className="linkedin-link">
                        <i className="fab fa-linkedin-in"></i></a>
                    <span className="separator"> | </span>
                    <span className="phoneNum"><i className="fas fa-phone"></i> 812-701-6110</span>
                </div>
            </nav>
        </header>
        {children}
        <Analytics/>
        </body>
        </html>
    );
}