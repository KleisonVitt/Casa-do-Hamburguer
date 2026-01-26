const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`text-placeholder placeholder:text-placeholder box-border w-full rounded-md bg-white px-3 py-3 text-sm outline-none ${className ?? ""} `}
    />
  );
};

export default Input;
