import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  EssentialDetails,
  PrecisionMetrics,
} from "../components/calculator/EssentialDetails";
import { CalculatorResults } from "../components/calculator/CalculatorResults";
import { Button } from "../components/ui/Button";
import toast from "react-hot-toast";
import calculatorApi from "../api/calculatorApi";

const SolarCalculator = () => {
  const [formData, setFormData] = useState({
    state: "",
    bill: "",
    category: "",
  });

  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const resultsRef = useRef(null);

  useEffect(() => {
    if (results && resultsRef.current) {
      resultsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [results]);

  useEffect(() => {
    if (formData.bill && error) setError("");
  }, [formData.bill, error]);

  const handleUpdate = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleCalculate = async () => {
    const billValue = Number(formData.bill);
    if (!formData.bill || billValue <= 0) {
      toast.error("Please enter a valid bill amount");
      return;
    }

    setLoading(true);

    try {
      console.log("1. Sending Request with:", { monthlyBill: billValue });

      const response = await calculatorApi.calculateSolar({
        monthlyBill: billValue,
      });

      const actualData = response.data.data || response;

      setResults(actualData);
      toast.success("Calculation complete!");
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Calculation failed";
      toast.error(errorMsg);
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-48 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[9px] font-bold tracking-[0.2em] uppercase mb-3">
            Renewable Excellence
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter mb-3  uppercase">
            Smart Solar <span className="text-brand-primary">Estimator</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-xl mx-auto text-base leading-relaxed">
            Calculate your energy potential and environmental impact in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8 items-stretch">
          <EssentialDetails data={formData} onChange={handleUpdate} />
          <PrecisionMetrics data={formData} onChange={handleUpdate} />
        </div>

        <div className="h-10 mb-2 flex justify-center">
          {error && (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-red-500 text-sm font-bold flex items-center gap-2"
            >
              <span className="bg-red-100 p-1 rounded-full">⚠️</span> {error}
            </motion.p>
          )}
        </div>

        <div className="flex justify-center mt-6 mb-12">
          <Button
            onClick={handleCalculate}
            disabled={loading}
            className={`px-12 py-4 text-lg font-black  uppercase transition-all duration-300 ${
              error
                ? "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none"
                : "bg-brand-primary text-white shadow-xl shadow-brand-primary/20 hover:scale-105 active:scale-95"
            }`}
          >
            {loading ? "Calculating..." : "Calculate ROI"}
          </Button>
        </div>

        <div ref={resultsRef} className="scroll-mt-30">
          {results && <CalculatorResults data={results} />}
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;
