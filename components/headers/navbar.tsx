import React from "react";
import Link from "next/link"

function NavigationBar() {
    return <header className="sticky top-0 w-full h-full z-20"> 
        <div className="absolute h-full w-full bg-[radial-gradient(transparent_1px,_#0c0a09_1px)] bg-[length:4px_4px] backdrop-blur-sm mask-gradient-to-b"></div>
        <nav className="relative z-30 grid grid-cols-3 lg:grid-cols-12 text-center w-full px-6 py-6 lg:px-12 lg:py-12">
            <h1 className="col-span-3 lg:col-span-12 my-3 lg:mb-6 font-bold text-4xl">
                WPROSTVII
            </h1>
            <Link href="/" className="lg:col-span-4">
                <p className="hover:underline transition-all duration-200">Home Page</p>
            </Link>
            <Link href="/art" className="lg:col-span-4">
                <p className="hover:underline transition-all duration-200">Art</p>
            </Link>
            <Link href="/about" className="lg:col-span-4">
                <p className="hover:underline transition-all duration-200">About Me</p>
            </Link>
        </nav>
    </header>
}

export default NavigationBar
