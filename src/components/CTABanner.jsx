import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function CTABanner() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useScrollAnimation()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="waitlist" className="py-20 bg-green-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={ref} className="fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Know Your Financial Future?
          </h2>
          <p className="text-green-200 text-lg mb-8">
            Join the waitlist and get early access to OptiWealth's beta.
          </p>

          {submitted ? (
            <div className="bg-green-800 rounded-xl px-8 py-6 inline-block">
              <p className="text-white font-semibold text-lg">You're on the list!</p>
              <p className="text-green-300 text-sm mt-1">We'll reach out when beta access opens.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-white text-green-700 font-semibold text-sm hover:bg-green-50 transition-colors whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
