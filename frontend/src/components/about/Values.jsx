import {
  GlobeAsiaAustraliaIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
const Values = () => (
  <section className="py-24 bg-slate-50 px-6">
    <div className="max-w-7xl mx-auto space-y-32">
      {/* Vision */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-brand-primary/30">
            <GlobeAsiaAustraliaIcon className="w-10 h-10" />
          </div>
          <h3 className="text-4xl font-black text-brand-dark tracking-tighter mb-6">
            Our Vision
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed">
            To empower communities and businesses with reliable renewable energy
            technologies that protect the environment and future generations. We
            envision a world where clean energy is accessible to everyone,
            reducing our collective carbon footprint to zero.
          </p>
        </div>
        <div className="order-1 md:order-2 bg-white p-4 rounded-card shadow-xl">
          <div className="aspect-video bg-slate-200 rounded-4xl" />
        </div>
      </div>

      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-brand-dark p-4 rounded-card shadow-xl">
          <div className="aspect-video bg-slate-700 rounded-4xl flex items-center justify-center">
            <span className="text-brand-primary font-black text-4xl italic opacity-50">
              O₂ vs CO₂
            </span>
          </div>
        </div>
        <div>
          <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
            <ShieldCheckIcon className="w-10 h-10" />
          </div>
          <h3 className="text-4xl font-black text-brand-dark tracking-tighter mb-6">
            Our Mission
          </h3>
          <ul className="space-y-4 text-slate-600 text-lg">
            <li className="flex gap-4">
              <span className="text-brand-primary font-bold">01.</span>
              Increase O₂ & Decrease CO₂ by providing innovative energy systems.
            </li>
            <li className="flex gap-4">
              <span className="text-brand-primary font-bold">02.</span>
              Offer quality installation and maintenance of Solar, Wind, and EV
              Charging stations.
            </li>
            <li className="flex gap-4">
              <span className="text-brand-primary font-bold">03.</span>
              Provide customer-focused service that builds long-term
              sustainability.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Values