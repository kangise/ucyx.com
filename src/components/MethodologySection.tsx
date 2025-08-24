import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import { Icons } from "./Icons";
import { useLanguage } from "./i18n/LanguageContext";

export function MethodologySection() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  // Steps with translation keys
  const steps = [
    {
      titleKey: "methodology.steps.analyze.title",
      descriptionKey: "methodology.steps.analyze.description",
      tool: "Novochoice™",
      icon: <Icons.Target />
    },
    {
      titleKey: "methodology.steps.strategize.title",
      descriptionKey: "methodology.steps.strategize.description", 
      tool: "Novochoice™", // Changed from UCselection™
      icon: <Icons.Analytics />
    },
    {
      titleKey: "methodology.steps.execute.title",
      descriptionKey: "methodology.steps.execute.description",
      tool: "UCcopilot™", // Changed from UCforecast™
      icon: <Icons.TrendUp />
    },
    {
      titleKey: "methodology.steps.optimize.title",
      descriptionKey: "methodology.steps.optimize.description",
      tool: "UC-MMM™", // Changed from UCcopilot™
      icon: <Icons.Settings />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="methodology" className="py-24 bg-gradient-to-br from-gray-50 via-green-50/20 to-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="flowPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#flowPattern)"/>
        </svg>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-green-100/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-200/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            {t('methodology.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('methodology.subtitle')}
          </p>
          <p className="text-lg text-gray-600">
            {t('methodology.description')}
          </p>
        </div>
        
        {/* Desktop Flowchart Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#16a34a" />
                </marker>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'transparent' }} />
                  <stop offset="50%" style={{ stopColor: '#16a34a', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: 'transparent' }} />
                </linearGradient>
              </defs>
              
              {/* Top row connection */}
              <line
                x1="25%"
                y1="30%"
                x2="75%"
                y2="30%"
                stroke="url(#connectionGradient)"
                strokeWidth="3"
                markerEnd="url(#arrowhead)"
                className={`transition-all duration-500 ${activeStep === 0 || activeStep === 1 ? 'opacity-100' : 'opacity-40'}`}
              />
              
              {/* Vertical connection */}
              <line
                x1="75%"
                y1="30%"
                x2="75%"
                y2="70%"
                stroke="url(#connectionGradient)"
                strokeWidth="3"
                className={`transition-all duration-500 ${activeStep === 1 || activeStep === 2 ? 'opacity-100' : 'opacity-40'}`}
              />
              
              {/* Bottom row connection */}
              <line
                x1="75%"
                y1="70%"
                x2="25%"
                y2="70%"
                stroke="url(#connectionGradient)"
                strokeWidth="3"
                className={`transition-all duration-500 ${activeStep === 2 || activeStep === 3 ? 'opacity-100' : 'opacity-40'}`}
              />
              
              {/* Animated flow particles */}
              <circle r="4" fill="#16a34a" className="opacity-80">
                <animateMotion dur="8s" repeatCount="indefinite">
                  <path d="M 200 150 L 600 150 L 600 350 L 200 350 Z"/>
                </animateMotion>
              </circle>
            </svg>

            {/* Step Cards */}
            <div className="grid grid-cols-2 gap-16 relative" style={{ zIndex: 2 }}>
              {/* Top Row */}
              <div className="space-y-16">
                {steps.slice(0, 2).map((step, index) => (
                  <Card 
                    key={index} 
                    className={`bg-white/90 backdrop-blur-sm border-2 shadow-lg transition-all duration-500 transform group ${
                      activeStep === index 
                        ? 'border-green-500 shadow-green-200/50 scale-105' 
                        : 'border-gray-200 hover:border-green-300 hover:shadow-xl'
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <CardContent className="p-8 relative overflow-hidden">
                      {/* Hover Background Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-green-50 to-green-100/50 transition-opacity duration-500 ${
                        hoveredIndex === index || activeStep === index ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center space-x-6 mb-6">
                          <div className={`transform transition-all duration-500 ${
                            hoveredIndex === index || activeStep === index ? 'scale-110 rotate-3' : ''
                          }`}>
                            {step.icon}
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2">
                              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                                activeStep === index ? 'bg-green-600 text-white scale-110' : 'bg-gray-200 text-gray-600'
                              }`}>
                                {index + 1}
                              </span>
                              <span className={`px-4 py-2 bg-green-100 text-green-700 text-sm rounded-full transition-all duration-300 ${
                                hoveredIndex === index || activeStep === index ? 'bg-green-200 scale-105' : ''
                              }`}>
                                {step.tool}
                              </span>
                            </div>
                            <h3 className="text-xl text-gray-900 leading-tight group-hover:text-green-700 transition-colors duration-300">
                              {t(step.titleKey)}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {t(step.descriptionKey)}
                        </p>
                      </div>

                      {/* Floating Particles */}
                      {(hoveredIndex === index || activeStep === index) && (
                        <>
                          <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-ping"></div>
                          <div className="absolute top-6 right-8 w-1 h-1 bg-green-500 rounded-full opacity-80 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Bottom Row (Reversed) */}
              <div className="space-y-16 pt-32">
                {steps.slice(2, 4).map((step, index) => (
                  <Card 
                    key={index + 2} 
                    className={`bg-white/90 backdrop-blur-sm border-2 shadow-lg transition-all duration-500 transform group ${
                      activeStep === index + 2 
                        ? 'border-green-500 shadow-green-200/50 scale-105' 
                        : 'border-gray-200 hover:border-green-300 hover:shadow-xl'
                    }`}
                    onMouseEnter={() => setHoveredIndex(index + 2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <CardContent className="p-8 relative overflow-hidden">
                      {/* Hover Background Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-green-50 to-green-100/50 transition-opacity duration-500 ${
                        hoveredIndex === index + 2 || activeStep === index + 2 ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center space-x-6 mb-6">
                          <div className={`transform transition-all duration-500 ${
                            hoveredIndex === index + 2 || activeStep === index + 2 ? 'scale-110 rotate-3' : ''
                          }`}>
                            {step.icon}
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2">
                              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                                activeStep === index + 2 ? 'bg-green-600 text-white scale-110' : 'bg-gray-200 text-gray-600'
                              }`}>
                                {index + 3}
                              </span>
                              <span className={`px-4 py-2 bg-green-100 text-green-700 text-sm rounded-full transition-all duration-300 ${
                                hoveredIndex === index + 2 || activeStep === index + 2 ? 'bg-green-200 scale-105' : ''
                              }`}>
                                {step.tool}
                              </span>
                            </div>
                            <h3 className="text-xl text-gray-900 leading-tight group-hover:text-green-700 transition-colors duration-300">
                              {t(step.titleKey)}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {t(step.descriptionKey)}
                        </p>
                      </div>

                      {/* Floating Particles */}
                      {(hoveredIndex === index + 2 || activeStep === index + 2) && (
                        <>
                          <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-ping"></div>
                          <div className="absolute top-6 right-8 w-1 h-1 bg-green-500 rounded-full opacity-80 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-4 mt-16">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeStep === index ? 'bg-green-600 scale-125 shadow-lg shadow-green-300' : 'bg-gray-300 hover:bg-green-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-green-200"></div>
              )}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl text-gray-900 leading-tight flex-grow pr-4 group-hover:text-green-700 transition-colors duration-300">
                          {t(step.titleKey)}
                        </h3>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full whitespace-nowrap group-hover:bg-green-200 transition-colors duration-300">
                          {step.tool}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {t(step.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}