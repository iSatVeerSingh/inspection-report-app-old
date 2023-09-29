import { HTMLInputTypeAttribute } from "react";
import { IconType } from "react-icons";

type InputFieldProps = {
  type: HTMLInputTypeAttribute;
  label?: string;
  id?: string;
  name: string;
  required?: boolean;
  placeholder: string;
  icon?: IconType;
  inputError?: string;
};

const InputField = ({
  type,
  label,
  id,
  name,
  required,
  placeholder,
  icon: Icon,
  inputError
}: InputFieldProps) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="relative">
        {Icon && (
          <Icon
            size={24}
            className="absolute text-gray-dark top-[50%] -translate-y-[50%] left-2"
          />
        )}
        <input
          className={`p-2 border border-blue-primay w-full bg-input-bg rounded-md placeholder:text-placeholder ${
            Icon ? "pl-10" : ""
          }`}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          autoComplete="off"
        />
      </div>
      {inputError && <span className="text-sm text-red-500">{inputError}</span>}
    </div>
  );
};

export default InputField;
