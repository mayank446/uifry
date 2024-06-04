import Ellipses from "../components/Ellipses"
import Colors from "../components/Colors"
import Phone from "../components/Phone"

import screen1 from '../assets/Screen.png'

function Advantages2() {
    return (
        <div className="grid grid-cols-3 lg:grid-cols-6 md:mx-20">

            <div className="w-full h-full lg:flex col-span-3 m-auto hidden">
                <div className="flex h-[600px] w-96 relative overflow-visible mx-auto scale-110">
                    <div className="absolute h-96 w-80 -left-12 top-20 scale-110 z-10">
                        <Ellipses />
                    </div>
                    <div className="absolute h-96 w-80 left-4 top-28 -rotate-[145deg]  scale-125">
                        <Colors />
                    </div>

                    <div className="absolute h-96 w-96 top-8 left-0">
                        <div className="flex relative z-40 scale-80">
                            <Phone screen={screen1} />
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="flex col-span-3 flex-col p-4 relative">
                <div className="flex flex-col w-full h-full mx-auto mt-20">
                    <h5 className="flex text-xl font-semibold p-4">
                        <svg className="-my-2 mx-1 scale-90" width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24.9761" r="24" fill="#FF5555" />
                            <path d="M24 14.9761L22.6985 20.1821C22.4445 21.1979 22.3176 21.7059 22.0531 22.1192C21.8192 22.4848 21.5087 22.7952 21.1431 23.0292C20.7298 23.2936 20.2218 23.4206 19.206 23.6746L14 24.9761L19.206 26.2776C20.2218 26.5315 20.7298 26.6585 21.1431 26.923C21.5087 27.1569 21.8192 27.4674 22.0531 27.833C22.3176 28.2463 22.4445 28.7542 22.6985 29.7701L24 34.9761L25.3015 29.7701C25.5555 28.7542 25.6824 28.2463 25.9469 27.833C26.1808 27.4674 26.4913 27.1569 26.8569 26.923C27.2702 26.6585 27.7782 26.5315 28.794 26.2776L34 24.9761L28.794 23.6746C27.7782 23.4206 27.2702 23.2936 26.8569 23.0292C26.4913 22.7952 26.1808 22.4848 25.9469 22.1192C25.6824 21.7059 25.5555 21.1979 25.3015 20.1821L24 14.9761Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Fully Customizable
                    </h5>
                    <p className="opacity-50 font-medium text-xl px-4">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                </div>
                <svg className='absolute bottom-4 -right-16 rotate-12 scale-110' width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8081 -0.00842285L21.7915 19.5508L40.6973 14.4419L22.3993 21.4212L33.1003 37.823L20.8081 22.5773L8.51596 37.823L19.217 21.4212L0.918985 14.4419L19.8248 19.5508L20.8081 -0.00842285Z" fill="black" />
                </svg>
            </div>



            <div className="w-full h-full flex col-span-3 m-auto lg:hidden">
                <div className="flex h-[600px] w-96 relative overflow-visible mx-auto scale-110">
                    <div className="absolute h-96 w-80 -left-12 top-20 scale-110 z-10">
                        <Ellipses />
                    </div>
                    <div className="absolute h-96 w-80 left-4 top-28 -rotate-[145deg]  scale-125">
                        <Colors />
                    </div>

                    <div className="absolute h-96 w-96 top-8 left-0">
                        <div className="flex relative z-40 scale-80">
                            <Phone screen={screen1} />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Advantages2