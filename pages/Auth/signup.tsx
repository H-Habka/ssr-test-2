import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import CustomCheckBox from "../../components/CustomCheckBox";
import CustomInputField from "../../components/CustomInputField";
import AuthLayout from "../../layouts/AuthLayout";
import type { NextPageWithLayout } from "../_app";
import { useMediaQuery } from "react-responsive";

const signup: NextPageWithLayout = () => {
  const sm = useMediaQuery({
    query: "(min-width: 640px)",
  });
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col items-center bg-white dark:bg-darkOne rounded-xl w-[90vw] min-w-[300px] max-w-[470px] 380:px-8 420:px-12 380:py-8 420:py-10 mt-6 py-6 px-4 mb-6 1230:py-4 1230:rounded-none relative 1230:h-screen 1230:justify-center">
      <div
        className={`absolute hidden 1230:block top-0 -translate-y-1/2 start-0 ${
          i18n.language.startsWith("en")
            ? "-translate-x-1/2"
            : "translate-x-1/2"
        }`}
      >
        <img src="/images/common/rocket.webp" alt="rocket" />
      </div>
      <p className="text-gray-700 font-bold text-2xl mb-8 dark:text-white">
        {t("create your account")}
      </p>
      <CustomInputField
        type="text"
        label="email"
        register={{}}
        className="my-3"
      />
      <CustomInputField
        type="text"
        label="userName"
        register={{}}
        className="my-3"
      />
      <CustomInputField
        type="password"
        label="password"
        register={{}}
        className="my-3"
      />
      <CustomInputField
        type="password"
        label="repeat password"
        register={{}}
        className="my-3"
      />
      <div className="flex justify-start  w-full">
        <CustomCheckBox label="send me news and updates via email" />
      </div>
      <button className="w-full flex items-center justify-center p-4 bg-lightTwo dark:bg-darkThree text-white font-semibold mt-4 rounded-xl hover:bg-opacity-80 active:bg-opacity-95 transition-all duration-300">
        {t("register now!")}
      </button>
      <div className="font-medium mt-8 w-full text-start text-sm dark:text-white">
        {t(
          "you will receive a confirmation email in your inbox with a link to activate your account"
        )}
        {". "}
        {t("if you have any problems")}
        {", "}
        <span className="text-lightTwo dark:text-darkFour font-semibold cursor-pointer hover:opacity-80 transition-all duration-300">
          {t("contact us")}
        </span>
      </div>
    </div>
  );
};

export default signup;

signup.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
