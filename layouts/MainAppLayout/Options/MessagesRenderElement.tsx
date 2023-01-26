import AvatarContainerWithWrapper from "@components/common/AvatarContainer";

interface MessagesRenderElementProps {}

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

export default MessagesRenderElement;
