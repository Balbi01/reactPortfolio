import HeaderPhone from "../HeaderComponents/HeaderPhone/HeaderPhone";
import HeaderScreen from "../HeaderComponents/HeaderScreen/HeaderScreen";
import InformationBox from "../BodyComponents/InformationBox/InformationBox";
import ListBox from "../BodyComponents/ListBox/ListBox";
import portfolio from "../../src/assets/portfolio_pic.jpg";
import CardBox from "../BodyComponents/CardBox/CardBox";
import ExpandibleMenu from "../BodyComponents/ExpandibleMenu/ExpandibleMenu";

function MainTemplate() {
    let showMenu = false;

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/omaribanez343', '_blank');
    };

    const handleGithubClick = () => {
        window.open('https://github.com/Balbi01', '_blank');
    };

    return (
        <div className="main-body-style">
            <div id="portfolio-template" className="portfolio-template">
                <div id="menu" className="static">
                    <ExpandibleMenu
                        showMenu={showMenu}
                    />
                </div>
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

                    {/* Botones de contacto Mail, Linkedin y Correo */}
                    <div className="flex flex-row text-xl mt-12 justify-center">
                        <button onClick={handleLinkedinClick} id="contact-me" className="p-4 navbar-buttons-style" tabIndex={0}>
                            <svg className="h-12 w-12 mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                            </svg>
                            LinkedIn
                        </button>

                        <button onClick={handleGithubClick} id="contact-me" className="p-4 navbar-buttons-style">
                            <svg className="h-12 w-12 mr-2 fill-white"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                            GitHub
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <div className="separator"></div>
                    </div>


                    {/* <div id="portfolio-icon" className="flex justify-center w-full">
                        <svg className="size-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                            <path fillRule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clipRule="evenodd" />
                        </svg>
                    </div> */}

                    <div id="about-me" className="main-about-me-phone">
                        <InformationBox
                            titleContent="¡Bienvenido a mi portafolio!"
                            bodyContent1="+2 años de experiencia. "
                            bodyContent2="Estudiante de "
                            span1="Desarrollador de Software y Programador Full Stack. "
                            span2="Ingeniería en Sistemas Computacionales en "
                            contentHref="https://www.utt.edu.mx/"
                            spanHref="Universidad Kuepa."
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
                            titleContent="Tecnologías"
                            bodyContent1="Manejo de PHP y JavaScript, así como en frameworks como "
                            bodyContent2="Sólidos conocimientos en bases de datos SQL."
                            span1="Laravel y Vue JS. "
                            span2="Implementación de pruebas unitarias y de integración."
                            contentHref="#"
                            spanHref=""
                            pathFillRuleD="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
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

                    <div className="flex justify-center">
                        <div className="separator"></div>
                    </div>

                    <div id="cards" className="flex flex-col justify-center items-center">

                    <h1 className="text-2xl font-bold text-center pt-6">Proyectos</h1>

                        <CardBox
                            imageSrc="https://lagrowthmachine.twic.pics/https://lagrowthmachine.com/app/uploads/2022/06/7053342.jpg?twic=v1/cover=589:391/resize=408/max=2000"
                            cardContent="CRM en la nube, que permite a las empresas gestionar las relaciones con sus clientes."
                            buttonTitle="Ver más"
                        />
                    </div>

                    <div className="flex justify-center">
                        <div className="separator"></div>
                    </div>

                    <div id="about-me" className="flex flex-col w-full p-8">
                        <div className="flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 mr-2">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            </svg>
                            <h1 className="text-2xl font-bold italic text-center">Acerca de mí</h1>
                        </div>
                        <div>
                            <p className="my-6">
                                Mi nombre es <span className="text-amber-500">Omar David Ibáñez Castañeda</span> , mis amigos suelen llamarme Balboa.
                                Comencé en la programación de forma autodidacta, y decidí empezar a estudiar la carrera de <span className="text-amber-500">
                                Ingeniería en Sistemas </span> para hacer de una pasión, mi profesión.
                            </p>

                            <p className="my-6">
                                Actualmente me encuentro trabajando dentro del <span className="italic">equipo de Desarrollo</span> de <span className="text-amber-500">
                                Evidence Tech</span>, una empresa orgullosamente lagunera que se encarga de distribuir el ERP más completo
                                para una correcta gestión empresarial.
                            </p>

                            <p className="my-6">
                                Mis funciones principales radican en la
                                <span className="font-bold text-amber-500"> resolución de problemas, generar soluciones y desarrollar nuevas funcionalidades </span>
                                que aporten valor para los clientes.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="footer">
                    <div className="flex justify-center w-full">
                        <div className="flex flex-col">
                            <p className="footer-text text-center">© 2024 David Ibañez</p>
                            <p className="footer-text text-center">No todos los derechos reservados</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTemplate;