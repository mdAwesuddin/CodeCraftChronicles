import React from "react";
import { MdLaptopChromebook } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { BlogsState } from "../Context";

const About = () => {
  const { userdetails: details } = BlogsState();

  return (
    <div className="pt-1 max-w-2xl mx-auto px-6 text-center">
      <div className="flex w-full justify-center align-middle">
        <img
          src={
            details && details[0]?.abtus_image ? details[0]?.abtus_image : ""
          }
          className="h-80"
        />
      </div>
      <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
        Hi,{" "}
        <span className="bg-indigo-400 text-white rounded px-1 dark:bg-indigo-500">
          I'm {details && details[0]?.name ? details[0]?.name : "name"} .
        </span>{" "}
        Nice to meet you.
      </h2>
      <p className="text-gray-600 mt-4 dark:text-indigo-200">
        {details && details[0]?.short_des ? details[0]?.short_des : ""}
      </p>
      <div className="text-center pt-8">
        <button className="bg-indigo-500 px-3 py-1 font-semibold text-white rounded ml-3 dark:bg-indigo-600">
          {details &&
          details.length > 0 &&
          details[0]?.protfolio_url != null ? (
            <a
              className="flex justify-center items-center gap-2"
              href={details[0]?.protfolio_url}
              target="_blank"
            >
              <MdLaptopChromebook />
              See My Works
            </a>
          ) : (
            <></>
          )}
        </button>
        <button className="bg-indigo-500 px-3 py-1 font-semibold text-white rounded ml-3 dark:bg-indigo-600">
          {details && details.length > 0 && details[0]?.lin_url != null ? (
            <a
              className="flex justify-center items-center gap-2"
              href={details[0]?.lin_url}
              target="_blank"
            >
              <FaLinkedinIn /> Follow Me
            </a>
          ) : (
            <></>
          )}
        </button>
      </div>
    </div>
  );
};

export default About;
