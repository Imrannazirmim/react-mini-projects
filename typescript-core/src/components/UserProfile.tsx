import { useState } from "react";

interface UserProfileProps {
  name: string;
  age: string;
  email: string;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfileProps>({
    name: "",
    age: "0",
    email: "",
  });
  const updateName = (name: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, name }));
  };
  const updateAge = (age: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, age }));
  };
  const updateEmail = (email: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, email }));
  };
  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        type="number"
        value={profile.age > "0" ? profile.age : ""}
        onChange={(e) => updateAge(e.target.value)}
      />
      <input
        type="email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />

      <div>
        <h2>Name: {profile.name}</h2>
        <p>Age: {profile.age}</p>
        <p>Email: {profile.email}</p>
      </div>
    </div>
  );
};
export default UserProfile;
