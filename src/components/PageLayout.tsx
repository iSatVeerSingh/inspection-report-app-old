"use client";

import React, { MouseEventHandler } from "react";
import ButtonPrimary from "./ButtonPrimay";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  titleBtn?: string;
  onTitleBtnClick?: MouseEventHandler;
};

const PageLayout = ({
  children,
  title,
  titleBtn,
  onTitleBtnClick,
}: PageLayoutProps) => {
  return (
    <div className="grid grid-rows-[60px_auto] h-full overflow-hidden">
      <div className="bg-white border-b border-stroke py-2 px-3 flex items-center">
        <span className="text-3xl font-semibold text-rich-black flex-grow">
          {title}
        </span>
        {titleBtn && (
          <ButtonPrimary className="mr-2" onClick={onTitleBtnClick}>{titleBtn}</ButtonPrimary>
        )}
      </div>
      <div className="overflow-y-scroll p-3">{children}</div>
    </div>
  );
};

export default PageLayout;
