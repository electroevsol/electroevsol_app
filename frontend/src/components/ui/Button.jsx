import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const Button = ({
  children,
  to,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-8 py-4 rounded-full font-bold transition-all transform active:scale-95 text-center inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-brand-primary text-white hover:bg-opacity-90 shadow-lg shadow-brand-primary/20",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-brand-dark",
    secondary: "bg-brand-dark text-white hover:bg-brand-forest",
    ghost:
      "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20",
  };

  const classes = twMerge(baseStyles, variants[variant], className);

  if (to)
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
