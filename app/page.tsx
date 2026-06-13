import { AiAssistantSection } from "@/components/sections/ai-assistant-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ClientPortalSection } from "@/components/sections/client-portal-section";
import { ModulesSection } from "@/components/sections/modules-section";
import { SelfHostSection } from "@/components/sections/self-host-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      <ModulesSection />
      <ClientPortalSection />
      <AiAssistantSection />
      <SelfHostSection />

      <SiteFooter />
    </div>
  );
}
