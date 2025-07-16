"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const basePath = process.env.NODE_ENV === 'production' ? '/myPortfolio' : '';

export default function Project() {
  return (
    <div>
      <nav className="flex w-full top-0 left-0 py-4 justify-between md:!fixed md:px-10 z-50">
        <div className="flex items-center gap-3 pl-5 md:pl-0 md:gap-5">
          <i className="bi bi-code-slash text-white text-xl lg:text-2xl"></i>
          <h1 className="text-white font-bold text-xl lg:text-3xl">Jafet Cid</h1>
        </div>
        <div className="flex items-center gap-5 text-white pr-5 md:pr-0">
          <Link href="/" prefetch className="relative focus:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300">Inicio</Link>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="flex flex-col px-10 gap-2 justify-center items-center text-white min-h-screen">
        <h2 className="mb-3 font-extrabold text-center text-4xl md:text-5xl">Aplicación Web para Gestión de Inventario</h2>
        <p className="xl:w-1/2 text-center md:text-lg">
          Esta aplicación web fue desarrollada con Next.js y Tailwind CSS, enfocada en la gestión de inventario.
          Permite centralizar y automatizar el control de productos y recursos, optimizando los procesos internos y brindando soporte a una
          toma de decisiones más ágil y precisa.
        </p>
        <p className="mb-3 xl:w-1/2 text-center md:text-lg">
          El objetivo principal fue brindar una herramienta accesible, intuitiva y eficiente que mejore la toma de decisiones, incremente la productividad
          operativa y aporte valor estratégico a la gestión empresarial.
        </p>
        <a href="#images" className="flex gap-1 px-3 py-0.5 items-center border-1 rounded-2xl bg-white/10 animate-bounce">Ver imagenes <i className="bi bi-arrow-down-short"></i></a>
      </motion.div>
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>

      <div id="images" className="flex px-10 pt-20 mb-20 justify-center items-center min-h-screen">
        <div className="flex flex-col gap-10 items-center">
          <img
            src={`${basePath}/inventory.png`} alt="" className="w-auto object-contain md:w-96 lg:w-1/2" />
          <div className="flex flex-col lg:flex-row justify-center gap-10">
            <img src={`${basePath}/inventory-responsive.png`} alt="" className="w-auto object-contain md:w-96 lg:w-1/2" />
            <img src={`${basePath}/inventory-responsive-movil.png`} alt="" className="w-auto object-contain md:w-96" />
          </div>
        </div>
      </div>
      <div className="h-px mb-10 bg-gradient-to-r from-transparent via-white to-transparent"></div>

      <footer className="relative px-10">
        <div className="flex gap-3 justify-center items-center">
          <a href="https://github.com/JafetCid" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-all duration-300 hover:-translate-y-1"><i className="bi bi-github text-2xl"></i></a>
          <a href="mailto:jafetcid9@gmail.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-all duration-300 hover:-translate-y-1"><i className="bi bi-envelope-fill text-2xl"></i></a>
        </div>
        <p className="text-center w-full">
          © 2025 JafetCid - Todos los derechos reservados.
        </p>
        <p className="mb-3 text-center">Desarrollado por Jafet Cid Galicia</p>
        <p className="text-xs text-gray-500 text-center">
          <a href="https://iconscout.com/free-illustration/developer-2080968_1750498" target="_blank" rel="noopener noreferrer" className="underline">
            Desarrollador
          </a> por
          <a href="https://iconscout.com/contributors/manypixels-gallery" target="_blank" rel="noopener noreferrer" className="underline ml-1">
            Manypixels Gallery
          </a> en
          <a href="https://iconscout.com" target="_blank" rel="noopener noreferrer" className="underline ml-1">
            IconScout
          </a> –
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline ml-1">
            Licencia CC BY 4.0
          </a>
        </p>
        <p className="mb-2 text-xs text-gray-500 text-center">
          <a href="https://iconscout.com/es/free-illustration/hombre-desarrollando-sitio-web-en-escritorio-2040889_1721885" target="_blank" rel="noopener noreferrer" className="underline">
            Hombre desarrollando sitio web en el escritorio
          </a> por
          <a href="https://iconscout.com/contributors/woobrodesign" target="_blank" rel="noopener noreferrer" className="underline ml-1">
            WOOBRO LTD
          </a> en
          <a href="https://iconscout.com" target="_blank" rel="noopener noreferrer" className="underline ml-1">
            IconScout
          </a> –
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline ml-1">
            Licencia CC BY 4.0
          </a>
        </p>
      </footer>
    </div>
  )
}
