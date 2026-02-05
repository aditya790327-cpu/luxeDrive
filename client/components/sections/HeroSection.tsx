import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#d4af37] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#d4af37] opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                <span className="text-[#d4af37] text-sm font-semibold">LUXURY COLLECTION</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
                Drive
                <span className="text-gradient-gold"> Excellence</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Experience the pinnacle of automotive luxury. Curated collection of the world's most prestigious sports cars and luxury vehicles.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary flex items-center justify-center gap-2 group">
                Explore Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">Schedule Test Drive</button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-[#d4af37]">50+</p>
                <p className="text-gray-400 text-sm">Luxury Models</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-[#d4af37]">15</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-[#d4af37]">5000+</p>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 sm:h-full animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Car Image Placeholder - Modern Illustration Style */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Gradient Background for Car Area */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-transparent rounded-3xl blur-3xl"></div>

                {/* SVG Car Illustration */}
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full max-w-md drop-shadow-2xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Sports Car Silhouette */}
                  <defs>
                    <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#d4af37", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#f5e6c8", stopOpacity: 0.8 }} />
                    </linearGradient>
                  </defs>

                  {/* Car Body */}
                  <ellipse cx="200" cy="180" rx="140" ry="60" fill="url(#carGradient)" opacity="0.9" />

                  {/* Car Top */}
                  <path
                    d="M 120 180 Q 150 100 200 80 Q 250 100 280 180"
                    fill="url(#carGradient)"
                    opacity="0.95"
                  />

                  {/* Windows */}
                  <path
                    d="M 140 140 Q 160 110 190 110 L 180 160 Z"
                    fill="rgba(255, 255, 255, 0.1)"
                    stroke="#d4af37"
                    strokeWidth="1"
                  />
                  <path
                    d="M 210 110 Q 240 110 260 140 L 220 160 Z"
                    fill="rgba(255, 255, 255, 0.1)"
                    stroke="#d4af37"
                    strokeWidth="1"
                  />

                  {/* Wheels */}
                  <circle cx="140" cy="220" r="35" fill="none" stroke="#f5e6c8" strokeWidth="3" />
                  <circle cx="140" cy="220" r="20" fill="#1a1a1a" />
                  <circle cx="140" cy="220" r="12" fill="#d4af37" opacity="0.6" />

                  <circle cx="260" cy="220" r="35" fill="none" stroke="#f5e6c8" strokeWidth="3" />
                  <circle cx="260" cy="220" r="20" fill="#1a1a1a" />
                  <circle cx="260" cy="220" r="12" fill="#d4af37" opacity="0.6" />

                  {/* Details */}
                  <circle cx="200" cy="240" r="4" fill="#d4af37" opacity="0.8" />
                  <path d="M 290 190 L 310 185" stroke="#d4af37" strokeWidth="2" opacity="0.6" />
                  <path d="M 110 190 L 90 185" stroke="#d4af37" strokeWidth="2" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
          <span className="text-xs font-semibold">SCROLL TO EXPLORE</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
