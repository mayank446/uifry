import Card from "../components/Card"


function FAQ() {
    function showDeatailedQuery(){
        // a function may be used to elaborate the queries in detail
    }
    return (
        <div className="md:mx-20 ">
            <div className="relative p-4 w-1/2">
                <h3 className="text-orange text-xl font-medium">FAQ</h3>
                <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>

                <svg className='absolute top-16 -right-36 scale-110 -rotate-12' width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8081 -0.00842285L21.7915 19.5508L40.6973 14.4419L22.3993 21.4212L33.1003 37.823L20.8081 22.5773L8.51596 37.823L19.217 21.4212L0.918985 14.4419L19.8248 19.5508L20.8081 -0.00842285Z" fill="black" />
                </svg>
                
            </div>
            

            <div className="grid grid-cols-3 md:grid-cols-6 ">
                

                <div onClick={showDeatailedQuery} className="flex col-span-3 h-40 m-2 bg-orange rounded-md text-white overflow-hidden">
                    <Card query={"The Best Accounting App Ever!"} ans={"“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."} />
                </div>                
                <div className="flex flex-col h-40 col-span-3 p-4 m-2 overflow-hidden">
                    <h3 className="text-3xl font-semibold">The Best Accounting App Ever!</h3>
                    <p className="font-medium opacity-50">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                </div>
                <div className="flex flex-col h-40 col-span-3 p-4 m-2 max-md:bg-orange max-md:text-white overflow-hidden">
                    <h3 className="text-3xl font-semibold">The Best Accounting App Ever!</h3>
                    <p className="font-medium opacity-50">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                </div>
                <div className="flex col-span-3 h-40 m-2 md:bg-orange rounded-md md:text-white overflow-hidden">
                    <Card query={"The Best Accounting App Ever!"} ans={"“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."} />
                </div>
                <div className="flex col-span-3 h-40 m-2 bg-orange rounded-md text-white overflow-hidden">
                    <Card query={"The Best Accounting App Ever!"} ans={"“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."} />
                </div>    
                <div className="flex flex-col h-40 col-span-3 p-4 m-2 overflow-hidden">
                    <h3 className="text-3xl font-semibold">The Best Accounting App Ever!</h3>
                    <p className="font-medium opacity-50">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                </div>    
            </div>
        </div>
    )
}

export default FAQ