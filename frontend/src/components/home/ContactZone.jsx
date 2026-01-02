import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/Button";
import contactApi from "../../api/contactApi";
import toast from "react-hot-toast";

const ContactZone = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Solar Power Setup",
    details: "",
  });

  const [loading, setLoading] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/917800686299?text=I%20am%20interested%20in%20solar%20solutions",
      "_blank"
    );
  };

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
      const response = await contactApi.contact(formData);
      toast.success(response.message || "Inquiry received successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "Solar Power Setup",
        details: "",
      });
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Failed to send. Please try again.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 py-12 md:py-20 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto bg-brand-dark rounded-section p-6 md:p-20 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                Let's <span className="text-brand-primary">Connect</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed font-medium">
                Ready to transition to clean energy? Reach out for a
                consultation or professional site audit.
              </p>
            </div>

            <div className="space-y-8">
              <ContactDetail
                icon={PhoneIcon}
                text="+91 7800686299"
                sub="Available Mon-Sat"
              />
              <ContactDetail
                icon={EnvelopeIcon}
                text="info@electroevsol.com"
                sub="Support & Inquiries"
              />
              <ContactDetail
                icon={MapPinIcon}
                text="Siddharth Nagar, UP, 272207"
                sub="Head Office"
              />
            </div>

            <Button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] shadow-green-500/20 py-4 px-10 gap-3 justify-center"
            >
              <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
              WhatsApp Inquiry
            </Button>
          </div>

          <div className="bg-[#434D56] p-6 md:p-12 rounded-card shadow-inner border border-white/5">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="contact-input w-full"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="contact-input w-full"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="contact-input w-full"
                required
              />

              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="contact-input w-full text-slate-400 appearance-none cursor-pointer"
                >
                  <option className="text-brand-dark font-bold">
                    Solar Energy System
                  </option>
                  <option className="text-brand-dark font-bold">
                    EV Charging Station
                  </option>
                  <option className="text-brand-dark font-bold">
                    Wind Turbine (Small)
                  </option>
                  <option className="text-brand-dark font-bold">
                    Electrical Maintenance
                  </option>
                </select>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
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

              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="contact-input w-full h-32 resize-none"
              />

              <Button
                type="submit"
                disabled={loading}
                className={`w-full py-5 text-lg cursor-pointer hover:bg-[#25D366] ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactDetail = ({ icon: Icon, text, sub }) => (
  <div className="flex items-start gap-5 group">
    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shrink-0 mt-1">
      <Icon className="w-6 h-6 md:w-7 md:h-7" />
    </div>
    <div>
      <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">
        {sub}
      </p>
      <p className="text-lg md:text-xl font-bold leading-tight">{text}</p>
    </div>
  </div>
);

export default ContactZone;
