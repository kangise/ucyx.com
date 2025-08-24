import { Card, CardContent } from "./ui/card";
import { useLanguage } from "./i18n/LanguageContext";

export function WhoWeServe() {
  const { t } = useLanguage();

  return (
    <section id="who-we-serve" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            {t('whoWeServe.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('whoWeServe.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow group h-full">
            <CardContent className="p-10 flex flex-col h-full text-center">
              <h3 className="text-2xl mb-6 text-gray-900">{t('whoWeServe.establishedBrands')}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {t('whoWeServe.establishedBrandsDescription')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow group h-full">
            <CardContent className="p-10 flex flex-col h-full text-center">
              <h3 className="text-2xl mb-6 text-gray-900">{t('whoWeServe.startupsWithIdeas')}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {t('whoWeServe.startupsWithIdeasDescription')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow group h-full">
            <CardContent className="p-10 flex flex-col h-full text-center">
              <h3 className="text-2xl mb-6 text-gray-900">{t('whoWeServe.traditionalManufacture')}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {t('whoWeServe.traditionalManufactureDescription')}
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            {t('whoWeServe.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}