"use client";

import { Outlet, useNavigate } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

const RootLayout = () => {
  const navigate = useNavigate();
  const isLogin = true;

  useEffect(()=> {
    if(!isLogin) {
      navigate("/login")
    }
  }, [isLogin])


  return (
    <div className="grid grid-cols-[250px_auto] h-screen overflow-hidden">
      <div className="grid grid-rows-[60px_auto]">
        <ProfileSidebar className="bg-white border border-stroke" />
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
