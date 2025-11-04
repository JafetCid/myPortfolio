import React from 'react'

import { motion } from "framer-motion";
import { technologies } from '@/data/aboutMe';
import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/myPortfolio' : '';

export default function AboutMe() {

    const techStack = [...technologies, ...technologies];

    return (
        <div id="aboutMe" className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            ease: "easeOut",
                        }
                    }
                }}
                className="w-full flex flex-col space-y-2 lg:p-8 justify-center items-center">
                <h1 className="text-3xl font-extrabold">Sobre mí</h1>
                <h2 className="text-xl text-center mb-8 bg-gradient-to-r from-sky-400 via-pink-500 to-violet-800 bg-[length:200%_200%] animate-wave">Desarrollador Web Front-End</h2>

                <div className="flex flex-col mb-10 gap-2 items-center lg:px-10">
                    <p className="text-center">
                        Soy un desarrollador Front-End con una mentalidad orientada a la resolución de problemas y un fuerte compromiso con el aprendizaje continuo. Estoy enfocado en construir interfaces de usuario limpias, atractivas y totalmente responsivas utilizando tecnologías modernas como <span className="font-bold">React, Next.js y Tailwind CSS.</span>
                    </p>
                    <p className="text-center">
                        Aplico buena prácticas de diseño y desarrollo eficiente, priorizando la experiencia del usuario, el rendimiento y la accesibilidad.
                        Me destaco por mi atención al detalle y adaptabilida a entornos dinámicos.
                    </p>
                </div>

                <h3 className="font-bold mb-10">Stack técnico:</h3>
                <div className="overflow-hidden w-full py-2">
                    <motion.div
                        animate={{ x: ["0%", "-50.5%"] }}
                        transition={{
                            ease: "linear",
                            duration: 15,
                            repeat: Infinity,
                        }}
                        className="flex gap-4 sm:gap-8 w-max">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center gap-2 min-w-[80px] sm:min-w-[100px]">
                                <Image src={`${basePath}${tech.src}`} width={50} height={50} alt="technologies" />
                                {tech.name}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
