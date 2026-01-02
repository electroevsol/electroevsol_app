const ProcessSteps = ({ steps }) => (
  <section className="py-24 bg-slate-50 rounded-section">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-black text-brand-dark tracking-tighter mb-16 underline decoration-brand-primary/20">
        Our Technical Process
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-white p-10 rounded-card shadow-lg hover:shadow-2xl transition-all relative group border border-transparent hover:border-brand-primary/20"
          >
            <span className="absolute -top-4 left-6 bg-brand-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg">
              STEP {i + 1}
            </span>
            <h5 className="text-xl font-bold text-brand-dark mb-3 mt-4">
              {s.title}
            </h5>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps