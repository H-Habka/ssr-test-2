import React, { ReactElement } from "react"
import { useTranslation } from "react-i18next"
import CustomCheckBox from "@components/common/CustomCheckBox"
import CustomInputField from "@components/common/CustomInputField"
import AuthLayout from "@layouts/AuthLayout"
import { useMutation } from "react-query"
import { api } from "@api/index"
import { useForm } from "react-hook-form"
import { useUserStore } from "store/userStore"
import CustomButton from "@components/common/CustomButton"

const Signup = () => {
  const { register, handleSubmit } = useForm()
  const { mutate, isLoading, error, data, isSuccess } = useMutation(api.auth.register)
  const { t, i18n } = useTranslation()
  const onSubmit = (data: any) => {
    mutate(data)
  }
  const setUser = useUserStore((state) => state.setUser)

  let validationErrors: any = error
  validationErrors = validationErrors?.response?.data?.errors

  if (isSuccess) {
    setUser(data?.data?.data)
  }

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center bg-white dark:bg-darkOne rounded-xl w-[90vw] min-w-[300px] max-w-[470px] 380:px-8 420:px-12 380:py-8 420:py-10 mt-6 py-6 px-4 mb-6 1230:py-4 1230:rounded-none relative 1230:h-screen 1230:justify-center">
        <div
          className={`absolute hidden 1230:block top-0 -translate-y-1/2 start-0 ltr:-translate-x-1/2 rtl:translate-x-1/2"`}>
          <img src="/images/common/rocket.webp" alt="rocket" />
        </div>
        <p className="text-gray-700 font-bold text-2xl mb-8 dark:text-white">{t("create your account")}</p>
        <CustomInputField
          type="text"
          label="email"
          register={{ ...register("email") }}
          className="my-3"
          error={validationErrors?.email}
        />
        <CustomInputField
          type="text"
          label="userName"
          register={{ ...register("userName") }}
          className="my-3"
          error={validationErrors?.userName}
        />
        <CustomInputField
          type="password"
          label="password"
          register={{ ...register("password") }}
          className="my-3"
          error={validationErrors?.password}
        />
        <CustomInputField
          type="password"
          label="repeat password"
          register={{ ...register("confirmPassword") }}
          className="my-3"
          error={validationErrors?.confirmPassword}
        />
        <div className="flex justify-start  w-full">
          <CustomCheckBox label="send me news and updates via email" />
        </div>
        <div className="mt-4 w-full">
          <CustomButton variant="two" isLoading={isLoading}>
            {isLoading ? `${t("loading")}...` : t("register now!")}
          </CustomButton>
        </div>
        <div className="font-medium mt-8 w-full text-start text-sm dark:text-white">
          {t("you will receive a confirmation email in your inbox with a link to activate your account")}
          {". "}
          {t("if you have any problems")}
          {", "}
          <span className="text-lightTwo dark:text-darkFour font-semibold cursor-pointer hover:opacity-80 transition-all duration-300">
            {t("contact us")}
          </span>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Signup
