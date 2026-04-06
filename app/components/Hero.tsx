'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Empower Your Business with AI-Driven Custom Software Solution',
    description: 'From concept to execution, OraforgeTechnologies delivers innovative, secure, and scalable AI-powered software engineered to shape the future of your business.',
    link: '#'
  },
  {
    title: 'Your First Step to Startup Success',
    description: 'An MVP (Minimum Viable Product) is the simplest version of your product that addresses the core problem, serving as the essential first step towards your startup\'s success.',
    link: '#'
  },
  {
    title: 'Drive and Orchestrate Digital Transformation',
    description: 'At OraforgeTechnologies, we bring digital expertise to drive and orchestrate your digital transformation journey. Let us be your guide in the realm of digital possibilities.',
    link: '#'
  },
  {
    title: 'Transform Your Idea into a Market-Leading SaaS Platform',
    description: 'Build scalable SaaS solutions with our expert development team. We specialize in creating robust, secure, and user-friendly SaaS platforms.',
    link: '#'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-section pt-20">
      <div className="video-container">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-black"></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="carousel w-full">
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item transition-opacity duration-1000 ${
                  index === current ? 'active' : ''
                }`}
              >
                <div className="hero-content">
                  <h2 className="animated fadeInDown mb-6">
                    <span className="block">{slide.title}</span>
                  </h2>
                  <p className="animated fadeInUp mb-8 text-lg">{slide.description}</p>
                  <div className="scdcall pt-0">
                    <a href={slide.link} className="mt-0">
                      Read More
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${index === current ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
