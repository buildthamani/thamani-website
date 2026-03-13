import { HeroSection } from "@/components/sections/hero-section";
import { ClaritySection } from "@/components/sections/clarity-section";
import { ValueSection } from "@/components/sections/value-section";
import { FreedomSection } from "@/components/sections/freedom-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { FooterSection } from "@/components/sections/footer-section";
import { PersistentNav } from "@/components/layout/persistent-nav";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { ScrollIndicator } from "@/components/layout/scroll-indicator";

export default function Home() {
  return (
    <main>
      <PersistentNav />
      <CustomCursor />
      <ScrollIndicator />
      <HeroSection />
      <ClaritySection />
      <ValueSection />
      <FreedomSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
