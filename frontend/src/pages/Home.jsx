import Hero from "../components/home/Hero";
import ServiceCard from "../components/home/ServiceCard";
import ContactZone from "../components/home/ContactZone";
import {
  BoltIcon,
  SunIcon,
  Battery50Icon,
  SparklesIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import CallToAction from "../components/common/CallToAction";
import ProcessStepsVertical from "../components/common/ProcessStepsVertical";

const Home = () => {
  return (
    <div className="bg-white overflow-x-hidden flex flex-col">
      <Hero />

      <div className="mt-12 md:mt-20">
        <CallToAction
          variant="dark"
          title="Ready to Decrease CO₂?"
          subtitle="Join 250+ businesses and homes in Uttar Pradesh already powered by Electro Evsol."
          primaryBtnText="Our Services"
          primaryBtnLink="/services"
          secondaryBtnText="Solar Calculator"
          secondaryBtnLink="/calculator"
          className="my-0 mx-4"
        />
      </div>

      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center md:text-left mb-16">
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <div className="h-0.5 w-8 bg-brand-primary"></div>
            <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-[10px]">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter  uppercase">
            Services <span className="text-brand-primary">Portfolio</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <ServiceCard
            title="Electrical System"
            icon={BoltIcon}
            colorClass="bg-orange-500"
          />
          <ServiceCard
            title="Solar System"
            icon={SunIcon}
            colorClass="bg-brand-primary"
          />
          <ServiceCard
            title="EV Charging Station"
            icon={Battery50Icon}
            colorClass="bg-blue-600"
          />
          <ServiceCard
            title="Wind Turbine"
            icon={SparklesIcon}
            colorClass="bg-cyan-500"
          />
          <ServiceCard
            title="Other Renewable Energy System"
            icon={LinkIcon}
            colorClass="bg-slate-700"
          />
        </div>
      </section>

      <ProcessStepsVertical />

      <div className="bg-slate-50 py-24 md:py-32">
        <ContactZone />
      </div>
    </div>
  );
};

export default Home;
