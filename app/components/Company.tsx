export default function Company() {
  const sections = [
    {
      title: 'About Us',
      description: 'Your digital transformation partner, building software that adapts, evolves, and excels with your business.',
      link: 'Learn More'
    },
    {
      title: 'Case Studies',
      description: 'Discover real-world success stories. See how we\'ve transformed businesses across industries with our innovative solutions.',
      link: 'Learn More'
    },
    {
      title: 'Blogs',
      description: 'Get insights on trends, thoughtful articles, and expert perspectives for growth. Explore our blogs for expert advice.',
      link: 'Learn More'
    },
    {
      title: 'Careers',
      description: 'We are always on the lookout for talented individuals passionate about software building.',
      link: 'Learn More'
    },
    {
      title: 'Contact Us',
      description: 'Have questions or need assistance? Reach out to us for prompt support and expert guidance.',
      link: 'Learn More'
    }
  ];

  return (
    <section id="company" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Company</h2>
          <p className="text-xl text-gray-400">Explore our journey and connect with us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">{section.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{section.description}</p>
              <a href="#" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition font-semibold">
                {section.link}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
