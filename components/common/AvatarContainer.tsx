import React from "react";

interface Props {
  imageSrc: string;
  size: "small" | "large" | "medium";
  hasStatus: boolean;
  width: number;
  height: number;
  statusType?: "online" | "offline" | "inactive";
  colorClassName?: string;
}

interface finalResultProps {
  imageSrc: string;
  size: "small" | "large" | "medium";
  hasStatus: boolean;
  widthWrapper?: boolean;
  statusType?: "online" | "offline" | "inactive";
  colorClassName?: string;
}

interface LevelContainerProps {
  level: number | string;
  width: number;
  height: number;
  size: "small" | "large" | "medium";
}

interface WrapperInterface {
  height: number;
  children: any;
  colorClassName?: string;
}

const statusTypesColor = {
  online: "bg-green-700",
  offline: "bg-red-700",
  inactive: "bg-gray-700",
};

const RelativeWrapper: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="relative w-12 h-14">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none">
        {children}
      </div>
    </div>
  );
};

const Wrapper: React.FC<WrapperInterface> = ({
  children,
  height,
  colorClassName,
}) => {
  const width = height * 1.2 * 0.866;

  return (
    <div
      style={{ width: `${width}px`, height: `${height * 1.2}px` }}
      className=" relative z-[1] flex justify-center items-center"
      dir="ltr"
    >
      <div className="z-[1]">{children}</div>
      <div
        style={{ top: "-1.6%" }}
        className="w-1/2 h-full absolute left-1/4 overflow-hidden rotate-[60deg] "
      >
        <div className="w-full h-full absolute top-0 left-0 overflow-hidden rotate-[60deg]">
          <div className="w-full h-full absolute top-0 left-0 overflow-hidden rotate-[60deg] ">
            <div className={`w-[120%] h-[120%] z-[-1] ${colorClassName}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

const LevelContainer: React.FC<LevelContainerProps> = ({
  level,
  width,
  height,
  size,
}) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: size === "small" ? "4px" : size === "medium" ? "6px" : "7px",
        insetInlineStart: size === "small" ? "3px" : "6px",
      }}
      className="absolute  z-50"
    >
      <div
        style={{ top: "-1.6%" }}
        className="w-1/2 h-full absolute left-1/4 overflow-hidden rotate-[60deg] "
      >
        <div className="w-full h-full absolute top-0 left-0 overflow-hidden rotate-[60deg]">
          <div className="w-full h-full absolute top-0 left-0 overflow-hidden rotate-[60deg]">
            <div
              style={{ top: `23%`, width: `100%`, height: "55%" }}
              className={`absolute rotate-[180deg] bg-[#45437F] dark:bg-darkFive text-white flex justify-center items-center  font-bold ${
                size === "small"
                  ? "text-[9px]"
                  : size === "medium"
                  ? "text-sm"
                  : "text-base"
              }`}
            >
              {level}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AvatarContainer: React.FC<Props> = ({
  width,
  height,
  size,
  imageSrc,
  hasStatus,
  statusType = "online",
  colorClassName,
}) => {
  let levelHeight, levelWidth;
  if (size === "small") {
    levelHeight = 34;
  } else if (size === "large") {
    levelHeight = 70;
  } else {
    levelHeight = 60;
  }
  levelWidth = 0.866 * levelHeight;
  return (
    <div
      style={{ height: `${height}px`, width: `${width}px` }}
      className={`relative`}
    >
      {hasStatus ? (
        <div
          style={{ top: "24px", insetInlineStart: "18px" }}
          className={`absolute left-0 w-3 h-3 rounded-full z-50 border-2 border-white dark:border-darkOne ${statusTypesColor[statusType]}`}
        />
      ) : null}
      <div
        style={{
          bottom:
            size === "small" ? "10px" : size === "medium" ? "33px" : "44px",
          insetInlineEnd:
            size === "small" ? "10px" : size === "medium" ? "26px" : "36px",
        }}
        className="absolute "
      >
        <Wrapper height={levelHeight} colorClassName={colorClassName}>
          <LevelContainer
            height={levelHeight}
            width={levelWidth}
            level={20}
            size={size}
          />
        </Wrapper>
      </div>

      <div
        style={{ top: "-1.6%" }}
        className="w-1/2 h-full absolute left-1/4 overflow-hidden rotate-[60deg] "
      >
        <div
          className={`six h-1/4 absolute top-1/2 -translate-y-1/2 z-[1] bg-[#eeeeee] dark:bg-darkTwo flex items-end ${
            size === "large" ? "w-2" : size === "medium" ? "w-[6px]" : "w-[3px]"
          }`}
        >
          <div className="w-full h-1/4 bg-gradient-to-t to-[#45ddfe]  dark:from-[#b1f35f] dark:to-[#c7f962] from-[#49c9fe]" />
          <div
            className={`${
              size === "large" ? "h-2" : size === "medium" ? "h-[6px]" : "h-1"
            } w-full  absolute top-0 z-[1000] bg-[#eeeeee] dark:bg-darkTwo `}
          />
        </div>
        <div
          className={`three  h-1/4 absolute top-1/2 -translate-y-1/2  z-[1] bg-[#eeeeee] dark:bg-darkTwo right-0 ${
            size === "large" ? "w-2" : size === "medium" ? "w-[6px]" : "w-[3px]"
          }`}
        >
          <div className="w-full h-full bg-gradient-to-b to-[#549afc]  dark:from-[#67dc55] dark:to-[#7de358] from-[#5983fb]" />
        </div>
        <div className="w-full h-full absolute top-0 left-0 overflow-hidden rotate-[60deg]">
          <div
            className={`one  h-1/4 absolute top-1/2 -translate-y-1/2  z-[1] bg-[#eeeeee] dark:bg-darkTwo flex items-end ${
              size === "large"
                ? "w-2"
                : size === "medium"
                ? "w-[6px]"
                : "w-[3px]"
            }`}
          >
            <div className="w-full h-full bg-gradient-to-t to-[#5d71fb]  dark:from-[#41d04f] dark:to-[#50d551] from-[#615dfa]" />
            <div
              className={`w-full  absolute bottom-0 z-[1000] bg-[#eeeeee] dark:bg-darkTwo ${
                size === "large" ? "h-2" : size === "medium" ? "h-[6px]" : "h-1"
              }`}
            />
          </div>
          <div
            className={`four h-1/4 absolute top-1/2 -translate-y-1/2  z-[1] bg-[#eeeeee] dark:bg-darkTwo right-0 ${
              size === "large"
                ? "w-2"
                : size === "medium"
                ? "w-[6px]"
                : "w-[3px]"
            }`}
          >
            <div className="w-full h-full bg-gradient-to-b to-[#4eb2fd]  dark:from-[#7de358] dark:to-[#99eb5c] from-[#549afc]" />
          </div>
          <div className="w-full h-full absolute top-0 left-0 overflow-hidden rotate-[60deg] ">
            <div
              className={`two h-1/4 absolute top-1/2 -translate-y-1/2  z-[1] bg-[#eeeeee] dark:bg-darkTwo flex items-end ${
                size === "large"
                  ? "w-2"
                  : size === "medium"
                  ? "w-[6px]"
                  : "w-[3px]"
              }`}
            >
              <div className="w-full h-full bg-gradient-to-t to-[#5983fb]  dark:from-[#50d551] dark:to-[#67dc55] from-[#5d71fb]" />
            </div>
            <div
              className={`five h-1/4 absolute top-1/2 -translate-y-1/2  z-[1] bg-[#eeeeee] dark:bg-darkTwo right-0 ${
                size === "large"
                  ? "w-2"
                  : size === "medium"
                  ? "w-[6px]"
                  : "w-[3px]"
              }`}
            >
              <div className="w-full h-full bg-gradient-to-b to-[#49c9fe]  dark:from-[#99eb5c] dark:to-[#b1f35f] from-[#4eb2fd]" />
            </div>

            <div
              style={{ top: `23%`, width: `100%`, height: "55%" }}
              className={`absolute rotate-[180deg] ${colorClassName} flex justify-center items-center`}
            >
              <div
                style={{
                  width: `${
                    size === "large"
                      ? "103.8px"
                      : size === "medium"
                      ? "88px"
                      : "35px"
                  }`,
                  height: `${
                    size === "large"
                      ? "60px"
                      : size === "medium"
                      ? "49px"
                      : "20px"
                  }`,
                  top: `${
                    size === "large"
                      ? "3.5px"
                      : size === "medium"
                      ? "3px"
                      : "1px"
                  }`,
                  insetInlineStart: `${
                    size === "large"
                      ? "1px"
                      : size === "medium"
                      ? "-0.6px"
                      : "0px"
                  }`,
                }}
                className=" relative z-[1] flex justify-center items-center scale-[1.6]"
              >
                <div
                  style={{ top: "-1.6%" }}
                  className="w-1/2 h-full absolute left-1/4 overflow-hidden rotate-[60deg] "
                >
                  <div className="w-full h-full absolute top-0 left-0 overflow-hidden rotate-[60deg]">
                    <div className="w-full h-full absolute top-0 left-0 overflow-hidden rotate-[60deg] ">
                      <div className="w-[120%] h-[120%] bg-white dark:bg-darkOne z-[1] rotate-[180deg]">
                        <img
                          onClick={() => alert("test")}
                          style={{ width: `100%`, height: `100%` }}
                          src="/images/profile.jpg"
                          alt="avatar"
                          className="object-cover cursor-pointer pointer-events-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AvatarContainerWithWrapper: React.FC<finalResultProps> = ({
  size,
  imageSrc,
  hasStatus,
  widthWrapper = false,
  statusType = "online",
  colorClassName = "bg-white dark:bg-darkOne",
}) => {
  let height, width;
  if (size === "small") {
    height = 90;
  } else if (size === "large") {
    height = 250;
  } else {
    height = 200;
  }
  width = 0.866 * height;
  if (widthWrapper) {
    return (
      <RelativeWrapper>
        <Wrapper height={height} colorClassName={colorClassName}>
          <AvatarContainer
            width={width}
            height={height}
            imageSrc={imageSrc}
            hasStatus={hasStatus}
            size={size}
            statusType={statusType}
            colorClassName={colorClassName}
          />
        </Wrapper>
      </RelativeWrapper>
    );
  }
  return (
    <Wrapper height={height} colorClassName={colorClassName}>
      <AvatarContainer
        width={width}
        height={height}
        imageSrc={imageSrc}
        hasStatus={hasStatus}
        size={size}
        statusType={statusType}
        colorClassName={colorClassName}
      />
    </Wrapper>
  );
};

export default AvatarContainerWithWrapper;
