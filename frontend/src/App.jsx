import { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SolarCalculator from "./pages/SolarCalculator";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SolarService from "./pages/SolarService";
import LoadingSpinner from "./components/common/LoadingSpinner";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
            zIndex: 9999,
          },
        }}
      />
      <div className="flex flex-col min-h-screen bg-white antialiased selection:bg-brand-primary selection:text-white overflow-x-hidden">
        <Navbar />
        <main className="grow pt-0">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<SolarCalculator />} />
              <Route path="/services" element={<SolarService />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
