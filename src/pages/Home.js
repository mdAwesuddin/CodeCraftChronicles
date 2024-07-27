import React from "react";
import articleContent from "./article-content";
import Articles from "../components/Articles";

const Home = () => {
  return (
    <>
      <div className="mb-16">
        <h1 className="sm:text-3xl text-2xl font-bold font-playwrite my-5 text-gray-900 text-center dark:text-gray-300">
          Code Craft Chronicles
        </h1>
        <h1 className="sm:text-5xl text-3xl font-montserrat my-5 text-gray-900 text-center dark:text-gray-50">
          Journey <span className="text-bigheading leading-12 text-gradient-to-r from-blue-400 to-purple-500">Through</span>  Code
        </h1>
      </div>
      <div>
        <h5 className="font-rubik p-2">Latest Blogs</h5>
        <hr />
        <div className="container py-4 mx-auto">
          <div className="sm:flex flex-warp m-4">
            <Articles articles={articleContent} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
