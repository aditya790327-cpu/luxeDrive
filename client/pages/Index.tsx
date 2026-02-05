import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedCarsSection from "@/components/sections/FeaturedCarsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CTASection from "@/components/sections/CTASection";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <FeaturedCarsSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
