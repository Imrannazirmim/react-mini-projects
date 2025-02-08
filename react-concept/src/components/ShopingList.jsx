import { useState } from "react";

const ShopingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !price) return;
    const newItem = {
        name,
        price
    }
    setItems((prevItem) => [...prevItem, newItem]);
    setName('');
    setPrice('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {items.map((item, index) => (
            <li key={index}>
                Product Name: {item.name} - Price: {item.price}
            </li>
        ))}
      </ul>
    </>
  );
};
export default ShopingList;
