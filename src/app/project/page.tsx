"use client"
import React from 'react'
import { motion } from "framer-motion";
import ProjectsNavbar from '@/components/ProjectsNavbar';

const basePath = process.env.NODE_ENV === 'production' ? '/myPortfolio' : '';

export default function Project() {
  return (
    <div>
      <ProjectsNavbar/>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="flex flex-col px-10 gap-2 justify-center items-center text-white h-screen">
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
    </div>
  )
}
