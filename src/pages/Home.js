import React, { useEffect } from "react";
import Articles from "../components/Articles";
import AnimatedShinyText from "../components/magicui/animated-shiny-text";
import BlurIn from "../components/magicui/BlurIn";
import { BlogsState } from "../Context";
import { ThreeDots } from "react-loader-spinner";

const Home = () => {
  const { blogs: articleContent, loading } = BlogsState();
  const { userdetails: details, detailsloader} = BlogsState();

  console.log(details, 'det'); 

  if (detailsloader) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#a35af7"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </div>
    );
  }

  return (
    <>
      <div className="mb-16">
        {details && details.length > 0 ? (
          <AnimatedShinyText className="flex sm:text-3xl text-2xl items-center font-playwrite font-bold justify-center px-4 py-1 my-5 transition text-center ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>{details[0]?.blog_name}</span>
          </AnimatedShinyText>
        ) : (
          <p className="text-center"></p> 
        )}
        <div className="flex flex-row justify-center items-center gap-3">
          <BlurIn
            word={details && details[0]?.tagline1 ? details[0].tagline1.split(' ')[0] : "tagline"}
            className="sm:text-5xl text-3xl font-montserrat text-gray-900 text-center dark:text-gray-50"
          />
          <BlurIn
            word={details && details[0]?.tagline1 ? details[0].tagline1.split(' ')[1] : "tagline"}
            className="sm:text-5xl text-3xl font-montserrat text-purple-500"
          />
          <BlurIn
            word={details && details[0]?.tagline1 ? details[0].tagline1.split(' ')[2] : "tagline"}
            className="sm:text-5xl text-3xl font-montserrat text-gray-900 text-center dark:text-gray-50"
          />
        </div>
      </div>

      <div>
        <h5 className="font-rubik p-2">Latest Blogs</h5>
        <hr />
        <div className="container py-4 mx-auto">
          <div className="sm:flex flex-warp m-4">
            <Articles articles={articleContent} loader={loading} />
          </div>
        </div>

        <div className="pb-8 md:p-12 lg:px-16 lg:py-15">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              Subscribe us
            </h2>
            <p className="text-gray-500 sm:mt-4 py-2 sm:py-0 dark:text-gray-400">
              To Receive Daily Blog Updates
            </p>
          </div>

          <div className="sm:mx-auto sm:mt-8 sm:max-w-xl sm:flex sm:flex-col sm:justify-center sm:items-center">
            <form action="#" className="sm:flex sm:gap-4 w-full">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-11/12 sm:w-full m-3 rounded-md border border-btncolor bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="sm:mt-0 m-3 flex items-center justify-center rounded-md bg-btncolor p-2 text-base font-medium text-black shadow-sm transition hover:bg-btncolor focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <span>Sign Up</span>
                <svg
                  className="ml-2 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
