import { useState } from "react"; 
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/Button";
import { BoltIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Calculator", path: "/calculator" },
    { name: "About", path: "/about" },
    { name: "Home", path: "/" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-white/20 rounded-header px-6 md:px-8 py-4 flex justify-between items-center shadow-2xl relative">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div className="flex items-center gap-3">
            <div className="bg-brand-primary p-2 rounded-xl shadow-lg shadow-brand-primary/30">
              <BoltIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="font-black text-lg md:text-xl tracking-tighter text-brand-dark">
              ELECTRO EVSOL
            </span>
          </div>
        </Link>

        {/* Desktop Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-bold tracking-tight transition-colors ${
                  isActive
                    ? "text-brand-primary"
                    : "text-slate-500 hover:text-brand-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Button
            to="/contact"
            className="py-2.5 px-6 text-sm cursor-pointer hover:bg-[#25D366]"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Toggle Button - Visible only on Mobile */}
        <button
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-5">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-bold p-2 ${
                    isActive ? "text-brand-primary" : "text-slate-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 text-center text-lg"
            >
              Get a Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
