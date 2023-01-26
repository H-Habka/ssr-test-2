import { useGlobalStore } from "@store/globalStore";
import React from "react";

const SettingsLayout: React.FC<{ children: any }> = ({ children }) => {
  const darkMode = useGlobalStore((state) => state.darkMode);
  return (
    <div className="680:p-8 py-6 px-2">
      <div
        style={{
          backgroundImage: darkMode
            ? "url(/images/dark/banner-bg.webp)"
            : "url(/images/light/banner-bg.webp)",
        }}
        className="960:h-[160px] h-[80px] rounded-xl bg-cover"
      >
        <img
          src="/images/common/accounthub-icon.webp"
          alt="accounthub"
          className="-translate-y-[12px] h-[95px] 960:h-auto"
        />
      </div>
      <div className="flex flex-col">
        <div></div>
        {children}
      </div>
    </div>
  );
};

export default SettingsLayout;
