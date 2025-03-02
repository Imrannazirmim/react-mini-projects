import { Tally3 } from "lucide-react";
import { useFilter } from "../context/FilterContext";
import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const MainContent = () => {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useFilter();

  const [products, setProducts] = useState<[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdown, setDropDown] = useState(false);
  const itemsPage = 12;

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsPage}&skip=${
      (currentPage - 1) * itemsPage
    }`;

    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    }
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data.products);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [currentPage, keyword]);


  //filter category
  const getFilterCategory = () => {
    let filterProducts = products;
    if (selectedCategory) {
      filterProducts = filterProducts.filter(
        (product) => product.category === selectedCategory
      );
      console.log(filterProducts);
    }

    if (minPrice !== undefined) {
      filterProducts = filterProducts.filter(
        (product) => product.price >= minPrice
      );
    }
    if (maxPrice !== undefined) {
      filterProducts = filterProducts.filter(
        (product) => product.price <= maxPrice
      );
    }

    if (searchQuery) {
      filterProducts = filterProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (filter) {
      case "cheap":
        return filterProducts.sort((a, b) => b.price - a.price);
      case "expensive":
        return filterProducts.sort((a, b) => a.price - b.price);
      case "popular":
        return filterProducts.sort((a, b) => b.rating - a.rating);
      default:
        return filterProducts;
    }
  };
  const filteredProducts = getFilterCategory();

  //pagination

  const totalProducts = 100;
  const totalPages = Math.ceil(totalProducts / itemsPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationButtons = () => {
    const buttons: number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage - 2 < 1) {
      endPage = Math.min(totalPages, endPage + (2 - currentPage - 1));
    }

    if (currentPage + 2 > totalPages) {
      startPage = Math.min(1, startPage - (2 - totalPages - currentPage));
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  return (
    <section className="xl:w-[95%] lg:w-[95%] sm:w-[100%]  xs:w-[100%] p-5">
      <div className="mb-5 ml-[18em]">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="relative mb-5 mt-5">
            <button onClick={() => setDropDown(!dropdown)} className="border border-gray-300 px-4 py-2 rounded-full flex items-center">
              <Tally3 className="mr-2" />
              {filter === "all"
                ? "Filter"
                : filter.charAt(0).toLowerCase().slice(1)}
            </button>
            {/* dropdown */}
            {dropdown && (
              <div className="absolute bg-white shadow  border-gray-300 rounded mt-2 w-full sm:w-40">
                <button
                  onClick={() => setFilter("cheap")}
                  className="block px-4 py-2 text-left hover:bg-gray-200"
                >
                  Cheap
                </button>
                <button
                  onClick={() => setFilter("expensive")}
                  className="block px-4 py-2 text-left hover:bg-gray-200"
                >
                  Expensive
                </button>
                <button
                  onClick={() => setFilter("popular")}
                  className="block px-4 py-2 text-left hover:bg-gray-200"
                >
                  Popular
                </button>
              </div>
            )}
          </div>
        </div>

        {/* card */}

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-5">
          {/* bookcard */}
          {filteredProducts.map((product) => (
            <BookCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.thumbnail}
              price={product.price}
              stock={product.stock}
              rating={product.rating}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row md:mb-[5rem] justify-between items-center mt-5">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="border border-gray-300 py-2 px-4 active:bg-gray-200 rounded-full"
          >
            Previous
          </button>
          {/* 1 2 3 4 5 */}

          <div className="flex flex-wrap gap-2 justify-center">
            {getPaginationButtons().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`border border-gray-300 px-4 py-2 rounded-full ${
                  page === currentPage ? "bg-black text-white" : ""
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border border-gray-300 py-2 active:bg-gray-200 px-4 rounded-full"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
