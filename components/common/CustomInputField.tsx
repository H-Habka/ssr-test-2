import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  type: string;
  label: string;
  register: any;
  className?: string;
  error: string;
}

const CustomInputField: React.FC<Props> = ({
  label,
  type,
  register,
  className = "",
  error,
}) => {
  const [hasValue, setHasValue] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <div className={`relative w-full group ${className}`}>
      <input
        type={type}
        {...register}
        onChange={(e) => {
          setHasValue(e.target.value ? true : false);
        }}
        className={`outline-none rounded-xl border border-gray-300 dark:border-darkTwo p-4 w-full font-semibold dark:text-gray-300 text-gray-600 focus-within:border-lightOne dark:focus-within:border-darkFive  dark:!bg-darkOne ${error ? "border-red-700" : ""}`}
      />
      <p
        className={`bg-white dark:bg-darkOne w-fit px-1 transition-all duration-300 absolute  -translate-y-1/2 font-semibold text-gray-400 group-focus-within:top-0 group-focus-within:start-3 group-focus-within:text-sm pointer-events-none  ${
          hasValue ? "top-0 start-3 text-sm" : "start-5 top-1/2"
        } `}
      >
        {t(label)}
      </p>
      {error ? (
        <div
          className={`absolute w-full max-w-full rounded-xl bg-red-500 text-darkOne bg-opacity-90 dark:text-white font-bold   left-0 px-4 py-1 transition-all duration-500 opacity-0 top-1/2 group-focus-within:-translate-y-[170%] group-focus-within:opacity-100 pointer-events-none ${
            error
              ? "group-hover:-translate-y-[170%] group-hover:opacity-100 "
              : "-translate-y-1/2 "
          }`}
        >
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default CustomInputField;
