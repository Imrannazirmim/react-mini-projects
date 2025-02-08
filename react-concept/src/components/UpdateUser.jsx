import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(newName.trim()) {
        updateUser(newName);
        setNewName('')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
