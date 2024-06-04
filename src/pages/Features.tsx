import Ellipses from "../components/Ellipses"
import Colors from "../components/Colors"
import Phone from "../components/Phone"

import screen1 from '../assets/Screen.png'


function Features() {
    return(
        <div className="grid grid-cols-3 lg:grid-cols-6 md:mx-20 mt-10">
            <div className="w-full h-full col-span-3 m-auto hidden lg:flex">
                <div className="flex h-[600px] w-96 relative overflow-visible mx-auto  scale-110">
                    <div className="absolute h-96 w-80 -left-12 top-20 scale-110 z-10">
                        <Ellipses />
                    </div>
                    <div className="absolute h-96 w-80 -left-20 top-0 rotate-180 scale-125">
                        <Colors />
                    </div>

                    <div className="absolute h-96 w-96 top-8 left-0">
                        <div className="flex relative z-40 scale-80">
                            <Phone screen={screen1} />
                        </div>
                    </div>


                    <svg className='absolute top-20 -left-24 -rotate-45' width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8081 -0.00842285L21.7915 19.5508L40.6973 14.4419L22.3993 21.4212L33.1003 37.823L20.8081 22.5773L8.51596 37.823L19.217 21.4212L0.918985 14.4419L19.8248 19.5508L20.8081 -0.00842285Z" fill="black" />
                    </svg>

                </div>
            </div>


            {/* RIGHT SIDE PART */}
            <div className="flex col-span-3 flex-col">
                <div className="flex flex-col w-full h-full mx-auto mt-20 relative">
                    <h2 className="text-orange text-xl px-2">FEATURES</h2>
                    <h1 className="text-5xl font-bold p-2">Uifry Premium</h1>

                    <h5 className="flex text-xl font-semibold p-2">
                        <svg className="m-1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1L9.6985 6.20599C9.44454 7.22185 9.31756 7.72978 9.05308 8.14309C8.81915 8.50868 8.50868 8.81915 8.14309 9.05308C7.72978 9.31756 7.22185 9.44454 6.20599 9.6985L1 11L6.20599 12.3015C7.22185 12.5555 7.72978 12.6824 8.14309 12.9469C8.50868 13.1808 8.81915 13.4913 9.05309 13.8569C9.31756 14.2702 9.44454 14.7782 9.6985 15.794L11 21L12.3015 15.794C12.5555 14.7782 12.6824 14.2702 12.9469 13.8569C13.1808 13.4913 13.4913 13.1808 13.8569 12.9469C14.2702 12.6824 14.7782 12.5555 15.794 12.3015L21 11L15.794 9.6985C14.7782 9.44454 14.2702 9.31756 13.8569 9.05308C13.4913 8.81915 13.1808 8.50868 12.9469 8.14309C12.6824 7.72978 12.5555 7.22185 12.3015 6.20599L11 1Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Budgeting Intervals
                    </h5>
                    <p className="opacity-50 font-medium text-xl px-2">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    
                    <h5 className="flex text-xl font-semibold p-2">
                        <svg className="m-1" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.50002V11M10 11L18.5 6.27773M10 11L1.5 6.27773M10 11V20.5M18.5 15.7222L10.777 11.4317C10.4934 11.2741 10.3516 11.1954 10.2015 11.1645C10.0685 11.1371 9.93146 11.1371 9.79855 11.1645C9.64838 11.1954 9.50658 11.2741 9.22297 11.4317L1.5 15.7222M19 15.0586V6.94147C19 6.59883 19 6.4275 18.9495 6.27471C18.9049 6.13953 18.8318 6.01545 18.7354 5.91076C18.6263 5.79242 18.4766 5.70922 18.177 5.54282L10.777 1.43171C10.4934 1.27415 10.3516 1.19537 10.2015 1.16448C10.0685 1.13715 9.93146 1.13715 9.79855 1.16448C9.64838 1.19537 9.50658 1.27415 9.22297 1.43171L1.82297 5.54282C1.52345 5.70922 1.37369 5.79242 1.26463 5.91076C1.16816 6.01545 1.09515 6.13953 1.05048 6.27471C1 6.42751 1 6.59883 1 6.94147V15.0586C1 15.4012 1 15.5725 1.05048 15.7253C1.09515 15.8605 1.16816 15.9846 1.26463 16.0893C1.37369 16.2076 1.52345 16.2908 1.82297 16.4572L9.22297 20.5683C9.50658 20.7259 9.64838 20.8047 9.79855 20.8356C9.93146 20.8629 10.0685 20.8629 10.2015 20.8356C10.3516 20.8047 10.4934 20.7259 10.777 20.5683L18.177 16.4572C18.4766 16.2908 18.6263 16.2076 18.7354 16.0893C18.8318 15.9846 18.9049 15.8605 18.9495 15.7253C19 15.5725 19 15.4012 19 15.0586Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Budgeting Intervals
                    </h5>
                    <p className="opacity-50 font-medium text-xl px-2">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>

                    <h5 className="flex text-xl font-semibold p-2">
                        <svg className="m-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 14H6M6 14V1.5M6 14L1.5 18.5M1.5 6H14M14 6V18.5M14 6L18.5 1.5M19 13.3373V1.8C19 1.51997 19 1.37996 18.9455 1.273C18.8976 1.17892 18.8211 1.10243 18.727 1.0545C18.62 1 18.48 1 18.2 1H6.66274C6.41815 1 6.29586 1 6.18077 1.02763C6.07873 1.05213 5.98119 1.09253 5.89172 1.14736C5.7908 1.2092 5.70432 1.29568 5.53137 1.46863L1.46863 5.53137C1.29568 5.70432 1.2092 5.7908 1.14736 5.89172C1.09253 5.98119 1.05213 6.07873 1.02763 6.18077C1 6.29586 1 6.41815 1 6.66274V18.2C1 18.48 1 18.62 1.0545 18.727C1.10243 18.8211 1.17892 18.8976 1.273 18.9455C1.37996 19 1.51997 19 1.8 19H13.3373C13.5818 19 13.7041 19 13.8192 18.9724C13.9213 18.9479 14.0188 18.9075 14.1083 18.8526C14.2092 18.7908 14.2957 18.7043 14.4686 18.5314L18.5314 14.4686C18.7043 14.2957 18.7908 14.2092 18.8526 14.1083C18.9075 14.0188 18.9479 13.9213 18.9724 13.8192C19 13.7041 19 13.5818 19 13.3373Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Budgeting Intervals
                    </h5>
                    <p className="opacity-50 font-medium text-xl px-2">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>


                    <div className="absolute top-10 -right-56">
                        <Colors/>
                    </div>
                    <svg className='absolute top-[500px] -right-12' width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8081 -0.00842285L21.7915 19.5508L40.6973 14.4419L22.3993 21.4212L33.1003 37.823L20.8081 22.5773L8.51596 37.823L19.217 21.4212L0.918985 14.4419L19.8248 19.5508L20.8081 -0.00842285Z" fill="black" />
                    </svg>
                    

                </div>
                
            </div>


            <div className="w-full h-full col-span-3 m-auto flex lg:hidden">
                <div className="flex h-[600px] w-96 relative overflow-visible mx-auto  scale-110">
                    <div className="absolute h-96 w-80 -left-12 top-20 scale-110 z-10">
                        <Ellipses />
                    </div>
                    <div className="absolute h-96 w-80 -left-20 top-0 rotate-180 scale-125">
                        <Colors />
                    </div>

                    <div className="absolute h-96 w-96 top-8 left-0">
                        <div className="flex relative z-40 scale-80">
                            <Phone screen={screen1} />
                        </div>
                    </div>


                    <svg className='absolute top-20 -left-24 -rotate-45' width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8081 -0.00842285L21.7915 19.5508L40.6973 14.4419L22.3993 21.4212L33.1003 37.823L20.8081 22.5773L8.51596 37.823L19.217 21.4212L0.918985 14.4419L19.8248 19.5508L20.8081 -0.00842285Z" fill="black" />
                    </svg>

                </div>
            </div>
           
        </div>
    )
}

export default Features