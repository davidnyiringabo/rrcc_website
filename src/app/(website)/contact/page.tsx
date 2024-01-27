"use client";

import Image from "next/image";
import contact from "@/assets/contact.svg";
import { Gmail, Instagram, Twitter, Club } from "@/components/icons";
import { useState } from "react";

const ActivitiesPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });
  const submit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      comment: "",
    });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="w-full flex md:flex-row flex-col justify-between px-4 md:px-14 pb-[8rem]">
      <div className="w-full md:w-[30%] flex flex-col items-center md:items-start justify-center">
        <Image src={contact} alt="" className="w-[20rem] md:w-auto" />
        <h4 className="text-[130%] font-extrabold mb-5">
          Also{" "}
          <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">
            Find Us On
          </span>
        </h4>

        <div className="w-full flex flex-col justify-center md:justify-start gap-4">
          <span className="flex items-center gap-2">
            <Gmail />
            <h6 className="text-[90%] font-semibold">rcaredcross@gmail.com</h6>
          </span>
          <span className="flex items-center gap-2">
            <Instagram />
            <h6 className="text-[90%] font-semibold">@rcaredcross</h6>
          </span>
          <span className="flex items-center gap-2">
            <Twitter />
            <h6 className="text-[90%] font-semibold">@rcaredcross</h6>
          </span>
          <span className="flex items-center gap-2">
            <Club />
            <h6 className="text-[90%] font-semibold">
              Club time: Saturday 14:30-15:30
            </h6>
          </span>
        </div>
      </div>

      <div className="w-full md:w-[55%] flex flex-col justify-center gap-4">
        <h4 className="text-[150%] font-extrabold mb-5 mt-6">
          Get in{" "}
          <span className="text-[100%] border-b-[3px] border-[#CC0000] text-green-700 hover:bg-[#CC0000] hover:p-1 hover:pb-0 hover:text-white hover:cursor-pointer">
            Touch
          </span>
        </h4>
        <h6 className="text-[90%] text-justify">
          Get in touch with the Red Cross team. Your concerns and ideas are
          highly appreciated. We will reach out to you in no time!
        </h6>
        <form
          onSubmit={submit}
          className="md:w-full flex flex-col items-center gap-4"
        >
          <div className="w-full flex justify-between">
            <div className="w-[48%] flex flex-col gap-1">
              <label htmlFor="firstname" className="text-[80%] font-semibold">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstname"
                placeholder="Your First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="activity-input text-[80%] border-[1.4px] border-black font-light outline-none  px-5 py-3"
              />
            </div>
            <div className="w-[48%] flex flex-col gap-1">
              <label htmlFor="lastname" className="text-[80%] font-semibold">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastname"
                placeholder="Your Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="activity-input text-[80%] border-[1.4px] border-black font-light outline-none  px-5 py-3"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="text-[80%] font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="activity-input text-[80%] border-[1.4px] border-black font-light outline-none  px-5 py-3"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="phone" className="text-[80%] font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="activity-input text-[80%] border-[1.4px] border-black font-light outline-none  px-5 py-3"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="text-[80%] font-semibold">
              Phone Number
            </label>
            {/* <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Phone Number"
                    className="activity-input text-[80%] border-[1.4px] border-black font-light outline-none  px-5 py-3"
                    /> */}
            <textarea
              name="comment"
              id="comment"
              placeholder="Write Here ..."
              value={formData.comment}
              onChange={handleChange}
              className="h-[30vh] text-[80%] border-[1.4px] border-black font-light outline-none  px-5 py-3 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-[80%] h-[43px] bg-[#00A106] rounded-[1px] flex items-center justify-center text-white mt-3"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActivitiesPage;
