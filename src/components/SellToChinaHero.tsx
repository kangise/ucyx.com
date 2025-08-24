import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Icons } from "./Icons";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from "./i18n/LanguageContext";

// Core services will be defined in the component to use translations

export function SellToChinaHero() {
  const { t } = useLanguage();

  const coreServices = [
    {
      title: t('sellToChina.coreServices.brandEntry.title'),
      description: t('sellToChina.coreServices.brandEntry.description'),
      icon: <Icons.Target className="h-10 w-10 text-green-500" />
    },
    {
      title: t('sellToChina.coreServices.storeManagement.title'),
      description: t('sellToChina.coreServices.storeManagement.description'),
      icon: <Icons.Settings className="h-10 w-10 text-green-500" />
    },
    {
      title: t('sellToChina.coreServices.digitalMarketing.title'),
      description: t('sellToChina.coreServices.digitalMarketing.description'),
      icon: <Icons.TrendUp className="h-10 w-10 text-green-500" />
    },
    {
      title: t('sellToChina.coreServices.dataAnalytics.title'),
      description: t('sellToChina.coreServices.dataAnalytics.description'),
      icon: <Icons.Analytics className="h-10 w-10 text-green-500" />
    }
  ];

  return (
    <section className="relative bg-gray-900 text-white py-24 md:py-40 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900/80 to-gray-900/90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroPattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl mb-4 text-white leading-tight">
          {t('sellToChina.hero.title')}
        </h1>
        <h2 className="text-5xl md:text-7xl mb-6 text-white leading-tight">
          {t('sellToChina.hero.subtitle')}
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed">
          {t('sellToChina.hero.description')}
        </p>

        {/* Core Services Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {coreServices.map((service, index) => (
            <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-green-500 hover:bg-gray-800 transition-all duration-300 group">
              <CardContent className="p-6 text-left">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl text-white mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button 
          size="lg" 
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
        >
          {t('sellToChina.hero.cta')}
        </Button>
      </div>
    </section>
  );
}