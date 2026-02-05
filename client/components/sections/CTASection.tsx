import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#d4af37] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#d4af37] opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Ready to Own
              <span className="text-gradient-gold"> Your Dream Car?</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Contact our luxury automotive specialists today. We're here to
              help you find the perfect vehicle from our exclusive collection.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
            <div className="bg-white/10 backdrop-blur px-8 py-6 rounded-2xl border border-white/20 hover:border-[#d4af37] transition-all group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#f5e6c8] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <p className="text-white font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur px-8 py-6 rounded-2xl border border-white/20 hover:border-[#d4af37] transition-all group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#f5e6c8] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <p className="text-white font-semibold">info@luxedrive.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="btn-primary flex items-center justify-center gap-2 group text-lg">
              Schedule Test Drive
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary text-lg">View Inventory</button>
          </div>

          {/* Newsletter */}
          <div className="mt-16 pt-12 border-t border-gray-700">
            <h3 className="text-white font-bold mb-4">Stay Updated</h3>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37] transition-colors"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              Get exclusive updates on new arrivals and special offers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
