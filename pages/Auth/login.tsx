import React, { ReactElement } from "react"
import { useTranslation } from "react-i18next"
import CustomCheckBox from "@components/common/CustomCheckBox"
import CustomInputField from "@components/common/CustomInputField"
import AuthLayout from "@layouts/AuthLayout"
// import type { NextPageWithLayout } from "@pages/_app"
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im"
import { AiFillInstagram } from "react-icons/ai"
import { useMediaQuery } from "react-responsive"
import { api } from "@api/index"
import { useMutation } from "react-query"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { useUserStore } from "@store/userStore"
import { toast } from "react-hot-toast"
import CustomButton from "@components/common/CustomButton"

const Login = () => {
  const sm = useMediaQuery({ query: "(min-width: 640px)" })
  const { register, handleSubmit } = useForm()
  const { t } = useTranslation()
  const { mutate, isLoading, error, isSuccess, data } = useMutation(api.auth.login)
  const router = useRouter()
  const setUser = useUserStore((state) => state.setUser)
  const onSubmit = (data: any) => {
    mutate(data)
  }

  if (isSuccess) {
    setUser(data?.data?.data)
    router.push("/social/newsfeed")
  }

  let err: any = error
  const validationErrors = err?.response?.data?.errors
  const globalError = err?.response?.data?.message

  if (globalError) {
    toast.dismiss()
    toast.error(globalError)
  }

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col items-center bg-white dark:bg-darkOne rounded-xl w-[90vw] min-w-[300px] max-w-[470px] 380:px-8 420:px-12 380:py-8 420:py-14 mt-6 py-6 px-4 mb-6 1230:mb-0 1230:mt-0 1230:h-screen 1230:justify-center 1230:rounded-none">
        <div
          className={`absolute hidden 1230:block top-0 -translate-y-1/2 start-0 ltr:-translate-x-1/2 rtl:translate-x-1/2`}>
          <img src="/images/common/rocket.webp" alt="rocket" />
        </div>
        <p className="text-gray-700 font-bold text-2xl mb-8 dark:text-white">{t("account login")}</p>
        <CustomInputField
          type="text"
          label="userName or email"
          register={register("emailOrUsername")}
          className="my-4"
          error={validationErrors?.emailOrUsername}
        />
        <CustomInputField
          type="password"
          label="password"
          register={register("password")}
          className="my-4"
          error={validationErrors?.password}
        />
        <div className="flex justify-between  w-full mt-4">
          <CustomCheckBox label="remember me" />
          <p className="font-bold text-gray-400 cursor-pointer hover:opacity-80">{t("forget password!")}</p>
        </div>
        <div className="1230:mt-8 w-full mt-4 ">
          <CustomButton isLoading={isLoading} variant="one">
            {isLoading ? `${t("loading")}...` : t("login to your account")}
          </CustomButton>
        </div>
        <div className="mt-6 1230:mt-12 border-b relative w-full">
          <p
            className={`text-center font-black text-2xl 640:text-sm 640:font-medium whitespace-nowrap bg-white dark:bg-darkOne dark:text-white absolute bottom-0 translate-y-1/2 start-1/2 w-fit px-2 ltr:-translate-x-1/2 rtl:translate-x-1/2`}>
            {sm ? t("login with your social account") : t("or")}
          </p>
        </div>
        <div className="flex gap-2 items-center justify-between mt-8">
          <div
            title="facebook"
            className="transition-all duration-300 hover:-translate-y-2 cursor-pointer w-10 h-10 rounded-xl bg-[#3763D2] flex justify-center items-center">
            <ImFacebook className="w-4 h-4 text-white" />
          </div>
          <div
            title="twitter"
            className="transition-all duration-300 hover:-translate-y-2 cursor-pointer w-10 h-10 rounded-xl bg-[#1ABCFF] flex justify-center items-center">
            <ImTwitter className="w-4 h-4 text-white" />
          </div>
          <div
            title="instagram"
            className="transition-all duration-300 hover:-translate-y-2 cursor-pointer w-10 h-10 rounded-xl bg-[#cd486b] flex justify-center items-center">
            <AiFillInstagram className="w-4 h-4 text-white" />
          </div>
          <div
            title="youtube"
            className="transition-all duration-300 hover:-translate-y-2 cursor-pointer w-10 h-10 rounded-xl bg-[#FD434F] flex justify-center items-center">
            <ImYoutube className="w-4 h-4 text-white" />
          </div>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Login

// Login.getLayout = function getLayout(page: ReactElement) {
//   return <AuthLayout>{page}</AuthLayout>
// }
