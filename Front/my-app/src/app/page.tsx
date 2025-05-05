import CallToActionSection from "@/Componets/landingHomeComponets/CallToActionSection";
import FeasturesStection from "@/Componets/landingHomeComponets/FeasturesStection";
import HeroSection from "@/Componets/landingHomeComponets/HeroSection";
import HowItWorksSection from "@/Componets/landingHomeComponets/HowItWorksSection";
import TestimonialsSection from "@/Componets/landingHomeComponets/TestimonialsSection";

export default function Home() {
  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
      <HeroSection />
      <FeasturesStection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
}
