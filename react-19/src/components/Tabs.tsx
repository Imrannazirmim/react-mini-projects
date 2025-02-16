import { useState, useTransition } from "react";
import Home from "./tabs/Home";
import Posts from "./tabs/Posts";
import Contact from "./tabs/Contact";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "posts":
        return <Posts />;
      case "contact":
        return <Contact />;

      default:
        return <Home />;
    }
  };
  return (
    <div>
      <button onClick={() => handleTabChange("home")}>Home</button>
      <button onClick={() => handleTabChange("posts")}>Posts</button>
      <button onClick={() => handleTabChange("contact")}>Contact</button>

      {isPending && <p>Loading....</p>}
      <div>{renderContent()}</div>
    </div>
  );
};

export default Tabs;
