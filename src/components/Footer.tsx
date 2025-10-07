import React from 'react'

export default function Footer() {
    return (
        <>
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
    )
}
