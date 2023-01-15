import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineFaceSmile, HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import ProgressToNextLevel from "./ProgressToNextLevel";

interface Props {
  ProgressClassName?: string;
  progressRest: string | number;
  containerClassName?: string;
}

const Options: React.FC<Props> = ({
  ProgressClassName = "",
  progressRest,
  containerClassName,
}) => {
  return (
    <div
      className={`w-[310px] flex justify-around items-center mx-auto h-8 ${containerClassName}`}
    >
      <ProgressToNextLevel className={ProgressClassName} rest={progressRest} />
      <p className="w-px h-full border-s border-gray-300 border-opacity-60 hidden 480:block" />
      <HiOutlineShoppingBag className="w-[22px] h-[22px] text-white " />
      <HiOutlineFaceSmile className="w-[22px] h-[22px] text-white " />
      <HiOutlineChatAlt2 className="w-[22px] h-[22px] text-white " />
      <IoMdNotificationsOutline className="w-[22px] h-[22px] text-white " />
      <p className="w-px h-full border-s border-gray-300 border-opacity-60 hidden 480:block" />
      <IoSettingsOutline className="w-[22px] h-[22px] text-white " />
    </div>
  );
};

export default Options;
