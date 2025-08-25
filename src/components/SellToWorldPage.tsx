import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Badge } from './ui/badge';
import { useLanguage } from './i18n/LanguageContext';
import { 
  Globe, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Search, 
  BarChart3, 
  Target, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Headphones,
  ChevronRight,
  Calendar
} from 'lucide-react';

export function SellToWorldPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    category: '',
    mainObjective: '',
    serviceType: '',
    currentPlatforms: [] as string[],
    monthlyRevenue: '',
    targetMarkets: [] as string[],
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value]
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
        <Header />
        <div className="flex items-center justify-center min-h-[80vh]">
          <Card className="max-w-md w-full mx-4">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('sellToWorld.form.success.title')}</h2>
              <p className="text-gray-600 mb-6">
                {t('sellToWorld.form.success.message')}
              </p>
              <Button 
                onClick={() => window.location.reload()} 
                className="bg-green-600 hover:bg-green-700"
              >
                {t('sellToWorld.form.success.backButton')}
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDEwNiwgMTIzLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
              {t('sellToWorld.badge')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('sellToWorld.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('sellToWorld.hero.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-green-600" />
                <span>{t('sellToWorld.features.globalAccess')}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span>{t('sellToWorld.features.strategies')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>{t('sellToWorld.features.endToEndSupport')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('sellToWorld.platforms.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('sellToWorld.platforms.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Amazon Platform */}
            <Card className="relative overflow-hidden border-2 border-orange-100 hover:border-orange-200 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{t('sellToWorld.services.amazon.title')}</CardTitle>
                    <CardDescription>{t('sellToWorld.services.amazon.description')}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('sellToWorld.services.amazon.activeUsers')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('sellToWorld.services.amazon.countries')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('sellToWorld.services.amazon.fba')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('sellToWorld.services.amazon.prime')}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">{t('sellToWorld.services.amazon.whatWeProvide')}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {t('sellToWorld.services.amazon.services.setup')}</li>
                      <li>• {t('sellToWorld.services.amazon.services.listing')}</li>
                      <li>• {t('sellToWorld.services.amazon.services.ppc')}</li>
                      <li>• {t('sellToWorld.services.amazon.services.inventory')}</li>
                      <li>• {t('sellToWorld.services.amazon.services.analytics')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Self-Built Website + SEO */}
            <Card className="relative overflow-hidden border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{t('sellToWorld.services.shopify.title')}</CardTitle>
                    <CardDescription>{t('sellToWorld.services.shopify.description')}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('sellToWorld.services.shopify.design')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('sellToWorld.services.shopify.seo')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('sellToWorld.services.shopify.mobile')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('sellToWorld.services.shopify.analytics')}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">{t('sellToWorld.services.shopify.whatWeProvide')}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {t('sellToWorld.services.shopify.services.design')}</li>
                      <li>• {t('sellToWorld.services.shopify.services.seoStrategy')}</li>
                      <li>• {t('sellToWorld.services.shopify.services.content')}</li>
                      <li>• {t('sellToWorld.services.shopify.services.social')}</li>
                      <li>• {t('sellToWorld.services.shopify.services.conversion')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Models */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('sellToWorld.serviceModels.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('sellToWorld.serviceModels.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Proxy Sales Model */}
            <Card className="relative overflow-hidden border-2 border-green-100 hover:border-green-200 transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{t('sellToWorld.services.ucyx.title')}</CardTitle>
                    <CardDescription>{t('sellToWorld.services.ucyx.description')}</CardDescription>
                  </div>
                </div>
                <Badge className="w-fit bg-green-600 text-white">{t('sellToWorld.serviceModels.partnership.subtitle')}</Badge>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-green-600" />
                      {t('sellToWorld.serviceModels.fullService.keyBenefits')}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{t('sellToWorld.services.ucyx.credibility')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{t('sellToWorld.services.ucyx.investment')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{t('sellToWorld.services.ucyx.templates')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{t('sellToWorld.serviceModels.partnership.benefits.resources')}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">{t('sellToWorld.serviceModels.partnership.serviceIncludes')}</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>{t('sellToWorld.services.ucyx.setup')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>{t('sellToWorld.services.ucyx.optimization')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>{t('sellToWorld.services.ucyx.management')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>{t('sellToWorld.services.ucyx.service')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>{t('sellToWorld.services.ucyx.campaigns')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>{t('sellToWorld.services.ucyx.reporting')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Full-Service Operations */}
            <Card className="relative overflow-hidden border-2 border-blue-100 hover:border-blue-200 transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{t('sellToWorld.serviceModels.fullService.title')}</CardTitle>
                    <CardDescription>{t('sellToWorld.serviceModels.fullService.subtitle')}</CardDescription>
                  </div>
                </div>
                <Badge className="w-fit bg-blue-600 text-white">{t('sellToWorld.serviceModels.fullService.forBrands')}</Badge>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-blue-600" />
                      {t('sellToWorld.serviceModels.fullService.keyBenefits')}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{t('sellToWorld.services.ucyx.advantage')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{t('sellToWorld.serviceModels.fullService.benefits.strategy')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{t('sellToWorld.serviceModels.fullService.benefits.control')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{t('sellToWorld.serviceModels.fullService.benefits.dedicated')}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">{t('sellToWorld.serviceModels.fullService.serviceIncludes')}</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{t('sellToWorld.serviceModels.fullService.services.consulting')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{t('sellToWorld.serviceModels.fullService.services.brand')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{t('sellToWorld.serviceModels.fullService.services.platform')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{t('sellToWorld.serviceModels.fullService.services.marketing')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{t('sellToWorld.serviceModels.fullService.services.analytics')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{t('sellToWorld.serviceModels.fullService.services.support')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">{t('sellToWorld.stats.markets')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">250%</div>
              <div className="text-green-100">{t('sellToWorld.stats.growth')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">{t('sellToWorld.stats.success')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">{t('sellToWorld.stats.support')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              开始您的全球扩张
            </h2>
            <p className="text-xl text-gray-600">
              告诉我们您的业务情况，我们将为您的全球成功制定定制化增长策略
            </p>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://calendly.com/kanjiang/cooperation', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="mr-3 w-6 h-6" />
                预约咨询
              </Button>
              <Button 
                onClick={() => window.open('mailto:services@ucyx.com', '_blank')}
                variant="outline"
                className="border-2 border-green-600 bg-white text-green-600 hover:bg-green-600 hover:text-white px-12 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Globe className="mr-3 w-6 h-6" />
                联系我们
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}