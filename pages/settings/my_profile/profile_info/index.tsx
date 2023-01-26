import React from "react";
import { NextPageWithLayout } from "@pages/_app";
import MainAppLayout from "@layouts/MainAppLayout";
import { ReactElement } from "react";
import SettingsLayout from "@layouts/SettingLayout";

const ProfileInfo: NextPageWithLayout = () => {
  return <div className="">test</div>;
};

export default ProfileInfo;

ProfileInfo.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainAppLayout>
      <SettingsLayout>{page}</SettingsLayout>
    </MainAppLayout>
  );
};
