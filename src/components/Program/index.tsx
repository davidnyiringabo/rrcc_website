import { StaticImageData } from "next/image"
import Image from "next/image"

const Program = ({image, head, content}:{image:StaticImageData, head:string, content:string})=>{
    return(
        <div className="border-2 border-black rounded-lg flex flex-col items-center py-3 pt-1 pb-10 h-full">
            <Image src={image} alt="" className="w-8 my-3 mt-1"/>
            <h5 className="my-3 font-bold">{head}</h5>
            <p className="text-[80%] text-left w-[90%]">{content}</p>
        </div>
    )
}
export default Program