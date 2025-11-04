import React from 'react'

import { motion } from "framer-motion";
import { cardVariants } from '@/animations/card';

export default function Contact() {
    return (
        <div id="contact" className="flex flex-col space-y-2 justify-center items-center min-h-screen">
            <h1 className="text-3xl font-extrabold">Conectemos</h1>
            <h2 className='text-center text-gray-400 mb-10'>No dudes en contactarme a través de cualquiera de los canales que aparecen a continuación.</h2>
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.6 }}
                className='grid gap-5 w-full max-w-3xl mb-10 grid-cols-1 md:grid-cols-2 md:px-10'>
                <a href="mailto:jafetcid9@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center px-5 py-3 gap-3 border shadow-xl rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-1">
                    <motion.i
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.6 }}
                        className="bi bi-envelope-fill text-2xl"></motion.i>
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.6 }}
                    >
                        <h2>Email</h2>
                        <span className="text-gray-400">jafetcid9@gmail.com</span>
                    </motion.div>
                </a>
                <a href="https://github.com/JafetCid" target="_blank" rel="noopener noreferrer" className="flex items-center px-5 py-3 gap-3 border shadow-xl rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-1">
                    <motion.i
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.6 }}
                        className="bi bi-github text-2xl"></motion.i>
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.6 }}
                    >
                        <h2>GitHub</h2>
                        <span className="text-gray-400">JafetCid</span>
                    </motion.div>
                </a>
                <a href="https://www.linkedin.com/in/jafet-cid-galicia-979418372" target="_blank" rel="noopener noreferrer" className="flex items-center px-5 py-3 gap-3 border shadow-xl rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-1">
                    <motion.i
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.6 }}
                        className="bi bi-linkedin text-2xl"></motion.i>
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.6 }}
                    >
                        <h2>LinkedInd</h2>
                        <span className="text-gray-400">Jafet Cid Galicia</span>
                    </motion.div>
                </a>
                <a className="flex items-center px-5 py-2 gap-3 border shadow-xl rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-1">
                    <motion.i
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        className="bi bi-discord text-2xl"></motion.i>
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <h2>Discord</h2>
                        <span className="text-gray-400">jafet._.cid</span>
                    </motion.div>
                </a>
            </motion.div>
            <div className="px-3 py-1 bg-black rounded-md text-white cursor-pointer hover:-translate-y-1 transition-all duration-300">
                <i className="bi bi-send-fill pr-2"></i>
                <a href="mailto:jafetcid9@gmail.com" target="_blank" rel="noopener noreferrer">Di Hola</a>
            </div>
        </div>
    )
}
