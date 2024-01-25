import Image, { StaticImageData } from "next/image"
import Link from "next/link"

const NewsComponent = ({image, header, content, date}:{ image: StaticImageData, header: string, content: string, date: string})=>{
    return(
        <div className="w-[90%] rounded-lg flex flex-col gap-2 shadow-lg shadow-slate-400 my-3 pb-2 cursor-pointer" style={{boxShadow: "3px 3px 23px 0px #0000003D"}}>
            <Image src={image} alt="" className="w-full rounded-t-lg h-[10rem]"/>
            <h4 className="w-full text-[80%] px-2 font-bold">{header}</h4>
            <h6 className="text-[60%]  px-2 text-[#1E1E1E] mt-[-4px]">{content}</h6>

            <Link href={"/"} className="text-[#CC0000] font-bold text-[60%] px-2 mt-[-8px]">Read more</Link>
            <p className="text-[55%] px-2">{date}</p>
        </div>
    )
}
export default NewsComponent