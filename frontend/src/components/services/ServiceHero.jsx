const ServiceHero = ({ title, subtitle, bgImage, badge }) => (
  <section className="relative h-[65vh] flex items-center px-6 bg-brand-dark overflow-hidden rounded-b-section">
    <img
      src={bgImage}
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      alt={title}
    />
    <div className="relative z-10 max-w-7xl mx-auto w-full">
      <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in">
        {badge}
      </span>
      <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-tight">
        {title}
      </h1>
      <p className="text-slate-300 max-w-xl text-lg font-medium leading-relaxed">
        {subtitle}
      </p>
    </div>
  </section>
);

export default ServiceHero
