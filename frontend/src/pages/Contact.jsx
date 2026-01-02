import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfoCards from "../components/contact/ContactInfoCards";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      <ContactHero />

      <section className="relative z-30 max-w-7xl mx-auto px-6 -mt-20 mb-24">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <ContactInfoCards />
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
