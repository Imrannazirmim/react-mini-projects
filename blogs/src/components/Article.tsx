import React from "react";
import useBlog from "../shared/useBlog";
import { Blog } from "../types";
import ArticleCard from "./ArticleCard";

interface ArticleBlogProps{
    onEdit: (blog: Blog) => void;
}

const Article: React.FC<ArticleBlogProps> = ({onEdit}) => {
    const {blogs, deleteBlog} = useBlog()
  return <div className=" flex flex-col gap-5 justify-center items-center mx-auto md:ml-[16rem]">
    {blogs.map((blog) => (
       <ArticleCard key={blog.id} article={blog} onDelete={() => deleteBlog(blog.id)} onEdit={() => onEdit(blog)}/>
    ))}
  </div>;
};

export default Article;
