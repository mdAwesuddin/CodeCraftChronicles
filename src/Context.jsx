import { createContext, useContext, useEffect } from "react";
import useFetch from "./hooks/use-fetch";
import { getblogs } from "./db/getBlogs";
import { getUser } from "./db/getUser";
import { getImages } from "./db/getImages";

const BlogsContext = createContext();

const BlogsProvider = ({ children }) => {
  const { data: blogs, loading, fn: fetchBlogs } = useFetch(getblogs);
  const {
    data: userdetails,
    loading: detailsloader,
    fn: fetchdetails,
  } = useFetch(getUser);
  const {
    data: images,
    loading: imageloading,
    fn: fetchImages,
  } = useFetch(getImages);

  useEffect(() => {
    fetchdetails();
    fetchBlogs();
    fetchImages();
  }, []);

  return (
    <BlogsContext.Provider
      value={{
        blogs,
        fetchBlogs,
        loading,
        userdetails,
        fetchdetails,
        detailsloader,
        images,
        fetchImages,
        imageloading,
      }}
    >
      {children}
    </BlogsContext.Provider>
  );
};

export const BlogsState = () => {
  return useContext(BlogsContext);
};

export default BlogsProvider;
