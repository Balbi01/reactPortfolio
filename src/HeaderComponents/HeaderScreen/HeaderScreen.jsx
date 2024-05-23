

function HeaderScreen() {
    return (
        <div id="portfolio-header-template" className="p-2 h-16 flex text-xl flex-row justify-center border backdrop-blur-sm bg-transparent/30 rounded-md">
            <div className="hover:scale-105 h-full transition-transform duration-200 no-underline hover:cursor-pointer hover:bg-amber-500 flex px-4 text-white text-center items-center rounded">
                Experiencia
            </div>
            <div className="hover:scale-105 transition-transform duration-200 no-underline hover:cursor-pointer hover:bg-amber-500 flex px-4 text-white text-center items-center rounded">
                Proyectos
            </div>
            <div className="hover:scale-105 transition-transform duration-200 no-underline hover:cursor-pointer hover:bg-amber-500 flex px-4 text-white text-center items-center rounded">
                Sobre mí
            </div>
            <div className="hover:scale-105 transition-transform duration-200 no-underline hover:cursor-pointer hover:bg-amber-500 flex px-4 text-white text-center items-center rounded">
                Contacto
            </div>
        </div>
    )
}

export default HeaderScreen;