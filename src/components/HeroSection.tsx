import { Button } from "./ui/button";
import heroBackground from "figma:asset/baac93ea81c7d51da5bd4402dbdb47e4044c7aef.png";
import { useLanguage } from "./i18n/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section 
      className="min-h-screen relative flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>
      
      {/* Green accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 via-transparent to-green-800/10"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl mb-8 text-white leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed drop-shadow-md">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {t('hero.cta')}
              </Button>
              <Button variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm h-14 px-8 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {t('hero.watchDemo')}
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
              <div className="mb-6">
                <h3 className="text-xl mb-4 text-gray-900">{t('hero.dataInsights')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('hero.dataDescription')}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl text-green-600 mb-2">300+</div>
                  <div className="text-sm text-gray-600">{t('hero.categories')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-green-600 mb-2">5M+</div>
                  <div className="text-sm text-gray-600">{t('hero.products')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-green-600 mb-2">10M+</div>
                  <div className="text-sm text-gray-600">{t('hero.keywords')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-green-600 mb-2">50M+</div>
                  <div className="text-sm text-gray-600">{t('hero.reviews')}</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements with enhanced visibility */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400/30 rounded-full backdrop-blur-sm border border-green-300/20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm border border-white/30"></div>
            
            {/* Additional floating particles */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-green-400 rounded-full opacity-70 animate-ping"></div>
            <div className="absolute bottom-20 left-4 w-2 h-2 bg-white rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-green-300 rounded-full opacity-80 animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </section>
  );
}