import React from "react";
import { BiMenuAltRight, BiMenuAltLeft, BiSearchAlt2 } from "react-icons/bi";
import Options from "./Options";
import NavigationTabs from "./NavigationTabs";
import Logo from "@public/icons/logo.svg";
import ApplicationIcon from "@public/icons/applaction-menu.svg";
import { useGlobalStore } from "@store/globalStore";

const TopBar = () => {
  const leftBarStatus = useGlobalStore((state) => state.leftBarStatus);
  const setLeftBarStatus = useGlobalStore((state) => state.setLeftBarStatus);
  return (
    <div className="z-50 sticky top-0 flex  justify-between items-center ps-3 bg-lightOne dark:bg-darkFive h-[60px] gap-6 680:h-[80px] 680:p-4 680:ps-6">
      <div className="flex items-center justify-between gap-5 py-2 1366:grow">
        <div className="flex justify-between gap-6 items-center">
          <Logo alt="logo" className="w-9 h-11 fill-white" />
          <p
            className="hidden 1500:block font-black text-xl text-white"
            style={{ fontFamily: "Titillium Web,sans-serif" }}
          >
            VIKINGER
          </p>
        </div>
        <BiMenuAltLeft className="w-9 h-9 text-white block 680:hidden" />
        <ApplicationIcon
          onClick={() => setLeftBarStatus(!leftBarStatus)}
          className="w-6 h-6 cursor-pointer transition-all duration-[200] hover:fill-white dark:hover:fill-white fill-lightIconFillColor dark:fill-darkIconFillColor 680:block hidden"
        />
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
        ProgressClassName="hidden 960:block"
        containerClassName="960:w-[470px] hidden 680:flex"
        navigate={false}
      />
    </div>
  );
};

export default TopBar;
