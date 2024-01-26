import Image, { StaticImageData } from "next/image"
const Goal = ({image, title, content}:{image: StaticImageData, title: string, content: string}) =>{
    return(
        <div className="border-[1px] border-[#CC0000] rounded-lg flex items-center justify-between ">
            <Image src={image} alt="" className="w-8 my-3 mt-1"/>
            <div className="flex flex-col gap-3 items-start">
                <h5 className="my-3 font-bold text-[80%] w-full text-center">{title}</h5>
                <p className="text-[65%] font-medium text-black leading-3 text-left w-[90%] ">{content}</p>
            </div>
        </div>
    )
}

export default Goal;