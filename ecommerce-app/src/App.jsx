import React, { useState } from "react";
import Nav from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import products from "./db/data.jsx";
import Card from "./components/Card.jsx";

const App = () => {
  const [selectCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const handleChangeInput = (e) => {
    setQuery(e.target.value);
  };
  //input filter

  const filterItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1,
  );
  // radio filter

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  //button filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filterData = (products, selected, query) => {
    let filterProducts = products;
    //filtering input items
    if (query) {
      filterProducts = filterItems;
    }
    //selected filter
    if (selected) {
      filterProducts = filterProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected,
      );
    }
    return filterProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      ),
    );
  };

  const result = filterData(products, selectCategory, query);

  return (
    <>
      <Nav query={query} handleChangeInput={handleChangeInput} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      <Sidebar handleChange={handleChange} />
    </>
  );
};
export default App;
