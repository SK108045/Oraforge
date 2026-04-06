import { Code2, Rocket, Cloud, Smartphone, Zap, Users } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Empower your business with custom software solutions tailored to your needs. We build technology that drives innovation and efficiency.'
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Transform your idea into a market-ready product. Build the simplest version that solves your core problem and validates your concept.'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Integrating cloud services with DevOps practices for streamlined, agile, and scalable IT operations and development.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Future-proof your business with advanced cloud technology. Leverage elastic, auto-scaling cloud environments for growth.'
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Orchestrate your digital transformation journey. We accelerate your aspirations into reality with expert guidance.'
  },
  {
    icon: Users,
    title: 'Staff Augmentation',
    description: 'Enhance your team&apos;s capabilities with our flexible staff augmentation services tailored to your project needs.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-4">
            Our Technology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to drive innovation and accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 bg-[#f8f9fa] rounded-lg border border-gray-200 hover:border-[#0066cc] hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 inline-block p-3 bg-[#0066cc] bg-opacity-10 rounded-lg group-hover:bg-[#0066cc] group-hover:bg-opacity-20 transition-all">
                  <Icon className="w-8 h-8 text-[#0066cc]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
