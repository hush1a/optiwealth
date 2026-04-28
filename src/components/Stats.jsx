import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stats = [
  { value: '37%', label: 'of adults can\'t cover a $400 emergency' },
  { value: '65.43%', label: 'financial literacy index in Indonesia (2024)' },
  { value: '50%', label: 'better budgeting accuracy with AI tools' },
  { value: '53%', label: 'of Indonesian workers undersaved last year' },
]

function StatItem({ value, label, delay }) {
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="fade-in-up text-center px-4"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-4xl sm:text-5xl font-extrabold text-white mb-2">{value}</p>
      <p className="text-sm text-green-200 leading-snug max-w-[160px] mx-auto">{label}</p>
    </div>
  )
}

export default function Stats() {
  const taglineRef = useScrollAnimation()

  return (
    <section className="py-20 bg-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} delay={i * 100} />
          ))}
        </div>

        <div ref={taglineRef} className="fade-in-up text-center">
          <div className="h-px bg-green-700 max-w-xs mx-auto mb-6" />
          <p className="text-xl sm:text-2xl font-semibold text-white">
            OptiWealth was built to close this gap.
          </p>
        </div>
      </div>
    </section>
  )
}
