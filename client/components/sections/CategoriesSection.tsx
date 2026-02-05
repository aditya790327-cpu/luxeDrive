import { Zap, Mountain, Fuel } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Sports Cars",
    description:
      "High-performance vehicles engineered for speed and precision.",
    icon: Fuel,
    color: "from-red-500 to-pink-500",
    count: "18 Models",
    specs: ["0-100 km/h: 3.2s", "Top Speed: 350 km/h"],
  },
  {
    id: 2,
    name: "Luxury SUVs",
    description: "Commanding presence with ultimate comfort and capability.",
    icon: Mountain,
    color: "from-blue-500 to-cyan-500",
    count: "22 Models",
    specs: ["Seating: Up to 7", "All-Terrain Capability"],
  },
  {
    id: 3,
    name: "Electric Vehicles",
    description: "Sustainable luxury with cutting-edge technology.",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
    count: "12 Models",
    specs: ["Range: 600+ km", "0-100 km/h: 4.5s"],
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#d4af37] font-semibold uppercase tracking-widest">
            OUR COLLECTION
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Premium Categories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our curated selection of luxury vehicles across multiple
            categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background Accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-5 rounded-full blur-3xl -z-1`}
                ></div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} mb-6 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-2 pt-4">
                    {category.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                        {spec}
                      </div>
                    ))}
                  </div>

                  {/* Count */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-[#d4af37] font-semibold text-sm">
                      {category.count}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full mt-6 py-3 px-4 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-[#d4af37] hover:text-gray-900 transition-colors group-hover:bg-[#d4af37]">
                  Explore →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
