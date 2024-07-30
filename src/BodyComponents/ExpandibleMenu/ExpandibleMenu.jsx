function ExpandibleMenu ({
    showMenu,
}) {
    let showMenuProp = showMenu;

    if (showMenuProp) {
        return (
            // Menu que se mostrará cuando showMenu sea true
            <div className="border absolute top-0 left-0 flex w-full z-10 flex-col text-xl backdrop-blur-sm bg-transparent/30 rounded-md">
                <p className="border-b-2 navbar-buttons-style h-16">Experiencia</p>
                <p className="border-b-2 navbar-buttons-style h-16">Proyectos</p>
                <p className="border-b-2 navbar-buttons-style h-16">Sobre mí</p>
                <p className="border-b-2 navbar-buttons-style h-16">Contacto</p>
            </div>
        )
    }
}

export default ExpandibleMenu;