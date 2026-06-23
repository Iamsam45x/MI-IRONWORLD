import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send } from 'lucide-react';

const services = [
  'Iron Gates',
  'Safety Grills',
  'Balcony Railings',
  'Stair Railings',
  'Industrial Fabrication',
  'Custom Welding Works',
  'Other',
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-surface-container-lowest">
      <div className="max-w-container mx-auto px-4">
        <div className="mb-10">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-heading">Request a Quote</h2>
          <div className="section-underline" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-primary/5 border border-primary/20 rounded p-8 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={22} className="text-primary" />
                </div>
                <h3 className="text-on-surface font-heading font-semibold text-lg mb-2">
                  Thank You!
                </h3>
                <p className="text-on-surface-variant text-sm font-body">
                  We received your enquiry. Our team will call you back within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-on-surface mb-1.5 font-body">
                      Your Name <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full border border-outline-variant rounded px-3 py-2.5 text-sm text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors bg-surface-container-lowest font-body"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-on-surface mb-1.5 font-body">
                      Phone Number <span className="text-error">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-outline-variant rounded px-3 py-2.5 text-sm text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors bg-surface-container-lowest font-body"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-on-surface mb-1.5 font-body">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-outline-variant rounded px-3 py-2.5 text-sm text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors bg-surface-container-lowest font-body"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-on-surface mb-1.5 font-body">
                    Service Needed <span className="text-error">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-outline-variant rounded px-3 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors bg-surface-container-lowest font-body"
                  >
                    <option value="">-- Select a Service --</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-on-surface mb-1.5 font-body">
                    Message / Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your requirement (location, size, quantity, etc.)"
                    className="w-full border border-outline-variant rounded px-3 py-2.5 text-sm text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors resize-none bg-surface-container-lowest font-body"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Get Quote'}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: Phone,
                label: 'Phone',
                lines: ['Mohammed Irfan: +91 92462 61404', 'Mohd Mutchar: +91 95152 46324'],
                href: 'tel:+919246261404',
              },
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                lines: ['+91 92462 61404'],
                href: 'https://wa.me/919246261404',
              },
              {
                icon: Mail,
                label: 'Email',
                lines: ['mi.ironworld@gmail.com'],
                href: 'mailto:mi.ironworld@gmail.com',
              },
              {
                icon: MapPin,
                label: 'Address',
                lines: ['Shop No 14-8-100/B, Safdar Nagar,', 'Allapur, Hyderabad – 500018, Telangana'],
                href: 'https://maps.google.com/?q=Safdar+Nagar+Allapur+Hyderabad',
              },
            ].map(({ icon: Icon, label, lines, href }) => (
              <a
                key={label}
                href={href}
                className="flex gap-4 p-4 border border-outline-variant rounded hover:border-secondary hover:shadow-tactile transition-all group"
              >
                <div className="w-10 h-10 bg-secondary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                  <Icon size={17} className="text-secondary group-hover:text-on-secondary transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant mb-0.5 font-body">{label}</p>
                  {lines.map((l) => (
                    <p key={l} className="text-on-surface text-sm font-medium font-body">{l}</p>
                  ))}
                </div>
              </a>
            ))}

            <div className="rounded border border-outline-variant overflow-hidden">
              <iframe
                title="MI IRONWORLD Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.4534!3d17.3851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97b5c0000001%3A0x1!2sSafdar+Nagar%2C+Allapur%2C+Hyderabad%2C+Telangana+500018!5e0!3m2!1sen!2sin!4v1714000000001"
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
