import { useScrollAnimation } from '../hooks/useScrollAnimation'

const milestones = [
  { months: '1–2', label: 'Secure Data Foundation' },
  { months: '2–3', label: 'Behavioral Financial Twin' },
  { months: '3–5', label: 'Predictive Engine' },
  { months: '5–6', label: 'UX Integration' },
  { months: '6–7', label: 'Beta Launch' },
  { months: '7–8', label: 'Commercialization' },
  { months: '8–10', label: 'Autonomous Orchestration' },
]

export default function Timeline() {
  const titleRef = useScrollAnimation()
  const timelineRef = useScrollAnimation()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="fade-in-up text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900">Implementation Roadmap</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">From infrastructure to autonomous AI — a structured 10-month journey.</p>
        </div>

        {/* Desktop: horizontal scroll */}
        <div ref={timelineRef} className="fade-in-up overflow-x-auto pb-4">
          <div className="min-w-[700px]">
            {/* Month labels */}
            <div className="flex justify-between mb-2 px-6">
              {milestones.map((m) => (
                <div key={m.months} className="flex flex-col items-center text-center flex-1">
                  <span className="text-[11px] font-semibold text-green-700 whitespace-nowrap">Mo {m.months}</span>
                </div>
              ))}
            </div>

            {/* Line + dots */}
            <div className="relative flex items-center px-6 mb-4">
              <div className="absolute left-6 right-6 h-0.5 bg-green-200" />
              <div className="flex justify-between w-full relative z-10">
                {milestones.map((m, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div className="w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-100 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Labels */}
            <div className="flex justify-between px-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex-1 flex justify-center">
                  <p className="text-[11px] text-gray-600 text-center font-medium max-w-[80px] leading-tight">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden mt-6 space-y-4">
          {milestones.map((m, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-1" />
                {i < milestones.length - 1 && <div className="w-0.5 h-8 bg-green-200 mt-1" />}
              </div>
              <div>
                <p className="text-xs font-semibold text-green-700">Month {m.months}</p>
                <p className="text-sm text-gray-700 font-medium">{m.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
