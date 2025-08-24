import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './i18n/LanguageContext';

export function StrategySection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="How we leverage Tmall Global"
                className="rounded-lg shadow-2xl w-full max-w-md h-80 object-cover"
              />
              {/* Overlay with logo/branding */}
              <div className="absolute inset-0 bg-green-600/20 rounded-lg flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="text-green-600 text-lg">{t('sellToChina.strategy.partnership')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 leading-tight">
              {t('sellToChina.strategy.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('sellToChina.strategy.description1')}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('sellToChina.strategy.description2')}
            </p>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">{t('sellToChina.strategy.benefits.noCompany')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">{t('sellToChina.strategy.benefits.warehouse')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">{t('sellToChina.strategy.benefits.consumers')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">{t('sellToChina.strategy.benefits.trust')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}