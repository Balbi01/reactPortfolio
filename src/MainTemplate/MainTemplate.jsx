import HeaderPhone from "../HeaderComponents/HeaderPhone/HeaderPhone";
import HeaderScreen from "../HeaderComponents/HeaderScreen/HeaderScreen";
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

                <div id="body" className="py-8 mx-2">
                    <div id="title-photo" className="flex flex-row">
                        <div id="portfolio-pic" className="m-2 h-28 w-28  hover:scale-105 from-gray-800 to-gray-600 transition-transform duration-200">
                            <img src={portfolio} alt="Portfolio Pic" className="rounded-full"/>
                        </div>
                        <div id="title" className="hover:scale-105 transition-transform duration-200">
                            <div className="flex flex-col">
                                <h1 className="text-white text-end font-semibold text-4xl">David <span className="text-amber-500">Ibañez</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTemplate;