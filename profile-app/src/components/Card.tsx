interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className=" scroll-auto justify-center flex-wrap pl-1 pr-1">
      <div className="max-w-sm mx-auto m-[1rem] rounded-lg shadow-md overflow-hidden bg">
        <img src={image} alt={title} className="w-full h-48 object-cover " />
        <div className="m-2 p-2">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
