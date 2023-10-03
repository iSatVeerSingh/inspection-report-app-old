import { MouseEventHandler, ReactNode } from "react";

type ButtonPrimaryProps = {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
};

const ButtonPrimary = ({
  type,
  children,
  onClick,
  className,
}: ButtonPrimaryProps) => {
  return (
    <button
      className={`bg-blue-primay border border-blue-primay text-white font-medium text-lg py-1 text-center px-3 rounded-md active:bg-blue-600 ${
        className ? className : ""
      }`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
