import HeroSection from "@/app/_components/sections/HeroSection";
import ServiceCategoriesSection from "@/app/_components/sections/ServiceCategoriesSection";
import AboutSection from "@/app/_components/sections/AboutSection";
import FeaturedServicesSection from "@/app/_components/sections/FeaturedServicesSection";
import PackagesSection from "@/app/_components/sections/PackagesSection";
import TestimonialsSection from "@/app/_components/sections/TestimonialsSection";
import BookingCTASection from "@/app/_components/sections/BookingCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceCategoriesSection />
      <AboutSection />
      <FeaturedServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <BookingCTASection />
    </>
  );
}
