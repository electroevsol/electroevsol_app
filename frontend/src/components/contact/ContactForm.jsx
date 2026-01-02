import { useState } from "react";
import { Button } from "../ui/Button";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import contactApi from "../../api/contactApi";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Solar Energy System",
    details: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contactApi.contact(formData);
      toast.success("Message sent! We will contact you soon.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "Solar Energy System",
        details: "",
      });
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Failed to send message.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-10 md:p-14 rounded-header shadow-2xl border border-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />

      <div className="mb-10">
        <h2 className="text-4xl font-black text-brand-dark tracking-tighter mb-2">
          Request a Quote
        </h2>
        <p className="text-slate-500 font-medium">
          Professional site audit and renewable energy feasibility study.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <FormInput
          type="text"
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Anand Kumar..."
          required
        />

        <FormInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="Email Address"
          placeholder="name@company.com"
          required
        />

        <FormInput
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          label="Phone Number"
          placeholder="+91 00000 00000"
          required
        />

        <div className="flex flex-col gap-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">
            Service Required
          </label>

          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 text-brand-dark font-bold outline-none focus:border-brand-primary transition-all appearance-none cursor-pointer"
            >
              <option>Solar Energy System</option>
              <option>EV Charging Station</option>
              <option>Wind Turbine (Small)</option>
              <option>Electrical Maintenance</option>
            </select>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">
            Project Details
          </label>
          <textarea
            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 min-h-37.5 outline-none focus:border-brand-primary transition-all font-medium"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Tell us about your rooftop area or energy requirements..."
          />
        </div>

        <div className="md:col-span-2 pt-4">
          <Button
            type="submit"
            disabled={loading}
            className={`w-full py-5 text-lg flex items-center justify-center gap-3 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <span>Sending...</span>
            ) : (
              <>
                <PaperAirplaneIcon className="w-5 h-5 -rotate-45" />
                Send Official Inquiry
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

const FormInput = ({ label, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">
      {label}
    </label>
    <input
      {...props}
      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 text-brand-dark font-bold outline-none focus:border-brand-primary transition-all placeholder:text-slate-300 placeholder:font-normal"
    />
  </div>
);

export default ContactForm;
