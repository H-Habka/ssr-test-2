import React, { useState, useRef, useEffect } from "react";
import ProgressToNextLevel from "./ProgressToNextLevel";
import Bell from "@public/icons/bell.svg";
import ShoppingBadge from "@public/icons/market.svg";
import Messages from "@public/icons/messages.svg";
import Setting from "@public/icons/setting.svg";
import Smile from "@public/icons/smile.svg";
import { IconType } from "react-icons/lib";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import AvatarContainerWithWrapper from "@components/common/AvatarContainer";
import MessageIcon from "@public/icons/message.svg";
import LikeIcon from "@public/icons/like.svg";
import AddFriendIcon from "@public/icons/add-friend.svg";
import RejectFriendIcon from "@public/icons/reject-friend.svg";

interface Props {
  ProgressClassName?: string;
  containerClassName?: string;
  navigate?: boolean;
}
interface IconWithBadgeProps {
  Icon: IconType;
  navigate?: boolean;
  href: string;
  count?: string | number;
  title: string;
  firstButtonHandler: () => void;
  RenderChildElement: any;
}
interface DialogProps {
  isOpen: boolean;
  title: string;
  href: string;
  firstButtonHandler: () => void;
  RenderChildElement: any;
}

interface NotificationsRenderElementProps {}
interface MessagesRenderElementProps {}
interface FriendRequestRenderElementProps {}

const NotificationsRenderElement: React.FC<
  NotificationsRenderElementProps
> = () => {
  return (
    <div className=" flex px-6 py-2 hover:bg-[#eaeaf5] group dark:hover:bg-darkSeven">
      <div className="me-3">
        <AvatarContainerWithWrapper
          imageSrc=""
          hasStatus={false}
          withWrapper={true}
          size="small"
          colorClassName="bg-white dark:bg-darkOne group-hover:bg-[#eaeaf5] dark:group-hover:bg-darkSeven"
        />
      </div>
      <div className="pe-8 mt-2">
        <p className="text-sm text-gray-600 dark:text-white">
          <span className="cursor-pointer font-bold ">Nick Grissom</span> posted
          a comment on your{" "}
          <span className="cursor-pointer font-bold text-lightTwo dark:text-darkFour">
            status update
          </span>
        </p>
        <p className="text-[12px] text-gray-500 mt-2 dark:text-gray-400">
          2 minutes ago
        </p>
      </div>
      <div className="mt-5">
        <MessageIcon className="w-5 h-5 fill-[#adafca] dark:fill-darkTwo opacity-70" />
      </div>
    </div>
  );
};

const MessagesRenderElement: React.FC<MessagesRenderElementProps> = () => {
  return (
    <div className=" flex px-6 py-3 hover:bg-[#eaeaf5] group items-center cursor-pointer dark:hover:bg-darkSeven">
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
        <div className="flex justify-between">
          <p className="font-bold text-sm text-gray-600 dark:text-white">
            Bearded Wonder
          </p>
          <p className="text-[12px] text-gray-500 dark:text-gray-400">
            29 mins ago
          </p>
        </div>
        <p className="text-sm whitespace-nowrap w-[270px] overflow-x-hidden text-ellipsis text-gray-600 dark:text-gray-400">
          Great! Then will meet with them at the party party party party
        </p>
      </div>
    </div>
  );
};

const FriendRequestRenderElement: React.FC<
  FriendRequestRenderElementProps
