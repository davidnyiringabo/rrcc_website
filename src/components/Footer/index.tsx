import logo from "@/assets/Frame 3.png";
import Image from "next/image";
import Link from "next/link";
import message from "@/assets/Group (2).png";
import phone from "@/assets/Frame 27.png";
import location from "@/assets/Frame 26.png";
import fb from "@/assets/bxl_facebook.png";
import ig from "@/assets/akar-icons_instagram-fill.png";
import ln from "@/assets/simple-icons_linkedin.png";
import twt from "@/assets/mdi_twitter.png";
import { FiChevronRight } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-3 md:gap-0 items-start justify-start md:items-center bg-[#212121] justify-between px-14 text-white py-[10vh] pb-[15vh] md:py-0 md:pb-0 md:h-[60vh]">
      <div className="w-full md:w-[45%] flex items-start flex-col h-[80%]">
        <Image src={logo} alt="" className="w-48 h-14 mb-8" />
        <h5 className="text-[80%] font-medium mb-5">
          The club's mission is aligned with the broader mission of the Red
          Cross, which is to alleviate human suffering and protect human
          dignity.
        </h5>
        <div className="flex mt-3 gap-3 items-center">
          <Link
            href={"www.facebook.com"}
            target="_blank"
            className="w-[30px] h-[30px] bg-[#ffffff8d] rounded-[100%] flex items-center justify-center"
          >
            <Image src={ig} alt=" " />
          </Link>
          <Link
            href={"www.facebook.com"}
            target="_blank"
            className="w-[30px] h-[30px] bg-[#ffffff8d] rounded-[100%] flex items-center justify-center"
          >
            <Image src={fb} alt=" " />
          </Link>
          <Link
            href={"www.facebook.com"}
            target="_blank"
            className="w-[30px] h-[30px] bg-[#ffffff8d] rounded-[100%] flex items-center justify-center"
          >
            <Image src={twt} alt=" " />
          </Link>
          <Link
            href={"www.facebook.com"}
            target="_blank"
            className="w-[30px] h-[30px] bg-[#ffffff8d] rounded-[100%] flex items-center justify-center"
          >
            <Image src={ln} alt=" " />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start h-[80%]">
        <h4 className="text-[150%]">Quick links</h4>

        <Link
          className="text-[90%] flex items-center ml-4 my-[0.2rem] font-extralight"
          href={"/"}
        >
          {" "}
          <span>
            <FiChevronRight size={13} />
          </span>{" "}
          <span className="text-[85%] font-extralight underline">Home</span>
        </Link>
        <Link
          className="text-[90%] flex items-center ml-4 my-[0.2rem] font-extralight"
          href={"/activities"}
        >
          {" "}
          <span>
            <FiChevronRight size={13} />
          </span>{" "}
          <span className="text-[85%] font-extralight underline">
            Activities
          </span>
        </Link>
        <Link
          className="text-[90%] flex items-center ml-4 my-[0.2rem] font-extralight"
          href={"/resources"}
        >
          {" "}
          <span>
            <FiChevronRight size={13} />
          </span>{" "}
          <span className="text-[85%] font-extralight underline">
            Resources
          </span>
        </Link>
        <Link
          className="text-[90%] flex items-center ml-4 my-[0.2rem] font-extralight"
          href={"/about"}
        >
          {" "}
          <span>
            <FiChevronRight size={13} />
          </span>{" "}
          <span className="text-[85%] font-extralight underline">About Us</span>
        </Link>
        <Link
          className="text-[90%] flex items-center ml-4 my-[0.2rem] font-extralight"
          href={"/contact"}
        >
          {" "}
          <span>
            <FiChevronRight size={13} />
          </span>{" "}
          <span className="text-[85%] font-extralight underline">
            Contact Us
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-start justify-start h-[80%]">
        <h4 className="text-[150%]">Info</h4>

        <h6 className="text-[85%] flex gap-2 items-center justify-start w-full pl-3">
          <MdOutlineEmail color="#FFF" /> rcaredcross@gmail.com
        </h6>
        <h6 className="text-[85%] flex gap-2 items-center justify-start w-full pl-2">
          <MdLocationPin size={18} color="#FFF" /> Nyabihu,Mukamira
        </h6>
        <h6 className="text-[85%] flex gap-2 items-center justify-start w-full pl-3">
          <FaPhone color="#FFF" /> 07843472824
        </h6>
      </div>
    </div>
  );
};
export default Footer;
