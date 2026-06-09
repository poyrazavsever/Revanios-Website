import { NAV_LINKS } from "@/config/links";
import { HeroSection } from "@/components/sections/hero-section";
import { PlaceholderSection } from "@/components/sections/placeholder-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Other Sections */}
      {NAV_LINKS.map((item) => (
        <PlaceholderSection key={item.id} id={item.id} title={item.label} />
      ))}
    </div>
  );
}
