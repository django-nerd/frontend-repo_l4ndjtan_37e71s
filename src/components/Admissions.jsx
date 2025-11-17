export default function Admissions() {
  return (
    <section id="admissions" className="relative bg-navy-900 text-white">
      <div className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-white to-transparent opacity-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Admissions & Enrollment</h2>
          <p className="mt-4 text-navy-100">
            We offer rolling admissions with flexible scheduling. Private lessons start at $65/session, with package discounts and financial aid available.
          </p>
          <ul className="mt-6 space-y-3 text-navy-100/90">
            <li>• Complimentary 15-minute placement consultation</li>
            <li>• Custom lesson plans and progress reports</li>
            <li>• Exam preparation (ABRSM, RCM) and recital opportunities</li>
          </ul>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="bg-white/5 backdrop-blur rounded-xl p-6 ring-1 ring-white/10">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input className="w-full rounded-md bg-white/10 focus:bg-white/20 border-0 px-3 py-2 outline-none" placeholder="Alex" />
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input className="w-full rounded-md bg-white/10 focus:bg-white/20 border-0 px-3 py-2 outline-none" placeholder="Park" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full rounded-md bg-white/10 focus:bg-white/20 border-0 px-3 py-2 outline-none" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">Program of Interest</label>
              <select className="w-full rounded-md bg-white/10 focus:bg-white/20 border-0 px-3 py-2 outline-none">
                <option>Vocal Arts</option>
                <option>Piano Performance</option>
                <option>Guitar & Strings</option>
                <option>Youth Foundations</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">Message</label>
              <textarea rows="4" className="w-full rounded-md bg-white/10 focus:bg-white/20 border-0 px-3 py-2 outline-none" placeholder="Tell us about your goals..." />
            </div>
          </div>
          <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-navy-900 font-semibold px-4 py-2 rounded-md shadow">
            Request Info
          </button>
          <p className="mt-3 text-xs text-navy-100/70 text-center">This is a demo form for design preview.</p>
        </form>
      </div>
    </section>
  )
}
