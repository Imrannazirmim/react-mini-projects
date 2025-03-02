import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import { TopSeller } from "./components/TopSeller";
import PopularBlog from "./components/PopularBlog";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
      <div className="rounded w-full flex justify-between flex-wrap">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/product/:id" element={<ProductPage/>}/>
        </Routes>
        <div className="lg:w-[95%] lg:absolute  flex md:flex-col sm:flex-col justify-between items-center gap-10 ">
          <TopSeller/>
          <PopularBlog/>
        </div>
      </div>
      </div>
    </Router>
  );
};

export default App;
