import React from "react";
import Loader from "./Loader";

const SplashScreen = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#3e3f5e] dark:bg-[#1d2333] text-white">
      <div className="flex flex-col items-center">
        <div className="py-4 px-6 bg-lightOne dark:bg-darkFive rounded-[40px]">
          <img src="/images/common/logo.png" alt="" className="w-12" />
        </div>
        <p
          className="font-balck text-3xl mt-8"
          style={{ fontFamily: "Titillium Web,sans-serif" }}
        >
          VIKINGER
        </p>
        <p  className="font-bold text-lg">LOADING...</p>
        <div className="w-[60px] h-10 mt-16">
          <Loader />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
