import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Performances', href: '#performances' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-yellow-400 to-yellow-500 ring-2 ring-yellow-300 shadow-inner flex items-center justify-center">
              <span className="text-navy-900 font-bold">A</span>
            </div>
            <div className="leading-tight">
              <p className="font-heading text-navy-900 font-semibold text-lg tracking-wide group-hover:text-yellow-600 transition-colors">Arpeggio Academy</p>
              <p className="text-xs text-navy-700/70">Master Your Melody</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-navy-900/90 hover:text-yellow-600 font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-yellow-500 after:transition-all">
                {item.label}
              </a>
            ))}
            <a href="#admissions" className="ml-4 inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-navy-900 font-semibold px-4 py-2 rounded-md shadow-sm transition-colors">
              Enroll Today
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-navy-900 hover:bg-navy-900/5 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/95">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-navy-900 hover:bg-navy-900/5">
                {item.label}
              </a>
            ))}
            <a href="#admissions" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-navy-900 font-semibold text-center">
              Enroll Today
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
