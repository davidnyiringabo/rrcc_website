import flag from "@/assets/Rectangle 53.png"
import img from "@/assets/Rectangle 48.png"
import img1 from "@/assets/Rectangle 48 (1).png"
import img2 from "@/assets/Rectangle 48 (2).png"
import img3 from "@/assets/Rectangle 48 (3).png"
import img4 from "@/assets/Rectangle 48 (4).png"
import img5 from "@/assets/Rectangle 48 (5).png"
import img6 from "@/assets/Rectangle 48 (6).png"
import img7 from "@/assets/Rectangle 48 (7).png"
import Image from "next/image"
import FAQsPage from "@/components/FAQs/index"

const ActivitiesPage = ()=>{
    const gallery = [
        {
            image: img1,
            text: "Lorem ipsum dolor sit amet. Sit earum consequuntur et enim illo sed obcaecati tempora sed molestiae rerum aut pariatur velit. Hic architecto galisum sit aspernatur nesciunt et consectetur consequatur qui fugit vero qui facilis dignissimos vel esse libero."
        },
        {
            image: img2,
            text: "Lorem ipsum dolor sit amet. Sit earum consequuntur et enim illo sed obcaecati tempora sed molestiae rerum aut pariatur velit. Hic architecto galisum sit aspernatur nesciunt et consectetur consequatur qui fugit vero qui facilis dignissimos vel esse libero."
        },
        {
            image: img3,
            text: "Lorem ipsum dolor sit amet. Sit earum consequuntur et enim illo sed obcaecati tempora sed molestiae rerum aut pariatur velit. Hic architecto galisum sit aspernatur nesciunt et consectetur consequatur qui fugit vero qui facilis dignissimos vel esse libero."
        },{
            image: img4,
            text: "Lorem ipsum dolor sit amet. Sit earum consequuntur et enim illo sed obcaecati tempora sed molestiae rerum aut pariatur velit. Hic architecto galisum sit aspernatur nesciunt et consectetur consequatur qui fugit vero qui facilis dignissimos vel esse libero."
        },{
            image: img5,
            text: "Lorem ipsum dolor sit amet. Sit earum consequuntur et enim illo sed obcaecati tempora sed molestiae rerum aut pariatur velit. Hic architecto galisum sit aspernatur nesciunt et consectetur consequatur qui fugit vero qui facilis dignissimos vel esse libero."
        },{
            image: img6,
            text: "Lorem ipsum dolor sit amet. Sit earum consequuntur et enim illo sed obcaecati tempora sed molestiae rerum aut pariatur velit. Hic architecto galisum sit aspernatur nesciunt et consectetur consequatur qui fugit vero qui facilis dignissimos vel esse libero."
        },{
            image: img7,
            text: "Lorem ipsum dolor sit amet. Sit earum consequuntur et enim illo sed obcaecati tempora sed molestiae rerum aut pariatur velit. Hic architecto galisum sit aspernatur nesciunt et consectetur consequatur qui fugit vero qui facilis dignissimos vel esse libero."
        },{
            image: img,
            text: "Lorem ipsum dolor sit amet. Sit earum consequuntur et enim illo sed obcaecati tempora sed molestiae rerum aut pariatur velit. Hic architecto galisum sit aspernatur nesciunt et consectetur consequatur qui fugit vero qui facilis dignissimos vel esse libero."
        },
    ]
    return(
        <div className="w-full flex flex-col justify-center px-4 md:px-14 py-6">
            <h4 className="text-[180%] font-extrabold mb-5 mt-6">Perform <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">First Aid</span></h4>
            <div className="w-full md:w-[60%]">
                <p className="">Always wanted to learn how to deliver first aid to those in need? Here’s a simple step by step guide to learning how to perform first aid to check a person.</p>
                <h4 className="text-[150%] font-bold my-4 mt-8">Steps:</h4>
                    <h6 className="my-6"> <span className="py-2 px-4 rounded-[100%] bg-[#FFB6B680] ">1</span> CHECK the scene for safety, obtain consent, and use PPE.</h6>
                    <h6 className="my-6"> <span className="py-2 px-4 rounded-[100%] bg-[#FFB6B680] ">2</span> CHECK for responsiveness, breathing, bleeding or other conditions using shout-tap-shout.</h6>
                    <h6 className="my-6"> <span className="py-2 px-4 rounded-[100%] bg-[#FFB6B680] ">3</span> For a person who is unresponsive and not breathing, start CPR and use an AED immediately.</h6>
                    <h6 className="my-6"> <span className="py-2 px-4 rounded-[100%] bg-[#FFB6B680] ">4</span> If the person is responsive and is fully awake: <br/>
                        <span className="ml-20"/>&#x2714; Do not ask the person to move any area of the body that causes discomfort or pain.<br/>
                        <span className="ml-20"/>&#x2714; Take note of any medical identification tags.
                    </h6>
                    <h6 className="my-6"> <span className="py-2 px-4 rounded-[100%] bg-[#FFB6B680] ">5</span> After completing the CHECK step, CALL 911 and get equipment. Then, give CARE based on the condition found and your level of training</h6>
            </div>

            <div className="w-[100%] py-5 flex flex-col md:flex-row items-center md:items-start justify-between py-10 pt-10">
                <div className="w-full md:w-[50%]">
                    <h1 className="text-[180%] font-extrabold mb-5">More from <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">Red Cross</span></h1>

                    <p className="mb-2 my-3 mb-6 text-[80%] font-light text-[#1E1E1E]">The International Committee of the Red Cross (ICRC; Comité International de la Croix-Rouge) is a humanitarian organization based in Geneva, 
                    Switzerland and is a three-time Nobel Prize Laureate. State parties (signatories) to the Geneva Convention of 1949 and its Additional Protocols of 1977 have given the ICRC a mandate to protect victims of international and internal armed conflicts.
                    Such victims include war wounded persons, prisoners, refugees, civilians and other non-combatants. Find out more from the International Committee of Red cross by visiting their official website: www.icrc.org/en</p>
                </div>

                <Image src={flag} alt="" className="mt-4 w-[80%] md:w-[20rem] md:mt-[-10px] md:mr-[2rem] rounded-lg"/>
            </div>
            <div className="w-full flex flex-col items-center">
                <h4 className="text-[180%] font-extrabold mb-5 mt-6">Our <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">Testimonials</span></h4>
                <div className="w-full bg-[#00A1060D] h-[50vh] rounded-lg">

                </div>
            </div>
            <div>
                <h4 className="text-[180%] font-extrabold mb-5 mt-6">Our <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">Gallery</span></h4>
                <h5 className="my-2 font-bold mb-5">See what we have accomplished through your help.</h5>

                <div className="flex flex-col md:grid grid-cols-4 gap-x-5 gap-y-4">
                    {gallery.map((item)=>{
                        return(
                            <div className="w-full h-full rounded-lg relative cursor-pointer">
                                <Image src={item.image} alt="" className="w-full h-full rounded-lg bg-cover"/>
                                <h6 className="p-3 absolute bottom-0 text-[70%] text-white font-extrabold h-[30%] bg-[#0000006b] rounded-b-lg hover:h-full">{item.text}</h6>
                            </div>
                        )
                    })}
                </div>
                <FAQsPage/>
            </div>
        </div>
    )
}

export default ActivitiesPage