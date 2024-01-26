import Hero from "@/components/Hero";
import NewsComponent from "@/components/News";
import Image from "next/image";
import img1 from "@/assets/Rectangle 3.png";
import img2 from "@/assets/Rectangle 3 (1).png";
import img3 from "@/assets/Rectangle 3 (2).png";
import img4 from "@/assets/Rectangle 3 (3).png";
import img5 from "@/assets/Rectangle 3 (4).png";
import img6 from "@/assets/Rectangle 3 (5).png";
import flag from "@/assets/Group 10.png";

export default function Home() {
  return (
    <main className="w-full px-4 md:px-14 mb-10">
      <Hero />
      <div className="w-full md:px-2">
        <h5 className="text-[180%] font-extrabold">Blog & News</h5>
        <p className="text-[#717171] mt-[-2px]">Latest activites</p>

        <div className="w-full flex flex-col md:grid grid-cols-3 gap-x-4 justify-center mt-5">
          <NewsComponent
            image={img1}
            header="RCA Red Cross visited Genocide Memorial Site"
            content="The Red Cross also plays a significant role in promoting healthcare and preventing diseases through various initiatives, including vaccination campaigns, health education, and access to clean water and sanitation facilities."
            date="12/11/2022"
          />
          <NewsComponent
            image={img2}
            header="RCA Red Cross visited Genocide Memorial Site"
            content="The Red Cross also plays a significant role in promoting healthcare and preventing diseases through various initiatives, including vaccination campaigns, health education, and access to clean water and sanitation facilities."
            date="12/11/2022"
          />
          <NewsComponent
            image={img3}
            header="RCA Red Cross visited Genocide Memorial Site"
            content="The Red Cross also plays a significant role in promoting healthcare and preventing diseases through various initiatives, including vaccination campaigns, health education, and access to clean water and sanitation facilities."
            date="12/11/2022"
          />
          <NewsComponent
            image={img4}
            header="RCA Red Cross visited Genocide Memorial Site"
            content="The Red Cross also plays a significant role in promoting healthcare and preventing diseases through various initiatives, including vaccination campaigns, health education, and access to clean water and sanitation facilities."
            date="12/11/2022"
          />
          <NewsComponent
            image={img5}
            header="RCA Red Cross visited Genocide Memorial Site"
            content="The Red Cross also plays a significant role in promoting healthcare and preventing diseases through various initiatives, including vaccination campaigns, health education, and access to clean water and sanitation facilities."
            date="12/11/2022"
          />
          <NewsComponent
            image={img6}
            header="RCA Red Cross visited Genocide Memorial Site"
            content="The Red Cross also plays a significant role in promoting healthcare and preventing diseases through various initiatives, including vaccination campaigns, health education, and access to clean water and sanitation facilities."
            date="12/11/2022"
          />
        </div>
      </div>
      <div className="w-[100%] py-5 flex flex-col md:flex-row items-center md:items-start justify-between py-10 mt-12">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[180%] font-extrabold mb-14">Why Join Us?</h1>

          <p className="mb-6 my-3 text-[80%] font-light text-[#1E1E1E]">
            Are you passionate about making a positive impact on people's lives?
            Do you want to be part of a global network that responds to
            emergencies, provides vital assistance, and promotes humanitarian
            values? Consider joining the Red Cross Club or getting involved with
            the Red Cross!
          </p>
          <p className="mb-3 my-3 text-[80%] font-light text-[#1E1E1E]">
            By joining the Red Cross Club, you can become part of a community of
            like-minded individuals who are dedicated to helping those in need.
            As a club member, you will have the opportunity to participate in a
            wide range of activities, including disaster preparedness
            initiatives, fundraising events, blood drives, and community
            outreach programs. You'll gain valuable skills, develop leadership
            abilities, and make lifelong friendships, all while making a
            difference in the lives of others.
          </p>

          <button className="bg-[#CC0000] text-[80%] text-white rounded-lg py-3 px-7 md:my-10">
            Join Us
          </button>
        </div>

        <Image
          src={flag}
          alt=""
          className="mt-4 w-[80%] md:w-[40%] h-[23rem] md:mt-0 rounded-lg md:mt-[-3rem]"
        />
      </div>
    </main>
  );
}
