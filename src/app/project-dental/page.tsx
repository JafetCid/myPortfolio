"use client"
import React from 'react'
import { motion } from "framer-motion";
import ProjectsNavbar from '@/components/ProjectsNavbar'

const basePath = process.env.NODE_ENV === 'production' ? '/myPortfolio' : '';

export default function Dental () {
    return (
        <div>
            <ProjectsNavbar />

            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="flex flex-col px-10 gap-2 justify-center items-center text-white min-h-screen">
                <h2 className="mb-3 font-extrabold text-center text-4xl md:text-5xl">Aplicación Móvil DentalHealth</h2>
                <p className="xl:w-1/2 text-center md:text-lg">
                    Esta aplicación fue diseñada para optimizar la administración y comunicación dentro de un consultorio dental,
                    ofreciendo una experiencia práctica tanto para el dentista como para los pacientes.
                </p>
                <p className="xl:w-1/2 text-center md:text-lg">Entre sus principales funcionalidades se incluyen:</p>
                <p className="mb-3 xl:w-1/2 text-center md:text-lg">
                    📅 Agendamiento de citas,
                    👥 Gestión de pacientes,
                    🦷 Historial médico,
                    🔔 Notificaciones,
                    🎁 Promociones.
                </p>
                <a href="#images" className="flex gap-1 px-3 py-0.5 items-center border-1 rounded-2xl bg-white/10 animate-bounce">Ver imagenes <i className="bi bi-arrow-down-short"></i></a>
            </motion.div>
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>

            <div id="images" className="flex px-10 pt-20 mb-20 justify-center items-center min-h-screen">
                <div className="flex flex-col gap-10 items-center">
                    <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-10 [&>img]:w-auto [&>img]:md:w-56">
                        <img src={`${basePath}/dental/Inicio.jpeg`} alt="Inicio" />
                        <img src={`${basePath}/dental/Login.jpeg`} alt="Login" />
                        <img src={`${basePath}/dental/Home.jpeg`} alt="Home" />
                        <img src={`${basePath}/dental/Perfil.jpeg`} alt="Perfil" />
                        <img src={`${basePath}/dental/Agendar-Cita.jpeg`} alt="Agendar cita" />
                    </div>
                </div>
            </div>
            <div className="h-px mb-10 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
    )
}
