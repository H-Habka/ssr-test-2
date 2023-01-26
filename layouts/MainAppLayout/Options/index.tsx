import React, { useState, useRef, useEffect } from "react";
import ProgressToNextLevel from "../ProgressToNextLevel";
import Bell from "@public/icons/bell.svg";
import Messages from "@public/icons/messages.svg";
import Smile from "@public/icons/smile.svg";
import IconWithBadge from "./IconWithBadge";
import FriendRequestRenderElement from "./FriendRequestRenderElement";
import MessagesRenderElement from "./MessagesRenderElement";
import NotificationsRenderElement from "./NotificationsRenderElement";
import SettingButtonIconWithDialog from "./SettingButtonIconWithDialog";
import ShoppingCartButtonIconWithDialog from "./ShoppingCartButtonIconWithDialog";

interface Props {
  ProgressClassName?: string;
  containerClassName?: string;
  navigate?: boolean;
}

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
      <ShoppingCartButtonIconWithDialog  navigate={navigate}/>
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
      <SettingButtonIconWithDialog navigate={navigate}/>
    </div>
  );
};

export default Options;
