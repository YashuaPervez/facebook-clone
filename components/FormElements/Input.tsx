import React from "react";
import { useFormContext } from "react-hook-form";

type InputProps = {
  id: string;
  placeholder?: string;
  error?: string;
  inline?: boolean;
  type?: "text" | "password";
  textarea?: boolean;
  initialValue?: string;
};

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  error,
  inline = false,
  textarea = false,
  initialValue,
  ...rest
}) => {
  const { register } = useFormContext();
  const commonClasses =
    "bg-white border border-gray-200 w-full outline-none py-2 px-3 rounded focus:border-primary-main";

  if (textarea) {
    return (
      <div>
        <textarea
          id={id}
          placeholder={placeholder}
          className={`${commonClasses} resize-none h-36`}
          defaultValue={initialValue}
          {...rest}
          {...register(id)}
        ></textarea>
        {error && (
          <span className="text-sm ml-1 block text-red-400 absolute b-0 -mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`${inline ? "mr-3" : "mb-6"} relative w-full`}>
      <input
        id={id}
        placeholder={placeholder}
        className={`${commonClasses} h-12`}
        defaultValue={initialValue}
        {...rest}
        {...register(id)}
      />
      {error && (
        <span className="text-sm ml-1 block text-red-400 absolute b-0 -mt-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
