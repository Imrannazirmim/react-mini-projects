const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <section className=" w-[18rem] h-[24rem] flex flex-wrap gap-4 mx-auto shadow m-4 p-4 rounded">
      <img src={img} alt={title} width={200} />
      <div className="text-gray-600 font-bold flex gap-2 flex-col">
        <h3>{title}</h3>
        <section className="flex gap-1">
          {star}
          {star}
          {star}
          {star}
        </section>
        <span>{reviews}</span>
        <section>
          <div className="flex gap-1">
            <del>{prevPrice}</del>${newPrice}
          </div>
        </section>
      </div>
    </section>
  );
};
export default Card;
