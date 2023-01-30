import React from "react";
import IconButton from "./IconButton";
import { navigationSidebarIcons } from "@constants/index";
import AvatarContainer from "@components/common/AvatarContainer";
import { useGlobalStore } from "@store/globalStore";
import { useTranslation } from "react-i18next";
import ProfileSideBar from "./ProfileSideBar";

const NavigationSidebar = () => {
  const { i18n } = useTranslation();
  const leftBarStatus = useGlobalStore((state) => state.leftBarStatus);
  const setLeftBarStatus = useGlobalStore((state) => state.setLeftBarStatus);
  return (
    <div className="w-20 h-[calc(100vh-80px)]  fixed start-0 bottom-0 z-[1]">
      <div className="relative w-full min-h-full ">
        <div
          className={`absolute top-0 left-0 flex flex-col items-center gap-[14px] py-4 z-[1] w-full h-full transition-all duration-500 bg-white dark:bg-darkOne ease-in-out  ${
            leftBarStatus
              ? "ltr:-translate-x-full rtl:translate-x-full delay-0"
              : "-translate-x-0 delay-700"
          }`}
        >
          <div className="">
            <AvatarContainer
              size="small"
              imageSrc=""
              hasStatus={true}
              withWrapper={true}
              statusType="inactive"
            />
          </div>
          {navigationSidebarIcons.slice(0, 8).map((item, idx) => (
            <IconButton key={idx} {...item} />
          ))}
        </div>
        <div
          className={`absolute top-0 start-0 bg-lightFour dark:bg-darkOne w-[300px] h-full transition-all duration-700 ease-in-out overflow-y-auto scrollbar-custom-thin ${
            !leftBarStatus
              ? "delay-0 ltr:-translate-x-full rtl:translate-x-full"
              : "-translate-x-0 delay-500"
          }`}
        >
          <ProfileSideBar />
        </div>
      </div>
    </div>
  );
};

export default NavigationSidebar;
