"use client";

type InputTextAreaProps = {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

const InputTextArea = ({
  label,
  name,
  placeholder,
  required,
}: InputTextAreaProps) => {
  return (
    <div>
      {label && <label className="text-xl text-rich-black mb-1" htmlFor={name}>{label}</label>}
      <textarea
        className="w-full border border-blue-primay p-2 rounded-md"
        name={name}
        id={name}
        cols={30}
        rows={5}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
};

export default InputTextArea;
