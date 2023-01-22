import React from "react";
import { NextPageWithLayout } from "@pages/_app";
import MainAppLayout from "@layouts/MainAppLayout";
import { ReactElement } from "react";
import AvatarContainer from "@components/common/AvatarContainer";

const Newsfeed: NextPageWithLayout = () => {
  return (
    <div className="px-6">
      <div
        style={{
          backgroundImage: "url(/images/01.jpg)",
          backgroundPosition: "40% 30%",
        }}
        className="flex relative justify-center items-center flex-col gap-4 bg-gray-100 dark:bg-darkOne h-[300px] mb-40 bg-cover mt-6 rounded-t-2xl"
      >
        <div className="absolute bottom-0 start-1/2 translate-y-1/2 -translate-x-1/2 w-fit ">
          <AvatarContainer
            size="large"
            imageSrc=""
            hasStatus={false}
            widthWrapper={true}
          />
        </div>
      </div>
      <div className="bg-white dark:bg-darkOne h-[400px] w-full"></div>
    </div>
  );
};

export default Newsfeed;

Newsfeed.getLayout = function getLayout(page: ReactElement) {
  return <MainAppLayout>{page}</MainAppLayout>;
};
