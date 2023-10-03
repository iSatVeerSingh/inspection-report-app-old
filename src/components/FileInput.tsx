"use client";

type FileInputProps = {
  label?: string;
  name: string;
  required?: boolean;
  subLabel?: string;
  inputError?: string;
};

const FileInput = ({
  label,
  name,
  required,
  subLabel,
  inputError,
}: FileInputProps) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="text-xl text-rich-black mb-1">
          <span>{label}</span>
          {subLabel && (
            <span className="text-sm text-placeholder ml-2">{subLabel}</span>
          )}
        </label>
      )}
      <div>
        <input
          className="cursor-pointer"
          type="file"
          name={name}
          id={name}
          required={required}
        />
      </div>
      {inputError && <span className="text-sm text-red-500">{inputError}</span>}
    </div>
  );
};

export default FileInput;
