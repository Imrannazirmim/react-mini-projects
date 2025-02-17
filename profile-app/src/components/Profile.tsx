import { useState } from "react";
import { FaCamera } from "react-icons/fa6";
import Tabs from "./Tabs.tsx";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://placehold.co/1500x400");
  const [profileUrl, setProfileUrl] = useState("https://placehold.co/100");

  const handleBannerUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="relative w-[94%] ml-[8rem]">
        {/* Banner Section */}
        <div className="relative">
          <img
            src={bannerUrl}
            alt="banner image"
            className="w-full h-60 object-cover rounded-lg"
          />
          <button className="absolute top-2 right-8 md:right-20 bg-amber-600 text-white p-3 rounded-full">
            <label htmlFor="banner-upload" className="cursor-pointer">
              <FaCamera size={24} />
            </label>
            <input
              type="file"
              id="banner-upload"
              accept="image/*"
              className="hidden"
              onChange={handleBannerUpload}
            />
          </button>
        </div>
        {/* Profile Picture Section */}
        <div className="absolute  left-0 flex flex-col items-center">
          <img
            src={profileUrl}
            alt="profile image"
            className="rounded-full w-[10rem] h-[10rem] object-cover border-4 border-white shadow"
          />
          <button className="bg-gray-800 absolute top-[7rem] p-3 mt-2 rounded-full text-white">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <FaCamera size={24} />
            </label>
            <input
              type="file"
              accept="image/*"
              id="profile-upload"
              className="hidden"
              onChange={handleProfileUpload}
            />
          </button>
          {/*  channel Details*/}
        </div>
        <div>
          <div className="flex flex-col gap-3  ml-[12rem] mt-4">
            <h1 className="text-2xl font-bold">Progomon College</h1>
            <p>1M Views</p>
            <p>
              This is my Progomon collage channel for programming concept
              explained.
            </p>
          </div>
          <button className="bg-red-600 ml-[12rem] mt-3 px-4 py-2 text-white font-bold rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default Profile;
