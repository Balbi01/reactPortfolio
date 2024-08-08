function ExpandibleMenu ({
    showMenu,
    toogleMenu
}) {
    let showMenuProp = showMenu;

    if (showMenuProp) {
        return (
            // Menu que se mostrará cuando showMenu sea true
            <div className="border absolute top-0 left-0 flex w-full z-10 flex-col text-xl backdrop-blur-sm bg-transparent/30 rounded-md">
                <p onClick={() => toogleMenu('welcomeSection')} className="border-b-2 navbar-buttons-style h-16">Experiencia</p>
                <p onClick={() => toogleMenu('education')} className="border-b-2 navbar-buttons-style h-16">Proyectos</p>
                <p onClick={() => toogleMenu('about-me')} className="border-b-2 navbar-buttons-style h-16">Sobre mí</p>
                <p onClick={() => toogleMenu(null)} className="border-b-2 navbar-buttons-style h-16">Contacto</p>
            </div>
        )
    }
}

export default ExpandibleMenu;