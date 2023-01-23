import React from "react";
import ProgressToNextLevel from "./ProgressToNextLevel";
import Bell from "@public/icons/bell.svg";
import ShoppingBadge from "@public/icons/market.svg";
import Messages from "@public/icons/messages.svg";
import Setting from "@public/icons/setting.svg";
import Smile from "@public/icons/smile.svg";
import { IconType } from "react-icons/lib";

export const topAndBottomBarOptionsIcons = [
  { href: "/social/porfile/cart", Icon: ShoppingBadge },
  { href: "/social/porfile/friends", Icon: Smile },
  { href: "/social/porfile/messages", Icon: Messages },
  { href: "/social/porfile/notification", Icon: Bell },
  { href: "/social/porfile/settings", Icon: Setting },
];

interface Props {
  ProgressClassName?: string;
  containerClassName?: string;
  navigate?: boolean;
}
interface IconWithBadgeProps {
  Icon: IconType;
  navigate?: boolean;
  href: string;
  contentSize?: string | number;
}

const IconWithBadge: React.FC<IconWithBadgeProps> = ({
  Icon,
  navigate = true,
  href,
  contentSize = 0,
}) => {
  return (
    <div>
      <Icon className="transition-all duration-300 w-[20px] h-[20px] fill-lightIconFillColor dark:fill-darkIconFillColor hover:fill-white hover:dark:fill-white cursor-pointer" />
    </div>
  );
};

const Options: React.FC<Props> = ({
  ProgressClassName = "",
  containerClassName,
  navigate=true,
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
        href="/social/porfile/friends"
      />
      <IconWithBadge
        Icon={Messages}
        navigate={navigate}
        href="/social/porfile/messages"
      />
      <IconWithBadge
        Icon={Bell}
        navigate={navigate}
        href="/social/porfile/notification"
      />
      <p className="w-px h-full border-s border-gray-300 border-opacity-60 hidden 480:block" />
      <Setting className="transition-all duration-300 w-[20px] h-[20px] fill-white cursor-pointer" />
    </div>
  );
};

export default Options;
