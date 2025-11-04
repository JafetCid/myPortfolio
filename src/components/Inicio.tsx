import React from 'react'
import Link from 'next/link';

import { motion } from "framer-motion";

const basePath = process.env.NODE_ENV === 'production' ? '/myPortfolio' : '';

export default function Inicio() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      viewport={{ once : false, amount: 0.5 }} // se vuelve a ejecutar cada vez
      className="min-h-screen flex flex-col text-center space-y-2 items-center justify-center">
      <h1 className="text-4xl sm:text-7xl font-bold">
        Hola, Soy Jafet Cid Galicia
      </h1>
      <h2 className="text-xl bg-clip-text bg-gradient-to-r from-sky-400 via-pink-500 to-violet-800 bg-[length:200%_200%] animate-wave">Desarrollador Front-End Creativo</h2>

      <div className="flex flex-wrap justify-center py-6 gap-5 text-white">
        <a href={`${basePath}/files/JafetCidGalicia-CV.pdf`} download className="px-5 py-2 bg-black rounded-full hover:-translate-y-1 transition-all duration-300">Dowload CV <i className="bi bi-download"></i></a>
        <Link href={"#project"} className="px-5 py-2 bg-black rounded-full hover:-translate-y-1 transition-all duration-300"><i className="bi bi-code-slash pr-1"></i>Ver mis proyectos</Link>
      </div>
    </motion.section>
  )
}