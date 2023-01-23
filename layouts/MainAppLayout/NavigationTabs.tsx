import React from "react";
import { useTranslation } from "react-i18next";
interface Props {
  containerClassName?: string;
}

const NavigationTabs: React.FC<Props> = ({ containerClassName }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`w-[290px] flex items-center justify-around font-semibold text-white text-sm ${containerClassName}`}
    >
      <p className="cursor-pointer hover:text-lightTwo dark:hover:text-darkFour transition-all duration-300 ">
        {t("home")}
      </p>
      <p className="cursor-pointer hover:text-lightTwo dark:hover:text-darkFour transition-all duration-300 ">
        {t("careers")}
      </p>
      <p className="cursor-pointer hover:text-lightTwo dark:hover:text-darkFour transition-all duration-300 ">
        {t("faqs")}
      </p>
      <div className="relative group ">
        <p className="cursor-pointer group-hover:text-lightTwo dark:group-hover:text-darkFour text-xl">...</p>
        <div className="flex flex-col gap-1 px-4 h-0 group-hover:h-[120px] opacity-0 group-hover:opacity-100  group-hover:py-2 transition-all duration-500 absolute start-0 top-full bg-lightOne dark:bg-darkFive overflow-y-hidden whitespace-nowrap rounded-xl mt-0 translate-y-0 group-hover:translate-y-3">
          <p className="w-fit py-[2px] cursor-pointer hover:text-lightTwo dark:hover:text-darkFour transition-all duration-300 ">
            {t("about us")}
          </p>
          <p className="w-fit py-[2px] cursor-pointer hover:text-lightTwo dark:hover:text-darkFour transition-all duration-300 ">
            {t("our blog")}
          </p>
          <p className="w-fit py-[2px] cursor-pointer hover:text-lightTwo dark:hover:text-darkFour transition-all duration-300 ">
            {t("contact us")}
          </p>
          <p className="w-fit py-[2px] cursor-pointer hover:text-lightTwo dark:hover:text-darkFour transition-all duration-300 ">
            {t("privacy policy")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;
