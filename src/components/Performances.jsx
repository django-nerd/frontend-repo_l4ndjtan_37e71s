export default function Performances() {
  return (
    <section id="performances" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900">Performances & Showcases</h2>
            <p className="mt-4 text-navy-700">
              Students perform in seasonal recitals, masterclasses, and community concerts. We celebrate growth, artistry, and collaboration.
            </p>
            <ul className="mt-6 space-y-2 text-navy-700/90">
              <li>• Winter Gala at the Grand Hall</li>
              <li>• Spring Chamber Music Series</li>
              <li>• Summer Pop/Rock Showcase</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop" alt="Singer" />
            <img className="rounded-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=1200&auto=format&fit=crop" alt="Piano" />
            <img className="rounded-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop" alt="Guitar" />
            <img className="rounded-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop" alt="Ensemble" />
          </div>
        </div>
      </div>
    </section>
  )}
