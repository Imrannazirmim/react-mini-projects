import Sidebar from "./Sidebar";
import Table from "./Table";


const Dashboard = () => {

  return <div className="flex">
    <div className="flex h-screen">
    <Sidebar/>
    </div>
    <div className="flex-1 h-full bg-gray-900">
        <Table/>
    </div>
  </div>;
};

export default Dashboard;
