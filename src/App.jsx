import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Faculty from './components/Faculty'
import Admissions from './components/Admissions'
import Performances from './components/Performances'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream text-navy-900">
      <Navbar />
      <Hero />
      <Programs />
      <Faculty />
      <Admissions />
      <Performances />
      <section id="contact" className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="rounded-xl border border-navy-900/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-bold">Contact</h2>
            <p className="mt-2 text-navy-700">Have questions? We’d love to help you find the right program.</p>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-navy-700/80">Email</p>
                <p className="font-medium">info@arpeggio.academy</p>
              </div>
              <div>
                <p className="text-sm text-navy-700/80">Phone</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-sm text-navy-700/80">Hours</p>
                <p className="font-medium">Mon–Sat, 9:00–19:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
