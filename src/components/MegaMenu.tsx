import { Card, CardContent } from "./ui/card";
import { useRouter } from "./RouteContext";
import { useLanguage } from "./i18n/LanguageContext";

// Service categories will be created inside the component to use translations

export function MegaMenu() {
  const { navigateTo, currentPage } = useRouter();
  const { t } = useLanguage();

  const serviceCategories = [
    {
      title: t('services.start.title'),
      subtitle: t('services.start.subtitle'),
      icon: (
        <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="url(#greenBlackGradient)" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      services: [
        {
          name: t('services.start.sellToChina.title'),
          description: t('services.start.sellToChina.description'),
          link: "#sell-to-china"
        },
        {
          name: t('services.sell.sellToWorld.title'),
          description: t('services.sell.sellToWorld.description'),
          link: "#sell-to-world"
        }
      ]
    },
    {
      title: t('services.choice.title'),
      subtitle: t('services.choice.subtitle'),
      icon: (
        <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="url(#greenBlackGradient)" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
          <circle cx="11" cy="11" r="3"/>
        </svg>
      ),
      services: [
        {
          name: t('services.choice.novochoice.title'),
          description: t('services.choice.novochoice.description'),
          link: "#novochoice"
        }
      ]
    },
    {
      title: t('services.sell.title'),
      subtitle: t('services.sell.subtitle'),
      icon: (
        <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="url(#greenBlackGradient)" strokeWidth="2">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
        </svg>
      ),
      services: [
        {
          name: t('services.sell.uccopilot.title'),
          description: t('services.sell.uccopilot.description'),
          link: "#uccopilot"
        }
      ]
    },
    {
      title: t('services.manage.title'),
      subtitle: t('services.manage.subtitle'),
      icon: (
        <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="url(#greenBlackGradient)" strokeWidth="2">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 .74-.4 1.38-1 1.72V15a2 2 0 0 1-2 2h-4v1.27c.6.35 1 .98 1 1.73a2 2 0 1 1-4 0c0-.75.4-1.38 1-1.73V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-.74.4-1.37 1-1.72V9a2 2 0 0 1 2-2h4V5.73c-.6-.35-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
        </svg>
      ),
      services: [
        {
          name: t('services.manage.ucMmm.title'),
          description: t('services.manage.ucMmm.description'),
          link: "#uc-mmm"
        }
      ]
    }
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    if (link === "#sell-to-china") {
      navigateTo("sell-to-china");
    } else if (link === "#sell-to-world") {
      navigateTo("sell-to-world");
    } else if (link === "#uc-mmm") {
      navigateTo("uc-mmm");
    } else if (link === "#uccopilot") {
      navigateTo("uccopilot");
    } else if (link === "#novochoice") {
      // Navigate to home page and scroll to Novochoice section
      if (currentPage !== "home") {
        navigateTo("home");
        setTimeout(() => {
          const element = document.querySelector("#novochoice");
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector("#novochoice");
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (link.startsWith("#")) {
      // If not on home page, navigate to home first, then scroll
      if (currentPage !== "home") {
        navigateTo("home");
        setTimeout(() => {
          const element = document.querySelector(link);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(link);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="w-full bg-white shadow-2xl border-t border-gray-200">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="greenBlackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00A651', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2C3E50', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex-shrink-0">
                  {category.icon}
                </div>
                <div>
                  <h4 className="text-xl text-gray-900 font-medium">{category.title}</h4>
                  <p className="text-sm text-gray-500">{category.subtitle}</p>
                </div>
              </div>
              
              <div className="w-full h-px bg-gradient-to-r from-green-500 to-gray-600 mb-6"></div>
              
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <a 
                    key={serviceIndex} 
                    href={service.link}
                    onClick={(e) => handleNavigation(e, service.link)}
                    className="block group/service hover:bg-gray-50 p-3 rounded-lg transition-all duration-200"
                  >
                    <div className="text-lg text-gray-900 group-hover/service:text-green-600 transition-colors mb-1 font-medium">
                      {service.name}
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom footer section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <a 
              href="#contact"
              onClick={(e) => handleNavigation(e, "#contact")}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              {t('navigation.startFreeConsultation')}
            </a>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <a 
              href="#partnership"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("partnership");
              }}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              {t('navigation.partnershipOpportunities')}
            </a>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <a 
              href="#blog"
              onClick={(e) => handleNavigation(e, "#blog")}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              {t('navigation.visitOurBlog')}
            </a>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <a 
              href="#methodology"
              onClick={(e) => handleNavigation(e, "#methodology")}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              {t('navigation.learnMoreAboutMethodology')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}