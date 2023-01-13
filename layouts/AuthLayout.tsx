import React, { ReactElement } from "react";
import { useGlobalStore } from "../store/globalStore";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const AuthLayout: React.FC<{ children: any }> = ({ children }) => {
  const darkMode = useGlobalStore((state) => state.darkMode);
  const { t } = useTranslation();
  const router = useRouter();
  console.log({ router });
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
          <p className="text-center mb-8">Logo</p>
          <p className="text-center font-medium text-2xl 480:text-[2.5rem] leading-[0.25] mt-3 mb-2">
            {t("welcom to").toUpperCase()}
          </p>
          <p
            style={{ fontFamily: "Titillium Web" }}
            className="text-center font-[900] text-6xl 480:text-[6rem]"
          >
            {"VIKINGER".toUpperCase()}
          </p>
          <p className="text-white 1230:block hidden w-[400px] text-center text-lg font-medium mt-4">
            {t(
              "The next generation social network & community! Connect with your friends and play with our quests and badges gamification system!"
            )}
          </p>
        </div>
        <div className="flex rounded-xl overflow-hidden border border-white dark:border-darkOne justify-between items-center w-[80%] min-w-[300px] max-w-[400px] mt-8">
          <div
            onClick={() => router.push("/auth/login")}
            className={`transition-all duration-300 cursor-pointer py-4 font-bold flex items-center justify-center flex-1 ${
              router.pathname.endsWith("login")
                ? "bg-white dark:bg-darkOne text-gray-700 dark:text-white"
                : "bg-transparent text-white dark:text-darkOne"
            } `}
          >
            {t("login")}
          </div>
          <div
            onClick={() => router.push("/auth/signup")}
            className={`transition-all duration-300 cursor-pointer py-4 font-bold flex items-center justify-center flex-1 ${
              router.pathname.endsWith("signup")
                ? "bg-white dark:bg-darkOne text-gray-700 dark:text-white"
                : "bg-transparent text-white dark:text-darkOne"
            }`}
          >
            {t("register")}
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default AuthLayout;
