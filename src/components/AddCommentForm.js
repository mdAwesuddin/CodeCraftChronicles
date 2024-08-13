import React, { useState } from "react";
import useFetch from "../hooks/use-fetch";
import { postComment } from "../db/getComments";

const AddCommentForm = ({ blogid, onPostComment }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const {
    loading,
    error,
    data,
    fn: fnPostComment,
  } = useFetch(postComment, {
    blog_id: blogid,
    name: username,
    comment: commentText,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fnPostComment();
    onPostComment();
    setUsername("");
    setCommentText("");
  };

  return (
    <div className="flex justify-center">
      <form
        className="rounded px-8 pt-6 pb-8 m-5 w-full sm:w-8/12"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-300">
          Add a comment
        </h3>
        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
          Comment:
        </label>
        <textarea
          rows="4"
          cols="50"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddCommentForm;
