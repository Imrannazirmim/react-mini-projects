import React from "react";
import { Blog } from "../types";
import { FaBookmark, FaEdit, FaTrash } from "react-icons/fa";

interface ArticleCardProps {
  article: Blog;
  onDelete: () => void;
  onEdit: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="flex gap-3 p-4 bg-white w-[40rem] mb-6 ml-[2rem] shadow border rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={article.image}
        alt={article.title}
        className="w-36 h-24 object-cover rounded-lg shadow-md"
      />
      <div className="ml-6 flex-1 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
        <p className="text-sm text-gray-800">{article.description}</p>
        <span className="text-end ">{article.time}</span>
        <div className="flex space-x-4">
          <FaBookmark className="text-gray-500 hover:text-gray-700 transition-colors duration-200 cursor-pointer" />
          <FaEdit onClick={onEdit} className="text-blue-500 hover:text-blue-600 transition-colors duration-200 cursor-pointer" />
          <FaTrash onClick={onDelete} className="text-red-500 hover:text-red-600 transition-colors duration-200 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
