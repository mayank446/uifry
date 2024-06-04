import Ellipses from "../components/Ellipses"
import Colors from "../components/Colors"
import Phone from "../components/Phone"

import screen1 from '../assets/Screen2.png'

function Advantages() {
    return (
        <div className="grid grid-cols-3 lg:grid-cols-6 md:mx-20">
            <div className="flex col-span-3 flex-col p-4 relative">
                <div className="flex flex-col w-full h-full mx-auto mt-20">
                        <h2 className="text-orange text-xl px-4">ADVANTAGES</h2>
                        <h1 className="text-5xl font-bold p-4">Why Choose Uifry?</h1>

                        <h5 className="flex text-xl font-semibold p-4">
                            <svg className="-my-2 mx-1 scale-90" width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24.488" r="24" fill="#FF5555" />
                                <path d="M26 33.488H22M30 20.488C30 18.8967 29.3679 17.3706 28.2427 16.2454C27.1174 15.1202 25.5913 14.488 24 14.488C22.4087 14.488 20.8826 15.1202 19.7574 16.2454C18.6322 17.3706 18 18.8967 18 20.488C18 23.5782 17.2205 25.694 16.3497 27.0934C15.6151 28.2739 15.2479 28.8641 15.2613 29.0288C15.2763 29.2111 15.3149 29.2806 15.4618 29.3896C15.5945 29.488 16.1926 29.488 17.3889 29.488H30.6112C31.8074 29.488 32.4056 29.488 32.5382 29.3896C32.6852 29.2806 32.7238 29.2111 32.7387 29.0288C32.7522 28.8641 32.3849 28.2739 31.6504 27.0935C30.7795 25.694 30 23.5782 30 20.488Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Clever Notifications
                        </h5>
                        <p className="opacity-50 font-medium text-xl px-4">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                </div>

                <svg className='absolute bottom-4 right-0 rotate-45' width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8081 -0.00842285L21.7915 19.5508L40.6973 14.4419L22.3993 21.4212L33.1003 37.823L20.8081 22.5773L8.51596 37.823L19.217 21.4212L0.918985 14.4419L19.8248 19.5508L20.8081 -0.00842285Z" fill="black" />
                </svg>
            </div>

            {/* RIGHT SIDE PART */}
            <div className="w-full h-full flex col-span-3 m-auto">
                <div className="flex h-[600px] w-96 relative overflow-visible mx-auto scale-110">
                    <div className="absolute h-96 w-80 left-8 top-20 scale-110 z-10">
                        <Ellipses />
                    </div>
                    <div className="absolute h-96 w-80 left-0 top-40 scale-125">
                        <Colors />
                    </div>

                    <div className="absolute h-96 w-96 top-8 left-20">
                        <div className="flex relative z-40 scale-80">
                            <Phone screen={screen1} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Advantages