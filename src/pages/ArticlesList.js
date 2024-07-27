import React, { useState, useEffect } from "react";
import articleContent from "./article-content";
import Articles from "../components/Articles";
import { DropdownMenu } from "@pikas-ui/dropdown-menu";
import { FaFilter } from "react-icons/fa6";

const ArticlesList = () => {
  const [sortedArticles, setSortedArticles] = useState(articleContent);
  const [sortOption, setSortOption] = useState('Newest First');

  const handleSortChange = (label) => {
    let sorted = [];
    if (label === "Newest First") {
      sorted = [...articleContent].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (label === "Oldest First") {
      sorted = [...articleContent].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } else if (label === "Popular 🔥") {
      sorted = [...articleContent].sort((a, b) => b.comments.length - a.comments.length);
    } else if (label === "Random") {
      sorted = [...articleContent].sort(() => Math.random() - 0.5);
    }
    setSortedArticles(sorted);
    setSortOption(label);
  };

  useEffect(() => {
    handleSortChange(sortOption);
  }, [sortOption]);

  const Filterbtn = () => {
    return (
      <button className="bg-indigo-500 px-3 py-1 font-semibold text-white rounded dark:bg-indigo-600">
        <div className="flex justify-center items-center gap-2">
          <FaFilter />
          <span className="hidden sm:block">Sort by</span>
        </div>
      </button>
    );
  };

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
