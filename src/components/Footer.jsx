export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-heading text-lg font-semibold">Arpeggio Academy</p>
          <p className="text-sm text-navy-200/80 mt-2">Inspiring musicianship through excellence and artistry.</p>
        </div>
        <div>
          <p className="font-semibold">Visit</p>
          <p className="text-sm text-navy-200/80 mt-2">123 Sonata Lane, Suite 4<br/>Harmonia, NY 10001</p>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="text-sm text-navy-200/80 mt-2">info@arpeggio.academy<br/>+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 text-xs text-navy-200/70 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Arpeggio Academy. All rights reserved.</p>
          <p>Design concept for demo purposes.</p>
        </div>
      </div>
    </footer>
  )
}
