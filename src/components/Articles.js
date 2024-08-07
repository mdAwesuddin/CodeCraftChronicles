import React from "react";
import { Link } from "react-router-dom";
import { readingTime } from "reading-time-estimator";

const Articles = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {articles.map((article, index) => (
        <div key={index} className="p-4 cursor-pointer group ">
          <div className="h-full flex flex-col overflow-hidden">
            <Link to={`/article/${article.name}`}>
              <div className="ml-4 mt-3 w-fit rounded-xl bg-pillcolor dark:bg-indigo-900 text-indigo-700 dark:text-gray-200">
                <p className="p-1 px-2 font-medium tracking-widest">
                  {article.topic}
                </p>
              </div>
            </Link>
            <div className="p-5 flex flex-col flex-grow">
              <Link to={`/article/${article.name}`}>
                <h3 className="text-2xl font-medium text-gray-700 mb-3 dark:text-gray-100 group-hover:text-indigo-800 dark:group-hover:text-indigo-400">
                  {article.title}
                </h3>
              </Link>
              <p className="leading-relaxed mb-5 text-gray-800 dark:text-gray-200">
                {article.content[0].content.substring(0, 110)}...
              </p>
              <div className="flex items-center flex-wrap pb-2 border-b-2 border-gray-300 mt-auto w-full justify-between dark:border-indigo-400">
                <Link
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  to={`/article/${article.name}`}
                >
                  Learn more
                  <span className="pl-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="25"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </span>
                </Link>
                <span className="text-gray-500 dark:text-gray-400">
                  {readingTime(article.content.join(" ")).text}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
