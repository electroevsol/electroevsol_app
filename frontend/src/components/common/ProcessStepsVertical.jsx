import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ClipboardDocumentCheckIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Site Audit",
    desc: "Comprehensive shadow analysis and structural integrity check of your rooftop.",
    icon: ClipboardDocumentCheckIcon,
    color: "bg-blue-500",
  },
  {
    title: "Engineering",
    desc: "Custom CAD designs tailored to your specific energy needs and roof orientation.",
    icon: PencilSquareIcon,
    color: "bg-brand-primary",
  },
  {
    title: "Installation",
    desc: "Rapid deployment by our team of certified solar technicians.",
    icon: WrenchScrewdriverIcon,
    color: "bg-yellow-500",
  },
  {
    title: "Net Metering",
    desc: "Grid synchronization and startup to begin your journey of #IncreasingO2.",
    icon: BoltIcon,
    color: "bg-emerald-600",
  },
  {
    title: "Commissioning",
    desc: "Final safety inspections and performance testing to ensure peak system efficiency.",
    icon: CheckBadgeIcon,
    color: "bg-orange-500",
  },
];

const ProcessStepsVertical = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 max-w-6xl mx-auto px-4 md:px-6 relative overflow-hidden"
    >
      <div className="text-center mb-16 md:mb-24">
        <span className="text-brand-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
          Renewable Excellence
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter uppercase leading-none">
          Our <span className="text-brand-primary">Process</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-100 -ml-[0.5px] rounded-full" />

        <motion.div
          style={{ scaleY }}
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-brand-primary -ml-[0.5px] origin-top rounded-full z-10"
        />

        <div className="space-y-12 md:space-y-32">
          {steps.map((step, index) => (
            <StepItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepItem = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center justify-between w-full md:flex-row ${
        !isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full pl-20 md:pl-0 md:w-[45%] text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-white p-5 md:p-10 rounded-3xl shadow-xl border border-slate-50 hover:shadow-2xl transition-all group overflow-hidden"
        >
          <div className="flex items-center justify-start gap-3 md:gap-4 mb-3 md:mb-4">
            <span className="text-2xl md:text-4xl font-black text-slate-100 group-hover:text-brand-primary/20 transition-colors shrink-0">
              0{index + 1}
            </span>

            <h3 className="text-lg md:text-2xl font-black text-brand-dark tracking-tighter uppercase leading-tight wrap-break-word hyphens-auto">
              {step.title}
            </h3>
          </div>

          <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
            {step.desc}
          </p>
        </motion.div>
      </div>

      <div className="absolute left-8 md:left-1/2 -ml-8 top-0 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-20">
        <div
          className={`${step.color} w-16 h-16 rounded-2xl shadow-lg shadow-current/30 flex items-center justify-center text-white relative`}
        >
          <step.icon className="w-8 h-8" />
          <div
            className={`absolute inset-0 rounded-2xl ${step.color} animate-ping opacity-15`}
          />
        </div>
      </div>

      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
};

export default ProcessStepsVertical;
