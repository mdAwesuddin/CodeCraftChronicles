import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../src/App.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import { BlogsState } from "../Context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);
  const { userdetails: details} = BlogsState();

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="border-b-4 border-indigo-500 bg-white dark:bg-gray-800 font-bold text-lg text-gray-800 dark:text-gray-50 fixed top-0 w-full shadow dark:shadow-2xl z-50">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <div className="text-2xl">
          <Link
            className="hover:text-indigo-600 text-gray-800 dark:text-gray-50"
            to="/"
          >
            <img src={details && details[0]?.logo ? details[0]?.logo : ""} alt="logo" width={50}/>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none "
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
        <ul
          className={`sm:pl-16 flex flex-col justify-center items-center md:flex md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-violet-500 md:bg-transparent transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="md:inline-block py-2 md:py-0">
            <Link
              to="/"
              className="block px-6 py-2 md:px-4 md:py-0 hover:text-indigo-600 text-gray-800 dark:text-gray-50"
              onClick={() => (isOpen ? setIsOpen(!isOpen) : "")}
            >
              Home
            </Link>
          </li>
          <li className="md:inline-block py-2 md:py-0">
            <Link
              to="/about"
              className="block px-6 py-2 md:px-4 md:py-0 hover:text-indigo-600 text-gray-800 dark:text-gray-50"
              onClick={() => (isOpen ? setIsOpen(!isOpen) : "")}
            >
              About
            </Link>
          </li>
          <li className="md:inline-block py-2 md:py-0">
            <Link
              to="/articles-list"
              className="block px-6 py-2 md:px-4 md:py-0 hover:text-indigo-600 text-gray-800 dark:text-gray-50"
              onClick={() => (isOpen ? setIsOpen(!isOpen) : "")}
            >
              Articles
            </Link>
          </li>
          <li className="md:inline-block py-2 md:py-0">
            <Link
              to="/😊"
              className="splbutton block px-6 py-2 md:px-4 md:py-0 hover:text-indigo-600 text-gray-800 dark:text-gray-50"
              onClick={() => (isOpen ? setIsOpen(!isOpen) : "")}
            >
              <span class="button-content text-gray-800 dark:text-gray-50 bg-white dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0H24V24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"
                  ></path>
                </svg>
                Beyond Work
              </span>{" "}
            </Link>
          </li>
          {/* <li className="md:inline-block py-2 md:py-0">
            <Link
              to="/cod"
              className="block px-6 py-2 md:px-4 md:py-0 hover:text-indigo-600 text-gray-800 dark:text-gray-50"
              onClick={() => isOpen? setIsOpen(!isOpen):''}
            >
              COD
            </Link>
          </li> */}
          <div className="md:hidden flex items-center gap-2 mt-2 mb-2">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={35}
            />
            {/* <button className="login-btn">
              <span>Login</span>
            </button> */}
            <button
              href="https://github.com/mdAwesuddin/Portfolio"
              target="_blank"
              className="fork-btn-inner"
            >
              <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              <AiFillStar style={{ fontSize: "1.1em" }} />
            </button>
          </div>
        </ul>
        <div className="hidden md:flex justify-center items-center gap-10">
          <DarkModeSwitch
            // style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={35}
            moonColor={"gray"}
            sunColor={"white"}
          />
          {/* <button className="login-btn">
            <span>Login</span>
          </button> */}
          <a
            href="https://github.com/mdAwesuddin/CodeCraftChronicles"
            target="_blank"
            className="fork-btn-inner"
          >
            <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
            <AiFillStar style={{ fontSize: "1.1em" }} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
