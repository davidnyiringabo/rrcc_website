import ImagesGroup from "@/components/ImagesGroup"
import Goal from "@/components/ImagesGroup/Goal"
import { programs } from "@/constants"

const AboutPage = ()=>{
    return(
        <div className="w-full flex flex-col justify-center px-4 md:px-14 py-10">
            <h4 className="text-[180%] font-extrabold mb-5 mt-6">Our <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">Mission</span></h4>
            <p className="w-full mb-2 my-3 mb-6 text-[80%] font-light text-[#1E1E1E]">The Red Cross Club is an organized group of individuals who come together to support the mission and values of the Red Cross. The club's purpose is to promote humanitarianism, raise awareness about humanitarian issues, and actively engage in activities that contribute to the well-being of individuals and communities in need.</p>
            <p  className="w-full mb-2 my-3 text-[80%] font-light text-[#1E1E1E]">The club's mission is aligned with the broader mission of the Red Cross, which is to alleviate human suffering and protect human dignity. The club serves as a platform for students and community members to learn, volunteer, and take action on humanitarian initiatives.</p>

            <ImagesGroup/>
            <h4 className="text-[180%] font-extrabold mb-5 mt-6">Our <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">Goals</span></h4>
            <div className="w-[95%] mx-auto flex flex-col md:grid grid-cols-2 gap-x-6 gap-y-6 items-center">
                    {programs.map((pro)=>{
                        return(
                            <Goal image={pro.icon} title={pro.head} content={pro.content}/>
                        )
                    })}
            </div>
        </div>


    )
}

export default AboutPage