import React from "react";
import { NextPageWithLayout } from "@pages/_app";
import MainAppLayout from "@layouts/MainAppLayout";
import { ReactElement } from "react";

const Marketplace: NextPageWithLayout = () => {
  return <div>Marketplace</div>;
};

export default Marketplace;

Marketplace.getLayout = function getLayout(page: ReactElement) {
  return <MainAppLayout>{page}</MainAppLayout>;
};
