import logo from "@/assets/Frame 3.png"
import Image from "next/image"
import Link from "next/link"
import message from "@/assets/Group (2).png"
import phone from "@/assets/Frame 27.png"
import location from "@/assets/Frame 26.png"
import fb from "@/assets/bxl_facebook.png"
import ig from "@/assets/akar-icons_instagram-fill.png"
import ln from "@/assets/simple-icons_linkedin.png"
import twt from "@/assets/mdi_twitter.png"

const Footer = ()=>{
    return(
        <div className="w-full flex flex-col md:flex-row gap-3 md:gap-0 items-start md:items-center bg-[#212121] justify-between px-14 text-white py-[10vh]">
            <div className="w-full md:w-[45%] flex items-start flex-col h-[80%]">
                <Image src={logo} alt="" className="w-40 h-10 mb-4"/>
                <h5 className="text-[90%]">The club's mission is aligned with the broader mission of the Red Cross, which is to alleviate human suffering and protect human dignity.</h5>
                <div className="flex mt-3 gap-3 items-center">
                    <Link href={"www.facebook.com"} target="_blank" className="w-[30px] h-[30px] bg-[#ffffff8d] rounded-[100%] flex items-center justify-center"><Image src={ig} alt=" "/></Link>
                    <Link href={"www.facebook.com"} target="_blank" className="w-[30px] h-[30px] bg-[#ffffff8d] rounded-[100%] flex items-center justify-center"><Image src={fb} alt=" "/></Link>
                    <Link href={"www.facebook.com"} target="_blank" className="w-[30px] h-[30px] bg-[#ffffff8d] rounded-[100%] flex items-center justify-center"><Image src={twt} alt=" "/></Link>
                    <Link href={"www.facebook.com"} target="_blank" className="w-[30px] h-[30px] bg-[#ffffff8d] rounded-[100%] flex items-center justify-center"><Image src={ln} alt=" "/></Link>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-start h-[80%]">
                <h4 className="text-[150%]">Quick links</h4>

                <Link className="text-[90%] ml-4" href={"/"}>&gt; Home</Link>
                <Link className="text-[90%] ml-4" href={"/activities"}>&gt; Activities</Link>
                <Link className="text-[90%] ml-4" href={"/resources"}>&gt; Resources</Link>
                <Link className="text-[90%] ml-4" href={"/about"}>&gt; About Us</Link>
                <Link className="text-[90%] ml-4" href={"/contact"}>&gt; Contact Us</Link>
            </div>
            <div className="flex flex-col gap-2 items-start h-[80%]">
                <h4 className="text-[150%]">Info</h4>

                <h6 className="text-[90%] flex gap-2 items-center justify-start w-full pl-3">
                    <Image src={message} alt="" className="w-3"/> rcaredcross@gmail.com</h6>
                <h6 className="text-[90%] flex gap-2 items-center justify-start w-full pl-3">
                    <Image src={location} alt="" className="w-4"/> Nyabihu,Mukamira</h6>
                <h6 className="text-[90%] flex gap-2 items-center justify-start w-full pl-3">
                    <Image src={phone} alt="" className="w-4"/> 07843472824</h6>
            </div>
        </div>
    )
}
export default Footer