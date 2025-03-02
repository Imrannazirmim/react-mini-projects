import React from "react";
import { Link } from "react-router-dom";

interface BookCardProps {
  id: number;
  title: string;
  image: string;
  price: string;
  stock: number;
  rating: number
}

const BookCard: React.FC<BookCardProps> = ({ id, title,stock,rating, image, price }) => {
  return (
    <div className="border border-gray-300 rounded font-[poppins]">
      <Link to={`/product/${id}`}>
        <div className="bg-gray-200 p-4 rounded">
          <img
            src={image}
            alt={title}
            className="w-full h-[10rem] object-cover mb-2 "
          />
        </div>
        <div className="flex flex-col gap-3 m-4 text-gray-800">
        <h2 className="font-semibold">{title}</h2>
        <span className="text-[1.1rem font-semibold]">Price: ${price}</span>
        <span className="text-[1.1rem font-semibold]">Stock: {stock}</span>
        <span className="text-[1.1rem font-semibold]">Rating: {rating}</span>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
