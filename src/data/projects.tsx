interface Projects {
    img: React.ReactNode;
    title: string;
    description: string;
    technologies: React.ReactNode;
    route: string;
}

const basePath = process.env.NODE_ENV === 'production' ? '/myPortfolio' : '';

export const projects: Projects[] = [
    {
        img: <img src={`${basePath}/inventory.png`} className="rounded-lg" alt="" />,
        title: "Aplicación Web de Gestion de Inventario",
        description: `
            Aplicación web enfocada en la gestión de inventario, desarrollada con Next.js, TypeScript y Tailwind CSS.
            Permite centralizar y automatizar el control de productos y recursos para optimizar los procesos internos.
            Entre los principales logros se incluyen la implementación de una arquitectura limpia en capas, el consumo de API REST con Axios (CRUD completo), la exportación de información en PDF y Excel, y un sistema de filtrado por año, mes y día que mejora la consulta y análisis de datos.`,
        technologies:
            <>
                <span className="px-4 py-0.5 text-white bg-black rounded-full shadow-xl">Next.js</span>
                <span className="px-4 py-0.5 text-white bg-black rounded-full shadow-xl">TypeScript</span>
                <span className="px-4 py-0.5 text-white bg-black rounded-full shadow-xl">Tailwind CSS</span>
            </>,
        route: "/project",
    },
    {
        img: <img src={`${basePath}/dental/Ellipse.svg`} className="rounded-lg w-56" alt="" />,
        title: "Aplicación móvil DentalHealth",
        description: `
            Aplicación móvil desarrollada con React Native y TypeScript como proyecto escolar.
            Su objetivo fue facilitar la gestión de citas y la comunicación entre el consultorio y los clientes, mejorando la eficiencia operativa y la satisfacción del usuario.
            El proyecto incluyó consumo de API mediante Fetch para la obtención y envío de datos en tiempo real.`,
        technologies:
            <>
                <span className="px-4 py-0.5 text-white bg-black rounded-full shadow-xl">React Native</span>
                <span className="px-4 py-0.5 text-white bg-black rounded-full shadow-xl">TypeScript</span>
                <span className="px-4 py-0.5 text-white bg-black rounded-full shadow-xl">Expo</span>
            </>,
        route: "/project-dental",
    }
];