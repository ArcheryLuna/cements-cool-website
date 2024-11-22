import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { ThemeProvider } from "@/components/theme-provider"
import NavigationBar from "@/components/headers/navbar";

export const metadata: Metadata = {
    title: "wprostvii",
    description: "2D digital artist sells art here :)",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`text-primary antialiased`}
        >
             <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <NavigationBar/>
                {children}
            </ThemeProvider>
        </body>
        </html>
    );
}
