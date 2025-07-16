"use client"
import { validationsForm } from "@/utils/validationsForm";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type CardProps = {
  id: string,
  title: string,
  img?: React.ReactNode,
  description: string,
  route: string,
}

type FormData = {
  name: string;
  email: string;
  message: string;
};

const basePath = process.env.NODE_ENV === 'production' ? '/myPortfolio' : '';

export default function Home() {

  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  const Card = [
    {
      id: "1",
      title: "Aplicaión Web para Gestión de Inventario",
      img: <img src={`${basePath}/inventory.png`} alt="inventory" />,
      description: "Aplicación web desarrollada con Next.js y Tailwind CSS, enfocada en la gestión de inventario. Permite centralizar y automatizar el control de productos y recursos, optimizando los procesos internos y brindando soporte a una toma de decisiones más ágil y precisa.",
      route: "/project",
    },
    {
      id: "2",
      title: "En proceso...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      route: "#",
    },
    {
      id: "3",
      title: "En proceso...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
      route: "#",
    },
  ];

  const texts = [
    "¿Tienes un proyecto o una vacante? ¡Conversemos!",
  ];

  useEffect(() => {
    if (typing) {
      // Tipo letra a letra
      if (displayedText.length < texts[index].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(texts[index].slice(0, displayedText.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        // Esperar un momento y luego borrar el texto
        const timeout = setTimeout(() => {
          setTyping(false);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      // Borra letra a letra
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Cambiar al siguiente texto
        setIndex((prev) => (prev + 1) % texts.length);
        setTyping(true);
      }
    }
  }, [displayedText, typing, index]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof FormData) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el envío por defecto
    // Llamada a la función de validación
    const validationErrors = validationsForm(formData);

    // Si hay errores, los mostramos y detenemos la acción
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Si no hay errores, permitimos que continue
    e.currentTarget.submit();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <nav className="flex w-full py-4 justify-between md:!fixed md:px-10 z-50 nav-Color">
        <div className="flex items-center gap-3 pl-5 md:pl-0 md:gap-5">
          <i className="bi bi-code-slash text-white text-xl lg:text-2xl"></i>
          <h1 className="text-white font-bold text-xl lg:text-3xl">Jafet Cid</h1>
        </div>
        <div className="hidden items-center gap-5 text-white md:flex">
          <Link href="#home" className="relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300">Inicio</Link>
          <a href="#aboutMe" className="relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300">Sobre mí</a>
          <a href="#project" className="relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300">Proyectos</a>
          <a href="#contact" className="relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300">Contacto</a>
        </div>
      </nav>

      <main id="home" className="flex flex-col mb-10 pt-20 px-5 gap-10 justify-around items-center md:flex-row min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.5 }} // activa solo una vez al estar al 50% en pantalla
          className="flex flex-col gap-2 md:w-96">
          <h2 className="font-extrabold text-4xl md:text-5xl">FRONTEND</h2>
          <h2 className="font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-transparent">DEVELOPER</h2>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className="w-auto">
            <p className="md:text-lg">Hola, soy Jafet, un desarrollador frontend enfocado en crear interfaces modernas, accesibles y optimizadas para la web.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="flex flex-wrap gap-2 mb-2 text-white">
            <span className="px-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 transition-transform duration-300 hover:-translate-y-1">React</span>
            <span className="px-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 transition-transform duration-300 hover:-translate-y-1">Next</span>
            <span className="px-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 transition-transform duration-300 hover:-translate-y-1">TypeScript</span>
            <span className="px-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 transition-transform duration-300 hover:-translate-y-1">Tailwind CSS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
          >
            <a href={`${basePath}/files/JafetCidGalicia-CV.pdf`} download className="cursor-pointer border-1 border-white rounded-2xl px-5 py-1 transition-transform duration-300 hover:-translate-y-1">Dowload CV <i className="bi bi-download"></i></a>
          </motion.div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          src={`${basePath}/developer.svg`} alt="img" className="w-96 md:w-72 lg:w-96" />
      </main>

      <section id="aboutMe" className="flex flex-col mb-10 gap-10 justify-center items-center min-h-screen lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.5 }} // activa solo una vez al estar al 50% en pantalla
          className="flex flex-col gap-5 px-10 lg:w-2/4">
          <h2 className="font-extrabold text-center text-4xl md:text-5xl lg:text-start">Sobre mí</h2>
          <p className="md:text-lg text-center lg:text-start">
            Soy un desarrollador Front-End con una mentalidad orientada a la resolución de problemas
            y un fuerte compromiso con el aprendizaje continuo. Estoy enfocado en construir interfaces
            de usuario limpias, atractivas y totalmente responsivas utilizando tecnologías modernas
            como React, Next.js y Tailwind CSS.
          </p>
          <p className="md:text-lg text-center lg:text-start">
            Aplico buenas prácticas de diseño y desarrollo eficiente,
            priorizando la experiencia del usuario, el rendimiento y la accesibilidad.
            Me destaco por mi atención al detalle, capacidad para trabajar en equipo y adaptabilidad en entornos dinámicos.
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.5 }} // activa solo una vez al estar al 50% en pantalla
          src={`${basePath}/man-developing-website-on-desk.svg`} alt="" className="w-96" />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }} // activa solo una vez al estar al 50% en pantalla
        id="project" className="flex flex-col mb-10 pt-20 gap-5 justify-center items-center min-h-screen">
        <div className="px-10 lg:w-2/3">
          <h2 className="font-extrabold mb-10 text-center text-4xl md:text-5xl">Proyectos</h2>
        </div>
        {/* <!-- From Uiverse.io by 00Kubi --> */}
        <div className="flex flex-col md:flex-wrap gap-10 justify-center items-center w-full md:flex-row">
          {Card.map((card: CardProps) => (
            <div key={card.id} className="relative mb-10 flex w-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-40">
              <div className="relative mx-4 -mt-6 h-36 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 opacity-90">{card.img}</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {!card.img && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-white/90 transform transition-transform group-hover:scale-110 duration-300">
                      <path d="M12 2L1 21h22L12 2zm0 3.83L19.17 19H4.83L12 5.83zM11 16h2v2h-2zm0-6h2v4h-2z"></path>
                    </svg>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300 !line-clamp-1">{card.title}</h5>
                <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased !line-clamp-3">{card.description}</p>
              </div>
              <div className="p-6 pt-0">
                <Link href={card.route} className="cursor-pointer group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5">
                  <span className="relative flex items-center gap-2">
                    {!card.img ? "En proceso" : "Ver más"}
                    {card.img && (
                      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 transform transition-transform group-hover:translate-x-1">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                      </svg>
                    )}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.5 }} // activa solo una vez al estar al 50% en pantalla
        id="contact" className="flex flex-col mb-10 px-10 gap-5 justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center w-auto">
          <h2 className="mb-8 font-extrabold text-center text-4xl md:text-5xl">¿Te gustaría hablar?</h2>
          <p className="text-center md:text-lg">Actualmente estoy en búsqueda de nuevas oportunidades</p>
          <p className="text-center md:text-lg">Estoy buscando integrarme a un equipo donde pueda crecer y contribuir con mis conocimientos.</p>
          <p className="mb-1 text-center italic md:text-lg">{displayedText}|</p>
          <a href="#images" className="mb-5 text-center md:text-lg">Contactar</a>
          <a href="#formContact" className="animate-bounce"><i className="bi bi-arrow-down-circle text-4xl"></i></a>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.5 }} // activa solo una vez al estar al 50% en pantalla
        id="formContact" className="flex w-full mb-10 px-10 justify-center items-center min-h-screen">
        <div className="flex flex-col w-auto p-5 rounded-xl bg-white/10 md:w-1/2 xl:w-1/3">
          <h2 className="mb-10 font-extrabold text-center text-4xl md:text-5xl bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-transparent">Contacto</h2>
          <form onSubmit={handleSubmit} action={`https://formsubmit.co/21c27f12570808278ecc4398a7f54aea${basePath}`} method="POST" className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                placeholder="Nombre"
                className="w-full px-10 py-2 border-b-1 placeholder-gray-400 outline-none focus:outline-none focus:ring-0 focus:border-b-1"
                value={formData.name}
                onChange={(e) => handleInputChange(e, "name")}
              />
              <i className="bi bi-person text-gray-400 text-xl absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"></i>
            </div>
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Correo"
                className="w-full px-10 py-2 border-b-1 placeholder-gray-400 outline-none focus:outline-none focus:ring-0 focus:border-b-1"
                value={formData.email}
                onChange={(e) => handleInputChange(e, "email")}
              />
              <i className="bi bi-envelope text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"></i>
            </div>
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

            <div className="relative">
              <textarea
                name="message"
                rows={4}
                placeholder="Tu mensaje..."
                className="w-full px-10 py-2 border-b-1 placeholder-gray-400 outline-none focus:outline-none focus:ring-0 focus:border-b-1"
                value={formData.message}
                onChange={(e) => handleInputChange(e, "message")}
              ></textarea>
              <i className="bi bi-chat-left text-gray-400 absolute left-3 top-2 pointer-events-none"></i>
            </div>
            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}

            <button type="submit" className="cursor-pointer group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 transition-all duration-300 hover:-translate-y-1">
              Enviar
            </button>
          </form>
        </div>
      </motion.div>
      <div className="mb-5 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>

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
    </>
  );
}
