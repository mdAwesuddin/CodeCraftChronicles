import { createContext, useContext, useEffect } from "react";
import useFetch from "./hooks/use-fetch";
import { getblogs } from "./db/getBlogs";

const BlogsContext = createContext();

const BlogsProvider = ({ children }) => {
  const { data: blogs, loading, fn: fetchBlogs } = useFetch(getblogs);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogsContext.Provider value={{ blogs, fetchBlogs, loading, }}>
      {children}
    </BlogsContext.Provider>
  );
};

export const BlogsState = () => {
  return useContext(BlogsContext);
};

export default BlogsProvider;
