export default function MobileFloatingCTA() {
  return (
    <div className="fixed bottom-5 left-4 right-4 z-40 md:hidden">
      <a
        href="#waitlist"
        className="block text-center px-6 py-3.5 rounded-xl bg-green-500 text-white font-semibold text-sm shadow-lg hover:bg-green-600 transition-colors"
      >
        Get Early Access
      </a>
    </div>
  )
}
