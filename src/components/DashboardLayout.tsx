import React from "react";
import Sidebar from "./Sidebar";
import ProfileSidebar from "./ProfileSidebar";
import PageLayout from "./PageLayout";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="grid grid-cols-[250px_auto] h-screen">
      <div className="grid grid-rows-[60px_auto]">
        <ProfileSidebar className="bg-white border border-stroke" />
        <Sidebar />
      </div>
      <PageLayout>children here</PageLayout>
    </div>
  );
};

export default DashboardLayout;
