import React from "react";

interface Props {
  isLoading?: boolean;
  children: any;
  variant: "one" | "two";
  size?: "small" | "medium" | "large";
}

const CustomButton: React.FC<Props> = ({
  isLoading = false,
  children,
  variant,
  size = "medium",
}) => {
  const variants = {
    one: "bg-lightOne dark:bg-darkFive dark:shadow-darkFive text-white shadow-lightOne",
    two: "shadow-lightTwo dark:shadow-darkThree bg-lightTwo dark:bg-darkThree text-white",
  };

  const sizes = {
    small: "p-3 text-sm shadow-5px",
    medium: "p-4 shadow-10px",
    large: "",
  };
  return (
    <button
      disabled={isLoading}
      className={`w-full flex items-center justify-center font-semibold rounded-xl hover:bg-opacity-80 active:bg-opacity-95 transition-all duration-300  disabled:shadow-none disabled:brightness-75 ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
