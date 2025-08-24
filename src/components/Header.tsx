import { useState, useRef, useEffect } from 'react';
import { Button } from "./ui/button";
import { MegaMenu } from "./MegaMenu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu, X } from "lucide-react";
import { useRouter } from "./RouteContext";
import { useLanguage } from "./i18n/LanguageContext";
import { LanguageSwitcher } from "./i18n/LanguageSwitcher";

export function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const headerRef = useRef<HTMLDivElement>(null);
  const { currentPage, navigateTo } = useRouter();
  const { t } = useLanguage();

  const showMegaMenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsMegaMenuOpen(true);
  };

  const hideMegaMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150); // Slight delay to allow mouse movement
  };

  const keepMegaMenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header 
      ref={headerRef}
      className="w-full bg-white border-b border-gray-200 sticky top-0 z-40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => navigateTo("home")}
              className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
            >
              UCYX
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <div 
              className="relative"
              onMouseEnter={showMegaMenu}
              onMouseLeave={hideMegaMenu}
            >
              <button className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1 h-16 px-4">
                <span>{t('header.services')}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
            </div>
            
            <a 
              href="#who-we-serve" 
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center h-16"
              onClick={(e) => {
                if (currentPage !== "home") {
                  e.preventDefault();
                  navigateTo("home");
                  setTimeout(() => {
                    const element = document.querySelector("#who-we-serve");
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              {t('header.whoWeServe')}
            </a>
            <a 
              href="#success-stories" 
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center h-16"
              onClick={(e) => {
                if (currentPage !== "home") {
                  e.preventDefault();
                  navigateTo("home");
                  setTimeout(() => {
                    const element = document.querySelector("#success-stories");
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              {t('header.successStories')}
            </a>
            <a 
              href="#methodology" 
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center h-16"
              onClick={(e) => {
                if (currentPage !== "home") {
                  e.preventDefault();
                  navigateTo("home");
                  setTimeout(() => {
                    const element = document.querySelector("#methodology");
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              {t('header.methodology')}
            </a>
            <a 
              href="#ai-platform" 
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center h-16"
              onClick={(e) => {
                if (currentPage !== "home") {
                  e.preventDefault();
                  navigateTo("home");
                  setTimeout(() => {
                    const element = document.querySelector("#ai-platform");
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              {t('header.novochoice')}
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher variant="minimal" />
            </div>
            
            {/* Desktop CTA Button */}
            <Button className="hidden md:flex bg-green-600 hover:bg-green-700 text-white">
              {t('header.startYourGrowthJourney')}
            </Button>
            
            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="md:hidden text-gray-600 hover:text-gray-900"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 p-0">
                <div className="flex flex-col h-full">
                  <SheetHeader className="p-6 border-b border-gray-200">
                    <SheetTitle className="text-left">
                      <div className="text-2xl font-bold text-green-600">UCYX</div>
                    </SheetTitle>
                  </SheetHeader>
                  
                  <nav className="flex-1 px-6 py-8">
                    <div className="space-y-6">
                      {/* Services Section */}
                      <div>
                        <div className="text-lg font-semibold text-gray-900 mb-4">{t('header.services')}</div>
                        <div className="space-y-6">
                          {/* Start Category */}
                          <div className="pl-4">
                            <div className="text-sm font-medium text-green-600 mb-2">{t('services.start.title')} - {t('services.start.subtitle')}</div>
                            <div className="space-y-2 pl-2">
                              <button 
                                className="block text-gray-600 hover:text-green-600 transition-colors py-1 w-full text-left"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  navigateTo("sell-to-china");
                                }}
                              >
                                <div className="font-medium">{t('services.start.sellToChina.title')}</div>
                                <div className="text-xs text-gray-500">{t('services.start.sellToChina.description')}</div>
                              </button>
                              <button 
                                className="block text-gray-600 hover:text-green-600 transition-colors py-1 w-full text-left"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  navigateTo("sell-to-world");
                                }}
                              >
                                <div className="font-medium">{t('navigation.sellToWorld')}</div>
                                <div className="text-xs text-gray-500">Global market expansion</div>
                              </button>
                            </div>
                          </div>
                          
                          {/* Choice Category */}
                          <div className="pl-4">
                            <div className="text-sm font-medium text-green-600 mb-2">{t('services.choice.title')} - {t('services.choice.subtitle')}</div>
                            <div className="space-y-2 pl-2">
                              <a 
                                href="#novochoice" 
                                className="block text-gray-600 hover:text-green-600 transition-colors py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="font-medium">{t('services.choice.novochoice.title')}</div>
                                <div className="text-xs text-gray-500">{t('services.choice.novochoice.description')}</div>
                              </a>
                            </div>
                          </div>
                          
                          {/* Sell Category */}
                          <div className="pl-4">
                            <div className="text-sm font-medium text-green-600 mb-2">{t('services.sell.title')} - {t('services.sell.subtitle')}</div>
                            <div className="space-y-2 pl-2">
                              <a 
                                href="#uccopilot" 
                                className="block text-gray-600 hover:text-green-600 transition-colors py-1"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsMobileMenuOpen(false);
                                  navigateTo("uccopilot");
                                }}
                              >
                                <div className="font-medium">{t('services.sell.uccopilot.title')}</div>
                                <div className="text-xs text-gray-500">{t('services.sell.uccopilot.description')}</div>
                              </a>
                            </div>
                          </div>
                          
                          {/* Manage Category */}
                          <div className="pl-4">
                            <div className="text-sm font-medium text-green-600 mb-2">{t('services.manage.title')} - {t('services.manage.subtitle')}</div>
                            <div className="space-y-2 pl-2">
                              <a 
                                href="#uc-mmm" 
                                className="block text-gray-600 hover:text-green-600 transition-colors py-1"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsMobileMenuOpen(false);
                                  navigateTo("uc-mmm");
                                }}
                              >
                                <div className="font-medium">UC-MMM™</div>
                                <div className="text-xs text-gray-500">Marketing Mix Modeling</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Navigation Links */}
                      <div className="space-y-4">
                        <a 
                          href="#who-we-serve" 
                          className="block text-lg text-gray-600 hover:text-green-600 transition-colors py-3 border-b border-gray-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {t('header.whoWeServe')}
                        </a>
                        <a 
                          href="#success-stories" 
                          className="block text-lg text-gray-600 hover:text-green-600 transition-colors py-3 border-b border-gray-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {t('header.successStories')}
                        </a>
                        <a 
                          href="#methodology" 
                          className="block text-lg text-gray-600 hover:text-green-600 transition-colors py-3 border-b border-gray-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {t('header.methodology')}
                        </a>
                        <a 
                          href="#ai-platform" 
                          className="block text-lg text-gray-600 hover:text-green-600 transition-colors py-3 border-b border-gray-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {t('header.novochoice')}
                        </a>
                      </div>
                    </div>
                  </nav>
                  
                  {/* Mobile CTA Button */}
                  <div className="p-6 border-t border-gray-200 mt-auto">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t('header.startYourGrowthJourney')}
                    </Button>
                    
                    {/* Mobile Language Switcher */}
                    <div className="mt-4">
                      <LanguageSwitcher />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Mega Menu positioned directly below header with no gap */}
      <div 
        className={`absolute top-full left-0 w-full transition-all duration-300 ${
          isMegaMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onMouseEnter={keepMegaMenu}
        onMouseLeave={hideMegaMenu}
        style={{ transform: isMegaMenuOpen ? 'translateY(0)' : 'translateY(-10px)' }}
      >
        <MegaMenu />
      </div>
    </header>
  );
}