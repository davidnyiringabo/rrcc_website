import SwapContainer from "@/components/Swap"
import img from "@/assets/undraw_collaborators_re_hont 1.png"
import Program from "@/components/Program"
import Link from "next/link"

import { MdOutlineArrowRightAlt } from "react-icons/md";

const ActivitiesPage = ()=>{
    const programs = [
        {
            icon: img,
            head:"International Humanitarian Law (IHL) Education",
            content:"Some Red Cross clubs engage in programs related to international humanitarian law. They educate students about the principles and rules governing armed conflicts, human rights, and the protection of civilians. These programs promote understanding, empathy, and respect for humanitarian values."
        },
        {
            icon: img,
            head:"Leadership Development",
            content:"Red Cross clubs provide opportunities for students to develop leadership skills. They may offer training workshops, mentorship programs, and leadership roles within the club, allowing students to take initiative and make a positive impact in their communities."
        },
        {
            icon: img,
            head:"Red Cross Youth Exchanges and Conferences",
            content:"Red Cross clubs provide opportunities for students to develop leadership skills. They may offer training workshops, mentorship programs, and leadership roles within the club, allowing students to take initiative and make a positive impact in their communities."
        },
        {
            icon: img,
            head:"Advocacy and Awareness Campaigns",
            content:"Red Cross clubs engage in advocacy efforts to raise awareness about social issues and promote positive change. They may organize campaigns on topics such as climate change, refugee rights, youth empowerment, or other relevant issues, encouraging students to become active global citizens."
        },
        {
            icon: img,
            head:"First Aid and CPR Training",
            content:"Red Cross clubs often provide training sessions in first aid and CPR to equip students with essential life-saving skills. These training sessions may be open to students, teachers, and other members of the school community."
        },
        {
            icon: img,
            head:"Community Service Projects",
            content:"Red Cross clubs organize and participate in various community service projects to address local needs. These projects can include blood drives, fundraising events for disaster relief efforts, volunteering at local shelters or food banks, organizing clothing or book drives, or supporting vulnerable populations in the community."
        },
    ]
    return(
        <div className="w-full flex flex-col justify-center px-4 md:px-14 py-10">
            <h4 className="text-[180%] font-extrabold mb-5 mt-6">Our <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">Activities</span></h4>
            <p className="w-full md:w-[50%] mb-2 my-3 mb-6 text-[80%] font-light text-[#1E1E1E]">The Red Cross carries out various activities to promote health, safety, and humanitarian values among students. Some of our activities include:</p>
            <p  className="w-full md:w-[50%] mb-2 my-3 text-[80%] font-light text-[#1E1E1E]">These programs provide opportunities for students to develop leadership skills, gain practical experience in community service, and contribute to the welfare of others. We aim to inspire compassion, empathy, and a sense of social responsibility among students, preparing them to be active and engaged members of their communities.</p>
            <SwapContainer/>

            <div>
                <h4 className="text-[180%] mb-5 mt-7 font-extrabold">Our <span className="text-[100%] border-[#CC0000] border-b-[3px] hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">Programs</span></h4>
                <div className="w-[95%] mx-auto flex flex-col md:grid grid-cols-3 gap-x-6 gap-y-6 items-center">
                    {programs.map((pro)=>{
                        return(
                            <Program image={pro.icon} head={pro.head} content={pro.content}/>
                        )
                    })}
                </div>
                <div className="w-full flex justify-end px-10 mt-2">
                    <Link href={"/activities"} className="flex items-center underline">
                        <MdOutlineArrowRightAlt/>
                        <h6 className="text-[60%] font-bold">View More</h6>
                    </Link>
                </div>
            </div>

            <div className="my-20 w-full flex flex-col items-center">
                <h4 className="text-[160%] font-bold text-[#00A106]">You just took a step towards making a positive impact.</h4>
                <p className="text-[120%] w-[95%] md:w-[60%] text-center my-6 font-light text-[#000000cb]">Explore our various programs and learn about our volunteer opportunities, and discover how you can contribute to saving the lives of many.</p>
                <p className="text-[120%] w-[95%] md:w-[60%] text-center my-6 font-light text-[#000000cb]">Explore our various programs and learn about our volunteer opportunities, and discover how you can contribute to saving the lives of many.</p>
                <h4 className="text-[160%] font-bold text-[#00A106]">You just took a step towards making a positive impact.</h4>

            </div>
        </div>
    )
}

export default ActivitiesPage