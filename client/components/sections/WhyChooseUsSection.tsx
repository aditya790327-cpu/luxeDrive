import { Trophy, Shield, Users, Zap, Wrench, Award } from "lucide-react";

const reasons = [
  {
    id: 1,
    icon: Trophy,
    title: "Certified Authentic",
    description: "Every vehicle in our collection is authenticated and comes with full documentation.",
  },
  {
    id: 2,
    icon: Shield,
    title: "Premium Guarantee",
    description: "Comprehensive warranty and insurance coverage on all our vehicles.",
  },
  {
    id: 3,
    icon: Users,
    title: "Expert Team",
    description: "Our specialists provide personalized consultation and after-sales support.",
  },
  {
    id: 4,
    icon: Zap,
    title: "Cutting Edge Tech",
    description: "Latest automotive technology and innovation across all categories.",
  },
  {
    id: 5,
    icon: Wrench,
    title: "Maintenance Service",
    description: "Professional servicing and maintenance by certified technicians.",
  },
  {
    id: 6,
    icon: Award,
    title: "Award Winning",
    description: "Recognized industry leader in luxury automotive sales and service.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-[#d4af37] font-semibold uppercase tracking-widest">WHY CHOOSE US</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Your Premier Luxury<br />
              <span className="text-gradient-gold">Automotive Partner</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With over 15 years of experience in the luxury automotive industry, we pride ourselves on delivering exceptional service and unparalleled vehicle quality. Our commitment to excellence is evident in every interaction.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-[#d4af37]">15+</p>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-[#d4af37]">5K+</p>
                <p className="text-sm text-gray-600">Satisfied Clients</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-[#d4af37]">50+</p>
                <p className="text-sm text-gray-600">Premium Brands</p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative h-96 hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-3xl"></div>
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full max-w-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Trophy/Shield Icon */}
              <circle cx="200" cy="200" r="180" fill="none" stroke="#d4af37" strokeWidth="2" opacity="0.2" />

              <path
                d="M 200 100 L 250 140 L 260 200 L 200 280 L 140 200 L 150 140 Z"
                fill="#d4af37"
                opacity="0.8"
              />

              <circle cx="200" cy="140" r="30" fill="white" opacity="0.9" />

              <path d="M 170 160 L 230 160 M 190 170 L 210 170 M 185 180 L 215 180" stroke="#1a1a1a" strokeWidth="2" />

              {/* Checkmarks */}
              {[
                { x: 100, y: 120 },
                { x: 300, y: 120 },
                { x: 100, y: 280 },
                { x: 300, y: 280 },
              ].map((pos, idx) => (
                <g key={idx}>
                  <circle cx={pos.x} cy={pos.y} r="25" fill="#d4af37" opacity="0.2" />
                  <path
                    d={`M ${pos.x - 8} ${pos.y} L ${pos.x - 2} ${pos.y + 6} L ${pos.x + 8} ${pos.y - 6}`}
                    stroke="#d4af37"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.id}
                className="p-6 rounded-2xl border border-gray-200 hover:border-[#d4af37] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#f5e6c8] mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
