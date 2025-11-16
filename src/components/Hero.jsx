import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16">
      <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-300/40 to-blue-300/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-pink-300/40 to-purple-300/40 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
        >
          Meet Fammie — your family AI assistant
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600"
        >
          Organize schedules, plan meals, manage chores, and keep everyone in sync — all in one friendly app.
        </motion.p>
      </div>
    </section>
  )
}
