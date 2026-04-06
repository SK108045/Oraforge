'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  title: string
  description: string
  cta: string
  ctaLink: string
  icon: string
}

const slides: Slide[] = [
  {
    title: 'Empower Your Business with AI-Driven Custom Software Solution',
    description: 'From concept to execution, OraforgeTechnologies delivers innovative, secure, and scalable AI-powered software engineered to shape the future of your business.',
    cta: 'Read More',
    ctaLink: '#custom-software',
    icon: '⚡'
  },
  {
    title: 'Your First Step to Startup Success',
    description: 'An MVP (Minimum Viable Product) is the simplest version of your product that addresses the core problem, serving as the essential first step towards your startup\'s success.',
    cta: 'Read More',
    ctaLink: '#mvp',
    icon: '🚀'
  },
  {
    title: 'Drive and Orchestrate Digital Transformation',
    description: 'At OraforgeTechnologies, we bring a decade of digital expertise to drive and orchestrate your digital transformation journey. We accelerate your aspirations into reality.',
    cta: 'Read More',
    ctaLink: '#digital-transformation',
    icon: '🔄'
  },
  {
    title: 'Transform Your Idea into a Market-Leading SaaS Platform',
    description: 'We specialize in turning visionary ideas into powerful SaaS platforms. Our development process ensures that every solution is scalable, secure, and optimized for performance.',
    cta: 'Read More',
    ctaLink: '#saas',
    icon: '☁️'
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#0066cc] via-[#0052a3] to-[#003d7a] overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-[#00d084] rounded-full blur-3xl -bottom-48 -right-48"></div>
      </div>

      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 pt-20 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
              <div className="text-7xl mb-6 animate-fade-in-down">{slide.icon}</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl animate-fade-in-down">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mb-8 animate-fade-in-up">
                {slide.description}
              </p>
              <a
                href={slide.ctaLink}
                className="btn btn-secondary text-lg px-8 animate-fade-in-up"
              >
                {slide.cta} →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-[#00d084] w-8' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
