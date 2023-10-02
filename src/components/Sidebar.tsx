"use client";
import sidebarPages from "../utils/sidebarPages";
import { LogoutIcon } from "../icons/Icons";

const Sidebar = () => {
  const activePage = "/jobs";

  return (
    <div className="bg-white border-r border-stroke px-2 py-3 grid grid-rows-[auto_40px]">
      <div className="flex flex-col gap-1">
        {sidebarPages.map(({ name, icon: Icon, path, title }) => (
          <div
            className={`flex items-center px-3 py-2 gap-1 text-menu-link rounded-md ${
              path === activePage ? "bg-menu-bg" : ""
            }`}
            key={path}
          >
            <Icon size={30} color="#2B3674" />
            <span className="text-xl font-medium">{name}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center px-3 py-2 gap-1 text-menu-link rounded-md">
        <LogoutIcon size={30} color="#2B3674" />
        <span className="text-xl font-medium">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
