import { Header } from "./Header";
import { Footer } from "./Footer";
import { SellToChinaHero } from "./SellToChinaHero";
import { OpportunitySection } from "./OpportunitySection";
import { StrategySection } from "./StrategySection";
import { ProcessSection } from "./ProcessSection";
import { PricingSection } from "./PricingSection";
import { CTASection } from "./CTASection";

export function SellToChinaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <SellToChinaHero />
      <OpportunitySection />
      <StrategySection />
      <ProcessSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}