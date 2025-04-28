import CallToActionSection from "@/Componets/landingHomeComponets/CallToActionSection";
import FeasturesStection from "@/Componets/landingHomeComponets/FeasturesStection";
import HeroSection from "@/Componets/landingHomeComponets/HeroSection";
import HowItWorksSection from "@/Componets/landingHomeComponets/HowItWorksSection";
import TestimonialsSection from "@/Componets/landingHomeComponets/TestimonialsSection";

export default function Home() {
  return (
    <main className="container mx-auto px-4 flex flex-col gap-12 p-4">
      <HeroSection />
      <FeasturesStection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
}
