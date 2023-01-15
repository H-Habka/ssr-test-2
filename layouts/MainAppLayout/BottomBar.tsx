import React from "react";
import Options from "./Options";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0  bg-lightOne w-full px-2 py-[14px] block 680:hidden">
      <Options ProgressClassName="hidden 480:block" progressRest={38} containerClassName="480:w-[470px]"/>
    </div>
  );
};

export default BottomBar;
