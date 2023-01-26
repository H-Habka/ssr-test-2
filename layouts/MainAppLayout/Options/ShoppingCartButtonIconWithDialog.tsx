import React, { useEffect, useRef, useState } from "react";
import ShoppingBadge from "@public/icons/market.svg";
import ShoppingCardDialog from "./ShoppingCardDialog";
import { useRouter } from "next/router";

const ShoppingCartButtonIconWithDialog: React.FC<{ navigate: boolean }> = ({
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
      <ShoppingBadge
        onClick={() => {
          if (navigate) {
            router.push("/social/marketplace");
          } else {
            setIsOpen((prev) => !prev);
          }
        }}
        className={`transition-all duration-300 w-[20px] h-[20px] fill-lightIconFillColor dark:fill-darkIconFillColor hover:fill-white hover:dark:fill-white cursor-pointer ${
          isOpen ? "!fill-white" : ""
        }`}
      />
      {!navigate ? <ShoppingCardDialog isOpen={isOpen} /> : null}
    </div>
  );
};

export default ShoppingCartButtonIconWithDialog;
