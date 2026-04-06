export default function Products() {
  const products = [
    {
      name: 'Doccure',
      description: 'AI-driven virtual consultations, automatic vital readings, secure patient management, and robust scheduling for remote healthcare.',
      icon: '⚕️'
    },
    {
      name: 'Edtech Platform',
      description: 'Comprehensive learning management system with interactive content, student progress tracking, and teacher collaboration tools.',
      icon: '📚'
    },
    {
      name: 'E-Commerce Suite',
      description: 'Full-featured e-commerce platform with inventory management, payment processing, and customer analytics.',
      icon: '🛍️'
    }
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-gray-400">Industry-leading solutions built with cutting-edge technology</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              <div className="text-5xl mb-6">{product.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition">{product.name}</h3>
              <p className="text-gray-300 leading-relaxed">{product.description}</p>
              <button className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
