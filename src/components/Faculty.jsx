const faculty = [
  {
    name: 'Dr. Elena Rossi',
    role: 'Director of Vocal Studies',
    bio: 'Juilliard-trained soprano with 15+ years of international performance and pedagogy.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Piano Department',
    bio: 'Concert pianist and adjudicator specializing in Romantic repertoire and technique.',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Ava Thompson',
    role: 'Guitar & Strings',
    bio: 'Performer and arranger with a focus on ensemble coaching and modern styles.',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function Faculty() {
  return (
    <section id="faculty" className="relative bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900">Meet the Faculty</h2>
          <p className="mt-3 text-navy-700 max-w-2xl mx-auto">
            World-class educators dedicated to nurturing musical excellence.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {faculty.map((t) => (
            <article key={t.name} className="rounded-xl overflow-hidden bg-white ring-1 ring-navy-900/10 shadow-sm">
              <img src={t.photo} alt={t.name} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy-900">{t.name}</h3>
                <p className="text-sm text-yellow-700 font-medium">{t.role}</p>
                <p className="mt-2 text-sm text-navy-700/80">{t.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
