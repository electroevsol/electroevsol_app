
import {
  CheckCircleIcon,
  UserGroupIcon,
  SunIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";

const Stats = () => {
  const stats = [
    {
      label: "Projects Completed",
      value: "10+",
      icon: CheckCircleIcon,
      desc: "Successful installations",
    },
    {
      label: "Happy Clients",
      value: "10+",
      icon: UserGroupIcon,
      desc: "Residential & Commercial",
    },
    {
      label: "Solar Capacity",
      value: "100KW",
      icon: SunIcon,
      desc: "Clean energy generated",
    },
    {
      label: "CO₂ Reduced",
      value: "145T",
      icon: GlobeAmericasIcon,
      desc: "Environmental impact",
    },
  ];

  return (
    <section className="relative py-20 px-6 -mt-10 z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-card shadow-xl border border-white flex flex-col items-center text-center group hover:bg-brand-primary transition-all duration-500"
            >
              <div className="mb-4 p-3 bg-brand-soft rounded-2xl group-hover:bg-white/20 transition-colors">
                <stat.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-4xl font-black text-brand-dark group-hover:text-white tracking-tighter mb-1">
                {stat.value}
              </h4>
              <p className="text-sm font-bold text-slate-400 group-hover:text-emerald-100 uppercase tracking-widest mb-2">
                {stat.label}
              </p>
              <p className="text-xs text-slate-500 group-hover:text-white/70">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats