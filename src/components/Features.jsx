import { useScrollAnimation } from '../hooks/useScrollAnimation'

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: 'Opti-Sync Dashboard',
    desc: 'Unifies all your bank accounts and e-wallets (BCA, Mandiri, GoPay, OVO) into one view via Open Finance APIs.',
    badge: 'Free tier',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Forecast Copilot',
    desc: 'Analyzes your spending to predict upcoming cash flow shortages before they happen. Stay ahead, always.',
    badge: 'AI-powered',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: 'The Nudge Engine',
    desc: 'Sends gamified alerts to stop impulse buys and auto-routes spare change into savings goals you actually care about.',
    badge: 'Smart alerts',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Wealth Advisory Pro',
    desc: 'Personalized investment recommendations in SBN and local mutual funds based on your predicted monthly surplus.',
    badge: 'Premium',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
]

function FeatureCard({ icon, title, desc, badge, badgeColor, delay }) {
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="fade-in-up bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-1 bg-green-500" />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 rounded-lg bg-green-50">{icon}</div>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${badgeColor}`}>{badge}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function Features() {
  const titleRef = useScrollAnimation()

  return (
    <section id="features" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="fade-in-up text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900">Your Predictive Financial Copilot</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">Four powerful tools, one unified platform — free to start, powerful at scale.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
