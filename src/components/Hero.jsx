export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-navy-900 to-navy-900" />
        <svg className="absolute -right-24 -top-24 w-[600px] h-[600px] opacity-20" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 C150 200 300 0 450 100" stroke="#FDE68A" strokeWidth="1" />
          <path d="M0 200 C150 300 300 100 450 200" stroke="#FDE68A" strokeWidth="1" />
          <path d="M0 300 C150 400 300 200 450 300" stroke="#FDE68A" strokeWidth="1" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 ring-1 ring-yellow-300/30 mb-4">Premium Music Education</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Master Your Melody
          </h1>
          <p className="mt-6 text-navy-100 text-lg leading-relaxed">
            Arpeggio Academy offers expert-led lessons in voice and instruments for all ages. Build technique, artistry, and confidence with world-class faculty and a proven curriculum.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#admissions" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-yellow-500 hover:bg-yellow-600 text-navy-900 font-semibold shadow-lg shadow-yellow-500/20 transition-colors">
              Enroll Today
            </a>
            <a href="#programs" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 hover:bg-white/10 text-white font-semibold transition-colors">
              Explore Programs
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-navy-100/80">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              Live recitals every term
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              ABRSM & RCM prep
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1680&auto=format&fit=crop"
              alt="Singer performing with passion"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-yellow-400/20 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
