import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-40 px-6 bg-brand-dark overflow-hidden">
      {/* Background with Brand-Specific Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover"
          alt="Contact Electro Evsol"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-dark to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto text-center">
        {/* Breadcrumbs for UX/SEO Consistency */}
        <nav className="flex justify-center items-center gap-2 mb-6 text-sm font-bold tracking-widest uppercase text-brand-primary">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRightIcon className="w-4 h-4 text-slate-500" />
          <span className="text-white">Contact Us</span>
        </nav>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
          Get in <span className="text-brand-primary">Touch</span>
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Have questions about Solar, EV Charging, or Wind energy? Our expert
          team is ready to provide the answers you need to start your green
          journey.
        </p>
      </div>

      {/* Stylized Bottom Transition to overlap the Info Cards */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-white rounded-t-section z-20" />
    </section>
  );
};

export default ContactHero
