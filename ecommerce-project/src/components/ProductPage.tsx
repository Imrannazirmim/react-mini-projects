import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}



//using navigate my pages

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get<Product>(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  }, [id]);

  if (!product) {
    return <h2 className="text-3xl ml-[20rem] p-5">Loading......</h2>;
  }

  return (
    <div className="p-5 ml-[20rem] w-[60%] font-[poppins]">
      <button
      type="button"
        onClick={() => navigate(-1)}
        className="py-2 px-4 rounded bg-gray-800 text-white hover:bg-gray-700"
      >
        Back
      </button>

      <img
        src={product.images[0]}
        alt={product.title}
        className="w-[50%] h-auto mb-5 shadow mt-5"
      />
      <h1 className="text-2xl mt-5 font-semibold text-gray-700">{product.title}</h1>
      <p className="font-semibold mt-5 text-gray-700 text-justify">{product.description}</p>
      <div className="mt-5 flex gap-5">
        <span className="shadow py-2 px-4 rounded-full bg-amber-600 text-white hover:bg-amber-500">Price: {product.price}</span>
        <span className="shadow py-2 px-4 rounded-full bg-amber-600 text-white hover:bg-amber-500"> Rating: {product.rating}</span>
      </div>
    </div>
  );
};

export default ProductPage;
