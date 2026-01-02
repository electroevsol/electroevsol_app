const MapSection = () => {
  // Senior Tip: Use a Place ID or a URL-encoded address for the most accurate pin
  const locationQuery = encodeURIComponent(
    " Jagmohani, Pakari - Udaipur Road, Siddharth Nagar, Uttar Pradesh, India"
  );
  const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";

  return (
    <section className="px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-200 w-full h-125 rounded-header overflow-hidden shadow-inner relative border-8 border-white">
          <iframe
            title="Electro Evsol Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${locationQuery}`}
          ></iframe>

          {/* Floating Address Card for UX */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl max-w-xs border border-white hidden md:block">
            <h4 className="font-black text-brand-dark mb-2 uppercase tracking-tighter">
              Visit Our Office
            </h4>
            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              Electro Evsol Solutions,
              <br />
              Jagmohani, Pakari - Udaipur Road, Siddharth Nagar
              <br />
              India 272207
            </p>
            <div className="mt-4 flex gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">
                Open for Consultation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
