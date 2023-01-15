import { NextPageWithLayout } from "@pages/_app";
import MainAppLayout from "@layouts/MainAppLayout";
import { ReactElement } from "react";
import Loader from "@components/common/Loader";

const Social: NextPageWithLayout = () => {
  return (
    <div>
      <div className="w-[60px] h-10">
        <Loader />
      </div>
    </div>
  );
};

export default Social;

Social.getLayout = function getLayout(page: ReactElement) {
  return <MainAppLayout>{page}</MainAppLayout>;
};