> = () => {
  return (
    <div className="flex items-center py-3 px-6 ">
      <div className="me-2">
        <AvatarContainerWithWrapper
          imageSrc=""
          hasStatus={false}
          withWrapper={true}
          size="small"
          colorClassName="bg-white dark:bg-darkOne group-hover:bg-[#eaeaf5] dark:group-hover:bg-darkTwo"
        />
      </div>
      <div className="text-sm text-gray-600 grow">
        <p className="font-bold cusor-pointer dark:text-white">Ginny Danvers</p>
        <p className="dark:text-gray-400 mt-1">6 friends in common</p>
      </div>
      <div className="gap-4 flex items-center">
        <div className="border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-lightOne transition-all duration-300 dark:hover:bg-darkFive group hover:border-lightOne hover:dark:border-darkFive dark:border-darkTwo">
          <AddFriendIcon className="fill-gray-300 dark:fill-darkTwo group-hover:fill-white transition-all duration-300" />
        </div>
        <div className="border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-redColor dark:hover:border-redColor hover:border-redColor group transition-all duration-300 dark:border-darkTwo">
          <RejectFriendIcon className="fill-gray-300 dark:fill-darkTwo group-hover:fill-white transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

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
        <p className="font-bold text-darkTwo dark:text-white">{title}</p>
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

const IconWithBadge: React.FC<IconWithBadgeProps> = ({
  Icon,
  navigate = true,
  href,
  count = 0,
  title,
  firstButtonHandler,
  RenderChildElement,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    const clickEventListener = (e: any) => {
      if (!buttomRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.documentElement.addEventListener("click", clickEventListener);

    return () => {
      document.documentElement.removeEventListener("click", clickEventListener);
    };
  }, []);
  return (
    <div ref={buttomRef} className="relative">
      <div
        onClick={() => {
          if (navigate) {
            router.push(href);
          } else {
            setIsOpen((prev) => !prev);
          }
        }}
        className="group cursor-pointer"
      >
        <Icon
          className={` transition-all duration-300 w-[20px] h-[20px] group-hover:fill-white group-hover:dark:fill-white ${
            isOpen
              ? "rotate-[15deg] -translate-y-[2px] !animate-none !fill-white dark:fill-white"
              : "group-hover:-translate-y-[2px] group-hover:rotate-[10deg]"
          }  ${
            count
              ? "fill-white animate-pulse group-hover:animate-none"
              : "fill-lightIconFillColor dark:fill-darkIconFillColor"
          }`}
        />
      </div>
      {count ? (
        <div className="absolute bottom-full start-full w-[5px] h-[5px] rounded-full bg-lightTwo dark:bg-darkFour" />
      ) : null}
      {!navigate ? (
        <Dialog
          isOpen={isOpen}
          title={title}
          href={href}
          firstButtonHandler={firstButtonHandler}
          RenderChildElement={RenderChildElement}
        />
      ) : null}
    </div>
  );
};

const Options: React.FC<Props> = ({
  ProgressClassName = "",
  containerClassName,
  navigate = true,
}) => {
  return (
    <div
      className={`w-[310px] flex justify-around items-center mx-auto h-8 ${containerClassName}`}
    >
      <ProgressToNextLevel className={ProgressClassName} />
      <p className="w-px h-full border-s border-gray-300 border-opacity-60 hidden 480:block" />
      <ShoppingBadge className="transition-all duration-300 w-[20px] h-[20px] fill-lightIconFillColor dark:fill-darkIconFillColor hover:fill-white hover:dark:fill-white cursor-pointer" />
      <IconWithBadge
        Icon={Smile}
        navigate={navigate}
        href="/settings/my_porfile/friends_requests"
        count={10}
        title="friend requests"
        firstButtonHandler={() => {}}
        RenderChildElement={FriendRequestRenderElement}
      />
      <IconWithBadge
        Icon={Messages}
        navigate={navigate}
        href="/settings/my_porfile/messages"
        title="messages"
        firstButtonHandler={() => {}}
        RenderChildElement={MessagesRenderElement}
      />
      <IconWithBadge
        Icon={Bell}
        navigate={navigate}
        href="/settings/my_porfile/notifications"
        count={10}
        title="notifications"
        firstButtonHandler={() => {}}
        RenderChildElement={NotificationsRenderElement}
      />
      <p className="w-px h-full border-s border-gray-300 border-opacity-60 hidden 480:block" />
      <Setting className="transition-all duration-300 w-[20px] h-[20px] fill-white cursor-pointer" />
    </div>
  );
};

export default Options;
