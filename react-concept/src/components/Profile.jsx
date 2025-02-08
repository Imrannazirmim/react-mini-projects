import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

const handleChange = (e) => {
    const {name, value} = e.target;
    setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value
    }))
}

  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          age:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <h2>User Profile</h2>
        <span>Name: {profile.name}</span>
        <span>Age: {profile.age}</span>
      </div>
    </div>
  );
};

export default Profile;
