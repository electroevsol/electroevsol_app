import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const FounderSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative group">
        <div className="absolute -inset-4 bg-brand-primary/10 rounded-header blur-2xl group-hover:bg-brand-primary/20 transition-all" />
        <div className="relative aspect-square bg-slate-200 rounded-header overflow-hidden shadow-2xl border-8 border-white">
          {/* Placeholder for Anand Kumar Gupta's Photo */}
          <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest bg-slate-100">
            Proprietor Photo
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">
            The Leadership
          </span>
          <h2 className="text-5xl font-black text-brand-dark tracking-tighter">
            Anand Kumar Gupta
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
             Proprietor
          </p>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed">
          Driven by the mission to{" "}
          <strong>"Increase O₂ and Decrease CO₂,"</strong> Anand Kumar Gupta
          established Electro Evsol to bridge the gap between innovative
          technology and environmental preservation. Under his leadership, the
          company focuses on delivering reliable renewable solutions that
          empower communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "100% Quality Assurance",
            "Expert Technical Team",
            "Customer-Focused Service",
            "Sustainable Innovation",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckBadgeIcon className="w-6 h-6 text-brand-primary" />
              <span className="font-bold text-slate-800 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection