'use client'
import Link from 'next/link'
import React from 'react'

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="fixed w-full py-5 px-5 text-black bg-white md:px-16 z-10">
            <div className="flex justify-between">
                <h1 className="font-bold text-xl lg:text-2xl">Jafet Cid</h1>
                <div className="hidden items-center gap-5 md:flex">
                    <Link href="#home" className="relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300">Inicio</Link>
                    <Link href="#aboutMe" className="relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300">Sobre mí</Link>
                    <Link href="#project" className="relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300">Proyectos</Link>
                    <Link href="#contact" className="relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300">Contacto</Link>
                </div>
            </div>
        </motion.nav>
    )
}
