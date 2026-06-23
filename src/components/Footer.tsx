import { Hammer } from 'lucide-react';

const quickLinks = ['Home', 'Services', 'Gallery', 'About Us', 'Contact'];
const serviceLinks = [
  'Iron Gates',
  'Safety Grills',
  'Balcony Railings',
  'Stair Railings',
  'Industrial Fabrication',
  'Custom Welding Works',
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-inverse-on-surface/60">
      <div className="max-w-container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-primary rounded flex items-center justify-center">
              <Hammer size={18} className="text-on-primary" />
            </div>
            <div>
              <p className="text-inverse-on-surface font-heading font-bold text-base">MI IRONWORLD</p>
              <p className="text-inverse-on-surface/40 text-xs font-body">Fabrication Works</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed font-body">
            Professional iron fabrication company in Hyderabad. We handle gates, grills, railings and custom MS fabrication works.
          </p>
        </div>

        <div>
          <h4 className="text-inverse-on-surface text-sm font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l === 'About Us' ? 'about' : l === 'Home' ? 'hero' : l.toLowerCase())}
                  className="text-sm font-body hover:text-secondary transition-colors"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-inverse-on-surface text-sm font-heading font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((s) => (
              <li key={s}>
                <button
                  onClick={() => scrollTo('services')}
                  className="text-sm font-body hover:text-secondary transition-colors"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-inverse-on-surface text-sm font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm font-body">
            <li><a href="tel:+919246261404" className="hover:text-secondary transition-colors">Mohammed Irfan: +91 92462 61404</a></li>
            <li><a href="tel:+919515246324" className="hover:text-secondary transition-colors">Mohd Mutchar: +91 95152 46324</a></li>
            <li><a href="mailto:mi.ironworld@gmail.com" className="hover:text-secondary transition-colors">mi.ironworld@gmail.com</a></li>
            <li><a href="http://www.miironworld.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">www.miironworld.in</a></li>
            <li className="leading-relaxed">Shop No 14-8-100/B, Safdar Nagar,<br />Allapur, Hyderabad – 500018,<br />Telangana, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-outline/20 py-4">
        <p className="text-center text-xs font-body text-inverse-on-surface/40">
          &copy; {new Date().getFullYear()} MI IRONWORLD. All rights reserved. | Hyderabad, Telangana
        </p>
      </div>
    </footer>
  );
}
