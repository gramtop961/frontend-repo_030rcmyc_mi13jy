import { Calendar, CheckCircle2, Utensils, Sparkles } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Calendar,
      title: 'Shared schedules',
      desc: 'Keep everyone on the same page with a unified family calendar.'
    },
    {
      icon: Utensils,
      title: 'Smart meal plans',
      desc: 'Plan weekly menus, auto-generate grocery lists, and reduce food waste.'
    },
    {
      icon: CheckCircle2,
      title: 'Chore assistant',
      desc: 'Assign tasks, set reminders, and reward kids for completing chores.'
    },
    {
      icon: Sparkles,
      title: 'Friendly AI help',
      desc: 'Ask Fammie to organize, summarize, and nudge when you need it.'
    }
  ]

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-100 bg-white/70 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
