import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "./i18n/LanguageContext";

export function PricingSection() {
  const { t } = useLanguage();

  // Define pricing plans with translation keys
  const pricingPlans = [
    {
      nameKey: "sellToChina.pricing.plans.basic.name",
      descriptionKey: "sellToChina.pricing.plans.basic.description",
      features: [
        "sellToChina.pricing.plans.basic.features.assessment",
        "sellToChina.pricing.plans.basic.features.guidance",
        "sellToChina.pricing.plans.basic.features.setup"
      ],
      ctaKey: "sellToChina.pricing.plans.basic.cta",
      isRecommended: false
    },
    {
      nameKey: "sellToChina.pricing.plans.growth.name",
      descriptionKey: "sellToChina.pricing.plans.growth.description",
      features: [
        "sellToChina.pricing.plans.growth.features.basicIncluded",
        "sellToChina.pricing.plans.growth.features.operations",
        "sellToChina.pricing.plans.growth.features.customerService",
        "sellToChina.pricing.plans.growth.features.reports"
      ],
      ctaKey: "sellToChina.pricing.plans.growth.cta",
      isRecommended: true
    },
    {
      nameKey: "sellToChina.pricing.plans.flagship.name",
      descriptionKey: "sellToChina.pricing.plans.flagship.description",
      features: [
        "sellToChina.pricing.plans.flagship.features.growthIncluded",
        "sellToChina.pricing.plans.flagship.features.marketing",
        "sellToChina.pricing.plans.flagship.features.kol",
        "sellToChina.pricing.plans.flagship.features.analytics"
      ],
      ctaKey: "sellToChina.pricing.plans.flagship.cta",
      isRecommended: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 leading-tight">
            {t('sellToChina.pricing.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('sellToChina.pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.isRecommended 
                  ? 'bg-green-600 text-white shadow-2xl border-green-600' 
                  : 'bg-white border-gray-200 hover:border-green-300'
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-green-500 text-white text-xs px-4 py-2 rounded-full shadow-lg">
                    {t('sellToChina.pricing.plans.growth.recommended')}
                  </span>
                </div>
              )}
              
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className={`text-2xl mb-4 leading-tight ${
                    plan.isRecommended ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t(plan.nameKey)}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${
                    plan.isRecommended ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    {t(plan.descriptionKey)}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((featureKey, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${
                          plan.isRecommended ? 'text-green-200' : 'text-green-600'
                        }`} />
                        <span className={`leading-relaxed ${
                          plan.isRecommended ? 'text-white' : 'text-gray-700'
                        }`}>
                          {t(featureKey)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full transition-all duration-300 ${
                    plan.isRecommended
                      ? 'bg-white text-green-700 hover:bg-gray-100'
                      : 'bg-green-100 text-green-700 hover:bg-green-200 border-green-600'
                  }`}
                  variant={plan.isRecommended ? "secondary" : "ghost"}
                >
                  {t(plan.ctaKey)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}