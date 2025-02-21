const trends = [
  {
    id: 1,
    title: "The Silent Dawn",
    author: "Olivia Brown",
  },
  {
    id: 2,
    title: "Whispers of the Forest",
    author: "Liam Johnson",
  },
  {
    id: 3,
    title: "Echoes of Eternity",
    author: "Emma Williams",
  },
  {
    id: 4,
    title: "Shadows of the Past",
    author: "Noah Davis",
  },
  {
    id: 5,
    title: "The Lost Horizon",
    author: "Ava Martinez",
  },
  {
    id: 6,
    title: "Secrets Beneath",
    author: "Sophia Wilson",
  },
  {
    id: 7,
    title: "Beyond the Stars",
    author: "Mason Anderson",
  },
  {
    id: 8,
    title: "Winds of Change",
    author: "Isabella Thomas",
  },
  {
    id: 9,
    title: "The Final Ember",
    author: "James Taylor",
  },
  {
    id: 10,
    title: "The Crystal Tide",
    author: "Charlotte Moore",
  },
  {
    id: 11,
    title: "Fragments of Light",
    author: "Benjamin Clark",
  },
  {
    id: 12,
    title: "The Forgotten Realm",
    author: "Mia Rodriguez",
  },
  {
    id: 13,
    title: "Dreams of Tomorrow",
    author: "Ethan White",
  },
  {
    id: 14,
    title: "Beneath the Surface",
    author: "Amelia Harris",
  },
  {
    id: 15,
    title: "Rise of the Phoenix",
    author: "Lucas Martin",
  },
  {
    id: 16,
    title: "The Iron Key",
    author: "Harper Thompson",
  },
  {
    id: 17,
    title: "A Dance with Time",
    author: "Elijah Garcia",
  },
  {
    id: 18,
    title: "The Golden Path",
    author: "Evelyn Martinez",
  },
  {
    id: 19,
    title: "Legends Never Die",
    author: "Henry Lopez",
  },
  {
    id: 20,
    title: "The Edge of Infinity",
    author: "Lily Walker",
  },
];

const TrendsList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
      <h2 className="text-2xl text-gray-800 font-semibold p-2">Trends List</h2>
      <ul className="flex flex-col gap-6 m-2 p-2">
        {trends.map((trendItem) => (
            <li key={trendItem.id} className=" flex flex-col gap-4 shadow px-4 py-2 rounded">
                <span className="text-gray-800 font-bold">{trendItem.author}</span>
                <p className="text-gray-700">{trendItem.title}</p>

            </li>
        ))}
      </ul>
    </div>
  );
};
export default TrendsList;
