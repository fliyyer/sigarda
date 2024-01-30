import React, { useState } from "react";
import {
  DashboardIcon,
  HideSidebar,
  LargeDashboard,
  LargeHideSidebar,
  MainLogo,
} from "../../assets/icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isSimple, setIsSimple] = useState(false);
  const navList = [
    {
      icon: DashboardIcon,
      largeIcon: LargeDashboard,
      navTitle: "Dashboard",
      navTo: "dashboard",
    },
    {
      icon: DashboardIcon,
      largeIcon: LargeDashboard,
      navTitle: "Monitoring",
      navTo: "monitoring",
    },
    {
      icon: DashboardIcon,
      largeIcon: LargeDashboard,
      navTitle: "Pengukuran",
      navTo: "pengukuran",
    },
    {
      icon: DashboardIcon,
      largeIcon: LargeDashboard,
      navTitle: "Validasi ISR",
      navTo: "validasi-isr",
    },
    {
      icon: DashboardIcon,
      largeIcon: LargeDashboard,
      navTitle: "Dokumen",
      navTo: "dokumen",
    },
    {
      icon: DashboardIcon,
      largeIcon: LargeDashboard,
      navTitle: "Akun",
      navTo: "akun",
    },
  ];
  const [navMenu, setNavMenu] = useState(navList);
  const [searchMenu, setSearchMenu] = useState("");
  const changeNavMenus = (e) => {
    const { value } = e.target;
    const filteredMenus = navList.filter((val) => val.navTitle.toLowerCase().includes(value.toLowerCase()))
    setNavMenu(filteredMenus)
    setSearchMenu(value);
  };
  return (
    <>
      {!isSimple ? (
        <div className="w-1/6 min-h-screen py-4">
          <div className="bg-slate-100 h-full rounded-3xl">
            <div className="p-6 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-y-6">
                <div className="flex items-center justify-between">
                  <MainLogo />
                  <div onClick={() => setIsSimple(true)}>
                    <HideSidebar />
                  </div>
                </div>
                <div className="flex bg-white items-center px-2 py-1 gap-2 text-sm">
                  <div>
                    <DashboardIcon />
                  </div>
                  <input
                    placeholder="Search"
                    className="w-full bg-transparent outline-none"
                    type="text"
                    value={searchMenu}
                    onChange={changeNavMenus}
                  />
                </div>
                <div className="py-4">
                  {navMenu.map((val) => (
                    <NavLink
                      to={val.navTo}
                      className={({ isActive }) =>
                        `${isActive
                          ? "bg-slate-200 text-main-color font-semibold"
                          : "bg-transparent"
                        } flex text-sm gap-x-3 px-4 py-2 rounded-md`
                      }
                    >
                      <div>{<val.icon />}</div>
                      <div>{val.navTitle}</div>
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[15%] flex">
                  <img className="rounded-full w-full h-8" src="" alt="" />
                </div>
                <div className="w-3/4">
                  <p className="text-sm font-semibold">Monev</p>
                  <p className="text-xs text-slate-600">monev@balmon@com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[7%] pl-6 h-screen flex items-center">
          <div>
            {navList.map((val) => (
              <NavLink
                to={val.navTo}
                className={({ isActive }) =>
                  `${isActive
                    ? "bg-slate-200 text-main-color font-semibold"
                    : "bg-transparent"
                  } flex text-sm gap-x-3 p-6 rounded-md`
                }
              >
                <div>{<val.largeIcon />}</div>
              </NavLink>
            ))}
            <div
              className="flex justify-center pt-6"
              onClick={() => setIsSimple(false)}
            >
              <LargeHideSidebar />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
