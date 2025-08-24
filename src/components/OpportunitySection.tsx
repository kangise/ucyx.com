import { useEffect, useState } from "react";
import { useLanguage } from "./i18n/LanguageContext";

export function OpportunitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0]);
  const { t } = useLanguage();

  // Define opportunity data with translation keys
  const opportunityData = [
    {
      value: 49,
      suffix: "%",
      titleKey: "sellToChina.opportunity.stats.growth.title",
      descriptionKey: "sellToChina.opportunity.stats.growth.description"
    },
    {
      value: 100,
      prefix: "> ",
      suffix: "M",
      titleKey: "sellToChina.opportunity.stats.consumers.title",
      descriptionKey: "sellToChina.opportunity.stats.consumers.description"
    },
    {
      value: 1,
      prefix: "#",
      suffix: "",
      titleKey: "sellToChina.opportunity.stats.platform.title",
      descriptionKey: "sellToChina.opportunity.stats.platform.description"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate counters
          opportunityData.forEach((item, index) => {
            let start = 0;
            const end = item.value;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16);

            const animateCounter = () => {
              start += increment;
              if (start < end) {
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.ceil(start);
                  return newCounters;
                });
                requestAnimationFrame(animateCounter);
              } else {
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = end;
                  return newCounters;
                });
              }
            };
            
            setTimeout(() => animateCounter(), index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('opportunity-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="opportunity-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 leading-tight">
            {t('sellToChina.opportunity.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('sellToChina.opportunity.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {opportunityData.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-200/80 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-6xl mb-2 text-green-600 leading-none">
                {item.prefix || ""}
                <span className="counter">
                  {isVisible ? counters[index].toLocaleString() : 0}
                </span>
                {item.suffix}
              </div>
              <h3 className="text-xl text-gray-900 mb-2 leading-tight">
                {t(item.titleKey)}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {t(item.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}