import Link from 'next/link'
import React from 'react'

export default function ProjectsNavbar() {
    return (
        <nav className="fixed w-full top-0 left-0 py-4 md:px-10 z-50">
            <div className="flex justify-between">
                <div className="flex items-center gap-3 pl-5 md:pl-0 md:gap-5">
                    <i className="bi bi-code-slash text-white text-xl lg:text-2xl"></i>
                    <h1 className="text-white font-bold text-xl lg:text-3xl">Jafet Cid</h1>
                </div>
                <div className="flex items-center gap-5 text-white pr-5 md:pr-0">
                    <Link href="/" prefetch className="relative focus:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300">Inicio</Link>
                </div>
            </div>
        </nav>
    )
}
