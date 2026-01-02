import { motion } from "framer-motion";
import {
  SunIcon,
  ChartBarIcon,
  BeakerIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export const CalculatorResults = ({ data }) => {
  // Safe default in case data hasn't arrived yet
  const safeData = data || {};

  const stats = [
    {
      label: "Recommended System",
      // Backend sends number (e.g., 5.5), we add unit
      val: `${safeData.size || "0"} kW`,
      icon: SunIcon,
      color: "bg-yellow-400",
      delay: 0.1,
    },
    {
      label: "Estimated Annual Savings",
      // Backend sends formatted string (e.g., "60,000"), we add currency symbol
      val: `₹${safeData.savings || "0"}`,
      icon: ChartBarIcon,
      color: "bg-brand-primary",
      delay: 0.2,
    },
    {
      label: "Payback Period",
      val: `${safeData.payback || "0"} Years`,
      icon: BeakerIcon,
      color: "bg-blue-600",
      delay: 0.3,
    },
    {
      label: "CO2 Reduction",
      val: `${safeData.co2 || "0"} Tons/Yr`,
      icon: GlobeAltIcon,
      color: "bg-emerald-700",
      delay: 0.4,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="h-0.5 w-8 bg-brand-primary"></div>
        <span className="text-brand-primary font-bold uppercase tracking-[0.2em] text-[10px]">
          Your Custom Energy Report
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatBox
            key={index}
            icon={stat.icon}
            label={stat.label}
            val={stat.val}
            color={stat.color}
            delay={stat.delay}
          />
        ))}
      </div>

      {/* Mission Branding Note */}
      {/* Changed bg-brand-soft to bg-green-50/50 to ensure it's visible even without custom config */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 bg-green-50/50 p-6 rounded-3xl border border-brand-primary/10 flex items-center gap-4"
      >
        <div className="text-2xl">🌳</div>
        <p className="text-sm font-medium text-slate-600">
          By installing this system, you are contributing to our mission to
          <span className="text-brand-primary font-black italic ml-1 uppercase">
            #Increase O₂
          </span>
          .
        </p>
      </motion.div>
    </motion.div>
  );
};

const StatBox = ({ icon: Icon, label, val, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: delay, duration: 0.4 }}
    className="bg-white p-8 rounded-card shadow-xl border border-slate-50 group hover:-translate-y-2 transition-transform duration-300"
  >
    <div
      className={`${color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
    >
      <Icon className="w-6 h-6" />
    </div>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
      {label}
    </p>
    <p className="text-2xl font-black text-brand-dark tracking-tight">{val}</p>
  </motion.div>
);
