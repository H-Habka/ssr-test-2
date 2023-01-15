import React from "react";
import { BiMenuAltRight, BiMenuAltLeft, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import Options from "./Options";
import NavigationTabs from "./NavigationTabs";

const TopBar = () => {
  return (
    <div className="z-50 relative flex  justify-between items-center ps-3 bg-lightOne dark:bg-darkFive h-[60px] gap-6 680:h-[80px] 680:p-4 680:ps-6">
      <div className="flex items-center justify-between gap-5 py-2 1366:grow">
        <div className="flex justify-between gap-6 items-center">
          <img src="/images/common/logo.png" alt="logo" className="w-9 h-11" />
          <p
            className="hidden 1500:block font-black text-xl text-white"
            style={{ fontFamily: "Titillium Web,sans-serif" }}
          >
            VIKINGER
          </p>
        </div>
        <BiMenuAltLeft className="w-9 h-9 text-white block 680:hidden" />
        <AiOutlineAppstore className="w-8 h-8 text-white 680:block hidden" />
      </div>
      <NavigationTabs containerClassName="hidden 1366:flex" />
      <div className="grow h-full  bg-opacity-30 1366:w-[400px] bg-black 680:rounded-xl 680:overflow-hidden flex items-center px-2 380:px-4">
        <input
          type="text"
          className="outline-none  py-2 pe-2 380:pe-4 w-full bg-transparent text-white font-semibold placeholder:text-gray-300 placeholder:opacity-50 placeholder:text-sm placeholder:font-normal"
          placeholder="search here for people or groups"
        />
        <BiSearchAlt2 className="text-gray-300 opacity-50 w-8 h-8 " />
      </div>
      <Options
        progressRest={38}
        ProgressClassName="hidden 960:block"
        containerClassName="960:w-[470px] hidden 680:flex"
      />
    </div>
  );
};

export default TopBar;
