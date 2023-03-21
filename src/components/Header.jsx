import React from "react";
import Navigation from "./Navigation";
import Bg_video from "../assets/bg-video-1.mp4";

const Header = () => {
  return (
    <header className="" id="header">
      <Navigation />
      <div className="">
        <div className="overflow-clip lg:h-[35rem] h-[65vh] relative -z-10">
          <video
            className="min-w-full object-cover h-full  "
            src={Bg_video}
            autoPlay
            preload="auto"
            muted
            loop
          />

          <div className="absolute lg:bottom-36 lg:left-8 bottom-1/2 translate-y-1/2 lg:translate-0 text-[#ebe0bf] lg:w-[800px] w-full lg:text-5xl bg-black bg-opacity-60 rounded-md max-w-[90%] left-1/2 -translate-x-1/2 text-2xl lg:-translate-x-0 py-5 px-3">
            <h1 className="text-center py-8 px-3 lg:p-0 lg:text-left font-bold border-red-500">
              With our wide range of experience, we renovate & build everything
              from residential to commercial projects
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
