import { Users, PackageCheck, Timer, Pencil } from 'lucide-react';

const highlights = [
  { icon: Users, label: 'Experienced Workforce', desc: 'Skilled welders and fabricators with years of hands-on site experience.' },
  { icon: PackageCheck, label: 'Quality Materials', desc: 'We use only tested MS pipes, angles and flat bars sourced from reliable suppliers.' },
  { icon: Timer, label: 'On-Time Delivery', desc: 'We respect your construction timelines and commit to completing jobs as scheduled.' },
  { icon: Pencil, label: 'Custom Designs', desc: 'Every project is designed as per your requirement. No off-the-shelf templates.' },
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-surface-container-lowest">
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="MI IRONWORLD fabrication team"
              className="w-full h-80 lg:h-96 object-cover rounded border border-outline-variant"
            />
            <div className="absolute -bottom-4 -right-4 bg-secondary text-on-secondary px-5 py-3 rounded shadow-level-1 hidden md:block">
              <p className="text-label-sm font-body">Trusted Since</p>
              <p className="text-2xl font-bold font-heading">2014</p>
            </div>
          </div>

          <div>
            <p className="section-label">Who We Are</p>
            <h2 className="section-heading">About MI IRONWORLD</h2>
            <div className="section-underline mb-5" />

            <p className="text-on-surface-variant text-body-md leading-relaxed mb-4 font-body">
              MI IRONWORLD is a Hyderabad-based fabrication company specializing in iron gates, safety grills, railings, and all types of MS fabrication works. We have been serving homeowners, builders, apartment associations and commercial property owners across Hyderabad for over a decade.
            </p>
            <p className="text-on-surface-variant text-body-md leading-relaxed mb-8 font-body">
              Our workshop is equipped with modern welding and cutting machinery. Every piece we fabricate goes through quality checks before installation to ensure it meets the client's expectations and lasts for years without issues.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex gap-3">
                  <div className="mt-0.5 w-9 h-9 bg-secondary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-on-surface text-sm font-semibold font-heading">{label}</p>
                    <p className="text-on-surface-variant text-xs leading-relaxed mt-0.5 font-body">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
