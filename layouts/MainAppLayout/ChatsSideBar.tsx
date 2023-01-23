import AvatarContainerWithWrapper from "@components/common/AvatarContainer";
import { useGlobalStore } from "@store/globalStore";
import React from "react";
import { BiMenuAltRight, BiMenuAltLeft, BiSearchAlt2 } from "react-icons/bi";
import SearchIcon from "@public/icons/search.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface MessageItemProps {
  name: string;
  time: string;
  lastMessage: string;
}

const MessageItem: React.FC<MessageItemProps> = ({
  name,
  time,
  lastMessage,
}) => {
  return (
    <div className="w-full h-full pe-2 text-sm pt-2 ">
      <div className="flex justify-between">
        <p className="font-bold text-darkOne dark:text-white">{name}</p>
        <p className=" font-semibold text-[11px] text-darkTwo dark:text-gray-300">{time}</p>
      </div>
      <div className="text-ellipsis whitespace-nowrap w-[210px] overflow-hidden text-darkTwo dark:text-gray-300">
        {lastMessage}
      </div>
    </div>
  );
};

const ChatsSideBar = () => {
  const rightBarStatus = useGlobalStore((state) => state.rightBarStatus);
  const setRightBarStatus = useGlobalStore((state) => state.setRightBarStatus);
  const { i18n } = useTranslation();
  const [userSelected, setUserSelected] = useState<boolean>(false);
  return (
    <div
      className={`${
        rightBarStatus ? "w-[300px]" : "w-20"
      } ease-in-out transition-all duration-500 bg-white dark:bg-darkOne fixed end-0 h-[calc(100vh-80px)] bottom-0 z-[1] flex flex-col items-center `}
    >
      <div
        className={`h-[calc(100%-80px)] bg-white dark:bg-darkOne absolute z-[1] w-full end-0 transition-all duration-500 ${
          rightBarStatus ? "delay-100" : "delay-300"
        } ${
          userSelected
            ? "translate-x-0"
            : `${
                i18n.language.startsWith("en")
                  ? "translate-x-full"
                  : "-translate-x-full"
              }`
        } `}
      ></div>
      <div
        className={`overflow-y-auto w-full flex  flex-col items-start   overflow-x-hidden scrollbar-custom-thin transition-all duration-500  ${
          rightBarStatus
            ? "h-[calc(100%-150px)] bg-lightThree dark:bg-darkSix"
            : "h-[calc(100%-60px)] bg-white dark:bg-darkOne"
        }`}
      >
        {Array(20)
          .fill(0)
          .map((item, idx) => (
            <div
              onClick={() => {
                setUserSelected(true);
                setRightBarStatus(true);
              }}
              className="relative flex items-center justify-start  w-full ps-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-darkTwo group"
            >
              <div className="">
                <AvatarContainerWithWrapper
                  size="small"
                  imageSrc=""
                  hasStatus={true}
                  widthWrapper={true}
                  colorClassName="bg-white dark:bg-darkOne group-hover:bg-gray-200 dark:group-hover:bg-darkTwo"
                />
              </div>
              <div
                className={`absolute top-1/2 -translate-y-1/2 start-20 w-[220px] h-full pt-2`}
              >
                <MessageItem
                  name="Hossien Habke"
                  time="5hrs"
                  lastMessage=" i am so broud of you i am so broud of you i am so broud of you i am so broud of you"
                />
              </div>
            </div>
          ))}
      </div>
      <div
        className={`${
          rightBarStatus ? "h-[90px]" : "h-0"
        } w-full  transition-all duration-500 flex justify-center items-center overflow-hidden `}
      >
        <div className="w-[236px] relative">
          <input
            className="outline-none border  border-gray-300 dark:border-gray-600 px-4 pe-10 py-[10px]  rounded-xl w-full placeholder:font-semibold dark:placeholder:text-gray-600 bg-white dark:bg-darkOne dark:text-white focus:border-lightOne dark:focus:border-darkFive"
            placeholder="search messages..."
          />
          <SearchIcon className="absolute top-1/2 -translate-y-1/2 end-4 fill-gray-400" />
        </div>
      </div>
      <div
        onClick={() => {
          setRightBarStatus(!rightBarStatus);
          setUserSelected(false);
        }}
        className={`bg-lightTwo dark:bg-darkThree h-[80px] w-full flex  items-center cursor-pointer justify-start px-6 relative `}
      >
        <BiMenuAltRight
          className={`w-8 h-8 fill-white transition-all duration-300 ${
            i18n.language.startsWith("en") ? "scale-x-[1]" : "scale-x-[-1]"
          } ${rightBarStatus ? "scale-y-[-1]" : ""}`}
        />
        <p
          className={`font-bold  ms-4 text-white transition-all duration-500 delay-500 whitespace-nowrap absolute top-1/2 -translate-y-1/2 start-16 `}
        >
          Messages / Chat
        </p>
      </div>
    </div>
  );
};

export default ChatsSideBar;
