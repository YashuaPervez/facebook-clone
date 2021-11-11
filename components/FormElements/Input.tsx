import React from "react";
import { useFormContext } from "react-hook-form";

type InputProps = {
  id: string;
  placeholder?: string;
  error?: string;
  inline?: boolean;
  type?: "text" | "password";
};

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  error,
  inline = false,
  ...rest
}) => {
  const { register } = useFormContext();

  return (
    <div className={`${inline ? "mr-3" : "mb-6"} relative w-full`}>
      <input
        id={id}
        placeholder={placeholder}
        className={`bg-white border border-gray-200 w-full outline-none py-2 px-3 rounded focus:border-blue-400 h-12`}
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
