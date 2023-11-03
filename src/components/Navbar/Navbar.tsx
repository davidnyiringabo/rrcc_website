"use client"
import logo from "@/assets/logo.svg"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = ()=>{
    const [activeTab, setActiveTab] = useState("home")
    return(
        <div className="w-full px-3 py-1 flex items-center  justify-between border-b-[1px] border-[#ccc]">
            <Image src={logo} alt="" className="w-24 h-16"/>

            <div className="hidden md:flex gap-7 items-center">
                <Link onClick={()=> setActiveTab("home")} href={"/"} className={`${activeTab == "home" ? "text-[#ccc] font-medium" : " "} text-[100%] font-medium`}>Home</Link>
                <Link onClick={()=> setActiveTab("activities")} href={"/activities"} className={`${activeTab == "activities" ? "text-[#ccc] font-medium" : " "} text-[100%] font-medium`}>Activities</Link>
                <Link onClick={()=> setActiveTab("resources")} href={"/resources"} className={`${activeTab == "resources" ? "text-[#ccc] font-medium" : " "} text-[100%] font-medium`}>Resources</Link>
                <Link onClick={()=> setActiveTab("about")} href={"/about"} className={`${activeTab == "about" ? "text-[#ccc] font-medium" : " "} text-[100%] font-medium`}>About us</Link>
                <Link onClick={()=> setActiveTab("contact")} href={"/contact"} className={`${activeTab == "contact" ? "text-[#ccc] font-medium" : " "} text-[100%] font-medium`}>Contact us</Link>
            </div>

            <Link href={"/join"} className="hidden md:flex px-5 h-[2.8rem] bg-[#CC0000] text-white items-center justify-center rounded-lg">Join us</Link>
        </div>
    )
}
export default Navbar