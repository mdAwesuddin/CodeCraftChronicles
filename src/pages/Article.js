import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
// import articleContent from "./article-content";

//Componenets
import Articles from "../components/Articles";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import SideNav from "../components/SideNav";
import { BsThreeDots } from "react-icons/bs";
//pages
import { BlogsState } from "../Context";
import { getcomments } from "../db/getComments";
import useFetch from "../hooks/use-fetch";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Article = () => {
  const { name } = useParams();
  const { blogs: articleContent, loading } = BlogsState();
  const article = articleContent?.find((article) => article.id == name);
  const [refresh, setRefresh] = useState(false);
  const headingRefs = useRef({});

  const {
    data: comments,
    loading: commentsloading,
    fn: fetchComments,
  } = useFetch(getcomments, name);

  useEffect(() => {
    fetchComments();
  }, [refresh]);

  const handlePostComment = () => {
    toast('Comment Added :)', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
      });
    setRefresh(prev => !prev);
  };

  // if (!article) return <NotFound />;
  // const otherArticles = articleContent.filter(
  //   (article) => article.name !== name
  // );
  return (
    <>
      <div className="mx-auto flex  justify-center  max-w-screen-xl px-8 sm:justify-between">
        <div className="rounded-lg shadow-lg bg-white dark:bg-gray-900 pb-8 w-full sm:w-7/12">
          <img
            className="object-cover w-full h-72"
            src={article?.thumbnail}
            alt="Article Image"
          />

          <div className="p-4">
            <div className="flex flex-col items-center">
              <div className="flex justify-around">
                {/* {data.Tags.split(" ").map((tag) => ( */}
                <p
                  // key={tag}
                  className="inline-block px-3 ml-3 py-1 mb-4 text-xs font-semibold tracking-wider text-gray-50 uppercase rounded-full bg-indigo-500 dark:bg-indigo-600"
                >
                  {/* {tag} */}
                  {article?.topic}
                </p>
                {/* ))} */}
              </div>
              <a className="block mt-2 text-2xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-100 text-center">
                {article?.title}
              </a>

              <p className="text-5xl pt-2">
                <BsThreeDots />
              </p>
              {article?.content?.map((ar) => (
                <>
                  <div className="flex justify-start items-start w-full ps-2 sm:ps-6 mt-4">
                    <a
                      id={ar?.Title}
                      className="mt-2 text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100"
                    >
                      {ar?.Title}
                    </a>
                  </div>
                  {ar?.image ? (
                    <div className="m-5 p-2  w-full sm:w-11/12">
                      <img
                        className="object-cover w-full h-72"
                        src={ar.image}
                        alt="Article Image"
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  <article className="prose max-w-xs sm:max-w-sm md:max-w-prose lg:prose-lg py-4 dark:prose-dark ">
                    {/* <MDXRemote {...content} /> */}
                    <p className="dark:text-gray-100"> {ar?.content}</p>
                  </article>
                </>
              ))}
              <div className="w-full sm:w-11/12">
                <strong className="text-xl sm:text-2xl font-semibold leading-4 text-gray-600 dark:text-gray-200">
                  References:
                </strong>
                <p className="mx-2 text-gray-700 dark:text-gray-100">
                  {article?.references?.split(",").map((ref, index) => (
                    <li key={index}>{ref.trim()}</li>
                  ))}
                </p>
              </div>
              <div className="mt-3">
                <div className="flex items-center flex-col">
                  <p className="text-5xl pb-2">
                    <BsThreeDots />
                  </p>
                  <p className="text-2xl pb-2">Thanks for reading!!!</p>
                  <p className="mx-2 font-semibold text-gray-700 dark:text-gray-100">
                    {article?.Author}
                  </p>
                  <p className="text-sm font-medium leading-4 text-gray-600 dark:text-gray-200">
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="toc ml-4 w-1/4 max-w-sm">
          <SideNav headings={article?.content} headingRefs={headingRefs} />
        </div>
      </div>
      <AddCommentForm blogid={name} onPostComment={handlePostComment}/>
      <CommentsList comments={comments} />
      <ToastContainer />
    </>
  );
};

export default Article;
