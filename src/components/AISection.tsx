import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import { useLanguage } from "./i18n/LanguageContext";

export function AISection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentInsight, setCurrentInsight] = useState(0);
  const [isProcessing, setIsProcessing] = useState(true);
  const { t } = useLanguage();

  // Data points with translation keys
  const dataPoints = [
    { labelKey: "ai.dataPoints.marketDatasets", value: "50M+", delay: 0 },
    { labelKey: "ai.dataPoints.nicheMarkets", value: "2,400+", delay: 200 },
    { labelKey: "ai.dataPoints.successRate", value: "94%", delay: 400 },
    { labelKey: "ai.dataPoints.activeInsights", value: "15K+", delay: 600 }
  ];

  // Core features with translation keys
  const coreFeatures = [
    {
      titleKey: "ai.features.intelligence.title",
      descriptionKey: "ai.features.intelligence.description",
      icon: "🎯",
      detailsKey: "ai.features.intelligence.details"
    },
    {
      titleKey: "ai.features.optimization.title",
      descriptionKey: "ai.features.optimization.description",
      icon: "🔍", 
      detailsKey: "ai.features.optimization.details"
    },
    {
      titleKey: "ai.features.forecasting.title",
      descriptionKey: "ai.features.forecasting.description",
      icon: "💭",
      detailsKey: "ai.features.forecasting.details"
    },
    {
      titleKey: "ai.features.automation.title",
      descriptionKey: "ai.features.automation.description",
      icon: "📊",
      detailsKey: "ai.features.automation.details"
    }
  ];

  // Live insights remain in English as they are real-time data
  const liveInsights = [
    { category: "Smart Home Devices", score: "92", growth: "+48%", markets: "5 Markets" },
    { category: "Sustainable Fashion", score: "88", growth: "+37%", markets: "3 Markets" },  
    { category: "Pet Tech Products", score: "85", growth: "+52%", markets: "4 Markets" },
    { category: "Gaming Accessories", score: "79", growth: "+29%", markets: "6 Markets" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % coreFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % liveInsights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsProcessing(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="ai-platform" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Add Novochoice section ID */}
      <div id="novochoice"></div>

      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>
        
        {/* Floating Data Points */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30 mb-4">
                {t('ai.badgeText')}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('ai.title')}
            </h2>
            
            <h3 className="text-3xl md:text-4xl mb-8 text-green-400 font-mono">
              Novochoice<span className="animate-pulse">_</span>
            </h3>
            
            <p className="text-xl mb-6 leading-relaxed text-gray-300">
              {t('ai.description')}
            </p>

            <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h4 className="text-lg text-green-400 mb-3">{t('ai.coreCapabilities')}:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>{t('ai.capabilities.globalMarkets')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>{t('ai.capabilities.nicheDiscovery')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>{t('ai.capabilities.reviewAnalysis')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>{t('ai.capabilities.predictiveForecasting')}</span>
                </li>
              </ul>
            </div>
            
            {/* Data Points Animation */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {dataPoints.map((point, index) => (
                <div 
                  key={index}
                  className={`text-center transform transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${point.delay}ms` }}
                >
                  <div className="text-3xl text-green-400 font-mono mb-2">
                    {point.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {t(point.labelKey)}
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300">
              {t('ai.accessPlatform')}
            </Button>
          </div>
          
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main Dashboard */}
            <Card className="bg-gray-900/50 border-green-500/30 backdrop-blur-lg shadow-2xl shadow-green-500/10">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl text-green-400 font-mono">{t('ai.dashboard.title')}</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div 
                      className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" 
                      style={{ animationDelay: '0.5s' }}
                    ></div>
                    <div 
                      className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" 
                      style={{ animationDelay: '1s' }}
                    ></div>
                  </div>
                </div>
                
                {/* Live Market Analysis */}
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-6">
                  <div className="text-green-400 mb-2">$ novochoice --analyze-markets --real-time</div>
                  {isProcessing ? (
                    <>
                      <div className="text-gray-400 mb-1">{t('ai.dashboard.scanning')}</div>
                      <div className="text-gray-400 mb-1">{t('ai.dashboard.processing')}</div>
                      <div className="text-yellow-400">{t('ai.dashboard.analyzing')}</div>
                    </>
                  ) : (
                    <>
                      <div className="text-gray-400 mb-1">✓ {t('ai.dashboard.analysisComplete')}</div>
                      <div className="text-gray-400 mb-1">✓ {t('ai.dashboard.opportunitiesFound')}</div>
                      <div className="text-green-400">✓ {t('ai.dashboard.reviewAnalysisComplete')}</div>
                    </>
                  )}
                </div>
                
                {/* Live Market Insights */}
                <div className="mb-6">
                  <h5 className="text-sm text-gray-400 mb-3">{t('ai.dashboard.liveInsights')}</h5>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 text-sm">{liveInsights[currentInsight].category}</span>
                      <span className="text-xs text-gray-500">{liveInsights[currentInsight].markets}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-lg text-white">{t('ai.dashboard.score')}: {liveInsights[currentInsight].score}</div>
                        <div className="text-sm text-green-400">{liveInsights[currentInsight].growth}</div>
                      </div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                    <div className="text-lg text-green-400 mb-1">127</div>
                    <div className="text-xs text-gray-400">{t('ai.dashboard.aiModels')}</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-center">
                    <div className="text-lg text-blue-400 mb-1">94%</div>
                    <div className="text-xs text-gray-400">{t('ai.dashboard.accuracy')}</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 text-center">
                    <div className="text-lg text-purple-400 mb-1">24/7</div>
                    <div className="text-xs text-gray-400">{t('ai.dashboard.monitoring')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Core Features */}
            <div className="grid grid-cols-1 gap-4">
              {coreFeatures.map((feature, index) => (
                <Card 
                  key={index}
                  className={`bg-gray-900/30 border-gray-700/50 backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                    activeFeature === index ? 'border-green-500/50 bg-green-500/5 scale-105' : 'hover:border-gray-600/50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{feature.icon}</div>
                      <div className="flex-grow">
                        <h5 className="text-lg text-white mb-2">{t(feature.titleKey)}</h5>
                        <p className="text-sm text-gray-400 mb-2">{t(feature.descriptionKey)}</p>
                        {activeFeature === index && (
                          <p className="text-xs text-green-400 animate-fadeIn">{t(feature.detailsKey)}</p>
                        )}
                      </div>
                      {activeFeature === index && (
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mb-1"></div>
                          <div className="text-xs text-green-400">{t('ai.dashboard.active')}</div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
}