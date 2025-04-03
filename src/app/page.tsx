import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import WhychooseSection from "@/components/WhychooseSection";
import React from "react";

function page() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeaturedSection />
      <WhychooseSection />
    </main>
  );
}

export default page;
