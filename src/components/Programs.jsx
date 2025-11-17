const programs = [
  {
    title: 'Vocal Arts',
    description: 'Classical, jazz, and contemporary voice training with emphasis on breath, tone, and performance.',
    icon: '🎤',
  },
  {
    title: 'Piano Performance',
    description: 'Technique, repertoire, sight-reading, and theory for beginner to advanced pianists.',
    icon: '🎹',
  },
  {
    title: 'Guitar & Strings',
    description: 'Acoustic, electric, and string ensemble coaching. Learn rhythm, harmony, and stage presence.',
    icon: '🎸',
  },
  {
    title: 'Youth Foundations',
    description: 'Ages 5–12. Fun, structured introduction to music literacy, rhythm, and ensemble skills.',
    icon: '🎵',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="relative bg-white">
      <div className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-navy-900 to-transparent opacity-20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900">Our Programs</h2>
          <p className="mt-3 text-navy-700 max-w-2xl mx-auto">
            Structured learning paths for every age and level. Private lessons, group classes, and ensemble opportunities.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="group rounded-xl border border-navy-900/10 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="text-3xl">{p.icon}</div>
              <h3 className="mt-4 font-semibold text-navy-900 text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-navy-700/80">{p.description}</p>
              <a href="#admissions" className="mt-4 inline-flex text-sm font-semibold text-yellow-600 hover:text-yellow-700">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
