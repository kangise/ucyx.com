import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from './i18n/LanguageContext';
import { useRouter } from './RouteContext';
import { 
  Users,
  Target,
  ArrowRight,
  Shield,
  Clock,
  Heart,
  Rocket,
  HandHeart,
  Calendar
} from 'lucide-react';

export function UCcopilotPage() {
  const { t } = useLanguage();
  const { navigateTo } = useRouter();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDEwNiwgMTIzLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
              <HandHeart className="w-4 h-4 mr-2" />
              {t('uccopilot.hero.badge')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('uccopilot.hero.title')}
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              {t('uccopilot.hero.subtitle')}
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              {t('uccopilot.hero.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>{t('uccopilot.hero.heroFeatures.hassleFreee')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-green-600" />
                <span>{t('uccopilot.hero.heroFeatures.deepPartnership')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-green-600" />
                <span>{t('uccopilot.hero.heroFeatures.endToEndStrategy')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-600" />
                <span>{t('uccopilot.hero.heroFeatures.dedicatedSupport')}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Hero CTA button removed as requested */}
            </div>
          </div>
        </div>
      </section>

      {/* Hassle-Free Promise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('uccopilot.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('uccopilot.hero.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-green-100 hover:border-green-200 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">{t('uccopilot.features.zeroStress.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t('uccopilot.features.zeroStress.description')}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {t('uccopilot.features.zeroStress.items.setup')}</li>
                  <li>• {t('uccopilot.features.zeroStress.items.integration')}</li>
                  <li>• {t('uccopilot.features.zeroStress.items.configuration')}</li>
                  <li>• {t('uccopilot.features.zeroStress.items.testing')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{t('uccopilot.features.support.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t('uccopilot.features.support.description')}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {t('uccopilot.features.support.items.monitoring')}</li>
                  <li>• {t('uccopilot.features.support.items.resolution')}</li>
                  <li>• {t('uccopilot.features.support.items.optimization')}</li>
                  <li>• {t('uccopilot.features.support.items.emergency')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-200 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">{t('uccopilot.features.automation.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t('uccopilot.features.automation.description')}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {t('uccopilot.features.automation.items.inventory')}</li>
                  <li>• {t('uccopilot.features.automation.items.processing')}</li>
                  <li>• {t('uccopilot.features.automation.items.communications')}</li>
                  <li>• {t('uccopilot.features.automation.items.analytics')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t('uccopilot.growthCta.title')}
          </h2>
          <p className="text-xl text-green-100 mb-8">
            {t('uccopilot.growthCta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://calendly.com/kanjiang/cooperation', '_blank')}
              className="bg-white text-green-600 hover:bg-gray-100 border-2 border-white px-8 py-3 text-lg font-semibold"
            >
              <Calendar className="mr-2 w-5 h-5" />
              {t('uccopilot.growthCta.secondaryButton')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}