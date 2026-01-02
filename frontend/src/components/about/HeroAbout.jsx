import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const HeroAbout = () => {
  return (
    <section className="relative pt-32 pb-48 px-6 bg-brand-dark overflow-hidden">
      {/* 1. Background Layer: Subtle brand texture or darkened image */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-transparent to-brand-dark z-10" />
        <img
          src="/about.avif"
          className="w-full h-full object-cover"
          alt="Nature background"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto text-center">
        {/* 2. Breadcrumb Navigation (SEO & UX Best Practice) */}
        <nav className="flex justify-center items-center gap-2 mb-8 text-sm font-bold tracking-widest uppercase text-brand-primary">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRightIcon className="w-4 h-4 text-slate-500" />
          <span className="text-white">About Us</span>
        </nav>

        {/* 3. Core Brand Message */}
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
          Pioneering a <br />
          <span className="text-brand-primary">Sustainable</span> Future
        </h1>

        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-xl text-slate-300 font-medium leading-relaxed">
            Founded by <span className="text-white">Anand Kumar Gupta</span>,
            Electro Evsol is more than a company—it’s a commitment to our
            planet.
          </p>

          {/* Mission Tagline */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-brand-primary font-bold italic shadow-inner">
            <span className="text-white opacity-60">
              "Increase O₂, Decrease CO₂"
            </span>
          </div>
        </div>
      </div>

      {/* 4. Visual Flourish: Abstract Shape for Depth */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-white rounded-t-section z-20" />
    </section>
  );
};

export default HeroAbout;
