import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";



const UserProfile = () => {
    const {user} = useContext(UserContext)
  return <div>
    <h3>User Profile</h3>
    <p>{user.name}</p>
  </div>;
};

export default UserProfile;
