import { useScrollAnimation } from '../hooks/useScrollAnimation'

const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: 'Connect your accounts',
    desc: 'Link BCA, GoPay, OVO, and Mandiri securely in under 2 minutes using Open Finance APIs.',
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: 'Get your Financial Twin',
    desc: 'AI builds a behavioral model of your spending patterns — your unique financial DNA.',
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'See your financial future',
    desc: 'Receive forward-looking cash flow forecasts and personalized nudges before problems arise.',
  },
]

function StepCard({ number, icon, title, desc, delay }) {
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="fade-in-up flex flex-col items-center text-center md:items-start md:text-left"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-5xl font-extrabold text-green-100 select-none leading-none mb-3">{number}</span>
      <div className="p-3 rounded-xl bg-green-100 mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{desc}</p>
    </div>
  )
}

export default function HowItWorks() {
  const titleRef = useScrollAnimation()

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="fade-in-up text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900">3 Steps to Financial Clarity</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">From sign-up to your first prediction in minutes.</p>
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[88px] left-[16.66%] right-[16.66%] h-0.5 bg-green-100" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {steps.map((s, i) => (
              <StepCard key={i} {...s} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
