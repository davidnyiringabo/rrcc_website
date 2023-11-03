"use client"
import {useState} from "react"
import Image, { StaticImageData } from "next/image"
import img1 from "@/assets/fluent_people-community-48-filled.png"
import img2 from "@/assets/Vector (7).png"
import img3 from "@/assets/bxs_donate-blood.png"
import img4 from "@/assets/healthicons_world-care.png"
import img5 from "@/assets/healthicons_health.png"

const Item = ({icon, text, color, content, setActive}:{icon:StaticImageData, text: string,color:string, content: string, setActive: Function})=>{
    return(
        <div className="flex flex-col items-center gap-4" onClick={()=> setActive({
            icon: icon,
            text: text,
            content: content
        })}>
            <div className="p-2 rounded-[100%] border-dashed border-[1px] border-blue-200 cursor-pointer">
                <div className={`bg-[#FFA927] p-4 rounded-[100%]`}>
                    <Image src={icon} alt=""/>
                </div>
            </div>
            <h5 className="w-full text-[70%] text-center">{text}</h5>
        </div>
    )
}
const SwapContainer = ()=>{
    const tabs = [
        {
            icon: img1,
            text: "Community outreach and society",
            content:"The club actively engages in community outreach programs to provide assistance and support to vulnerable populations. This may involve organizing fundraisers, collecting donations for disaster-affected areas, or volunteering at local shelters or healthcare facilities."
        },
        {
            icon: img2,
            text: "Disaster Preparedness and Response",
            content:"The club actively engages in community outreach programs to provide assistance and support to vulnerable populations. This may involve organizing fundraisers, collecting donations for disaster-affected areas, or volunteering at local shelters or healthcare facilities."
        },
        {
            icon: img3,
            text: "Blood Drives and Donor Recruitment",
            content:"The club actively engages in community outreach programs to provide assistance and support to vulnerable populations. This may involve organizing fundraisers, collecting donations for disaster-affected areas, or volunteering at local shelters or healthcare facilities."
        },
        {
            icon: img4,
            text: "International Humanitarian Values",
            content:"The club actively engages in community outreach programs to provide assistance and support to vulnerable populations. This may involve organizing fundraisers, collecting donations for disaster-affected areas, or volunteering at local shelters or healthcare facilities."
        },
        {
            icon: img5,
            text: "Health and Safety Education",
            content:"The club actively engages in community outreach programs to provide assistance and support to vulnerable populations. This may involve organizing fundraisers, collecting donations for disaster-affected areas, or volunteering at local shelters or healthcare facilities."
        },
]

const [active, setActive] = useState(tabs[0])

    return(
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="w-full md:h-[60vh] md:w-[53%] bg-[#F6F6F6] flex flex-col md:flex-row rounded-lg">
                <div className="bg-[#016D05] rounded-r-[30px] flex items-center justify-end w-full md:w-[50%]  py-[10vh] md:py-0">
                    <div className="bg-white rounded-l-[30px] w-[100px] md:py-4 flex justify-center">
                        <div className="p-2 rounded-[100%] border-dashed border-[1px] border-blue-200 cursor-pointer">
                            <div className={`bg-[#FFA927] p-2 rounded-[100%]`}>
                                <Image src={active.icon} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[40%] py-5 pl-5">
                    <h5 className="font-bold mb-20">{active.text}</h5>
                    <p className="text-[80%]">{active.content}</p>

                </div>
            </div>
            <div className="w-full md:w-[42%] flex flex-col items-center">
                <div className="w-[70%] flex md:grid grid-cols-2 gap-x-5 my-5 justify-center">
                    <Item icon={tabs[0].icon} text={tabs[0].text} content={tabs[0].content} setActive={setActive} color="#FFA927"/>
                    <Item icon={tabs[1].icon} text={tabs[2].text} content={tabs[2].content} setActive={setActive} color="007D056B"/>
                </div>
                <div className="w-full flex md:grid grid-cols-3 gap-x-5 my-5 justify-between">
                    <Item icon={tabs[2].icon} text={tabs[2].text} content={tabs[2].content} setActive={setActive} color="#0015FF"/>
                    <Item icon={tabs[3].icon} text={tabs[3].text} content={tabs[3].content} setActive={setActive} color="#FF7676"/>
                    <Item icon={tabs[4].icon} text={tabs[4].text} content={tabs[4].content} setActive={setActive} color="#369BFF"/>
                </div>
            </div>
        </div>
    )
}
export default SwapContainer