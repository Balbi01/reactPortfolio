function MainTemplate() {
    return (
        // <>
            <div className="bg-gradient-to-r from-indigo-950 to-fuchsia-900 h-screen">
                <div id="portfolio-template" className="w-full flex flex-col">
                    {/* Navbar */}
                    <div id="portfolio-header" className="text-xl flex justify-center h-auto m-2 border rounded p-4">
                        <div className="hover:scale-105 transition-transform duration-200 no-underline hover:cursor-pointer hover:bg-amber-500 flex px-4 text-white text-center items-center rounded">
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
                </div>
            </div>
        // </>

    )
}

export default MainTemplate;