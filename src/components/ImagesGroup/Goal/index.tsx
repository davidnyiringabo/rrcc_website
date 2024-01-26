import Image, { StaticImageData } from "next/image";
const Goal = ({
  image,
  title,
  content,
  i,
}: {
  image: StaticImageData;
  title: string;
  content: string;
  i: number;
}) => {
  return (
    <div
      className={`w-full col-span-2 flex ${
        i % 2 ? "justify-end" : "justify-start"
      }`}
    >
      <div className="w-full md:w-[49%] h-full border-[1px] border-[#CC0000] rounded-lg flex items-center justify-between px-4 py-3 col-span-2">
        <Image src={image} alt="" className="w-12 my-3 mt-1" />
        <div className="w-3/4 h-full flex flex-col justify-start items-start">
          <h5 className="font-bold text-[80%] w-full text-start">{title}</h5>
          <p className="text-[65%] font-medium text-black leading-3 text-left ">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
