import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const ContactInfoCards = () => (
  <div className="flex flex-col gap-6">
    <div className="bg-brand-dark p-10 rounded-header text-white shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <ChatBubbleLeftRightIcon className="w-24 h-24" />
      </div>
      <h3 className="text-2xl font-black tracking-tighter mb-6">
        Immediate Help
      </h3>
      <div className="space-y-6 relative z-10">
        <InfoItem icon={PhoneIcon} label="Call Us" val="+91 7800686299" />
        <InfoItem
          icon={EnvelopeIcon}
          label="Email Us"
          val="info@electroevsol.com"
        />
      </div>
    </div>

    <div className="bg-brand-soft p-10 rounded-header text-brand-dark border border-brand-primary/10">
      <h3 className="text-2xl font-black tracking-tighter mb-6">
        Our Location
      </h3>
      <div className="space-y-6">
        <InfoItem
          icon={MapPinIcon}
          label="Headquarters"
          val=" Jagmohani, Pakari - Udaipur Road, Siddharth Nagar, Uttar Pradesh , 272207, India"
        />
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pt-4">
          Available Mon - Sat <br /> 9:00 AM - 7:00 PM
        </p>
      </div>
    </div>
  </div>
);

const InfoItem = ({ icon: Icon, label, val }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-primary/20">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">
        {label}
      </p>
      <p className="font-bold text-lg leading-tight">{val}</p>
    </div>
  </div>
);

export default ContactInfoCards;
