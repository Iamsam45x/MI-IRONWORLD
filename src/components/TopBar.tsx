import { Phone, MessageCircle, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-inverse-surface text-inverse-on-surface text-sm py-2">
      <div className="max-w-container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-5">
          <a
            href="tel:+919246261404"
            className="flex items-center gap-1.5 hover:text-secondary transition-colors"
          >
            <Phone size={14} />
            <span>Call Now: +91 92462 61404</span>
          </a>
          <a
            href="https://wa.me/919246261404"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-secondary transition-colors"
          >
            <MessageCircle size={14} />
            <span>WhatsApp Us</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-inverse-on-surface/60">
          <Clock size={14} />
          <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
        </div>
      </div>
    </div>
  );
}
