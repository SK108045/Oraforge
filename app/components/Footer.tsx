import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Oraforge<span className="text-[#00d084]">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Building innovative technology solutions that drive business growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#00d084] transition">Custom Software</a></li>
              <li><a href="#" className="hover:text-[#00d084] transition">MVP Development</a></li>
              <li><a href="#" className="hover:text-[#00d084] transition">Cloud & DevOps</a></li>
              <li><a href="#" className="hover:text-[#00d084] transition">Mobile Apps</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#00d084] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#00d084] transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#00d084] transition">Careers</a></li>
              <li><a href="#" className="hover:text-[#00d084] transition">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#00d084]" />
                <a href="mailto:info@oraforge.com" className="hover:text-[#00d084] transition">
                  info@oraforge.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#00d084]" />
                <a href="tel:+1234567890" className="hover:text-[#00d084] transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#00d084] mt-1" />
                <span>123 Tech Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              &copy; {currentYear} OraforgeTechnologies. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-[#0066cc] p-2 rounded-full hover:bg-[#00d084] transition">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="bg-[#0066cc] p-2 rounded-full hover:bg-[#00d084] transition">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="bg-[#0066cc] p-2 rounded-full hover:bg-[#00d084] transition">
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
