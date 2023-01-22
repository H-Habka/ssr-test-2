import React from "react";
import { NextPageWithLayout } from "@pages/_app";
import MainAppLayout from "@layouts/MainAppLayout";
import { ReactElement } from "react";

const Overview: NextPageWithLayout = () => {
  return <div>Overview</div>;
};

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <MainAppLayout>{page}</MainAppLayout>;
};
