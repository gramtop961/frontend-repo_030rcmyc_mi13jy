import { useState } from 'react'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Joining waitlist...' })

    try {
      const res = await fetch(`${backend}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source: 'landing' })
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.detail || `Request failed (${res.status})`)
      }

      setStatus({ state: 'success', message: 'You’re in! We’ll be in touch soon.' })
      setEmail('')
      setName('')
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Something went wrong.' })
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <input
            type="text"
            placeholder="Name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="col-span-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="sm:col-span-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          disabled={status.state === 'loading'}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-60"
        >
          {status.state === 'loading' ? 'Please wait…' : 'Join the Waitlist'}
        </button>

        {status.state !== 'idle' && (
          <p className={`text-sm ${status.state === 'error' ? 'text-red-600' : 'text-green-700'}`}>
            {status.message}
          </p>
        )}
      </form>
      <p className="mt-3 text-center text-xs text-gray-500">
        By joining, you agree to receive occasional updates about Fammie. No spam, unsubscribe anytime.
      </p>
    </div>
  )
}
