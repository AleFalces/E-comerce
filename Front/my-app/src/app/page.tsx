import CallToActionSection from "@/Componets/landingHomeComponets/CallToActionSection";
import FeaturedProductsSection from "@/Componets/landingHomeComponets/FeasturesStection";
import FeaturesSection from "@/Componets/landingHomeComponets/FeasturesStection";
import HeroSection from "@/Componets/landingHomeComponets/HeroSection";
import TestimonialsSection from "@/Componets/landingHomeComponets/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 p-4">
      <HeroSection />
      <FeaturesSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
}
