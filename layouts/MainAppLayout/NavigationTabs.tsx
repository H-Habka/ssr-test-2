import React from "react";
import { useTranslation } from "react-i18next";
interface Props {
  containerClassName?: string;
}

const NavigationTabs: React.FC<Props> = ({ containerClassName }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`w-[290px] flex items-center justify-around font-semibold text-white text-sm ${containerClassName}`}
    >
      <p>{t("home")}</p>
      <p>{t("careers")}</p>
      <p>{t("faqs")}</p>
      <div>...</div>
    </div>
  );
};

export default NavigationTabs;
