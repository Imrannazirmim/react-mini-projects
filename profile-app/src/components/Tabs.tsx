import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import Card from "./Card.tsx";
import About from "./About.tsx";
import { GoProjectSymlink } from "react-icons/go";
import Contact from "./Contact.tsx";
import { useState } from "react";
import { allData } from "../Data.ts";
import Project from "./Project.tsx";

const tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using react tailwind css"
            image="https://placehold.co/400x300"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="flex flex-wrap">
        {allData.map((data) => (
          <Project
            key={data.id}
            title={data.title}
            description={data.description}
            thumbnail={data.thumbnail}
            video_embed={data.video_embed}
          />
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    icon: <FaPhone />,
    label: "Contact",
    content: <Contact />,
  },
];
const Tabs = () => {
  const [tabActive, setTabActive] = useState(tabs[0].id);

  return (
    <div className="p-4 mt-[3rem]">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => {
          return (
            <button
              key={tab.id}
              className={`flex-1 text-center py-2 px-4 font-medium text-sm ${tabActive === tab.id ? "border-b-2 border-green-500" : "text-gray-600"}`}
              onClick={() => setTabActive(tab.id)}
            >
              <div className="flex items-center justify-center space-x-2">
                {tab.icon}
                <span>{tab.label}</span>
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-4 p-4 rounded-lg">
        {tabs.find((tab) => tab.id === tabActive)?.content}
      </div>
    </div>
  );
};
export default Tabs;
