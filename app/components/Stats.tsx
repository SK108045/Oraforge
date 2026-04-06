import { Award, Users, TrendingUp, Target } from 'lucide-react'

const stats = [
  {
    icon: Award,
    number: '10+',
    label: 'Years of Experience',
    color: 'text-[#0066cc]'
  },
  {
    icon: Users,
    number: '500+',
    label: 'Happy Clients',
    color: 'text-[#00d084]'
  },
  {
    icon: TrendingUp,
    number: '200+',
    label: 'Projects Delivered',
    color: 'text-[#0052a3]'
  },
  {
    icon: Target,
    number: '99%',
    label: 'Client Satisfaction',
    color: 'text-[#ff6b6b]'
  }
]

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0066cc] to-[#0052a3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-4">
                  <Icon className={`w-12 h-12 ${stat.color}`} />
                </div>
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-200">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
