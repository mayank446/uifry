import Colors from "../components/Colors"
import Ellipses from "../components/Ellipses"
import Phone from "../components/Phone"

import achievements from '../assets/achievements.svg'
import finance from '../assets/finance.svg' 
import screen1 from '../assets/Screen.png'
import screen2 from '../assets/Screen2.png'
import a from '../assets/a.png'

function Home() {
    return (
        <div className="grid grid-cols-3 lg:grid-cols-6 md:mx-20">
            <div className="flex col-span-3 flex-col p-4">
                <h1 className="flex text-6xl font-bold py-6 relative">
                    Make The Best Financial Decisions
                    <div className="absolute -top-20 left-20 -z-10 scale-125"><Colors/></div>
                    <svg className='absolute -top-12 -left-16 -rotate-12' width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8081 -0.00842285L21.7915 19.5508L40.6973 14.4419L22.3993 21.4212L33.1003 37.823L20.8081 22.5773L8.51596 37.823L19.217 21.4212L0.918985 14.4419L19.8248 19.5508L20.8081 -0.00842285Z" fill="black" />
                    </svg>
                </h1>
                <p className="flex text-lg font-light py-2">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </p>
                {/* BUTTONS */}
                <div className="flex w-96 h-14 my-2">
                    <button className="flex w-1/2 justify-center bg-black text-white rounded-md">
                        <p className="flex my-auto p-2">Get Started</p>
                        <svg className="flex my-auto" width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z" fill="white" />
                        </svg>
                    </button>
                    <button className="flex w-1/2 justify-center text-black rounded-md">
                        <svg className="flex my-auto" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                            <path d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z" fill="black" stroke="black" />
                        </svg>
                        <p className="flex my-auto p-2">Watch Video</p>
                    </button>
                </div>
                

                {/* CARD */}
                <div className="flex w-full h-80">
                    <div className="relative w-full m-2 scale-90">
                        <div className="flex justify-around bg-black w-[512px] h-[70px] rounded-r-md absolute top-32 -rotate-[28deg] z-20">    
                            <div className="flex w-52 p-2">
                                <img className="h-12 w-12 " src={achievements}/>
                                <div className="my-auto text-white text-[10px]">
                                    <p>Achievements</p>
                                    <p>Best Finance App on PlayStore</p>
                                </div>
                            </div>
                            <div className="flex w-52 p-2">
                                <img className="h-12 w-12 " src={finance} />
                                <div className="my-auto text-white text-[10px]">
                                    <p>Finance</p>
                                    <p>Most Popular Accounting App</p>
                                </div>
                            </div>
                        </div>
                        <img className="absolute top-[236px] -left-8 h-[100px]" src={a} />

                        <div className="flex w-96 h-16 bg-orange rounded-md absolute top-[156px] left-[146px] -rotate-45 z-10">
                            <p className="m-auto font-bold">Make The Best Financial Decisions</p>
                        </div>
                        <div className="flex w-64 h-16 bg-orange rounded-md absolute top-[280px] left-56">
                            <div className="flex w-16 h-16 ml-12 border-x-[1.5px] border-x-black">
                                <svg className="m-auto" width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.8081 -0.00842285L21.7915 19.5508L40.6973 14.4419L22.3993 21.4212L33.1003 37.823L20.8081 22.5773L8.51596 37.823L19.217 21.4212L0.918985 14.4419L19.8248 19.5508L20.8081 -0.00842285Z" fill="black" />
                                </svg>
                            </div>
                            <div className="m-auto">
                                <p className="font-semibold">Uifry Premium</p>
                                <p className="text-sm font-medium">Free Trial</p>
                            </div>
                        </div>

                        <svg className='absolute top-16 left-28' width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.8081 -0.00842285L21.7915 19.5508L40.6973 14.4419L22.3993 21.4212L33.1003 37.823L20.8081 22.5773L8.51596 37.823L19.217 21.4212L0.918985 14.4419L19.8248 19.5508L20.8081 -0.00842285Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
                
            {/* RIGHT SIDE PART */}
            <div className="w-full h-full flex col-span-3 m-auto">
                <div className="flex h-[600px] w-96 relative overflow-visible mx-auto mt-10 scale-110">
                    <div className="absolute h-96 w-80 left-20 top-20 scale-110 z-10">
                        <Ellipses />
                    </div>
                    <div className="absolute h-96 w-80 left-12 top-52 rotate-180 scale-125">
                        <Colors/>
                    </div>

                    <div className="absolute h-96 w-96 top-20 left-20">
                        <div className="flex relative z-40">
                            <div className="absolute top-4 left-28 flex -rotate-[15deg] scale-80">
                                <Phone screen={screen1} />
                            </div>
                            <div className="absolute -top-9 left-4 flex -rotate-[15deg] sc scale-80">
                                <Phone screen={screen2} />
                            </div>
                            <div className="absolute -top-24 -left-20 flex -rotate-[15deg] scale-80">
                                <Phone screen={screen1} />
                            </div>
                        </div>
                    </div>

                    <svg className='absolute top-[468px] left-16 rotate-12' width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8081 -0.00842285L21.7915 19.5508L40.6973 14.4419L22.3993 21.4212L33.1003 37.823L20.8081 22.5773L8.51596 37.823L19.217 21.4212L0.918985 14.4419L19.8248 19.5508L20.8081 -0.00842285Z" fill="black" />
                    </svg>
                    <svg className='absolute -top-8 left-[458px] scale-80' width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8081 -0.00842285L21.7915 19.5508L40.6973 14.4419L22.3993 21.4212L33.1003 37.823L20.8081 22.5773L8.51596 37.823L19.217 21.4212L0.918985 14.4419L19.8248 19.5508L20.8081 -0.00842285Z" fill="black" />
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default Home