import CustomButton from "@components/common/CustomButton";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import AvatarContainerWithWrapper from "@components/common/AvatarContainer";
import { settingsNavItems } from "@constants/index";

interface SettingsDialogProps {
  isOpen: boolean;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({ isOpen }) => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div
      className={`w-[200px] h-[560px] bg-lightThree dark:bg-darkOne rounded-xl absolute end-0 top-full transition-all duration-700 flex flex-col pt-[10px] ${
        isOpen
          ? "opacity-100 translate-y-3 pointer-events-auto"
          : "opacity-0 -translate-y-8 pointer-events-none"
      }`}
    >
      <div className="flex items-center px-[18px] ">
        <div className="me-3">
          <AvatarContainerWithWrapper
            imageSrc=""
            hasStatus={false}
            withWrapper={true}
            size="small"
            colorClassName="bg-white dark:bg-darkOne group-hover:bg-[#eaeaf5] dark:group-hover:bg-darkSeven"
          />
        </div>
        <div className="">
          <p className="font-bold text-sm text-gray-700 dark:text-gray-200">
            {t("hi")} Hossien
          </p>
          <p
            className="text-[12px] font-semibold cursor-pointer hover:text-lightTwo dark:hover:text-darkFour transition-all duration-300 text-gray-500 dark:text-gray-400"
            dir="ltr"
          >
            @marinavalentine
          </p>
        </div>
      </div>

      {settingsNavItems.map((item) => (
        <div key={item.id} className="px-[18px] font-bold">
          <p className=" text-gray-400 dark:text-gray-500 mt-4 mb-2 text-[13px]">
            {t(item.groupTitle).toUpperCase()}
          </p>
          {item.children.map((child) => (
            <p
              key={child.id}
              onClick={() => router.push(child.href)}
              className={`text-[12px] mt-1 text-gray-700 dark:text-white cursor-pointer transition-all duration-500  hover:ps-1 hover:text-lightTwo dark:hover:text-darkFour py-px  ${
                child.ExtraText ? "w-full flex justify-between" : "w-fit"
              }`}
            >
              <span>{t(child.title)}</span>
              {child.ExtraText ? (
                <span className="font-bold text-lightTwo dark:text-darkFour">
                  {child.ExtraText}
                </span>
              ) : null}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SettingsDialog;
