import AvatarContainerWithWrapper from "@components/common/AvatarContainer";
import MessageIcon from "@public/icons/message.svg";
import LikeIcon from "@public/icons/like.svg";

interface NotificationsRenderElementProps {}

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

export default NotificationsRenderElement;
