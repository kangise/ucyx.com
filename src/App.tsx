import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesGrid } from "./components/ServicesGrid";
import { WhoWeServe } from "./components/WhoWeServe";
import { SuccessStories } from "./components/SuccessStories";
import { MethodologySection } from "./components/MethodologySection";
import { AISection } from "./components/AISection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { SellToChinaPage } from "./components/SellToChinaPage";
import { SellToWorldPage } from "./components/SellToWorldPage";
import { UCMMMPage } from "./components/UCMMMPage";
import { UCcopilotPage } from "./components/UCcopilotPage";
import { AboutPage } from "./components/AboutPage";
import { PartnershipPage } from "./components/PartnershipPage";
import { RouteProvider } from "./components/RouteContext";
import { LanguageProvider, useLanguage } from "./components/i18n/LanguageContext";

function AppContent() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const { t } = useLanguage();

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouteProvider currentPage={currentPage} navigateTo={navigateTo}>
        <div className="min-h-screen">
        {/* Simple page routing */}
        {currentPage === "sell-to-china" ? (
          <SellToChinaPage />
        ) : currentPage === "sell-to-world" ? (
          <SellToWorldPage />
        ) : currentPage === "uc-mmm" ? (
          <UCMMMPage />
        ) : currentPage === "uccopilot" ? (
          <UCcopilotPage />
        ) : currentPage === "about" ? (
          <AboutPage />
        ) : currentPage === "partnership" ? (
          <PartnershipPage />
        ) : (
          <>
            <LoadingScreen />
            <Header />
            <HeroSection />
            <ServicesGrid />
            <WhoWeServe />
            <SuccessStories />
            <MethodologySection />
            <AISection />
            <CTASection />
            <Footer />
          </>
        )}
        </div>
      </RouteProvider>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}