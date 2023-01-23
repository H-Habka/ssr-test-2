import { useTranslation } from "react-i18next";
interface Props {
  className?: string;
}

const rest = 40
const ProgressToNextLevel: React.FC<Props> = ({ className = "" }) => {
  const { t } = useTranslation();
  return (
    <div className={`flex flex-col w-[120px] p-2 ${className}`}>
      <div className="flex justify-between w-full text-white font-semibold text-xs mb-1">
        <p>{t("next").toUpperCase()}</p>
        <p>
          {rest} {t("EXP").toUpperCase()}
        </p>
      </div>
      <div className="w-full h-1 bg-[#23232388] rounded-2xl">
        <div className="rounded-2xl w-[60%] h-full bg-gradient-to-r from-lightTwo to-lightTwo via-lightTwo dark:from-darkThree dark:to-darkFour dark:via-darkThree" />
      </div>
    </div>
  );
};

export default ProgressToNextLevel;
