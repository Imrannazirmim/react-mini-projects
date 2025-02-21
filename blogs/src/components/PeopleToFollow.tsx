import UserCard from "./UserCard.tsx";

const peopleToFollow = [
  {
    id: 1,
    name: "OliviaBrown",
    following: 200,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    follow: true,
  },
  {
    id: 2,
    name: "LiamJohnson",
    following: 180,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    follow: false,
  },
  {
    id: 3,
    name: "EmmaWilliams",
    following: 220,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    follow: true,
  },
  {
    id: 4,
    name: "NoahDavis",
    following: 150,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    follow: false,
  },
  {
    id: 5,
    name: "AvaMartinez",
    following: 170,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    follow: true,
  },
  {
    id: 6,
    name: "SophiaWilson",
    following: 190,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    follow: false,
  },
  {
    id: 7,
    name: "MasonAnderson",
    following: 210,
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    follow: true,
  },
  {
    id: 8,
    name: "IsabellaThomas",
    following: 160,
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    follow: false,
  },
  {
    id: 9,
    name: "JamesTaylor",
    following: 230,
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    follow: true,
  },
  {
    id: 10,
    name: "CharlotteMoore",
    following: 140,
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    follow: false,
  },
  {
    id: 11,
    name: "BenjaminClark",
    following: 250,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    follow: true,
  },
  {
    id: 12,
    name: "MiaRodriguez",
    following: 120,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    follow: false,
  },
  {
    id: 13,
    name: "EthanWhite",
    following: 300,
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    follow: true,
  },
  {
    id: 14,
    name: "AmeliaHarris",
    following: 280,
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    follow: false,
  },
  {
    id: 15,
    name: "LucasMartin",
    following: 190,
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    follow: true,
  },
  {
    id: 16,
    name: "HarperThompson",
    following: 210,
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    follow: false,
  },
  {
    id: 17,
    name: "ElijahGarcia",
    following: 130,
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    follow: true,
  },
  {
    id: 18,
    name: "EvelynMartinez",
    following: 175,
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    follow: false,
  },
  {
    id: 19,
    name: "HenryLopez",
    following: 260,
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    follow: true,
  },
  {
    id: 20,
    name: "LilyWalker",
    following: 230,
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    follow: false,
  },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold text-lg mb-4">People to follow</h2>
      <div className="space-y-4">
        {peopleToFollow.map((person) => (
          <UserCard
            key={person.id}
            name={person.name}
            following={person.following}
            follow={person.follow}
            image={person.image}
          />
        ))}
      </div>
    </div>
  );
};
export default PeopleToFollow;
