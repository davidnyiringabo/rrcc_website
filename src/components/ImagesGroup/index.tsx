import Image from "next/image";
import img1 from "@/assets/Rectangle 52.png";
import img2 from "@/assets/Rectangle 57.png";
import img3 from "@/assets/Rectangle 53.png";
import img4 from "@/assets/Rectangle 48 (5).png";
import img5 from "@/assets/Rectangle 48 (3).png";
import img6 from "@/assets/Rectangle 48 (4).png";

const ImagesGroup = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-5 mt-10">
      <div className="w-full">
        <Image src={img1} alt="" className="w-full h-[26vh] rounded" />
        <Image src={img2} alt="" className="w-[80%] h-[26vh] my-4 rounded" />
      </div>
      <div className="w-full">
        <Image src={img3} alt="" className="w-full h-[32vh] rounded" />
      </div>
      <div className="w-full">
        <Image src={img4} alt="" className="w-full h-[26vh] rounded" />
        <Image src={img5} alt="" className="w-[90%] h-[31vh] my-4 rounded" />
      </div>
      <div className="w-full">
        <Image src={img6} alt="" className="w-full h-[32vh] rounded" />
      </div>
    </div>
  );
};

export default ImagesGroup;
