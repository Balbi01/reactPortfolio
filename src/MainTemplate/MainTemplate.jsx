import HeaderPhone from "../HeaderComponents/HeaderPhone/HeaderPhone";
import HeaderScreen from "../HeaderComponents/HeaderScreen/HeaderScreen";
import InformationBox from "../BodyComponents/InformationBox/InformationBox";
import ListBox from "../BodyComponents/ListBox/ListBox";
import portfolio from "../../src/assets/portfolio_pic.jpg";

function MainTemplate() {
    return (
        <div className="main-body-style">
            <div id="portfolio-template" className="portfolio-template">
                <div id="header">
                    {/* Navbar */}
                    <div id="screen-header" className="hidden sm:block">
                        <HeaderScreen />
                    </div>
                    <div id="phone-header" className="sm:hidden">
                        <HeaderPhone />
                    </div>
                </div>

                <div id="body" className="main-template-body-phone">
                    <div id="title-photo" className="title-photo-phone">
                        <div id="portfolio-pic" className="portfolio-pic-animation">
                            <img src={portfolio} alt="Portfolio Pic" className="rounded-full"/>
                        </div>
                        <div id="title" className="main-titlename-phone">
                            <div className="btnTest">
                                <h1 className="principalUserName">David <br/><span className="text-amber-500">Ibañez</span></h1>
                            </div>
                            <div className="flex justify-center text-md">
                                <p className="main-subtitle-phone">
                                    <span className="text">&lt;</span><span className="text-amber-500">Desarrollador</span> de Software/&gt;
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="about-me" className="main-about-me-phone">
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

                    <div className="main-about-me-listbox-phone">
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
                            pathFillRuleD="M4 16.5v-13h-.25a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5H16v13h.25a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H4Zm3-11a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM11 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm.5 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"

                        />

                    </div>

                    <div id="technologies" className="main-info-box-phone">
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

                    <div id="education" className="main-info-box-phone">
                        <InformationBox
                            titleContent="Educación"
                            bodyContent1="Estudiante de la carrera de Ingeniería en Sistemas Computacionales en"
                            span1=" Universidad Kuepa,"
                            contentHref="https://www.utt.edu.mx/"
                            spanHref=""
                            bodyContent2="desde Julio de 2024."
                            pathFillRuleD="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainTemplate;