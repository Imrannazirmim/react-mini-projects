import React, { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { useFilter } from "../context/FilterContext";

interface Products {
  categories: string;
}
interface FetchResponse {
  products: Products[];
}

const Sidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    keyword,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data: FetchResponse = await response.json();
      const uniqueCategories = Array.from(
        new Set(data.products.map((product) => product.category))
      );
      setCategories(uniqueCategories);
    };
    fetchCategories();
  }, []);

  //min price function
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minValue = e.target.value;
    setMinPrice(minValue ? parseFloat(minValue) : undefined);
  };
  //max price function
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxValue = e.target.value;
    setMaxPrice(maxValue ? parseFloat(maxValue) : undefined);
  };
  //category function
  const handleCategoriesChange = (category: string) => {
    setSelectedCategory(category);
  };
  //keywords function
  const handleKeywordCliks = (keyword: string) => {
    setKeyword(keyword);
  };
  //reset filter
  const handleResetFilter = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };
 
  return (
    <div className="w-[18rem] fixed bg-gray-100 h-screen font-[poppins] ">
      <h2 className="text-xl font-bold text-center p-4">Ecommerce Store</h2>
      <div className="flex flex-col">
        <input
          type="text"
          className="border border-gray-300 px-4 p-2 rounded-full m-4 outline-none"
          placeholder="Search Product"
          value={searchQuery ?? ""}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <section className="w-full gap-6 flex m-4">
          <div>
            <input
              type="number"
              className="border border-gray-300 w-[7rem] px-4 p-2 rounded-full outline-none"
              placeholder="min"
              value={minPrice ?? ""}
              onChange={handleMinPriceChange}
            />
          </div>
          <div>
            <input
              type="number"
              className="border border-gray-300 w-[7rem] px-4 p-2 rounded-full outline-none"
              placeholder="max"
              value={maxPrice ?? ""}
              onChange={handleMaxPriceChange}
            />
          </div>
        </section>
      </div>
      {/* categories */}

      <section className="flex flex-col gap-1 m-4">
        <h2 className="text-xl font-semibold text-gray-800 p-1">Categories</h2>
        <div className="mt-2">
          {categories.map((category, index) => (
            <div key={index} className="flex gap-1 p-1 text-gray-800">
              <input
                type="radio"
                className="w-5"
                name="category"
                value={category}
                onChange={() => handleCategoriesChange(category)}
                checked={selectedCategory === category}
              />
              <label htmlFor={category} className="text-[1.2rem]">
                {category}
              </label>
            </div>
          ))}
        </div>
      </section>

      {/* keywords */}
      <section className="flex flex-col gap-5 m-4">
        <h2 className="text-xl font-semibold text-gray-800">Keywords</h2>
        <div className="flex flex-col gap-4 mt-2 ">
          {keywords.map((keyword, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleKeywordCliks(keyword)}
              className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200"
            >
              {keyword.toUpperCase()}
            </button>
          ))}
        </div>
      </section>
      {/* reset filter */}
      <section>
        <div className="mt-8 text-center">
          <button
            onClick={handleResetFilter}
            className="text-xl font-semibold bg-gray-800 px-4 py-2 rounded text-gray-100 hover:bg-gray-700"
          >
            Reset Filter
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
