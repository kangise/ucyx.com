import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from './i18n/LanguageContext';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Zap,
  CheckCircle,
  ArrowRight,
  ShoppingCart,
  Globe,
  Brain,
  Database,
  Calendar,
  Award,
  ChevronRight
} from 'lucide-react';

export function UCMMMPage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDEwNiwgMTIzLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc=')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              <BarChart3 className="w-4 h-4 mr-2" />
              {t('ucMmm.hero.badge')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('ucMmm.hero.title')}
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              {t('ucMmm.hero.subtitle')}
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              {t('ucMmm.hero.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-blue-600" />
                <span>{t('ucMmm.hero.platforms.amazon')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <span>{t('ucMmm.hero.platforms.website')}</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <span>{t('ucMmm.hero.platforms.shopify')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                <span>{t('ucMmm.hero.platforms.roi')}</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                {t('common.getStarted')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Marketing Mix Modeling */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('ucMmm.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('ucMmm.hero.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{t('ucMmm.features.dataIntegration.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t('ucMmm.features.dataIntegration.description')}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {t('ucMmm.features.dataIntegration.items.advertising')}</li>
                  <li>• {t('ucMmm.features.dataIntegration.items.sales')}</li>
                  <li>• {t('ucMmm.features.dataIntegration.items.seasonal')}</li>
                  <li>• {t('ucMmm.features.dataIntegration.items.competitive')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-200 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">{t('ucMmm.features.statisticalAnalysis.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t('ucMmm.features.statisticalAnalysis.description')}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {t('ucMmm.features.statisticalAnalysis.items.regression')}</li>
                  <li>• {t('ucMmm.features.statisticalAnalysis.items.attribution')}</li>
                  <li>• {t('ucMmm.features.statisticalAnalysis.items.incremental')}</li>
                  <li>• {t('ucMmm.features.statisticalAnalysis.items.saturation')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-200 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">{t('ucMmm.features.optimization.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t('ucMmm.features.optimization.description')}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {t('ucMmm.features.optimization.items.budget')}</li>
                  <li>• {t('ucMmm.features.optimization.items.performance')}</li>
                  <li>• {t('ucMmm.features.optimization.items.scenario')}</li>
                  <li>• {t('ucMmm.features.optimization.items.forecasting')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('ucMmm.howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('ucMmm.howItWorks.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('ucMmm.howItWorks.dataCollection.title')}</h3>
              <p className="text-gray-600">
                {t('ucMmm.howItWorks.dataCollection.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('ucMmm.howItWorks.statisticalModeling.title')}</h3>
              <p className="text-gray-600">
                {t('ucMmm.howItWorks.statisticalModeling.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('ucMmm.howItWorks.insightGeneration.title')}</h3>
              <p className="text-gray-600">
                {t('ucMmm.howItWorks.insightGeneration.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('ucMmm.howItWorks.continuousOptimization.title')}</h3>
              <p className="text-gray-600">
                {t('ucMmm.howItWorks.continuousOptimization.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t('ucMmm.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('ucMmm.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              {t('ucMmm.cta.button')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}