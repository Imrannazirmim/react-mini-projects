import { Info } from "../types.ts";
import * as React from "react";

type UserInfoProps = {
  userInfo: Info;
};

const User: React.FC<UserInfoProps> = ({ userInfo }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>{userInfo.id}</p>
      <p>{userInfo.name}</p>
      <p>{userInfo.email}</p>
    </div>
  );
};
export default User;
