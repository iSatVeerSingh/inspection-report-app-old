"use client";

import React, { MouseEventHandler } from "react";

type ButtonSecondaryProps = {
  onClick?: MouseEventHandler;
  className?: string;
  children: React.ReactNode;
};

const ButtonSecondary = ({
  onClick,
  className,
  children,
}: ButtonSecondaryProps) => {
  return (
    <button
      className={`text-blue-primay border-2 border-blue-primay font-medium text-lg py-1 text-center px-3 rounded-md ${
        className ? className : ""
      }`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
