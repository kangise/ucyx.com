import { Card, CardContent } from "./ui/card";
import { Icons } from "./Icons";
import { useState, useEffect } from "react";
import { useLanguage } from "./i18n/LanguageContext";

export function ServicesGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  // Define services with translations
  const services = [
    {
      icon: <Icons.Analytics />,
      titleKey: 'services.grid.marketIntelligence.title',
      descriptionKey: 'services.grid.marketIntelligence.description',
      tag1Key: 'services.grid.marketIntelligence.tag1',
      tag2Key: 'services.grid.marketIntelligence.tag2',
      delay: 0
    },
    {
      icon: <Icons.Target />,
      titleKey: 'services.grid.productStrategy.title',
      descriptionKey: 'services.grid.productStrategy.description',
      tag1Key: 'services.grid.productStrategy.tag1',
      tag2Key: 'services.grid.productStrategy.tag2',
      delay: 100
    },
    {
      icon: <Icons.Innovation />,
      titleKey: 'services.grid.brandDevelopment.title',
      descriptionKey: 'services.grid.brandDevelopment.description',
      tag1Key: 'services.grid.brandDevelopment.tag1',
      tag2Key: 'services.grid.brandDevelopment.tag2',
      delay: 200
    },
    {
      icon: <Icons.Globe />,
      titleKey: 'services.grid.digitalMarketing.title',
      descriptionKey: 'services.grid.digitalMarketing.description',
      tag1Key: 'services.grid.digitalMarketing.tag1',
      tag2Key: 'services.grid.digitalMarketing.tag2',
      delay: 300
    },
    {
      icon: <Icons.TrendUp />,
      titleKey: 'services.grid.salesOptimization.title',
      descriptionKey: 'services.grid.salesOptimization.description',
      tag1Key: 'services.grid.salesOptimization.tag1',
      tag2Key: 'services.grid.salesOptimization.tag2',
      delay: 400
    },
    {
      icon: <Icons.Settings />,
      titleKey: 'services.grid.growthAnalytics.title',
      descriptionKey: 'services.grid.growthAnalytics.description',
      tag1Key: 'services.grid.growthAnalytics.tag1',
      tag2Key: 'services.grid.growthAnalytics.tag2',
      delay: 500
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-green-50/30 to-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-100/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-200/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-50/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-green-300/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-6xl mb-6 text-gray-900 relative">
            {t('services.title')}
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                {t('services.extraordinaryGrowth')}
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className={`bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group h-full transform hover:-translate-y-2 ${
                hoveredIndex === index ? 'scale-105' : ''
              }`}>
                <CardContent className="p-8 text-center flex flex-col h-full relative overflow-hidden">
                  {/* Hover Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-green-50 to-green-100/50 transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`mb-6 flex justify-center transform transition-all duration-500 ${
                      hoveredIndex === index ? 'scale-110 rotate-3' : ''
                    }`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl mb-4 text-gray-900 transition-colors duration-300 group-hover:text-green-700">
                      {t(service.titleKey)}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow transition-colors duration-300 group-hover:text-gray-700">
                      {t(service.descriptionKey)}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-2 mt-auto">
                      <span className={`px-4 py-2 bg-green-100 text-green-700 text-sm rounded-full transition-all duration-300 ${
                        hoveredIndex === index ? 'bg-green-200 scale-105' : ''
                      }`}>
                        {t(service.tag1Key)}
                      </span>
                      <span className={`px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full transition-all duration-300 ${
                        hoveredIndex === index ? 'bg-gray-200 scale-105' : ''
                      }`}>
                        {t(service.tag2Key)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Floating Particles */}
                  {hoveredIndex === index && (
                    <>
                      <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-ping"></div>
                      <div className="absolute top-6 right-8 w-1 h-1 bg-green-500 rounded-full opacity-80 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-green-300 rounded-full opacity-70 animate-ping" style={{ animationDelay: '1s' }}></div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Interactive Connection Lines */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'transparent' }} />
                <stop offset="50%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: 'transparent' }} />
              </linearGradient>
            </defs>
            
            {/* Animated connection lines */}
            <line 
              x1="16%" y1="60%" x2="50%" y2="60%" 
              stroke="url(#connectionGradient)" 
              strokeWidth="1"
              className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />
            <line 
              x1="50%" y1="60%" x2="84%" y2="60%" 
              stroke="url(#connectionGradient)" 
              strokeWidth="1"
              className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
            />
            
            {/* Animated dots moving along lines */}
            <circle r="2" fill="#10b981" className="opacity-60">
              <animateMotion dur="4s" repeatCount="indefinite">
                <path d="M 200 300 L 400 300"/>
              </animateMotion>
            </circle>
            <circle r="2" fill="#10b981" className="opacity-60">
              <animateMotion dur="4s" repeatCount="indefinite" begin="2s">
                <path d="M 400 300 L 600 300"/>
              </animateMotion>
            </circle>
          </svg>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-50 rounded-full border border-green-100 hover:bg-green-100 transition-all duration-300 cursor-pointer group">
            <span className="text-green-700">{t('services.cta')}</span>
            <svg className="w-4 h-4 text-green-600 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}