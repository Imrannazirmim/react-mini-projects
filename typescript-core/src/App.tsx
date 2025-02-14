import User from "./components/User.tsx";
import Admin from "./components/Admin.tsx";
import { Info, AdminInfoList } from "./types.ts";

import Counter from "./components/Counter.tsx";
import CounterReducer from "./components/CounterReducer.tsx";

const App = () => {
  const userInfo: Info = {
    id: 1,
    name: "imran khan",
    email: "imran@gmail.com",
  };
  const adminInfo: AdminInfoList = {
    id: 2,
    name: "eyaqub ali emon",
    email: "ali@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };
  return (
    <>
      <User userInfo={userInfo} />
      <Admin adminInfo={adminInfo} />
      {/*<UserProfile />*/}
      {/*<Todo />*/}
      {/*<Form />*/}
      <Counter />
      <CounterReducer />
    </>
  );
};
export default App;
