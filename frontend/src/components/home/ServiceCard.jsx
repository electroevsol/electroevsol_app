export const ServiceCard = ({ title, description, icon: Icon, colorClass }) => (
  <div className="group bg-white p-8 rounded-card border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 ${colorClass}`}
    >
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
);

export default ServiceCard