import React from "react";
import { NextPageWithLayout } from "@pages/_app";
import MainAppLayout from "@layouts/MainAppLayout";
import { ReactElement } from "react";

const Forums: NextPageWithLayout = () => {
  return <div>Forums</div>;
};

export default Forums;

Forums.getLayout = function getLayout(page: ReactElement) {
  return <MainAppLayout>{page}</MainAppLayout>;
};
