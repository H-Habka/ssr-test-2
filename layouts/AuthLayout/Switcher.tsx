import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Switcher = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
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
  );
};

export default Switcher;
