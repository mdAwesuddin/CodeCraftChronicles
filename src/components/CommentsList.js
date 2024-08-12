import React,{useEffect} from "react";
import useFetch from "../hooks/use-fetch";
import { getcomments } from "../db/getComments";

const CommentsList = ({ comments }) => {
  return (
    <>
      <div className="flex items-center flex-col gap-5 m-5">
        {comments?.map((comment, index) => (
          <div
            className="w-11/12 sm:w-8/12 flex-1 border border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed relative "
            key={index}
          >
            <strong className="text-gray-700 dark:text-gray-200">
              {comment.name}
            </strong>
            <p className="mt-1 mb-4 text-sm text-gray-600 dark:text-gray-300">
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentsList;
