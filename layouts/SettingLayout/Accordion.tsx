import { useState } from "react";
import { settingsNavItems } from "@constants/index";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Accordion = () => {
  const { t } = useTranslation();
  const [activeOne, setActiveOne] = useState(-1);
  const router = useRouter();
  return (
    <div className="rounded-xl overflow-hidden w-full">
      {settingsNavItems.map((groupItem, idx, arr) => (
        <div key={groupItem.id}>
          <div
            onClick={() =>
              setActiveOne((prev) =>
                prev === groupItem.id ? -1 : groupItem.id
              )
            }
            className="bg-white p-6 flex justify-between cursor-pointer"
          >
            <div className="me-3 pt-[5px]">
              <groupItem.Icon className="fill-lightTwo dark:fill-darkFour" />
            </div>
            <div className="grow">
              <div className="flex justify-between font-bold">
                <p className="text-gray-800">{t(groupItem.groupTitle)}</p>
                <div className="w-3 h-3  relative flex justify-center items-center">
                  <div
                    className={`w-[2px] h-full  rounded-xl transition-all duration-300 ${
                      activeOne === groupItem.id
                        ? "rotate-[90deg] bg-redColor"
                        : "rotate-0 bg-gray-800 "
                    }`}
                  ></div>
                  <div
                    className={`absolute w-full h-[2px]  start-0 top-1/2 -translate-y-1/2 rounded-xl transition-all duration-300 ${
                      activeOne === groupItem.id ? "bg-redColor" : "bg-gray-800"
                    }`}
                  ></div>
                </div>
              </div>
              <div className="text-[12px] font-semibold text-gray-500">
                {t(groupItem.description)}
              </div>
            </div>
          </div>
          <div
            style={{
              height:
                activeOne === groupItem.id
                  ? `${groupItem.children.length * 36 + 24}px`
                  : "0px",
            }}
            className={`bg-lightThree  border-gray-200 ps-14 transition-all duration-500 overflow-hidden flex justify-center flex-col ${
              activeOne === groupItem.id
                ? ` ${idx === arr.length - 1 ? "border-t" : "border-y"}`
                : `  ${idx === arr.length - 1 ? "border-none" : "border-t"}`
            }`}
          >
            {groupItem.children.map((child) => (
              <p
                onClick={() => router.push(child.href)}
                className={`text-sm mt-1 text-gray-800 dark:text-white cursor-pointer transition-all duration-500  hover:ps-1 hover:text-lightTwo dark:hover:text-darkFour py-1 my-1 font-bold w-fit
                `}
              >
                {t(child.title)}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
