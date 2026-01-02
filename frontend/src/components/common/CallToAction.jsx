import { Button } from "../ui/Button";
import { twMerge } from "tailwind-merge";

const CallToAction = ({
  title,
  subtitle,
  primaryBtnText = "Get Started", 
  primaryBtnLink = "/contact",
  secondaryBtnText,
  secondaryBtnLink,
  variant = "dark",
  className = "",
}) => {
  const themes = {
    dark: "bg-brand-dark text-white",
    light: "bg-slate-50 text-brand-dark border border-slate-200",
    green: "bg-brand-primary text-white",
  };

  return (
    <section
      className={twMerge(
        "px-6 py-20 rounded-header overflow-hidden relative mx-4 my-10", // Standardized radius
        themes[variant],
        className
      )}
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight uppercase ">
          {title}
        </h2>

        {subtitle && (
          <p
            className={twMerge(
              "text-lg mb-10 font-medium max-w-2xl mx-auto opacity-80",
              variant === "light" ? "text-slate-600" : "text-slate-300"
            )}
          >
            {subtitle}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            to={primaryBtnLink}
            // Logic: if green theme, make button white. Otherwise, use primary brand green.
            className={twMerge(
              variant === "green"
                ? "bg-white text-brand-primary hover:bg-slate-100"
                : "bg-brand-primary text-white"
            )}
          >
            {primaryBtnText}
          </Button>

          {secondaryBtnText && (
            <Button
              to={secondaryBtnLink}
              variant="ghost"
              className={twMerge(
                variant === "light"
                  ? "border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white"
                  : "border-white/20 text-white"
              )}
            >
              {secondaryBtnText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
