import HeroAbout from "../components/about/HeroAbout";
import Stats from "../components/about/Stats";
import FounderSection from "../components/about/FounderSection";
import Values from "../components/about/Values";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="bg-white">
      <HeroAbout />

      <Stats />

      <Values />

      <FounderSection />

      <section className="py-20 px-6 bg-brand-soft text-center">
        <h2 className="text-4xl font-black text-brand-dark mb-6 tracking-tighter">
          Ready to join the{" "}
          <span className="text-brand-primary">Green Revolution?</span>
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-10 text-lg">
          Whether you are a business or a homeowner, we have the renewable
          technology to power your future.
        </p>
        <Link to="/contact">
          <button className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-brand-primary/20 hover:scale-105 transition-transform cursor-pointer">
            Contact Our Team
          </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
