import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`text-placeholder placeholder:text-placeholder w-96 rounded-md bg-white px-2 py-2 text-xs outline-none ${className ?? ""}`}
    />
  );
};

export default Input;
