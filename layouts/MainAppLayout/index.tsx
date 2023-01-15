import React from "react";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import { useMediaQuery } from "react-responsive";
import NavigationSidebar from "./NavigationSidebar";
import ChatsSideBar from "./ChatsSideBar";

const MainAppLayout: React.FC<{ children: any }> = ({ children }) => {
  const is680 = useMediaQuery({
    query: "(min-width:680px)",
  });
  return (
    <div className="bg-[#DEDEEA]">
      <TopBar />
      <div className="680:px-20">
        {is680 && <NavigationSidebar />}
        {children}
        {is680 && <ChatsSideBar />}
      </div>
      <BottomBar />
    </div>
  );
};

export default MainAppLayout;
