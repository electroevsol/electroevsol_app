const Card = ({ title, subtitle, content, color, isDark }) => (
  <div
    className={`${color} p-8 md:p-10 rounded-card shadow-2xl flex flex-col border border-white/10`}
  >
    <div className="mb-6">
      <span className="text-brand-primary text-[10px] font-black tracking-widest uppercase mb-1 block">
        {subtitle}
      </span>
      <h3
        className={`text-2xl md:text-3xl font-black  uppercase ${
          isDark ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h3>
    </div>
    <p
      className={`text-sm md:text-base font-medium leading-relaxed ${
        isDark
          ? "text-emerald-50/80 italic border-l-2 border-brand-primary pl-4"
          : "text-slate-600"
      }`}
    >
      {content}
    </p>
  </div>
);

export default Card