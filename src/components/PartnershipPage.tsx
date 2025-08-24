import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { useLanguage } from './i18n/LanguageContext';
import { 
  Handshake, 
  Globe, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Mail,
  Building,
  DollarSign
} from 'lucide-react';

export function PartnershipPage() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    website: '',
    industry: '',
    companySize: '',
    headquarters: '',
    
    // Contact Information
    contactName: '',
    title: '',
    email: '',
    phone: '',
    
    // Partnership Details
    partnershipType: '',
    services: [] as string[],
    regions: [] as string[],
    timeline: '',
    budget: '',
    
    // Business Information
    currentRevenue: '',
    targetMarkets: '',
    businessModel: '',
    existingPartners: '',
    
    // Additional Information
    experience: '',
    resources: '',
    expectations: '',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field as keyof typeof prev] as string[], value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Partnership form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-50 rounded-2xl p-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {t('partnership.success.title')}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {t('partnership.success.description')}
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                  {t('partnership.success.emailConfirmation')} <br />
                  <span className="font-medium text-gray-900">{formData.email}</span>
                </p>
              </div>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                {t('partnership.success.returnButton')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
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
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
            <Handshake className="w-4 h-4 mr-2" />
            {t('partnership.hero.badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('partnership.hero.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('partnership.hero.description')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('partnership.hero.features.globalReach.title')}</h3>
              <p className="text-gray-600">{t('partnership.hero.features.globalReach.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('partnership.hero.features.growthFocus.title')}</h3>
              <p className="text-gray-600">{t('partnership.hero.features.growthFocus.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('partnership.hero.features.expertSupport.title')}</h3>
              <p className="text-gray-600">{t('partnership.hero.features.expertSupport.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('partnership.form.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('partnership.form.subtitle')}
            </p>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-600" />
                {t('partnership.form.cardTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Company Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    {t('partnership.form.sections.company')}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">{t('partnership.form.fields.companyName')} *</Label>
                      <Input
                        id="companyName"
                        required
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        placeholder={t('partnership.form.placeholders.companyName')}
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">{t('partnership.form.fields.website')}</Label>
                      <Input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        placeholder={t('partnership.form.placeholders.website')}
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">{t('partnership.form.fields.industry')} *</Label>
                      <Select onValueChange={(value) => handleInputChange('industry', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('partnership.form.placeholders.industry')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="retail">{t('partnership.form.options.industries.retail')}</SelectItem>
                          <SelectItem value="manufacturing">{t('partnership.form.options.industries.manufacturing')}</SelectItem>
                          <SelectItem value="technology">{t('partnership.form.options.industries.technology')}</SelectItem>
                          <SelectItem value="consulting">{t('partnership.form.options.industries.consulting')}</SelectItem>
                          <SelectItem value="marketing">{t('partnership.form.options.industries.marketing')}</SelectItem>
                          <SelectItem value="logistics">{t('partnership.form.options.industries.logistics')}</SelectItem>
                          <SelectItem value="other">{t('partnership.form.options.industries.other')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="companySize">{t('partnership.form.fields.companySize')} *</Label>
                      <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('partnership.form.placeholders.companySize')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">{t('partnership.form.options.companySizes.startup')}</SelectItem>
                          <SelectItem value="small">{t('partnership.form.options.companySizes.small')}</SelectItem>
                          <SelectItem value="medium">{t('partnership.form.options.companySizes.medium')}</SelectItem>
                          <SelectItem value="large">{t('partnership.form.options.companySizes.large')}</SelectItem>
                          <SelectItem value="enterprise">{t('partnership.form.options.companySizes.enterprise')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="headquarters">{t('partnership.form.fields.headquarters')} *</Label>
                      <Input
                        id="headquarters"
                        required
                        value={formData.headquarters}
                        onChange={(e) => handleInputChange('headquarters', e.target.value)}
                        placeholder={t('partnership.form.placeholders.headquarters')}
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    {t('partnership.form.sections.contact')}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName">{t('partnership.form.fields.contactName')} *</Label>
                      <Input
                        id="contactName"
                        required
                        value={formData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        placeholder={t('partnership.form.placeholders.contactName')}
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">{t('partnership.form.fields.title')} *</Label>
                      <Input
                        id="title"
                        required
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        placeholder={t('partnership.form.placeholders.title')}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t('partnership.form.fields.email')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder={t('partnership.form.placeholders.email')}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t('partnership.form.fields.phone')}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder={t('partnership.form.placeholders.phone')}
                      />
                    </div>
                  </div>
                </div>

                {/* Partnership Details */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Handshake className="w-5 h-5 text-orange-600" />
                    {t('partnership.form.sections.partnership')}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="partnershipType">{t('partnership.form.fields.partnershipType')} *</Label>
                      <Select onValueChange={(value) => handleInputChange('partnershipType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('partnership.form.placeholders.partnershipType')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reseller">{t('partnership.form.options.partnershipTypes.reseller')}</SelectItem>
                          <SelectItem value="integration">{t('partnership.form.options.partnershipTypes.integration')}</SelectItem>
                          <SelectItem value="channel">{t('partnership.form.options.partnershipTypes.channel')}</SelectItem>
                          <SelectItem value="strategic">{t('partnership.form.options.partnershipTypes.strategic')}</SelectItem>
                          <SelectItem value="affiliate">{t('partnership.form.options.partnershipTypes.affiliate')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>{t('partnership.form.labels.servicesOfInterest')}</Label>
                      <div className="grid md:grid-cols-2 gap-2 mt-2">
                        {[
                          { key: 'ucMmm', label: t('partnership.form.options.services.ucMmm') },
                          { key: 'sellToChina', label: t('partnership.form.options.services.sellToChina') },
                          { key: 'sellToWorld', label: t('partnership.form.options.services.sellToWorld') },
                          { key: 'uccopilot', label: t('partnership.form.options.services.uccopilot') },
                          { key: 'aiAnalytics', label: t('partnership.form.options.services.aiAnalytics') },
                          { key: 'consulting', label: t('partnership.form.options.services.consulting') }
                        ].map((service) => (
                          <div key={service.key} className="flex items-center space-x-2">
                            <Checkbox
                              id={service.key}
                              onCheckedChange={(checked) => 
                                handleArrayChange('services', service.key, checked as boolean)
                              }
                            />
                            <Label htmlFor={service.key} className="text-sm">{service.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>{t('partnership.form.labels.targetRegions')}</Label>
                      <div className="grid md:grid-cols-3 gap-2 mt-2">
                        {[
                          { key: 'northAmerica', label: t('partnership.form.options.regions.northAmerica') },
                          { key: 'europe', label: t('partnership.form.options.regions.europe') },
                          { key: 'asiaPacific', label: t('partnership.form.options.regions.asiaPacific') },
                          { key: 'china', label: t('partnership.form.options.regions.china') },
                          { key: 'japan', label: t('partnership.form.options.regions.japan') },
                          { key: 'southKorea', label: t('partnership.form.options.regions.southKorea') },
                          { key: 'southeastAsia', label: t('partnership.form.options.regions.southeastAsia') },
                          { key: 'latinAmerica', label: t('partnership.form.options.regions.latinAmerica') },
                          { key: 'middleEast', label: t('partnership.form.options.regions.middleEast') },
                          { key: 'africa', label: t('partnership.form.options.regions.africa') }
                        ].map((region) => (
                          <div key={region.key} className="flex items-center space-x-2">
                            <Checkbox
                              id={region.key}
                              onCheckedChange={(checked) => 
                                handleArrayChange('regions', region.key, checked as boolean)
                              }
                            />
                            <Label htmlFor={region.key} className="text-sm">{region.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="timeline">{t('partnership.form.fields.timeline')} *</Label>
                        <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('partnership.form.placeholders.timeline')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">{t('partnership.form.options.timelines.immediate')}</SelectItem>
                            <SelectItem value="quarter">{t('partnership.form.options.timelines.quarter')}</SelectItem>
                            <SelectItem value="6months">{t('partnership.form.options.timelines.halfYear')}</SelectItem>
                            <SelectItem value="year">{t('partnership.form.options.timelines.year')}</SelectItem>
                            <SelectItem value="exploring">{t('partnership.form.options.timelines.exploring')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget">{t('partnership.form.fields.budget')}</Label>
                        <Select onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('partnership.form.placeholders.budget')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under50k">{t('partnership.form.options.budgets.under50k')}</SelectItem>
                            <SelectItem value="50k-100k">{t('partnership.form.options.budgets.50k-100k')}</SelectItem>
                            <SelectItem value="100k-250k">{t('partnership.form.options.budgets.100k-250k')}</SelectItem>
                            <SelectItem value="250k-500k">{t('partnership.form.options.budgets.250k-500k')}</SelectItem>
                            <SelectItem value="over500k">{t('partnership.form.options.budgets.over500k')}</SelectItem>
                            <SelectItem value="tbd">{t('partnership.form.options.budgets.tbd')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-purple-600" />
                    {t('partnership.form.sections.business')}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentRevenue">{t('partnership.form.fields.currentRevenue')}</Label>
                      <Select onValueChange={(value) => handleInputChange('currentRevenue', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('partnership.form.placeholders.currentRevenue')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under1m">{t('partnership.form.options.revenues.under1m')}</SelectItem>
                          <SelectItem value="1m-5m">{t('partnership.form.options.revenues.1m-5m')}</SelectItem>
                          <SelectItem value="5m-10m">{t('partnership.form.options.revenues.5m-10m')}</SelectItem>
                          <SelectItem value="10m-50m">{t('partnership.form.options.revenues.10m-50m')}</SelectItem>
                          <SelectItem value="over50m">{t('partnership.form.options.revenues.over50m')}</SelectItem>
                          <SelectItem value="confidential">{t('partnership.form.options.revenues.confidential')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="targetMarkets">{t('partnership.form.fields.targetMarkets')}</Label>
                      <Textarea
                        id="targetMarkets"
                        value={formData.targetMarkets}
                        onChange={(e) => handleInputChange('targetMarkets', e.target.value)}
                        placeholder={t('partnership.form.placeholders.targetMarkets')}
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="businessModel">{t('partnership.form.fields.businessModel')}</Label>
                      <Textarea
                        id="businessModel"
                        value={formData.businessModel}
                        onChange={(e) => handleInputChange('businessModel', e.target.value)}
                        placeholder={t('partnership.form.placeholders.businessModel')}
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="existingPartners">{t('partnership.form.fields.existingPartners')}</Label>
                      <Textarea
                        id="existingPartners"
                        value={formData.existingPartners}
                        onChange={(e) => handleInputChange('existingPartners', e.target.value)}
                        placeholder={t('partnership.form.placeholders.existingPartners')}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('partnership.form.sections.additional')}</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="experience">{t('partnership.form.fields.relevantExperience')}</Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        placeholder={t('partnership.form.placeholders.relevantExperience')}
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="resources">{t('partnership.form.fields.resources')}</Label>
                      <Textarea
                        id="resources"
                        value={formData.resources}
                        onChange={(e) => handleInputChange('resources', e.target.value)}
                        placeholder={t('partnership.form.placeholders.resources')}
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="expectations">{t('partnership.form.fields.expectations')}</Label>
                      <Textarea
                        id="expectations"
                        value={formData.expectations}
                        onChange={(e) => handleInputChange('expectations', e.target.value)}
                        placeholder={t('partnership.form.placeholders.expectations')}
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="additionalInfo">{t('partnership.form.fields.additionalInfo')}</Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        placeholder={t('partnership.form.placeholders.additionalInfo')}
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Button 
                    type="submit" 
                    className="bg-green-600 hover:bg-green-700 text-white px-12 py-3 text-lg"
                  >
                    {t('partnership.form.buttons.submit')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}