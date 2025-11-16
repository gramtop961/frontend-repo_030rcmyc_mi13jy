import Hero from './components/Hero'
import SignupForm from './components/SignupForm'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600" />
          <span className="text-xl font-bold tracking-tight text-gray-900">Fammie</span>
        </div>
        <a href="#join" className="text-sm font-semibold text-blue-700 hover:text-blue-900">Join waitlist</a>
      </header>

      <main>
        <Hero />
        <section id="join" className="px-6 pb-8">
          <div className="mx-auto max-w-5xl">
            <SignupForm />
          </div>
        </section>
        <Features />
      </main>

      <footer className="px-6 py-10">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Fammie. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
