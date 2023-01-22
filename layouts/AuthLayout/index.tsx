import React, { ReactElement } from "react";
import { useGlobalStore } from "../../store/globalStore";
import { useTranslation } from "react-i18next";
import Switcher from "./Switcher";
import Logo from '@public/icons/logo.svg'

const AuthLayout: React.FC<{ children: any }> = ({ children }) => {
  const darkMode = useGlobalStore((state) => state.darkMode);
  const { t } = useTranslation();
  return (
    <div
      className="min-h-screen bg-cover flex items-center flex-col select-none 1230:flex-row 1230:h-screen 1230:ps-40 1230:pe-24 1230:justify-between"
      style={{
        backgroundImage: darkMode
          ? "url(/images/dark/landing-background.webp)"
          : "url(/images/light/landing-background.webp)",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="text-white flex flex-col justify-center items-center mt-24 1230:mt-0">
          <div className="text-center mb-8">
            <Logo className="w-12 fill-white"/>
          </div>
          <p className="text-center font-medium text-2xl 480:text-[2.5rem] leading-[0.25] mt-3 mb-2">
            {t("welcom to").toUpperCase()}
          </p>
          <p
            style={{ fontFamily: "Titillium Web,sans-serif" }}
            className="text-center font-[900] text-6xl 480:text-[6rem]"
          >
            VIKINGER
          </p>
          <p className="text-white 1230:block hidden w-[400px] text-center text-lg font-medium mt-4">
            {t(
              "The next generation social network & community! Connect with your friends and play with our quests and badges gamification system!"
            )}
          </p>
        </div>
        <Switcher />
      </div>

      {children}
    </div>
  );
};

export default AuthLayout;
