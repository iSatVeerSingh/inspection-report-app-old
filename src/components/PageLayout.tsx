'use client';

import React from "react";

type PageLayoutProps = {
  children: React.ReactNode
}

const PageLayout = ({children}: PageLayoutProps) => {
  return (
    <div className="grid grid-rows-[60px_auto]">
      <div className="bg-white border-b border-stroke">
        Page Header
      </div>
      <div>
        {children}
      </div>
    </div>
  )
};

export default PageLayout;