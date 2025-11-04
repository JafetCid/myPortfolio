"use client"

import React from 'react'

import { motion } from "framer-motion";
import ProjectsNavbar from '@/components/ProjectsNavbar';
import { containerVariants } from '@/animations/wave';

const basePath = process.env.NODE_ENV === 'production' ? '/myPortfolio' : '';

export default function Project() {
  return (
    <div>
      <ProjectsNavbar />
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="flex flex-col px-10 gap-2 justify-center items-center h-screen">
        <h2 className="mb-3 font-extrabold text-center text-4xl md:text-5xl">Aplicación Web para Gestión de Inventario</h2>
        <p className="text-center max-w-6xl md:text-lg">
          Esta aplicación web fue desarrollada con Next.js, TypeScript y Tailwind CSS, enfocada en la gestión de inventario la cúal, permite centralizar y automatizar el control de productos y recursos, optimizando los procesos internos y brindando soporte a una
          toma de decisiones más ágil y precisa.
        </p>
        <p className="mb-3 text-center max-w-6xl md:text-lg">
          Dentro de los resultados más destacados fueron: <br />
          Consumo de API REST, Implementación de sistema de filtrado, Diseño responsivo, Implementación de Clean Aquitecture y Exportacion de información a PDF y Excel
        </p>
        <a href="#images" className="flex gap-1 px-3 py-1 items-center border-1 rounded-2xl bg-black text-white animate-bounce">Ver imagenes <i className="bi bi-arrow-down-short"></i></a>
      </motion.div>
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>

      <div id="images" className="flex px-10 pt-20 mb-20 justify-center items-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col gap-10 items-center">
          <motion.img
            src={`${basePath}/inventory.png`}
            alt=""
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            className="w-auto object-contain md:w-96 lg:w-1/2" />
          <div className="flex flex-col lg:flex-row justify-center gap-10">
            <motion.img
              src={`${basePath}/inventory-responsive.png`}
              alt=""
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="w-auto object-contain md:w-96 lg:w-1/2" />
            <motion.img
              src={`${basePath}/inventory-responsive-movil.png`}
              alt=""
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="w-auto object-contain md:w-96" />
          </div>
        </motion.div>
      </div>
      <div className="h-px mb-10 bg-gradient-to-r from-transparent via-white to-transparent"></div>
    </div>
  )
}
