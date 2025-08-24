import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./i18n/LanguageContext";

export function SuccessStories() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const { t } = useLanguage();

  // Define case studies with translation keys
  const cases = [
    {
      brandKey: 'successStories.cases.skincare.brand',
      titleKey: 'successStories.cases.skincare.title',
      descriptionKey: 'successStories.cases.skincare.description',
      metricKey: 'successStories.cases.skincare.metric',
      metricLabelKey: 'successStories.cases.skincare.metricLabel',
      industryKey: 'successStories.cases.skincare.industry',
      regionKey: 'successStories.cases.skincare.region',
      durationKey: 'successStories.cases.skincare.duration',
      revenue: '$2.4M'
    },
    {
      brandKey: 'successStories.cases.smartHome.brand',
      titleKey: 'successStories.cases.smartHome.title', 
      descriptionKey: 'successStories.cases.smartHome.description',
      metricKey: 'successStories.cases.smartHome.metric',
      metricLabelKey: 'successStories.cases.smartHome.metricLabel',
      industryKey: 'successStories.cases.smartHome.industry',
      regionKey: 'successStories.cases.smartHome.region',
      durationKey: 'successStories.cases.smartHome.duration',
      revenue: '$1.8M'
    },
    {
      brandKey: 'successStories.cases.networkStorage.brand',
      titleKey: 'successStories.cases.networkStorage.title',
      descriptionKey: 'successStories.cases.networkStorage.description',
      metricKey: 'successStories.cases.networkStorage.metric',
      metricLabelKey: 'successStories.cases.networkStorage.metricLabel',
      industryKey: 'successStories.cases.networkStorage.industry',
      regionKey: 'successStories.cases.networkStorage.region',
      durationKey: 'successStories.cases.networkStorage.duration',
      revenue: '$3.2M'
    },
    {
      brandKey: 'successStories.cases.stationery.brand',
      titleKey: 'successStories.cases.stationery.title',
      descriptionKey: 'successStories.cases.stationery.description',
      metricKey: 'successStories.cases.stationery.metric',
      metricLabelKey: 'successStories.cases.stationery.metricLabel',
      industryKey: 'successStories.cases.stationery.industry',
      regionKey: 'successStories.cases.stationery.region',
      durationKey: 'successStories.cases.stationery.duration',
      revenue: '$950K'
    },
    {
      brandKey: 'successStories.cases.outdoorGear.brand',
      titleKey: 'successStories.cases.outdoorGear.title',
      descriptionKey: 'successStories.cases.outdoorGear.description',
      metricKey: 'successStories.cases.outdoorGear.metric',
      metricLabelKey: 'successStories.cases.outdoorGear.metricLabel',
      industryKey: 'successStories.cases.outdoorGear.industry',
      regionKey: 'successStories.cases.outdoorGear.region',
      durationKey: 'successStories.cases.outdoorGear.duration',
      revenue: '$4.1M'
    },
    {
      brandKey: 'successStories.cases.petCare.brand',
      titleKey: 'successStories.cases.petCare.title',
      descriptionKey: 'successStories.cases.petCare.description',
      metricKey: 'successStories.cases.petCare.metric',
      metricLabelKey: 'successStories.cases.petCare.metricLabel',
      industryKey: 'successStories.cases.petCare.industry',
      regionKey: 'successStories.cases.petCare.region',
      durationKey: 'successStories.cases.petCare.duration',
      revenue: '$1.6M'
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Auto-scroll functionality
    const autoScroll = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 6000);

    return () => clearInterval(autoScroll);
  }, [api]);

  return (
    <section id="success-stories" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGJvYXJkcm9vbSUyMG1lZXRpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzU1NjYzNjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Business meeting background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/85"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-lg text-green-400 text-sm mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>{t('successStories.provenResults')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            {t('successStories.title')}
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('successStories.description')}
          </p>
        </div>
        
        <div className="relative">
          <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {cases.map((caseStudy, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300 group h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-grow">
                          <div className="text-green-400 text-sm mb-2 uppercase tracking-wide">
                            {t(caseStudy.brandKey)}
                          </div>
                          <h3 className="text-xl mb-4 text-white leading-tight">{t(caseStudy.titleKey)}</h3>
                          <div className="flex items-center space-x-3 text-xs text-gray-400 mb-4">
                            <span>{t(caseStudy.industryKey)}</span>
                            <span>•</span>
                            <span>{t(caseStudy.regionKey)}</span>
                            <span>•</span>
                            <span>{t(caseStudy.durationKey)}</span>
                          </div>
                        </div>
                        <div className="text-right ml-6">
                          <div className="text-3xl text-green-400 mb-1">{t(caseStudy.metricKey)}</div>
                          <div className="text-xs text-gray-400 text-right max-w-24 leading-tight">
                            {t(caseStudy.metricLabelKey)}
                          </div>
                        </div>
                      </div>

                      {/* Revenue Display */}
                      <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-600 mb-6">
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-400">{t('successStories.revenueImpact')}</div>
                          <div className="text-xl text-blue-400">{caseStudy.revenue}</div>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed flex-grow">{t(caseStudy.descriptionKey)}</p>
                      
                      {/* Success Indicator */}
                      <div className="flex items-center justify-end mt-6 pt-4 border-t border-gray-700">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-400">{t('successStories.verifiedSuccess')}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-gray-800/80 hover:bg-gray-700 border-gray-600 text-gray-300 hover:text-white backdrop-blur-sm" />
            <CarouselNext className="right-4 bg-gray-800/80 hover:bg-gray-700 border-gray-600 text-gray-300 hover:text-white backdrop-blur-sm" />
          </Carousel>
          
          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index + 1 === current ? 'bg-green-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}