"use client"
import arrow from "@/assets/arrow.png"
import Image from "next/image"
import {useState} from "react"
const FAQsPage = ()=>{
    const faqs = [
        {
            title: "Who is the founder of red cross?",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias quo assumenda nesciunt tenetur voluptatibus, blanditiis, incidunt cumque dolores ipsum magnam itaque laboriosam at saepe non modi pariatur possimus quibusdam quos sequi, quia libero. Quis esse eum vitae similique voluptas"
        },
        {
            title: "Who is the founder of red cross?",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias quo assumenda nesciunt tenetur voluptatibus, blanditiis, incidunt cumque dolores ipsum magnam itaque laboriosam at saepe non modi pariatur possimus quibusdam quos sequi, quia libero. Quis esse eum vitae similique voluptasit"
        },
        {
            title: "Why join RRCA?",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias quo assumenda nesciunt tenetur voluptatibus, blanditiis, incidunt cumque dolores ipsum magnam itaque laboriosam at saepe non modi pariatur possimus quibusdam quos sequi, quia libero. Quis esse eum vitae similique voluptas"
        },
        {
            title: "Who are the leaders of RRCA?",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias quo assumenda nesciunt tenetur voluptatibus, blanditiis, incidunt cumque dolores ipsum magnam itaque laboriosam at saepe non modi pariatur possimus quibusdam quos sequi, quia libero. Quis esse eum vitae similique voluptas"
        },
        {
            title: "What does RRCA do to help its members and society?",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias quo assumenda nesciunt tenetur voluptatibus, blanditiis, incidunt cumque dolores ipsum magnam itaque laboriosam at saepe non modi pariatur possimus quibusdam quos sequi, quia libero. Quis esse eum vitae similique voluptas"
        },
        {
            title: "When was RRCA found?",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias quo assumenda nesciunt tenetur voluptatibus, blanditiis, incidunt cumque dolores ipsum magnam itaque laboriosam at saepe non modi pariatur possimus quibusdam quos sequi, quia libero. Quis esse eum vitae similique voluptas"
        },
    ]
    const [active, setActive] = useState(-1)
    const [showContent, setShowContent] = useState(true)
    return(
        <div className="w-full flex flex-col py-10">
            <h4 className="text-[180%] font-extrabold mb-5 mt-6">Our <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">FAQs</span></h4>
            <p>Here are some of the answers to the most asked questions. Contact us in case of confusion or more queries.</p>

            {faqs.map((item,i)=>{
                return(
                    <div className="bg-[#F3F3F3] py-5 my-2 pr-7  rounded-lg cursor-pointer flex flex-col justify-between items-center" onClick={()=> {setActive(i); setShowContent(!showContent)}}>
                        <h5 className="w-full flex justify-between items-center border-l-2 border-black pl-7">{item.title} <Image src={arrow} alt="" className="w-3 h-3"/></h5>
                        {
                            (active == i && showContent == true) 
                            ?
                                <p className="text-[80%] mt-5 pl-7">{item.content}</p>
                            :
                                <></>
                        }
                    </div>
                )
            })}
        </div>
    )
}
export default FAQsPage