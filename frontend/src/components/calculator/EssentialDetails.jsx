import { BoltIcon, ChartBarSquareIcon } from "@heroicons/react/24/outline";

export const EssentialDetails = ({ data, onChange }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-4xl shadow-xl border border-slate-100 space-y-6 h-full">
      <h3 className="text-xl font-black text-brand-dark flex items-center gap-2">
        <BoltIcon className="w-6 h-6 text-brand-primary" />
        Essential Details
      </h3>

      <div className="space-y-5">
        <InputGroup label="Your State">
          <select
            className="calc-input"
            value={data.state}
            onChange={(e) => onChange("state", e.target.value)}
          >
            <option value="">Select State</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Delhi">Delhi</option>
          </select>
        </InputGroup>

        <InputGroup label="Your Category">
          <select
            className="calc-input"
            value={data.category}
            onChange={(e) => onChange("category", e.target.value)}
          >
            <option value="">Select Category of Customer</option>
            <option value="Residential">Residential</option>
            <option value="Institutional">Institutional</option>
            <option value="Industrial">Industrial</option>
            <option value="Commercial">Commercial</option>
            <option value="Government">Government</option>
            <option value="Social Sector">Social Sector</option>
          </select>
        </InputGroup>

        <InputGroup label="Avg. Monthly Bill">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-sm">
              ₹
            </span>
            <input
              type="number"
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e") e.preventDefault();
              }}
              className="calc-input pl-10"
              placeholder="e.g. 1000"
              value={data.bill}
              onChange={(e) => onChange("bill", e.target.value)}
            />
          </div>
        </InputGroup>
      </div>
    </div>
  );
};

export const PrecisionMetrics = ({ data, onChange }) => (
  <div className="bg-brand-dark p-6 md:p-8 rounded-4xl shadow-xl text-white space-y-6 h-full">
    <h3 className="text-xl font-black flex items-center gap-2">
      <ChartBarSquareIcon className="w-6 h-6 text-brand-primary" />
      Precision Metrics{" "}
      <span className="text-[9px] opacity-40 uppercase tracking-widest ml-1">
        (Optional)
      </span>
    </h3>

    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Total Roof Area
          </label>
          <div className="flex gap-3 text-[9px] font-bold">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="unit"
                className="accent-brand-primary w-3 h-3"
                checked={data.areaUnit === "Sq. m."}
                onChange={() => onChange("areaUnit", "Sq. m.")}
              />{" "}
              Sq. m.
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="unit"
                className="accent-brand-primary w-3 h-3"
                checked={data.areaUnit === "Sq. ft."}
                onChange={() => onChange("areaUnit", "Sq. ft.")}
              />{" "}
              Sq. ft.
            </label>
          </div>
        </div>
        <input
          type="number"
          className="calc-input-dark"
          placeholder="Available Area"
          value={data.roofArea || ""}
          onChange={(e) => onChange("roofArea", e.target.value)}
        />
      </div>

      <InputGroup label="Max Investment Capacity" dark>
        <input
          type="number"
          className="calc-input-dark"
          placeholder="₹ Amount"
          value={data.investment || ""}
          onChange={(e) => onChange("investment", e.target.value)}
        />
      </InputGroup>

      <InputGroup label="Sanctioned Load (kW)" dark>
        <input
          type="number"
          className="calc-input-dark"
          placeholder="e.g. 5"
          value={data.sanctionLoad || ""}
          onChange={(e) => onChange("sanctionLoad", e.target.value)}
        />
      </InputGroup>
    </div>
  </div>
);

const InputGroup = ({ label, children, dark }) => (
  <div className="space-y-2">
    <label
      className={`text-[10px] font-black uppercase tracking-widest ${
        dark ? "text-slate-500" : "text-slate-400"
      }`}
    >
      {label}
    </label>
    {children}
  </div>
);
