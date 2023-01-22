import React from "react";
import Loader from "./Loader";
import Logo from '@public/icons/logo.svg'

interface Props{
  className?: string
}

const SplashScreen :React.FC<Props> = ({className=""}) => {
  return (
    <div className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-[#3e3f5e] dark:bg-[#1d2333] text-white transition-all duration-1000 pointer-events-none z-[1000] ${className}`}>
      <div className="flex flex-col items-center">
        <div className="py-4 px-6 bg-lightOne dark:bg-darkFive rounded-[40px] min-h-[100px] min-w-[96px]">
          {/* <Logo className="w-12 fill-white mx-auto" /> */}
          <img src="/images/common/logo.png" alt="logo" className="w-12 fill-white mx-auto" />
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
