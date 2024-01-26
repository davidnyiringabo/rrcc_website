import SwapContainer from "@/components/Swap";
import Program from "@/components/Program";
import Link from "next/link";

import { MdOutlineArrowRightAlt } from "react-icons/md";
import { programs } from "@/constants";

const ActivitiesPage = () => {
  return (
    <div className="w-full flex flex-col justify-center px-4 md:px-14 py-10">
      <h4 className="text-[180%] font-extrabold mb-5 mt-6">
        Our{" "}
        <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">
          Activities
        </span>
      </h4>
      <p className="w-full md:w-[50%] mb-2 my-3 mb-6 text-[80%] font-light text-[#1E1E1E]">
        The Red Cross carries out various activities to promote health, safety,
        and humanitarian values among students. Some of our activities include:
      </p>
      <p className="w-full md:w-[50%] mb-2 my-3 text-[80%] font-light text-[#1E1E1E]">
        These programs provide opportunities for students to develop leadership
        skills, gain practical experience in community service, and contribute
        to the welfare of others. We aim to inspire compassion, empathy, and a
        sense of social responsibility among students, preparing them to be
        active and engaged members of their communities.
      </p>
      <SwapContainer />

      <div>
        <h4 className="text-[180%] mb-5 mt-7 font-extrabold">
          Our{" "}
          <span className="text-[100%] border-[#CC0000] border-b-[3px] hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">
            Programs
          </span>
        </h4>
        <div className="w-[95%] mx-auto flex flex-col md:grid grid-cols-3 gap-x-6 gap-y-6 items-center">
          {programs.map((pro) => {
            return (
              <Program image={pro.icon} head={pro.head} content={pro.content} />
            );
          })}
        </div>
        <div className="w-full flex justify-end px-10 mt-2">
          <Link href={"/activities"} className="flex items-center underline">
            <MdOutlineArrowRightAlt />
            <h6 className="text-[60%] font-bold">View More</h6>
          </Link>
        </div>
      </div>

      <div className="my-20 w-full flex flex-col items-center">
        <h4 className="text-[160%] font-bold text-[#00A106]">
          You just took a step towards making a positive impact.
        </h4>
        <p className="text-[120%] w-[95%] md:w-[60%] text-center my-6 font-light text-[#000000cb]">
          Explore our various programs and learn about our volunteer
          opportunities, and discover how you can contribute to saving the lives
          of many.
        </p>
        <p className="text-[120%] w-[95%] md:w-[60%] text-center my-6 font-light text-[#000000cb]">
          Explore our various programs and learn about our volunteer
          opportunities, and discover how you can contribute to saving the lives
          of many.
        </p>
        <h4 className="text-[160%] font-bold text-[#00A106]">
          You just took a step towards making a positive impact.
        </h4>
      </div>
    </div>
  );
};

export default ActivitiesPage;
