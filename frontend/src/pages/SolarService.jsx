import {
  SunIcon,
  CurrencyRupeeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import ServiceHero from "../components/services/ServiceHero";
import FeatureGrid from "../components/services/FeatureGrid";
import ProcessSteps from "../components/services/ProcessSteps";
import CallToAction from "../components/common/CallToAction";

const solarData = {
  hero: {
    title: "Solar Power Systems",
    subtitle: "End-to-end photovoltaic solutions for sustainable growth.",
    bgImage: "/services.avif",
    badge: "Renewable Excellence",
  },
  features: [
    {
      icon: CurrencyRupeeIcon,
      title: "Zero Electricity Bills",
      desc: "Offset 100% of your energy costs.",
    },
    {
      icon: SunIcon,
      title: "High Efficiency",
      desc: "Monocrystalline PERC panels for max generation.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Long-term Support",
      desc: "25-year panel performance warranty.",
    },
  ],
  steps: [
    { title: "Site Audit", desc: "Shadow analysis and structural check." },
    { title: "Engineering", desc: "Custom CAD designs for your roof." },
    { title: "Installation", desc: "Rapid deployment by certified staff." },
    { title: "Net Metering", desc: "Grid synchronization and startup." },
  ],
};

const SolarService = () => (
  <main className="bg-white">
    <ServiceHero {...solarData.hero} />
    <FeatureGrid features={solarData.features} />
    <ProcessSteps steps={solarData.steps} />
    <CallToAction
      variant="dark"
      title="Stop Paying for Power. Start Owning It."
      subtitle="Most residential solar setups in Varanasi pay for themselves within 4-5 years. Ready to see your custom ROI report?"
      primaryBtnText={`Get Free Site Audit`}
      primaryBtnLink="/contact"
      secondaryBtnText="Run Solar Calculator"
      secondaryBtnLink="/calculator"
    />
  </main>
);

export default SolarService;
