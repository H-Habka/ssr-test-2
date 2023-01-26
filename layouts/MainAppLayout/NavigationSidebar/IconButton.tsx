import React from "react";
import { IconType } from "react-icons/lib";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
interface Props {
  Icon: IconType;
  title: string;
  href?: string;
}
//
const IconButton: React.FC<Props> = ({ Icon, title, href = "" }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const handleIconButtonClick = () => {
    if (href) {
      router.push(`${href.toLocaleLowerCase()}`);
    }
  };
  const isActiveRoute = router?.pathname === href;
  return (
    <div
      onClick={handleIconButtonClick}
      className={` transition-all duration-300 flex items-center justify-center p-3  rounded-xl  cursor-pointer group relative ${
        isActiveRoute
          ? "shadow-lightTwo bg-lightTwo shadow-iconButtonActive dark:bg-darkThree dark:shadow-darkThree"
          : "hover:shadow-black hover:shadow-iconButton dark:hover:bg-darkSeven dark:hover:shadow-darkSeven"
      }`}
    >
      <Icon
        className={`transition-all dyration-300 ${
          isActiveRoute
            ? "fill-white"
            : "fill-[#ADAFCA] group-hover:fill-lightTwo dark:group-hover:fill-darkFour"
        }`}
      />
      <p className="text-white font-bold text-[11px] py-1 px-2 rounded-xl absolute start-full top-1/2 -translate-y-1/2 ms-4 bg-darkSeven pointer-events-none z-50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:ms-1 whitespace-nowrap">
        {t(title)}
      </p>
    </div>
  );
};

export default IconButton;
