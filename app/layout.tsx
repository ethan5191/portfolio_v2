import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
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
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <header>
            <nav>
                <h3>Full-Stack Java Developer</h3>
                <div>
                    <span>evanderbur3@gmail.com</span> |
                    <a href="https://www.linkedin.com/in/ethan-vanderbur-2797aa260" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                    <span>812-701-6110</span>
                </div>
            </nav>
        </header>
        {children}
        </body>
        </html>
    );
}
