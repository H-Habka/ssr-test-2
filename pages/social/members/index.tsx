import React from "react";
import { NextPageWithLayout } from "@pages/_app";
import MainAppLayout from "@layouts/MainAppLayout";
import { ReactElement } from "react";

const Members: NextPageWithLayout = () => {
  return <div>Members</div>;
};

export default Members;

Members.getLayout = function getLayout(page: ReactElement) {
  return <MainAppLayout>{page}</MainAppLayout>;
};
