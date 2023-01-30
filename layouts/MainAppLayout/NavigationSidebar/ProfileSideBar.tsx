import AvatarContainerWithWrapper from "@components/common/AvatarContainer";
import React from "react";
import { useTranslation } from "react-i18next";
import { navigationSidebarIcons } from "@constants/index";
import { NavItemProps } from "@constants/index";
import { useRouter } from "next/router";
const badgesImages = [
  "/images/badges/age-s.png",
  // "/images/badges/blank-s.png",
  "/images/badges/bronzec-s.png",
  "/images/badges/caffeinated-s.png",
  "/images/badges/collector-s.png",
  "/images/badges/gold-s.png",
  "/images/badges/goldc-s.png",
  "/images/badges/mightiers-s.png",
  "/images/badges/ncreature-s.png",
  "/images/badges/phantom-s.png",
  "/images/badges/scientist-s.png",
];

const CountContainer: React.FC<{
  title: string;
  count: string | number;
}> = ({ count, title }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center text-sm">
      <p className="font-extrabold text-gray-800 dark:text-gray-100">{count}</p>
      <p className="font-bold text-gray-500 dark:text-gray-500">
        {t(title).toLocaleUpperCase()}
      </p>
    </div>
  );
};

const NavItem: React.FC<NavItemProps> = ({ Icon, href, title }) => {
  const router = useRouter();
  const isActiveRoute = router?.pathname === href;
  const { t } = useTranslation();
  return (
    <div
      onClick={() => router.push(href)}
      className={`w-full flex items-center group shadow-gray-900  cursor-pointer py-3 transition-all duration-300 px-3 rounded-xl  ${
        isActiveRoute
          ? "bg-lightTwo dark:bg-darkThree"
          : "hover:shadow-12-9px hover:dark:bg-darkTwo"
      }`}
    >
      <Icon
        className={` me-6   ${
          isActiveRoute
            ? "fill-white"
            : "fill-[#ADAFCA] group-hover:fill-lightTwo dark:group-hover:fill-darkFour"
        }`}
      />
      <p
        className={`font-bold transition-all duration-300  text-sm  ${
          isActiveRoute
            ? "text-white"
            : "text-gray-600 dark:text-gray-100 group-hover:ps-4"
        }`}
      >
        {t(title)}
      </p>
    </div>
  );
};

const ProfileSideBar = () => {
  const { i18n } = useTranslation();
  return (
    <div className="w-full flex flex-col items-center overflow-y-auto">
      <div
        style={{
          backgroundImage: "url(/images/01.jpg)",
          backgroundPosition: "40% 30%",
        }}
        className="w-full h-[75px] relative  bg-gray-100 dark:bg-darkOne bg-cover "
      >
        <div
          className={`absolute bottom-0 start-1/2 translate-y-3/4  w-fit ltr:-translate-x-1/2 rtl:translate-x-1/2`}
        >
          <AvatarContainerWithWrapper
            size="medium"
            imageSrc=""
            hasStatus={false}
            withWrapper={true}
          />
        </div>
      </div>
      <div className="flex flex-col  items-center mt-[70px]">
        <p className="font-extrabold  text-lg dark:text-white">Hossien Habka</p>
        <p className="dark:text-gray-300 text-gray-600 text-[12px] hover:text-lightTwo dark:hover:text-darkThree cursor-pointer font-bold">
          {"hossien.habka1@gmail.com".toUpperCase()}
        </p>
      </div>
      <div className="flex px-6 gap-[6px] mt-6">
        {badgesImages.slice(0, 5).map((image) => (
          <img src={image} alt="badge" />
        ))}
      </div>
      <div className="flex items-center mt-6 gap-4">
        <CountContainer title="posts" count={930} />
        <p className="w-[1px] h-[25px] border-s border-gray-300 dark:border-gray-700 " />
        <CountContainer title="friends" count={82} />
        <p className="w-[1px] h-[25px] border-s border-gray-300 dark:border-gray-700 " />
        <CountContainer title="visits" count="5.7K" />
      </div>
      <div className="w-full px-4 gap-3 my-6 flex flex-col">
        {navigationSidebarIcons.map((item: NavItemProps) => (
          <NavItem key={item.href} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProfileSideBar;
