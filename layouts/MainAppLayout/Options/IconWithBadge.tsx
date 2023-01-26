import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import Dialog from "./Dialog";

interface IconWithBadgeProps {
  Icon: IconType;
  navigate?: boolean;
  href: string;
  count?: string | number;
  title: string;
  firstButtonHandler: () => void;
  RenderChildElement: any;
}

const IconWithBadge: React.FC<IconWithBadgeProps> = ({
  Icon,
  navigate = true,
  href,
  count = 0,
  title,
  firstButtonHandler,
  RenderChildElement,
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
      <div
        onClick={() => {
          if (navigate) {
            router.push(href);
          } else {
            setIsOpen((prev) => !prev);
          }
        }}
        className="group cursor-pointer"
      >
        <Icon
          className={` transition-all duration-300 w-[20px] h-[20px] group-hover:fill-white group-hover:dark:fill-white ${
            isOpen
              ? "rotate-[15deg] -translate-y-[2px] !animate-none !fill-white dark:fill-white"
              : "group-hover:-translate-y-[2px] group-hover:rotate-[10deg]"
          }  ${
            count
              ? "fill-white animate-pulse group-hover:animate-none"
              : "fill-lightIconFillColor dark:fill-darkIconFillColor"
          }`}
        />
      </div>
      {count ? (
        <div className="absolute bottom-full start-full w-[5px] h-[5px] rounded-full bg-lightTwo dark:bg-darkFour" />
      ) : null}
      {!navigate ? (
        <Dialog
          isOpen={isOpen}
          title={title}
          href={href}
          firstButtonHandler={firstButtonHandler}
          RenderChildElement={RenderChildElement}
        />
      ) : null}
    </div>
  );
};

export default IconWithBadge
