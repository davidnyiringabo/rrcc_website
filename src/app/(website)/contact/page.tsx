import Image from "next/image";
import contact from "@/assets/contact.svg";

const ActivitiesPage = () => {
  return (
    <div className="w-full flex justify-between px-4 md:px-14">
      <div className="w-[30%] flex flex-col justify-center">
        <Image src={contact} alt="" className="w-[20rem]" />
        <h4 className="text-[130%] font-extrabold mb-5 mt-6">
          Also{" "}
          <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">
            Find Us On
          </span>
        </h4>
      </div>
    </div>
  );
};

export default ActivitiesPage;
