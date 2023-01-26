import CustomButton from "@components/common/CustomButton";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import CancelIcon from "@public/icons/cancel.svg";

interface ShoppingCardDialogProps {
  isOpen: boolean;
}
interface CartItemProps {}

const CartItem: React.FC<CartItemProps> = () => {
  return (
    <div className="flex justify-between px-6 gap-4 h-[100px] items-center">
      <div className="w-16 h-16 rounded-lg overflow-hidden">
        <img
          src="/images/01.jpg"
          alt="cartItem"
          className="object-cover w-16 h-16"
        />
      </div>
      <div className="grow flex flex-col justify-around h-full py-2">
        <div className="">
          <p className="text-sm font-bold text-gray-600  dark:text-gray-100">
            Twitch Stream UI Pack
          </p>
          <p className="text-[13px] mt-[-3px] text-gray-600  dark:text-gray-200">Regular License</p>
        </div>
        <p dir="ltr" className="text-[13px] font-bold text-gray-600  dark:text-gray-100 w-fit">
          <span className="text-lightTwo dark:text-darkFour">$</span>{" "}
          <span>12.00</span> <span>x</span> <span>1</span>
        </p>
      </div>
      <div className="h-1/2">
        <CancelIcon className="fill-gray-300 dark:fill-gray-600 dark:hover:fill-redColor hover:fill-redColor cursor-pointer  transition-all duration-300" />
      </div>
    </div>
  );
};

const ShoppingCardDialog: React.FC<ShoppingCardDialogProps> = ({ isOpen }) => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div
      className={`w-[380px] h-[520px] bg-lightThree dark:bg-darkOne rounded-xl absolute end-0 top-full transition-all duration-700 flex flex-col justify-between ${
        isOpen
          ? "opacity-100 translate-y-3 pointer-events-auto"
          : "opacity-0 -translate-y-8 pointer-events-none"
      }`}
    >
      <div className="bg-white dark:bg-darkOne h-20 rounded-t-xl flex items-center px-8 ">
        <p className="font-bold text-darkTwo dark:text-white">
          <span>{t("shopping cart")}</span>{" "}
          <span className="text-lightTwo dark:text-darkFour">5</span>
        </p>
      </div>
      <div className="h-[425px] bg-white dark:bg-darkOne overflow-y-auto scrollbar-custom-thin">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="font-bold flex items-center h-20 bg-white px-6 justify-between border-y border-gray-200 text-gray-700 dark:bg-darkOne dark:border-gray-700 dark:text-gray-300">
        <p className=" ms-12">{t("total")} :</p>
        <p className="">
          <span className="text-lightTwo dark:text-darkFour">$</span>{" "}
          <span>60.00</span>
        </p>
      </div>
      <div className="h-[140px] px-7 flex gap-6 items-center justify-between bg-lightThree rounded-b-xl dark:bg-darkSix">
        <div className="flex-1">
          <CustomButton size="small" variant="one">
            {t("shopping cart")}
          </CustomButton>
        </div>
        <div className="flex-1">
          <CustomButton size="small" variant="two">
            {t("go to checkout")}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCardDialog;
