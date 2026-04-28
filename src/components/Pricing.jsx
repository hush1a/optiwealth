import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CheckIcon = () => (
  <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const freeFeatures = [
  'Opti-Sync Dashboard (multi-account view)',
  'Basic transaction analytics',
  'Limited cash flow forecasting',
]

const premiumFeatures = [
  'Everything in Free',
  'Advanced scenario modeling',
  'Wealth diagnostics',
  'Dynamic allocation recommendations',
  'Personalized Nudge Engine',
  'Wealth Advisory Pro',
]

function FreePlan({ ref: _ref }) {
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="fade-in-up bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col"
      style={{ transitionDelay: '0ms' }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">Free</h3>
        <div className="mt-3 flex items-end gap-1">
          <span className="text-4xl font-extrabold text-gray-900">Rp 0</span>
          <span className="text-gray-400 mb-1">/ month</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">Perfect for getting started.</p>
      </div>
      <ul className="space-y-3 flex-1 mb-8">
        {freeFeatures.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#waitlist"
        className="block text-center px-5 py-3 rounded-lg border-2 border-green-500 text-green-700 font-semibold text-sm hover:bg-green-50 transition-colors"
      >
        Get Started Free
      </a>
    </div>
  )
}

function PremiumPlan() {
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="fade-in-up relative bg-green-900 rounded-2xl shadow-xl p-8 flex flex-col ring-2 ring-green-500"
      style={{ transitionDelay: '120ms' }}
    >
      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-green-500 text-white text-xs font-bold tracking-wide">
        Most Popular
      </span>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">Premium</h3>
        <div className="mt-3 flex items-end gap-1">
          <span className="text-4xl font-extrabold text-white">Rp 89k</span>
          <span className="text-green-300 mb-1">/ month</span>
        </div>
        <p className="mt-2 text-sm text-green-300">Full predictive power, unlocked.</p>
      </div>
      <ul className="space-y-3 flex-1 mb-8">
        {premiumFeatures.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-green-100">
            <svg className="w-4 h-4 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#waitlist"
        className="block text-center px-5 py-3 rounded-lg bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition-colors"
      >
        Upgrade to Premium
      </a>
      <p className="mt-3 text-center text-xs text-green-400">Cancel anytime. No commitment.</p>
    </div>
  )
}

export default function Pricing() {
  const titleRef = useScrollAnimation()

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="fade-in-up text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900">Simple, Transparent Pricing</h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto">Start free. Upgrade when you're ready to unlock the full picture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <FreePlan />
          <PremiumPlan />
        </div>
      </div>
    </section>
  )
}
