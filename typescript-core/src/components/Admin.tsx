import { AdminInfoList } from "../types.ts";
import * as React from "react";

type AdminInfoProps = {
  adminInfo: AdminInfoList;
};

const Admin: React.FC<AdminInfoProps> = ({ adminInfo }) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>{adminInfo.id}</p>
      <p>{adminInfo.name}</p>
      <p>{adminInfo.email}</p>
      <p>{adminInfo.role}</p>
      <p>{adminInfo.lastLogin.toLocaleString()}</p>
    </div>
  );
};
export default Admin;
