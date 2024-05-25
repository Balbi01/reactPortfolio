import HeaderPhone from "../HeaderComponents/HeaderPhone/HeaderPhone";
import HeaderScreen from "../HeaderComponents/HeaderScreen/HeaderScreen";
import InformationBox from "../BodyComponents/InformationBox/InformationBox";
import ListBox from "../BodyComponents/ListBox/ListBox";
import portfolio from "../../src/assets/portfolio_pic.jpg";

function MainTemplate() {
    return (
        <div className="bg-gradient-to-r from-indigo-950 to-fuchsia-900 h-screen overflow-x-hidden">
            <div id="portfolio-template" className="w-full flex flex-col">
                <div id="header">
                    {/* Navbar */}
                    <div id="screen-header" className="hidden sm:block">
                        <HeaderScreen />
                    </div>
                    <div id="phone-header" className="sm:hidden">
                        <HeaderPhone />
                    </div>
                </div>

                <div id="body" className="flex flex-col py-8 mx-2 justify-center">
                    <div id="title-photo" className="flex flex-col justify-center align-middle">
                        <div id="portfolio-pic" className="items-center self-center m-2 h-64 w-64 hover:scale-105 from-gray-800 to-gray-600 transition-transform duration-200">
                            <img src={portfolio} alt="Portfolio Pic" className="rounded-full"/>
                        </div>
                        <div id="title" className="flex flex-col hover:scale-105 transition-transform duration-200 cursor-pointer align-middle justify-center ml-2">
                            <div className="">
                                <h1 className="text-white font-semibold text-6xl text-center py-4">David <br/><span className="text-amber-500">Ibañez</span></h1>
                            </div>
                            <div className="flex justify-center text-md">
                                <p className="text-white text-2xl font-normal italic">
                                    <span className="text">&lt;</span><span className="text-amber-500">Desarrollador</span> de Software/&gt;
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="about-me" className="flex flex-col justify-center mt-12 mb-6 mx-8">
                        <InformationBox
                            titleContent="¡Bienvenido a mi portafolio!"
                            bodyContent1="+2 años de experiencia. "
                            bodyContent2="Estudiante de la carrera de"
                            span1="Ingeniero de Software y Desarrollador Full Stack. "
                            span2="Ingeniería en Desarrollo de Software Multiplataforma en la"
                            contentHref="https://www.utt.edu.mx/"
                            spanHref="Universidad Tecnológica de Torreón"
                        />
                    </div>

                    <div className="flex flex-col justify-center my-6 mx-8">
                        <ListBox
                            boxTitle="Experiencia"
                            span1="Evidence Tech"
                            listItem1="Desarrollador Full Stack, en la ciudad de Torreón, Coahuila."
                            date1="(Julio 2023 - Actualidad)"
                            ref1="https://evidencetec.com/?gad_source=1&gclid=CjwKCAjw0YGyBhByEiwAQmBEWoKjiismkqCsCXyeMAEn17mjoZSIF9e2fnFc8-YmZOgUrfmxVK2tThoCPwsQAvD_BwE"
                            span2="Grupo Industrial Saltillo"
                            listItem2="Desarrollador de Software."
                            date2="(Agosto 2022 - Julio 2023)"
                            ref2="#"
                        />

                    </div>

                    <div id="technologies" className="flex flex-col justify-center my-6 mx-8">
                        <InformationBox
                            titleContent="Tecnologías Principales"
                            bodyContent1="Fuertes conocimientos en lenguajes de programación PHP y JavaScript, así como en frameworks como "
                            bodyContent2="Sólidos conocimientos en bases de datos SQL y NoSQL."
                            span1="Laravel y Vue JS. "
                            span2="Experiencia en implementación de pruebas unitarias y de integración."
                            contentHref="#"
                            spanHref=""
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainTemplate;