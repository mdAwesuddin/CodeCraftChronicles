import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" inset-x-0 bottom-0 px-0 justify-center p-6 flex flex-wrap text-slate-100 sm:justify-between bg-footercolor sm:px-16 dark:bg-darkmodefootercolor">
      {/* mt-10 */}
      <div className="text-base">© 2024 Code Craft Chronicles —@Awesuddin</div>
      <div className="pt-5 flex gap-7 text-xl sm:pt-0">
        <a
          href="https://www.linkedin.com/in/mohammed-awesuddin-11305b222/"
          target="blank"
          className="hover:text-gray-600"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://x.com/MohammedAwes15"
          target="blank"
          className="hover:text-gray-600"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://github.com/mdAwesuddin"
          target="blank"
          className="hover:text-gray-600"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
