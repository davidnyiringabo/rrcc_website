import ImagesGroup from "@/components/ImagesGroup"
import Goal from "@/components/ImagesGroup/Goal"
import { goals } from "@/constants"

const AboutPage = ()=>{
    return(
        <main className="w-full flex flex-col justify-center py-10">
                <div className="px-4 md:px-14">
                    <h4 className="text-[180%] font-extrabold mb-5 mt-6">Our <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">Mission</span></h4>
                    <p className="w-full mb-2 my-3 mb-6 text-[80%] font-light text-[#1E1E1E]">The Red Cross Club is an organized group of individuals who come together to support the mission and values of the Red Cross. The club's purpose is to promote humanitarianism, raise awareness about humanitarian issues, and actively engage in activities that contribute to the well-being of individuals and communities in need.</p>
                    <p  className="w-full mb-2 my-3 text-[80%] font-light text-[#1E1E1E]">The club's mission is aligned with the broader mission of the Red Cross, which is to alleviate human suffering and protect human dignity. The club serves as a platform for students and community members to learn, volunteer, and take action on humanitarian initiatives.</p>

                    <ImagesGroup/>
                    <h4 className="text-[180%] font-extrabold mb-5 mt-10">Our <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">Goals</span></h4>
                    <div className="w-[95%] mx-auto flex flex-col md:grid grid-cols-2 gap-x-6 gap-y-6 items-center">
                            {goals.map((pro,i)=>{
                                return(
                                    <Goal image={pro.icon} title={pro.head} content={pro.content} i={i} key={i}/>
                                )
                            })}
                    </div>

                </div>
                <section className="w-full flex flex-col mt-10">
                    <h4 className="text-[180%] font-extrabold mb-5 mt-6 px-4 md:px-14">Our <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">History</span></h4>
                    <div className="w-full flex flex-col items-center gap-12 bg-[#d9d9d96c] px-4 md:px-14 pb-[7rem]">
                        <h4 className="text-[180%] font-extrabold mb-5 mt-6">The <span className="text-[100%] text-center border-b-[3px] border-[#CC0000] hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">Beginning</span></h4>
                        <p className="w-[75%] text-center mt-1">Lorem ipsum dolor sit amet. In fuga amet est quas laborum vel fugit natus ut quam labore. Ut quia neque sed voluptatem doloribus sit nesciunt rerum et nihil galisum ut voluptatem asperiores sed suscipit nisi.</p>
                        <p className="w-[75%] text-center mt-1">Lorem ipsum dolor sit amet. In fuga amet est quas laborum vel fugit natus ut quam labore. Ut quia neque sed voluptatem doloribus sit nesciunt rerum et nihil galisum ut voluptatem asperiores sed suscipit nisi.</p>
                        <p className="w-[75%] text-center mt-1">Lorem ipsum dolor sit amet. In fuga amet est quas laborum vel fugit natus ut quam labore. Ut quia neque sed voluptatem doloribus sit nesciunt rerum et nihil galisum ut voluptatem asperiores sed suscipit nisi.</p>
                        <p className="w-[75%] text-center mt-1">Lorem ipsum dolor sit amet. In fuga amet est quas laborum vel fugit natus ut quam labore. Ut quia neque sed voluptatem doloribus sit nesciunt rerum et nihil galisum ut voluptatem asperiores sed suscipit nisi.</p>
                    </div>
                    <div className="w-full flex flex-col items-center gap-12 bg-[#a7a7a785] px-4 md:px-14 pb-[7rem]">
                        <h4 className="text-[180%] font-extrabold mb-5 mt-6"><span className="text-[100%] text-center border-b-[3px] border-[#CC0000] hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">Now</span></h4>
                        <p className="w-[75%] text-center mt-1">Lorem ipsum dolor sit amet. In fuga amet est quas laborum vel fugit natus ut quam labore. Ut quia neque sed voluptatem doloribus sit nesciunt rerum et nihil galisum ut voluptatem asperiores sed suscipit nisi.</p>
                        <p className="w-[75%] text-center mt-1">Lorem ipsum dolor sit amet. In fuga amet est quas laborum vel fugit natus ut quam labore. Ut quia neque sed voluptatem doloribus sit nesciunt rerum et nihil galisum ut voluptatem asperiores sed suscipit nisi.</p>
                        <p className="w-[75%] text-center mt-1">Lorem ipsum dolor sit amet. In fuga amet est quas laborum vel fugit natus ut quam labore. Ut quia neque sed voluptatem doloribus sit nesciunt rerum et nihil galisum ut voluptatem asperiores sed suscipit nisi.</p>
                        <p className="w-[75%] text-center mt-1">Lorem ipsum dolor sit amet. In fuga amet est quas laborum vel fugit natus ut quam labore. Ut quia neque sed voluptatem doloribus sit nesciunt rerum et nihil galisum ut voluptatem asperiores sed suscipit nisi.</p>
                    </div>
                </section>
                <section className="w-full flex flex-col mt-7">
                    <h4 className="text-[180%] font-extrabold mt-6 px-4 md:px-14">Our <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">Milestone </span></h4>
                    <h6 className="px-4 md:px-14 mb-5 text-[70%] mt-3">View some of our most significant stages in our RRCA family.</h6>
                    <div className="w-full md:h-[90vh] flex flex-col items-center gap-12 bg-[#d9d9d96c] px-4 md:px-14 pb-[7rem]">
                        
                    </div>
                </section>
        </main>
    )
}

export default AboutPage