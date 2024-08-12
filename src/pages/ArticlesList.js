import React, { useState, useEffect } from "react";
import Articles from "../components/Articles";
import { DropdownMenu } from "@pikas-ui/dropdown-menu";
import { FaFilter } from "react-icons/fa6";
import { BlogsState } from "../Context";
// import articleContent from "./article-content";

const ArticlesList = () => {
  const { blogs: articleContent = [], loading, fetchBlogs } = BlogsState();
  const [sortedArticles, setSortedArticles] = useState([]);
  const [sortOption, setSortOption] = useState('Popular 🔥');

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (articleContent && Array.isArray(articleContent)) {
      handleSortChange(sortOption);
    } else {
      console.error("articleContent is not an array or is undefined");
    }
  }, [articleContent, sortOption]);

  const handleSortChange = (label) => {
    if (!Array.isArray(articleContent)) {
      console.error("articleContent is not an array");
      return;
    }

    let sorted = [];
    if (label === "Newest First") {
      sorted = [...articleContent].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (label === "Oldest First") {
      sorted = [...articleContent].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } else if (label === "Popular 🔥") {
      sorted = [...articleContent].sort((a, b) => b.comment_count - a.comment_count);
    } else if (label === "Random") {
      sorted = [...articleContent].sort(() => Math.random() - 0.5);
    }
    setSortedArticles(sorted);
    setSortOption(label);
  };

  const Filterbtn = () => (
    <button className="bg-indigo-500 px-3 py-1 font-semibold text-white rounded dark:bg-indigo-600">
      <div className="flex justify-center items-center gap-2">
        <FaFilter />
        <span className="hidden sm:block">Sort by</span>
      </div>
    </button>
  );

  return (
    <>
      <div className="mb-8 flex justify-between items-center mt-8">
        <div>
          <DropdownMenu
            triggerContent={<Filterbtn />}
            data={[
              {
                label: "Sort Options",
                items: [
                  {
                    label: "Popular 🔥",
                    type: "checkbox",
                    checked: sortOption === "Popular 🔥",
                    onCheckedChange: () => handleSortChange("Popular 🔥"),
                    colorName: "primary",
                  },
                  {
                    label: "Newest First",
                    type: "checkbox",
                    checked: sortOption === "Newest First",
                    onCheckedChange: () => handleSortChange("Newest First"),
                    colorName: "primary",
                  },
                  {
                    label: "Oldest First",
                    type: "checkbox",
                    checked: sortOption === "Oldest First",
                    onCheckedChange: () => handleSortChange("Oldest First"),
                    colorName: "primary",
                  },
                  {
                    label: "Random",
                    type: "checkbox",
                    checked: sortOption === "Random",
                    onCheckedChange: () => handleSortChange("Random"),
                    colorName: "primary",
                  },
                ],
              },
            ]}
          />
        </div>
        <div>
          <h1 className="sm:text-3xl text-2xl pb-3 font-bold font-playwrite text-gray-900 text-center dark:text-gray-300">
            Unleash the <span className="text-bigheading leading-12 text-gradient-to-r from-blue-400 to-purple-500">code </span> journey
          </h1>
        </div>
        <div />
      </div>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap m-4">
          <Articles articles={sortedArticles} />
        </div>
      </div>
    </>
  );
};

export default ArticlesList;
