import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BlogsState } from "../Context";

const Footer = () => {
  const { userdetails: details } = BlogsState();

  return (
    <div className=" inset-x-0 bottom-0 px-0 justify-center p-6 flex flex-wrap text-slate-100 sm:justify-between bg-footercolor sm:px-16 dark:bg-darkmodefootercolor">
      {/* mt-10 */}
      {details && details.length > 0 ? (
        <div className="text-base">
          © 2025 Code Craft Chronicles —@{details[0]?.name}
        </div>
      ) : (
        <p className="text-center"></p>
      )}
      <div className="pt-5 flex gap-7 text-xl sm:pt-0">
        {details && details.length > 0 && details[0]?.lin_url != null ? (
          <a
            href={details[0]?.lin_url}
            target="blank"
            className="hover:text-gray-600"
          >
            <FaLinkedinIn />
          </a>
        ) : (
          <></>
        )}
        {details && details.length > 0 && details[0]?.x_url != null ? (
          <a
            href={details[0]?.x_url}
            target="blank"
            className="hover:text-gray-600"
          >
            <FaXTwitter />
          </a>
        ) : (
          <></>
        )}
        {details && details.length > 0 && details[0]?.git_url != null ? (
          <a
            href={details[0]?.git_url}
            target="blank"
            className="hover:text-gray-600"
          >
            <FaGithub />
          </a>
        ) : (
          <></>
        )}
        {details && details.length > 0 && details[0]?.insta_url != null ? (
          <a
            href={details[0]?.insta_url}
            target="blank"
            className="hover:text-gray-600"
          >
            <FaInstagram />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Footer;
