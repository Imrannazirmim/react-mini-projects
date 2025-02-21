import React, { useEffect, useState } from "react";
import useBlog from "../shared/useBlog";
import { Blog } from "../types";

interface BlogFormProps {
  exitingBlog?: Blog;
  onClose: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ exitingBlog, onClose }) => {
  const { addBlog, updateBlog } = useBlog();
  const [title, setTitle] = useState(exitingBlog?.title || "");
  const [description, setDescription] = useState(
    exitingBlog?.description || ""
  );
  const [image, setImage] = useState(exitingBlog?.image || "");
  const [time, setTime] = useState(exitingBlog?.time || "");

  useEffect(() => {
    if (exitingBlog) {
      setTitle(exitingBlog.title);
      setDescription(exitingBlog.description);
      setImage(exitingBlog.image);
      setTime(exitingBlog.time);
    }
  }, [exitingBlog]);

  const handleSumbit = () => {
    const blog: Blog = {
      id: exitingBlog ? exitingBlog.id : Date.now(),
      title,
      description,
      image,
      time,
    };
    if (exitingBlog) {
      updateBlog(blog);
    } else {
      addBlog(blog);
    }
    onClose();
  };

  return (
    <div className="bg-white p-6 flex flex-col gap-3 rounded-lg w-[30rem] mx-auto">
      <h3 className="font-semibold text-xl mb-2 text-gray-800">
        {exitingBlog ? "Edit Blog" : "Add Blog"}
      </h3>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="font-semibold text-gray-700">
          Title{" "}
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full px-4 py-2 border border-x-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="font-semibold text-gray-700">
          Description{" "}
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full h-[7rem] px-4 py-2 border border-x-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="image" className="font-semibold text-gray-700">
          Image{" "}
        </label>
        <input
          type="text"
          value={image}
          placeholder="image url"
          onChange={(e) => setImage(e.target.value)}
          className="block w-full px-4 py-2 border border-x-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="time" className="font-semibold text-gray-700">
          Time
        </label>
        <input
          type="date"
          value={time}
          placeholder="enter time"
          onChange={(e) => setTime(e.target.value)}
          className="block w-full px-4 py-2 border border-x-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <section className="flex justify-end mt-6 space-x-4">
        <button
          onClick={handleSumbit}
          className="shadow px-4 py-2 rounded-lg font-semibold text-gray-800 bg-blue-400 hover:bg-blue-300"
        >
          {exitingBlog ? "Update" : "Add"}
        </button>
        <button
          onClick={onClose}
          className="shadow px-4 py-2 rounded-lg bg-red-400 text-gray-800 font-semibold hover:bg-red-300"
        >
          Cancel
        </button>
      </section>
    </div>
  );
};

export default BlogForm;
