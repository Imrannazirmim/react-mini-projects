import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
  userName: string;
  email: string;
  address: string;
  geo: string | number;
  phone: string;
  website: string;
  company: string;
}

const User = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Network response was not ok");
        const data: Users[] = await res.json();
        setUsers(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <h1>Loading.....</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <table className="table-auto m-4 p-4 shadow">
        <thead className=" border p-3 m-2">
          <tr className=" m-2 p-2 border text-center">
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>GEO</th>
            <th>PHONE</th>
            <th>WEBSITE</th>
            <th>COMPANY</th>
          </tr>
        </thead>
        <tbody className="border m-2">
          {users.map((user) => {
            return (
              <tr key={user.id} className="m-3 p-4 ">
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.address.suite}</td>
                <td>{user.address.city}</td>
                <td>{user.address.zipcode}</td>
                <td>{user.address.geo.lat}</td>
                <td>{user.address.geo.lng}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                <td>{user.company.catchPhrase}</td>
                <td>{user.company.bs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default User;
