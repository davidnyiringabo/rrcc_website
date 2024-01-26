import logo from "@/assets/logo.png"
import logo1 from "@/assets/logo.svg"
import Image from "next/image"
const ActivitiesPage = ()=>{
    return(
        <div className="w-full md:h-[100vh] flex justify-between ">
            <div className="w-[48%] h-full relative bg-[#017B06] rounded-r-[27px]">
                <Image src={logo1} alt="" className=" w-32 absolute left-3 top-5"/>
                <div className="w-[13rem] md:h-[30vh] bg-white rounded-l-[150px] flex justify-end absolute top-[34%] right-0 ">
                    <div className="flex flex-col justify-center h-full items-center mr-2">
                        <Image src={logo} alt="" className="w-6 h-6"/>
                        <h3 className=" font-extrabold text-[60%] w-full text-center mt-1">RCA</h3>
                        <h6 className=" font-extrabold text-[60%] w-full text-center"><span className="text-[#017B06]">Red</span> Cross</h6>
                    </div>
                </div>
            </div>

            <div className="w-[52%] h-full flex flex-col pt-10 items-center">
                <header>
                    <h2 className="font-extrabold text-[120%]">Become a volunteer</h2>
                    <h6 className="text-[70%] font-light text-center">RRCA, together, we save lives</h6>
                </header>

                <form className="md:w-[70%] flex md:mt-[20vh] flex-col items-center">
                    <div className="w-full flex flex-col gap-1">
                        {/* <label htmlFor="email" className="text-[80%] font-bold">Email</label> */}
                        <input type="email" name="email" id="email" placeholder="Email" className="activity-input text-[80%] border border-black  px-5 py-3"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ActivitiesPage