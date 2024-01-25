import Image from "next/image"
import flag from "@/assets/flag.png"

const Hero = ()=>{
    return(
        <div className="w-[100%] py-5 flex flex-col md:flex-row items-center md:items-start justify-between py-20 pt-10 mt-5">
            <div className="w-full md:w-[50%]">
                <h1 className="text-[180%] font-extrabold mb-5">Save a <span className="border-b-[3px] border-red-900 text-[100%] text-[#00A106]  border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer font-extrabold">Life</span> Today</h1>

                <p className="mb-2 mt-6 my-3 mb-6 text-[80%] font-light text-[#1E1E1E]">The Red Cross is an international humanitarian organization that provides assistance and support to those in need, particularly during times of crisis and emergencies.</p>
                <p  className="mb-2 my-3 text-[80%] font-light text-[#1E1E1E]">The mission of the Red Cross is to alleviate human suffering and protect human dignity. Its primary focus areas include disaster response, healthcare services, blood donation, and promoting international humanitarian law.</p>

                <button className="bg-[#CC0000] text-white rounded-md py-2 px-7 md:my-10 text-[90%]" style={{fontFamily:"nunito"}}>Get Started</button>
            </div>

            <Image src={flag} alt="" className="mt-4 w-[80%] h-[40vh] md:w-[40%] md:mt-0 rounded-lg"/>
        </div>
    )
}

export default Hero