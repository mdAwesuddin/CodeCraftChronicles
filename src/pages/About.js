import React from "react";
import { MdLaptopChromebook } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";

const About = () => {
  return (
    <div className="pt-1 max-w-2xl mx-auto px-6 text-center">
      <div className="flex w-full justify-center align-middle">
        <img src="/images/Man_Working_on_laptop.png" className="h-80" />
      </div>
      <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
        Hi,{" "}
        <span className="bg-indigo-400 text-white rounded px-1 dark:bg-indigo-500">
          I'm Awesuddin .
        </span>{" "}
        Nice to meet you.
      </h2>
      <p className="text-gray-600 mt-4 dark:text-indigo-200">
        Iam a Software Engineer at Edvenswa Tech and a Self Taught Developer. My
        Field of Interest is in Building Scalable and Reliable Software Product
        and My Field of Interest is in Areas Related to Full Stack Development
        and Cloud Computing.
      </p>
      <div className="text-center pt-8">
        <button className="bg-indigo-500 px-3 py-1 font-semibold text-white rounded ml-3 dark:bg-indigo-600">
          <a
            className="flex justify-center items-center gap-2"
            href="https://mdawesuddin.vercel.app/"
            target="_blank"
          >
            <MdLaptopChromebook />
            See My Works
          </a>
        </button>
        <button className="bg-indigo-500 px-3 py-1 font-semibold text-white rounded ml-3 dark:bg-indigo-600">
          <a
            className="flex justify-center items-center gap-2"
            href="https://www.linkedin.com/in/mohammed-awesuddin-11305b222/"
            target="_blank"
          >
            <FaLinkedinIn /> Follow Me
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
