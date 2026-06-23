import { BadgeCheck, CircleDollarSign, CalendarCheck, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Quality Workmanship',
    desc: 'Clean welds, accurate measurements, and proper finishing on every job we take up.',
  },
  {
    icon: CircleDollarSign,
    title: 'Affordable Pricing',
    desc: 'Competitive market rates with transparent quotations. No hidden charges.',
  },
  {
    icon: CalendarCheck,
    title: 'Timely Completion',
    desc: 'We plan and commit to a schedule so your project is not delayed.',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    desc: 'We do not close a job until the client is fully satisfied with the work.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-inverse-surface">
      <div className="max-w-container mx-auto px-4">
        <div className="mb-10">
          <p className="section-label">Why Clients Choose Us</p>
          <h2 className="font-heading text-headline-lg-mobile md:text-headline-lg text-inverse-on-surface mb-4">Why Choose Us</h2>
          <div className="w-12 h-1 bg-secondary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#363636] border border-outline rounded p-6 hover:border-secondary transition-colors"
            >
              <div className="w-11 h-11 bg-secondary/15 rounded flex items-center justify-center mb-4">
                <Icon size={20} className="text-secondary" />
              </div>
              <h3 className="text-inverse-on-surface font-heading font-semibold text-sm mb-2">
                {title}
              </h3>
              <p className="text-inverse-on-surface/60 text-xs leading-relaxed font-body">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
