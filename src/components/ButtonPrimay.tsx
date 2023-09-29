import { ReactNode } from "react";

type ButtonPrimaryProps = {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
};

const ButtonPrimary = ({ type, children }: ButtonPrimaryProps) => {
  return (
    <button
      className="bg-blue-primay text-white font-medium text-lg py-2 text-center px-3 rounded-md active:bg-blue-600"
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
