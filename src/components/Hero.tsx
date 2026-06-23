import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-inverse-surface overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Fabrication workshop"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/90 via-inverse-surface/70 to-transparent" />

      <div className="relative max-w-container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-block bg-secondary text-on-secondary text-label-sm px-3 py-1 rounded mb-5 uppercase">
            Hyderabad's Trusted Fabrication Company
          </span>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-display-lg text-inverse-on-surface leading-tight mb-4">
            Quality Iron Fabrication Solutions
          </h1>

          <p className="text-inverse-on-surface/70 text-body-lg mb-8 leading-relaxed font-body">
            We manufacture and install gates, grills, railings and custom fabrication works across Hyderabad. Serving homeowners, builders and contractors since years.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+919246261404"
              className="flex items-center gap-2 btn-primary"
            >
              <Phone size={16} />
              Get Free Quote
            </a>
            <a
              href="https://wa.me/919246261404"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-outline"
            >
              <MessageCircle size={16} className="text-tertiary" />
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-inverse-on-surface/20">
            {['10+ Years Experience', 'All Hyderabad Coverage', 'Free Site Visit'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-inverse-on-surface/60 text-sm font-body">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
