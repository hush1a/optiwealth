const ChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="12" width="4" height="8" rx="1" fill="#4CAF50" />
    <rect x="9" y="7" width="4" height="13" rx="1" fill="#4CAF50" />
    <rect x="16" y="3" width="4" height="17" rx="1" fill="#2E7D32" />
  </svg>
)

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path strokeLinecap="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l16 16M4 20L20 4" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <ChartIcon />
              <span className="text-lg font-bold text-green-500">OptiWealth</span>
            </div>
            <p className="text-xs text-gray-400 max-w-[200px] text-center md:text-left">
              From expense tracking to predictive financial strategy.
            </p>
          </div>

          {/* Links */}
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2026 EFN Corp. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
