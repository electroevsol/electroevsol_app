import { Link } from "react-router-dom";
import {
  BoltIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Our Services", path: "/services" },
    { name: "Solar Calculator", path: "/calculator" },
    { name: "Projects", path: "/projects" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-brand-primary p-2 rounded-lg">
                <BoltIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-xl tracking-tighter">
                ELECTRO EVSOL
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading the transition to sustainable energy. We specialize in
              high-efficiency electrical and solar systems designed to protect
              our future.
            </p>
            <div className="text-brand-primary font-bold text-sm tracking-widest uppercase">
              #IncreaseO2 #DecreaseCO2
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <PhoneIcon className="w-5 h-5 text-brand-primary shrink-0" />
                <span>+91 7800686299 / +91 9529796400 </span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <EnvelopeIcon className="w-5 h-5 text-brand-primary shrink-0" />
                <span>info@electroevsol.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPinIcon className="w-5 h-5 text-brand-primary shrink-0" />
                <span>
                  Address - Jagmohani, Pakari - Udaipur Road, Siddharth Nagar,
                  Uttar Pradesh , 272207
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Connect */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Founder</h4>
            <p className="text-slate-400 text-sm mb-4">Anand Kumar Gupta</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary transition-all group"
              >
                <span className="text-xs font-bold group-hover:text-white">
                  WA
                </span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary transition-all group"
              >
                <span className="text-xs font-bold group-hover:text-white">
                  LI
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} Electro Evsol Renewable Energy Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
