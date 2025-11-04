import Link from 'next/link'
import React from 'react'

import { motion } from "framer-motion";

export default function ProjectsNavbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="fixed w-full py-5 px-5 text-black bg-white md:px-16 z-10">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <h1 className="font-bold text-xl lg:text-2xl">Jafet Cid</h1>
                </div>
                <div className="flex items-center gap-5 pr-5 md:pr-0">
                    <Link href="/" prefetch className="relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300">Inicio</Link>
                </div>
            </div>
        </motion.nav>
    )
}
