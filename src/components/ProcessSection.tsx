import { useState } from "react";
import { useLanguage } from "./i18n/LanguageContext";

export function ProcessSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const { t } = useLanguage();

  // Define process steps with translation keys
  const processSteps = [
    {
      titleKey: "sellToChina.process.steps.assessment.title",
      descriptionKey: "sellToChina.process.steps.assessment.description"
    },
    {
      titleKey: "sellToChina.process.steps.customization.title",
      descriptionKey: "sellToChina.process.steps.customization.description"
    },
    {
      titleKey: "sellToChina.process.steps.officialEntry.title",
      descriptionKey: "sellToChina.process.steps.officialEntry.description"
    },
    {
      titleKey: "sellToChina.process.steps.storeLaunch.title",
      descriptionKey: "sellToChina.process.steps.storeLaunch.description"
    },
    {
      titleKey: "sellToChina.process.steps.continuousGrowth.title",
      descriptionKey: "sellToChina.process.steps.continuousGrowth.description"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 leading-tight">
            {t('sellToChina.process.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('sellToChina.process.subtitle')}
          </p>
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="flex justify-center items-center gap-24">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center w-60 group cursor-pointer"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute top-8 left-full w-24 h-0.5 bg-gray-200 group-hover:bg-green-400 transition-colors duration-300" />
                )}
                
                {/* Step Number */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 shadow-lg transition-all duration-300 ${
                  hoveredStep === index 
                    ? 'bg-green-600 text-white scale-110 shadow-green-500/30' 
                    : 'bg-green-600 text-white'
                }`}>
                  {index + 1}
                </div>
                
                {/* Content */}
                <h3 className="text-xl text-gray-900 mb-2 leading-tight group-hover:text-green-600 transition-colors duration-300">
                  {t(step.titleKey)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(step.descriptionKey)}
                </p>

                {/* Hover indicator */}
                {hoveredStep === index && (
                  <div className="absolute -bottom-2 w-2 h-2 bg-green-600 rounded-full animate-ping" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative flex items-start space-x-4">
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-200" />
              )}
              
              {/* Step Number */}
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg flex-shrink-0 relative z-10 shadow-lg">
                {index + 1}
              </div>
              
              {/* Content */}
              <div className="flex-grow pt-2">
                <h3 className="text-xl text-gray-900 mb-2 leading-tight">
                  {t(step.titleKey)}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {t(step.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}