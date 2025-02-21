const topics = [
  "Technology",
  "Design Training",
  "Crypto",
  "NFT",
  "Personal Growth",
  "Reading",
];

const TopicsList = () => {
  return (
    <div className=" mt-5 p-3 flex flex-col gap-6 shadow rounded">
      <h2 className="text-2xl text-gray-700 font-semibold">Topics for you</h2>
      <div className="flex justify-between md:flex-wrap md:gap-2 sm:flex-wrap sm:gap-2 font-semibold">
        {topics.map((topic, index) => (
          <span
            key={index}
            className="shadow hover:bg-gray-300 p-2 rounded-lg "
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};
export default TopicsList;
