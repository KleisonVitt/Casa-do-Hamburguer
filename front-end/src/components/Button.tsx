type ButtonType = {
  text: string;
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, variant = "default", ...props }: ButtonType) => {
  const buttonVariant =
    variant === "default"
      ? "bg-red border-red w-full cursor-pointer rounded-md border-2 py-2 text-sm font-bold text-white"
      : "border-red text-red w-full cursor-pointer rounded-md border-2 bg-white py-2 text-sm font-bold";

  return (
    <button {...props} className={buttonVariant}>
      {text}
    </button>
  );
};

export default Button;
