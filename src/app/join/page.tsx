import logo from "@/assets/logo.png"
import logo1 from "@/assets/logo.svg"
import Image from "next/image"
import Link from "next/link"
const ActivitiesPage = ()=>{
    return(
        <div className="w-full md:h-[100vh] flex justify-between ">
            <div className="w-[48%] h-full relative bg-[#017B06] rounded-r-[27px]">
                <Link href={"/"}><Image src={logo1} alt="" className=" w-32 absolute left-3 top-5"/></Link>
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

                <form className="md:w-[70%] flex md:mt-[10vh] flex-col items-center gap-4">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="email" className="text-[80%] font-semibold">Email</label>
                        <input type="email" name="email" id="email" placeholder="Your Email" className="activity-input text-[80%] border-[1.4px] border-black font-light outline-none  px-5 py-3"/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="email" className="text-[80%] font-semibold">Phone Number</label>
                        <input type="email" name="email" id="email" placeholder="Your Phone Number" className="activity-input text-[80%] border-[1.4px] border-black font-light outline-none  px-5 py-3"/>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" name="agree" id="" required/>
                        <h6 className="text-[80%]">I agree to the terms and conditions of this website</h6>
                    </div>

                    <button type="submit" className="w-[276px] h-[58px] bg-[#F61C1C] rounded-[5px] flex items-center justify-center text-white mt-3">Join Community</button>
                </form>
            </div>
        </div>
    )
}

export default ActivitiesPage