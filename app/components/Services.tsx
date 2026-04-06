export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Empower your business with custom software solutions tailored to your needs. We build technology that drives innovation and efficiency.'
    },
    {
      icon: '🚀',
      title: 'MVP Development',
      description: 'Launch your product faster with our MVP development services. From concept to market in record time with minimal investment.'
    },
    {
      icon: '⚡',
      title: 'Digital Transformation',
      description: 'Transform your business operations with cutting-edge digital solutions. We modernize legacy systems for the digital age.'
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Leverage cloud technologies and DevOps practices for scalable, reliable, and efficient infrastructure management.'
    },
    {
      icon: '👥',
      title: 'Staff Augmentation',
      description: 'Enhance your team with expert developers. Flexible engagement models tailored to your project needs.'
    },
    {
      icon: '🤖',
      title: 'AI Solutions',
      description: 'Harness the power of AI and machine learning to solve complex business problems and drive innovation.'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-400">Comprehensive technology solutions for modern businesses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gray-900/50 hover:bg-blue-900/40 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
