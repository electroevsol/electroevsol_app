const FeatureGrid = ({ features }) => (
  <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
    {features.map((f, i) => (
      <div key={i} className="text-center space-y-4 group">
        <div className="w-20 h-20 bg-brand-soft rounded-3xl flex items-center justify-center mx-auto text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
          <f.icon className="w-10 h-10" />
        </div>
        <h4 className="text-2xl font-bold text-brand-dark">{f.title}</h4>
        <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
      </div>
    ))}
  </section>
);

export default FeatureGrid