import React from 'react'

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center gap-5 px-10 py-10 bg-black text-white">
            <div className="flex gap-3 justify-center items-center">
                <a href="https://github.com/JafetCid" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:-translate-y-1"><i className="bi bi-github text-2xl"></i></a>
                <a href="mailto:jafetcid9@gmail.com" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center cursor-pointer transition-all duration-300 hover:-translate-y-1"><i className="bi bi-envelope-fill text-2xl"></i></a>
            </div>

            <div className="flex flex-col justify-center items-center">
                <p className="text-center">© 2025 JafetCid - Todos los derechos reservados.</p>
                <p className="text-center">Desarrollado por Jafet Cid Galicia</p>
            </div>

        </footer>
    )
}
