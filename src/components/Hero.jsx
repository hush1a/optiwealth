import { useScrollAnimation } from '../hooks/useScrollAnimation'

function CircularGauge({ score = 78, total = 100 }) {
  const radius = 44
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / total) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="#DCEDC8" strokeWidth="10" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#4CAF50"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-green-800">{score}</span>
          <span className="text-xs text-gray-500">/ {total}</span>
        </div>
      </div>
      <p className="mt-2 text-xs font-semibold text-gray-600 tracking-wide uppercase">Financial Health Score</p>
    </div>
  )
}

function MiniBarChart() {
  const months = ['Feb', 'Mar', 'Apr']
  const values = [72, 85, 61]
  const max = 100

  return (
    <div>
      <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Cash Flow Forecast</p>
      <div className="flex items-end gap-3 h-16">
        {values.map((v, i) => (
          <div key={i} className="flex flex-col items-center gap-1 flex-1">
            <div
              className="w-full rounded-t-sm bg-green-400"
              style={{ height: `${(v / max) * 56}px` }}
            />
            <span className="text-[10px] text-gray-500">{months[i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const textRef = useScrollAnimation()
  const cardRef = useScrollAnimation()

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 bg-green-50 overflow-hidden"
    >
      {/* Subtle background shape */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-green-100 opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: copy */}
          <div ref={textRef} className="fade-in-up flex-1 text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold tracking-wide mb-4">
              AI-Powered Financial Copilot
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-green-900 leading-tight">
              Stop Reacting to Your Finances.{' '}
              <span className="text-green-500">Start Predicting Them.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              OptiWealth is your AI-powered financial copilot — built for Indonesian professionals
              who want to know what's coming, not just what happened.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#waitlist"
                className="px-6 py-3 rounded-lg bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition-colors shadow-sm"
              >
                Start for Free
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3 rounded-lg border-2 border-green-500 text-green-700 font-semibold text-sm hover:bg-green-50 transition-colors"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div ref={cardRef} className="fade-in-up flex-1 w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Dashboard</p>
                  <p className="text-base font-bold text-gray-800">Your Financial Overview</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Live</span>
              </div>

              {/* Score + chart row */}
              <div className="flex items-start justify-between gap-6 mb-5">
                <CircularGauge score={78} total={100} />
                <div className="flex-1">
                  <MiniBarChart />
                </div>
              </div>

              {/* Shortfall alert */}
              <div className="flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 p-3">
                <div className="shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-700">Predicted Shortfall — March</p>
                  <p className="text-xs text-amber-600 mt-0.5">Your subscriptions may exceed budget by Rp 340k</p>
                </div>
              </div>

              {/* Account badges */}
              <div className="mt-4 flex gap-2 flex-wrap">
                {['BCA', 'GoPay', 'OVO', 'Mandiri'].map((bank) => (
                  <span key={bank} className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                    {bank}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
