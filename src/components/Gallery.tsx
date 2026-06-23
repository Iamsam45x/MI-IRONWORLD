const projects = [
  {
    label: 'Main Gate Installation',
    img: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    label: 'Balcony Railing',
    img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    label: 'Industrial Shed Work',
    img: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    label: 'Security Grills',
    img: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    label: 'Stair Railing',
    img: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    label: 'Custom Gate Work',
    img: 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-surface-container-low">
      <div className="max-w-container mx-auto px-4">
        <div className="mb-10">
          <p className="section-label">Our Portfolio</p>
          <h2 className="section-heading">Recent Work</h2>
          <div className="section-underline" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ label, img }) => (
            <div key={label} className="group relative overflow-hidden rounded border border-outline-variant bg-surface-container-lowest shadow-tactile">
              <img
                src={img}
                alt={label}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-on-surface/80 py-2.5 px-4">
                <p className="text-inverse-on-surface text-sm font-medium font-body">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
