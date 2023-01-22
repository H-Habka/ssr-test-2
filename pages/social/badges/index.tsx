import React from "react";
import { NextPageWithLayout } from "@pages/_app";
import MainAppLayout from "@layouts/MainAppLayout";
import { ReactElement } from "react";

const Badges: NextPageWithLayout = () => {
  return <div>Badges</div>;
};

export default Badges;

Badges.getLayout = function getLayout(page: ReactElement) {
  return <MainAppLayout>{page}</MainAppLayout>;
};
