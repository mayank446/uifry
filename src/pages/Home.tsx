import Colors from "../components/Colors"
import Ellipses from "../components/Ellipses"

function Home() {
    return (
        <div className="grid grid-cols-6 w-[1090px]">
            <div className="bg-red-200 flex col-span-3 flex-col">
                <h1 className="text-6xl font-bold">
                    Make The Best Financial Decisions
                </h1>
                <p className="text-lg font-light">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </p>
                <div>
                    <button className="flex w-44 h-full px-12 py-4 bg-black text-white font-custom-2 rounded-[4px]">Get Started
                        <svg width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z" fill="white" />
                        </svg>
                    </button>
                </div>
                
                <div></div>
            </div>
                
            <div className="flex col-span-3 relative overflow-visible">
                <div className="absolute h-96 w-80 ml-40 mt-20 scale-125">
                    <Ellipses />
                </div>
                <div className="absolute h-96 w-80 ml-40 mt-20 scale-125">
                    <Colors/>
                </div>
            </div>
        </div>
    )
}

export default Home