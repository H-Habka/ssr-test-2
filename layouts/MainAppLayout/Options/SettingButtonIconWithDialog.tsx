import Setting from "@public/icons/setting.svg";
import React, { useEffect, useRef, useState } from "react";
import ShoppingCardDialog from "./ShoppingCardDialog";
import { useRouter } from "next/router";
import SettingsDialog from "./SettingsDialog";

const SettingButtonIconWithDialog: React.FC<{ navigate: boolean }> = ({
  navigate,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    const clickEventListener = (e: any) => {
      if (!buttomRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.documentElement.addEventListener("click", clickEventListener);

    return () => {
      document.documentElement.removeEventListener("click", clickEventListener);
    };
  }, []);
  return (
    <div ref={buttomRef} className="relative">
      <Setting
        onClick={() => {
          if (navigate) {
            router.push("/settings");
          } else {
            setIsOpen((prev) => !prev);
          }
        }}
        className="transition-all duration-300 w-[20px] h-[20px] fill-white cursor-pointer"
      />
      {!navigate ? <SettingsDialog isOpen={isOpen} /> : null}
    </div>
  );
};

export default SettingButtonIconWithDialog;
