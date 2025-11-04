import React from 'react'

import { motion } from "framer-motion";
import { projects } from '@/data/projects';
import Link from 'next/link';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Projects() {
  return (
    <section id="project" className="flex flex-col gap-10 py-16 items-center min-h-screen">
      <h1 className="text-3xl font-extrabold">Proyectos</h1>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once : false, amount: 0.5 }} // se vuelve a ejecutar cada vez
          className="flex justify-center">
          <div className={`flex flex-col justify-center items-center gap-10 p-10 max-w-5xl md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileHover={{ scale: 1.05 }}
              viewport={{ once : false, amount: 0.5 }} // se vuelve a ejecutar cada vez
              whileInView="visible"
              className="flex md:w-1/2 justify-center">{project.img}</motion.div>
            <div className="flex w-full h-full md:w-0">
              <span className="border w-full"></span>
            </div>
            <div className="flex flex-col gap-2 md:w-1/2">
              <h2 className="text-xl font-bold ">{project.title}</h2>
              <p className="line-clamp-5">{project.description}</p>
              <p className="flex flex-wrap gap-3">{project.technologies}</p>
              <div className="flex py-2">
                <Link href={project.route} className="px-3 py-1 bg-black rounded-md text-white hover:-translate-y-1 transition-all duration-300">Ver Proyecto</Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
