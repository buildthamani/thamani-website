import { PersistentNav } from "@/components/layout/persistent-nav";
import { FooterSection } from "@/components/sections/footer-section";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col justify-between">
      <div className="isolate flex w-full flex-col p-8">
        <PersistentNav />
        {children}
      </div>
      <FooterSection />
    </div>
  );
}
