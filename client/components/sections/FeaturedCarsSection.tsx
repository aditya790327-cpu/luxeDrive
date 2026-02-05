import { Star } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Ferrari SF90",
    category: "Sports Car",
    price: "$500,000",
    rating: 4.9,
    image: "🏎️",
    specs: {
      power: "1000 hp",
      acceleration: "2.5s (0-100)",
      topSpeed: "340 km/h",
    },
    color: "from-red-600 to-red-400",
  },
  {
    id: 2,
    name: "Rolls-Royce Phantom",
    category: "Luxury Sedan",
    price: "$450,000",
    rating: 4.8,
    image: "👑",
    specs: {
      power: "563 hp",
      comfort: "Air Suspension",
      seating: "5 Passengers",
    },
    color: "from-purple-600 to-purple-400",
  },
  {
    id: 3,
    name: "Lamborghini Revuelto",
    category: "Hybrid SuperCar",
    price: "$550,000",
    rating: 5.0,
    image: "⚡",
    specs: {
      power: "1001 hp",
      acceleration: "2.5s (0-100)",
      hybrid: "Advanced Hybrid",
    },
    color: "from-yellow-600 to-yellow-400",
  },
  {
    id: 4,
    name: "Tesla Model S Plaid",
    category: "Electric",
    price: "$120,000",
    rating: 4.7,
    image: "🔋",
    specs: {
      power: "1020 hp",
      acceleration: "1.99s (0-100)",
      range: "840 km",
    },
    color: "from-blue-600 to-blue-400",
  },
];

export default function FeaturedCarsSection() {
  return (
    <section
      id="models"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#d4af37] font-semibold uppercase tracking-widest">
            FEATURED MODELS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Our Signature Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked selections representing the pinnacle of automotive
            excellence
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image Section */}
              <div
                className={`relative h-48 bg-gradient-to-br ${car.color} flex items-center justify-center overflow-hidden`}
              >
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {car.image}
                </div>
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-900">
                    {car.rating}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-[#d4af37] uppercase tracking-widest">
                    {car.category}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {car.name}
                  </h3>
                </div>

                {/* Specs */}
                <div className="space-y-2">
                  {Object.entries(car.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-600 capitalize">{key}</span>
                      <span className="font-semibold text-gray-900">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-2xl font-bold text-gray-900">
                    {car.price}
                  </p>
                </div>

                {/* CTA */}
                <button className="w-full py-3 px-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-[#d4af37] hover:text-gray-900 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="btn-primary inline-flex">View All Models</button>
        </div>
      </div>
    </section>
  );
}
