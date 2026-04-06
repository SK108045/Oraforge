import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0066cc] to-[#0052a3] rounded-2xl p-12 sm:p-16 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s talk about your project. Our team is ready to help you build something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-[#00d084] text-[#1a1a1a] hover:bg-[#00b36d] font-bold text-lg px-8 flex items-center justify-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="btn border-2 border-white text-white hover:bg-white hover:text-[#0066cc] font-bold text-lg px-8">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
