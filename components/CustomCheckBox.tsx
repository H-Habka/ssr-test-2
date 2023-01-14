import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  label: string;
}

const CustomCheckBox: React.FC<Props> = ({ label }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const { t,i18n } = useTranslation();
  return (
    <div
      onClick={() => setChecked((prev) => !prev)}
      className="flex items-center cursor-pointer "
    > 
      <div
        className={`w-6 h-6 rounded-[6px] me-2 border dark:border-darkTwo relative transition-all duration-300 ${
          checked && "bg-lightTwo dark:bg-darkThree shadow-5px shadow-lightTwo dark:shadow-darkThree"
        }`}
      >
        <div
          className={`absolute w-1 h-[14px] bg-white rotate-[45deg] top-1/2 start-1/2 -translate-y-1/2 ${
            checked ? "opacity-100" : "opacity-0"
          } ${i18n.language.startsWith("en") ? "-translate-x-1/2" :"translate-x-1/2"} transition-all duration-300`}
        />
        <div
          className={`absolute w-1 h-[14px] bg-white rotate-[-45deg] top-1/2 start-1/2  -translate-y-1/2 ${
            checked ? "opacity-100" : "opacity-0"
          } ${i18n.language.startsWith("en") ? "-translate-x-1/2" :"translate-x-1/2"} transition-all duration-300`}
        />
      </div>
      <p className="font-bold text-gray-900 dark:text-white">{t(label)}</p>
    </div>
  );
};

export default CustomCheckBox;
