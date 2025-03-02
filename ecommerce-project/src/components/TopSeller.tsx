import { useEffect, useState } from "react";

interface AuthorProps {
  name: string;
  isFollowing: boolean;
  image: string;
}

export const TopSeller = () => {
  const [authors, setAuthors] = useState<AuthorProps[]>([]);

  
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        const authorData: AuthorProps[] = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));
        setAuthors(authorData);
      };
      fetchData();
    } catch (error) {
      console.log(`fetching data not fetch author ${error}`);
    }
  }, []);

  const handleFollowing = (index: number) => {
    setAuthors((prevAuthor) => prevAuthor.map((author, i) => i === index ? {...author, isFollowing: !author.isFollowing} : author))
  }

  return (
    <div className="bg-white p-5 mx-5 lg:relative  lg:top-[90rem] lg:left-[35rem]  border border-gray-300 lg:w-[25%] md:w-[60%] md:ml-[15rem] sm:w-[50%] sm:ml-[20rem] rounded">
      <h2 className="text-xl font-bold mb-5">Top Seller</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index} className="mb-5">
            <section className="flex justify-between flex-wrap shadow p-2  rounded items-center">
              <img
                src={author.image}
                alt={author.name}
                className="w-[15%] h-[15%] justify-center rounded-full object-cover"
              />
              <span>{author.name}</span>
              <button onClick={() => handleFollowing(index)} className={`px-2 py-1 rounded text-white ${author.isFollowing ? 'bg-red-500 hover:bg-red-400' : 'bg-blue-500 hover:bg-blue-400'}`}>{author.isFollowing ? 'Unfollow' : 'Follow'}</button>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};
