import { useScrollAnimation } from '../hooks/useScrollAnimation'

const problems = [
  {
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'You only see the past',
    desc: "Standard bank apps show historical data with no forward-looking insight. You're always one step behind.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.572 1.572A3 3 0 0116.106 18H7.894a3 3 0 01-2.122-.879L4.2 15m15.6 0l-2.7 2.7" />
      </svg>
    ),
    title: 'Your money is scattered',
    desc: 'You jump between 4+ apps to see your full financial picture — GoPay, OVO, BCA, Mandiri, all siloed.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: 'You discover problems too late',
    desc: 'Overspending is caught a month after it happens. By then, the damage is done and the money is gone.',
  },
]

function ProblemCard({ icon, title, desc, delay }) {
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="fade-in-up bg-white rounded-xl border border-gray-100 shadow-sm p-6 border-l-4 border-l-green-500"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}

export default function Problem() {
  const titleRef = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="fade-in-up text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900">Why Most Finance Apps Fail You</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">The tools you're using were built to record — not to advise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <ProblemCard key={i} {...p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
