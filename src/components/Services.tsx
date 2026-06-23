import { DoorOpen, Shield, Fence, MoveVertical, Factory, Wrench } from 'lucide-react';

const services = [
  {
    icon: DoorOpen,
    name: 'Iron Gates',
    desc: 'Custom designed main gates, sliding gates and swing gates fabricated with quality MS material for residential and commercial properties.',
  },
  {
    icon: Shield,
    name: 'Safety Grills',
    desc: 'Window grills and door grills for enhanced security. Available in standard and decorative designs to match your property.',
  },
  {
    icon: Fence,
    name: 'Balcony Railings',
    desc: 'Sturdy and stylish balcony railings with various design options. Powder-coated finish for long-lasting protection against rust.',
  },
  {
    icon: MoveVertical,
    name: 'Stair Railings',
    desc: 'Indoor and outdoor stair handrails and railings. Custom fabricated to your staircase dimensions with clean welds and smooth finish.',
  },
  {
    icon: Factory,
    name: 'Industrial Fabrication',
    desc: 'Heavy duty MS structures, sheds, mezzanine floors and industrial frameworks for factories, warehouses and commercial premises.',
  },
  {
    icon: Wrench,
    name: 'Custom Welding Works',
    desc: 'Skilled welding and custom metalwork for any requirement. From small repairs to large fabrication projects handled with precision.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-surface-container-low">
      <div className="max-w-container mx-auto px-4">
        <div className="mb-10">
          <p className="section-label">What We Do</p>
          <h2 className="section-heading">Our Services</h2>
          <div className="section-underline" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="card group"
            >
              <div className="icon-box mb-4 group-hover:bg-secondary transition-colors">
                <Icon size={22} className="text-secondary group-hover:text-on-secondary transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-on-surface text-base mb-2">
                {name}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
