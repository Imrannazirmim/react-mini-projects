import { useEffect, useState } from 'react';
import axios from 'axios';

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ul>
        {items &&
          items.map((item) => {
            const { idMeal, strMeal, strMealThumb } = item;
            return (
              <div key={idMeal}>
                <img width={300} src={strMealThumb} alt={strMeal} />
                <span>{strMeal}</span>
              </div>
            );
          })}
      </ul>
    </div>
  );
};
export default Meals;
