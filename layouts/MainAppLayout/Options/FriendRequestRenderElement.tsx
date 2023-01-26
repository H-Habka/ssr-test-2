import AvatarContainerWithWrapper from "@components/common/AvatarContainer";
import AddFriendIcon from "@public/icons/add-friend.svg";
import RejectFriendIcon from "@public/icons/reject-friend.svg";

interface FriendRequestRenderElementProps {}

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

export default FriendRequestRenderElement;
