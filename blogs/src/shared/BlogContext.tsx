import React, {createContext, useContext, useState} from "react";
import { Blog } from "../types";

//define blogcontext type
interface BlogContextProps {
  blogs: Blog[];
  addBlog: (blogs: Blog) => void;
  updateBlog: (blogs: Blog) => void;
  deleteBlog: (id: number) => void;
}

export const Blogcontext = createContext<BlogContextProps | undefined>(
  undefined
);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const addBlog = (blog: Blog) => {
    setBlogs([...blogs, blog]);
  };
  const updateBlog = (updatedBlog: Blog) => {
    setBlogs(
      blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };
  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <Blogcontext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </Blogcontext.Provider>
  );
};
