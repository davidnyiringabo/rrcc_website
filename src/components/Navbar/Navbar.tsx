"use client";
import logo from "@/assets/logo.svg";
import dots from "@/assets/dots.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const activeTab = usePathname();

  return (
    <div className="w-full px-10 py-4 flex items-center  justify-between border-b-[1px] border-[#ccc]">
      <Image src={logo} alt="" className="w-24 h-16" />

      <div className="hidden md:flex md:gap-14 items-center">
        <Link
          href={"/"}
          className={`${
            activeTab == "/"
              ? "font-bold text-black"
              : " text-[#646464] font-medium"
          } text-[90%]`}
        >
          Home
          {activeTab == "/" ? (
            <Image
              src={dots}
              alt=""
              className="w-3 mb-[-6px] text-center mx-auto"
            />
          ) : (
            <></>
          )}
        </Link>
        <Link
          href={"/activities"}
          className={`${
            activeTab == "/activities"
              ? "font-bold"
              : " text-[#646464] font-medium"
          } text-[90%]`}
        >
          Activities
          {activeTab == "/activities" ? (
            <Image src={dots} alt="" className="w-3 mb-[-6px]  mx-auto" />
          ) : (
            <></>
          )}
        </Link>
        <Link
          href={"/resources"}
          className={`${
            activeTab == "/resources"
              ? "font-bold"
              : " text-[#646464] font-medium"
          } text-[90%]`}
        >
          Resources
          {activeTab == "/resources" ? (
            <Image src={dots} alt="" className="w-3 mb-[-6px]  mx-auto" />
          ) : (
            <></>
          )}
        </Link>
        <Link
          href={"/about"}
          className={`${
            activeTab == "/about" ? "font-bold" : " text-[#646464] font-medium"
          } text-[90%]`}
        >
          About us
          {activeTab == "/about" ? (
            <Image src={dots} alt="" className="w-3 mb-[-6px]  mx-auto" />
          ) : (
            <></>
          )}
        </Link>
        <Link
          href={"/contact"}
          className={`${
            activeTab == "/contact"
              ? "font-bold"
              : " text-[#646464] font-medium"
          } text-[90%]`}
        >
          Contact us
          {activeTab == "/contact" ? (
            <Image src={dots} alt="" className="w-3 mb-[-6px]  mx-auto" />
          ) : (
            <></>
          )}
        </Link>
      </div>

      <Link
        href={"/join"}
        className="hidden text-[80%] md:flex px-6 h-[2.4rem] bg-[#CC0000] text-white items-center justify-center rounded-md"
      >
        Join us
      </Link>
    </div>
  );
};
export default Navbar;
