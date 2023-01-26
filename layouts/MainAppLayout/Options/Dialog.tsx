import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

interface DialogProps {
  isOpen: boolean;
  title: string;
  href: string;
  firstButtonHandler: () => void;
  RenderChildElement: any;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  title,
  href,
  firstButtonHandler,
  RenderChildElement,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div
      className={`w-[380px] h-[545px] bg-white dark:bg-darkOne rounded-xl absolute end-0 top-full transition-all duration-700 flex flex-col justify-between ${
        isOpen
          ? "opacity-100 translate-y-3 pointer-events-auto"
          : "opacity-0 -translate-y-8 pointer-events-none"
      }`}
    >
      <div className="bg-white dark:bg-darkOne h-16 rounded-t-xl flex items-center justify-between px-8 pt-4 pb-2">
        <p className="font-bold text-darkTwo dark:text-white">{t(title)}</p>
        <div className="flex items-center justify-center gap-4 text-[14px] font-semibold text-gray-400 dark:text-gray-500">
          <p
            onClick={firstButtonHandler}
            className="cursor-pointer hover:text-lightTwo dark:hover:text-darkFour transition-all duration-300"
          >
            {title === "friend requests"
              ? t("find friends")
              : t("mark all as read")}
          </p>
          <p
            onClick={() => router.push("/settings")}
            className="cursor-pointer hover:text-lightTwo dark:hover:text-darkFour transition-all duration-300"
          >
            {t("settings")}
          </p>
        </div>
      </div>
      <div className="h-[425px] bg-white dark:bg-darkOne overflow-y-auto scrollbar-custom-thin">
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
        <RenderChildElement name="asdasdasdasdasd" />
      </div>
      <div
        onClick={() => router.push(href)}
        className={` hover:opacity-90 transition-all duration-300 h-14 rounded-b-xl flex justify-center items-center text-sm font-bold cursor-pointer text-white ${
          title === "messages"
            ? "bg-lightTwo dark:bg-darkFour"
            : "bg-lightOne dark:bg-darkFive"
        }`}
      >
        {t("view all")} {t(title.split(" ").slice(-1))}
      </div>
    </div>
  );
};

export default Dialog;
