import React from "react";

const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`text-placeholder placeholder:text-placeholder w-96 rounded-md bg-white px-2 py-3 text-xs outline-none ${className ?? ""}`}
    />
  );
};

export default Input;
