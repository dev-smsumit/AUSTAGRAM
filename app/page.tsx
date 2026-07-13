import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { EssenceSection } from "@/components/sections/essence";
import { AttractionsSection } from "@/components/sections/attractions";
import { ExperiencesSection } from "@/components/sections/experiences";
import { SeasonsSection } from "@/components/sections/seasons";
import { GallerySection } from "@/components/sections/gallery";
import { VisitSection } from "@/components/sections/visit";
import { UnionsSection } from "@/components/sections/unions";
import { FinalCtaSection } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip bg-[linear-gradient(180deg,#eff6fc_0%,#f7fbff_42%,#eff6fc_100%)]">
        <Hero />
        <EssenceSection />
        <AttractionsSection />
        <ExperiencesSection />
        <SeasonsSection />
        <GallerySection />
        <VisitSection />
        <UnionsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
