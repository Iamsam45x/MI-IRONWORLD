import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/919246261404"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-tertiary text-on-tertiary w-14 h-14 rounded-full flex items-center justify-center shadow-level-2 hover:bg-tertiary-container transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      <a
        href="tel:+919246261404"
        className="fixed bottom-5 left-5 z-50 bg-primary text-on-primary w-14 h-14 rounded-full flex items-center justify-center shadow-level-2 hover:bg-primary-container transition-colors"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
    </>
  );
}
