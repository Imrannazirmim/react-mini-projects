interface UserCardProps {
  name: string;
  following: number;
  follow: boolean;
  image: string;
}

const UserCard = ({ name, following, follow, image }: UserCardProps) => {
  return (
    <div className="flex lg:w-full md:w-[17rem]  md:flex-col  md:gap-3 items-center border justify-between px-4 py-2 rounded">
      <section className="flex gap-5 items-center text-gray-800">
        <img
          src={image}
          alt="images profile"
          className="w-[3rem] rounded-full"
        />
        <span>{name}</span>
        <span className="font-semibold text-blue-700">{following}</span>
      </section>
      <button className="bg-blue-500 py-2 px-4 rounded text-white font-semibold hover:bg-blue-400">
        {follow ? "Following" : "Follow"}
      </button>
    </div>
  );
};
export default UserCard;
