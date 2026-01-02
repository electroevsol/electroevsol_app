import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import Card from "./Card";

const Hero = () => {
  return (
    <section className="relative px-3 md:px-6 pt-6 flex flex-col min-h-[90vh]">
      <div className="relative w-full rounded-card md:rounded-section overflow-hidden flex items-center justify-center bg-brand-dark grow">
        <img
          src="/hero.avif"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Sustainable Energy"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-brand-dark/90" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl pt-32 pb-40 md:pb-56">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-brand-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            <RocketLaunchIcon className="w-4 h-4" />
            Electro Evsol Renewable Energy Solutions 
          </div>

          {/* Fluid Typography - scaled for impact without overflow */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter mb-8 uppercase ">
            <span className="block mb-1">
              INCREASE <span className="text-brand-primary">O₂</span>
            </span>
            <span className="block text-slate-300 not-italic tracking-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              DECREASE CO₂
            </span>
          </h1>

          <p className="text-slate-400 max-w-lg mx-auto mb-10 text-sm md:text-base font-medium leading-relaxed opacity-90">
            Empowering communities with reliable renewable technologies to
            protect our environment and future generations.
          </p>
        </div>
      </div>

      {/* 2. Floating Vision/Mission Cards */}
      <div className="max-w-7xl mx-auto -mt-20 md:-mt-28 relative z-20 px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <Card
          type="vision"
          title="Our Vision"
          subtitle="THE FUTURE"
          content="To empower communities and businesses with reliable renewable energy technologies that protect the environment and future generations."
          color="bg-[#E7F5EE]"
        />
        <Card
          type="mission"
          title="Our Mission"
          subtitle="OUR ACTION"
          content='"Aware people about environments, save nature and avoid Carbon die oxides emissions using Renewable energy sources."'
          color="bg-[#004D34]"
          isDark
        />
      </div>
    </section>
  );
};

export default Hero;
