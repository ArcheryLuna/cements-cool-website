import React from "react";
import Link from "next/link"

function NavigationBar() {
    return <nav className="grid grid-cols-3 lg:grid-cols-12 text-center px-6 py-6 lg:px-12 lg:py-12">
        <h1 className="col-span-3 lg:col-span-12 my-3 lg:mb-6 font-bold text-4xl">
            WPROSTVII
        </h1>
        <Link href="/" className="lg:col-span-4">
            <p>Home Page</p>
        </Link>
        <Link href="/art" className="lg:col-span-4">
            <p>Art</p>
        </Link>
        <Link href="/about" className="lg:col-span-4">
            <p>About Me</p>
        </Link>
    </nav>
}

export default NavigationBar