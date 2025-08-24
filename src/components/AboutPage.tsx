import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Icons } from "./Icons";
import { useLanguage } from "./i18n/LanguageContext";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AboutPage() {
  const { t } = useLanguage();

  const coreValues = [
    {
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      icon: <Icons.Zap className="w-8 h-8 text-green-400" />
    },
    {
      title: t('about.values.results.title'),
      description: t('about.values.results.description'),
      icon: <Icons.TrendUp className="w-8 h-8 text-green-400" />
    },
    {
      title: t('about.values.partnership.title'),
      description: t('about.values.partnership.description'),
      icon: <Icons.Users className="w-8 h-8 text-green-400" />
    },
    {
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
      icon: <Icons.Award className="w-8 h-8 text-green-400" />
    }
  ];

  const teamLocations = [
    {
      key: 'hongkong',
      city: t('about.locations.offices.hongkong.city'),
      country: t('about.locations.offices.hongkong.country'),
      expertise: t('about.locations.offices.hongkong.description'),
      isHeadquarters: true
    },
    {
      key: 'shenzhen',
      city: t('about.locations.offices.shenzhen.city'),
      country: t('about.locations.offices.shenzhen.country'),
      expertise: t('about.locations.offices.shenzhen.description'),
      isHeadquarters: false
    },
    {
      key: 'taipei',
      city: t('about.locations.offices.taipei.city'),
      country: t('about.locations.offices.taipei.country'),
      expertise: t('about.locations.offices.taipei.description'),
      isHeadquarters: false
    },
    {
      key: 'usa',
      city: t('about.locations.offices.usa.city'),
      country: t('about.locations.offices.usa.country'),
      expertise: t('about.locations.offices.usa.description'),
      isHeadquarters: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        {/* Hero Section - Dark Tech Style */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
          {/* Tech Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-10 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-40 left-20 w-1 h-1 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30">
                {t('about.title')}
              </Badge>
              <h1 className="text-4xl md:text-6xl text-white mb-6 bg-gradient-to-r from-white via-green-100 to-green-300 bg-clip-text text-transparent">
                {t('about.subtitle')}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission - Dark Tech */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <Card className="bg-gray-800/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Icons.Eye className="w-8 h-8 text-green-400 mr-4" />
                    <h2 className="text-2xl text-white">
                      {t('about.vision.title')}
                    </h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {t('about.vision.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Icons.Target className="w-8 h-8 text-green-400 mr-4" />
                    <h2 className="text-2xl text-white">
                      {t('about.mission.title')}  
                    </h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {t('about.mission.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values - Dark Tech */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-white mb-6">
                {t('about.values.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="bg-gray-900/50 border border-gray-800/50 hover:border-green-500/50 transition-all duration-300 group text-center backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Dark Tech */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-white mb-6">
                {t('about.team.title')}
              </h2>
              <p className="text-xl text-green-400 mb-4">
                {t('about.team.subtitle')}
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t('about.team.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mb-16">
              <Card className="bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Icons.Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl text-white mb-2">
                    {t('about.team.experience.title')}
                  </h3>
                  <div className="text-4xl text-green-400 mb-2">
                    {t('about.team.experience.years')}
                  </div>
                  <p className="text-gray-300">
                    {t('about.team.experience.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800/20 to-gray-700/20 border border-gray-600/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Icons.Building className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl text-white mb-2">
                    {t('about.team.leaders.title')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t('about.team.leaders.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Global Team Distribution - Dark Tech */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-white mb-6">
                {t('about.locations.title')}
              </h2>
              <p className="text-xl text-green-400 mb-4">
                {t('about.locations.subtitle')}
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('about.locations.description')}
              </p>
            </div>

            {/* Global Office Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamLocations.map((location, index) => (
                <Card 
                  key={location.key} 
                  className={`${
                    location.isHeadquarters 
                      ? 'bg-gradient-to-br from-green-900/40 to-green-800/30 border border-green-500/50' 
                      : 'bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50'
                  } hover:border-green-500/50 transition-all duration-300 group backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    {/* Location Header */}
                    <div className="flex items-center mb-6">
                      <div className={`w-3 h-3 ${
                        location.isHeadquarters ? 'bg-green-300' : 'bg-green-400'
                      } rounded-full mr-3 animate-pulse shadow-lg shadow-green-400/50`}>
                        <div className={`absolute w-3 h-3 ${
                          location.isHeadquarters ? 'bg-green-300' : 'bg-green-400'
                        } rounded-full animate-ping opacity-30`}></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl text-white group-hover:text-green-300 transition-colors duration-300">
                            {location.city}
                          </h3>
                          {location.isHeadquarters && (
                            <Badge className="bg-green-500/20 text-green-300 border border-green-500/30 text-xs">
                              HQ
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-green-400">
                          {location.country}
                        </p>
                      </div>
                    </div>

                    {/* Expertise Description */}
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Icons.Building className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 leading-relaxed">
                          {location.expertise}
                        </p>
                      </div>
                    </div>

                    {/* Tech Accent Line */}
                    <div className="mt-6 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-1">
                          <div className={`w-2 h-2 ${
                            location.isHeadquarters ? 'bg-green-300/80' : 'bg-green-400/60'
                          } rounded-full`}></div>
                          <div className={`w-2 h-2 ${
                            location.isHeadquarters ? 'bg-green-300/60' : 'bg-green-400/40'
                          } rounded-full`}></div>
                          <div className={`w-2 h-2 ${
                            location.isHeadquarters ? 'bg-green-300/40' : 'bg-green-400/20'
                          } rounded-full`}></div>
                        </div>
                        <Icons.Globe className="w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Global Network Visual */}
            <div className="mt-16 text-center">
              <div className="relative inline-flex items-center justify-center">
                {/* Central Hub */}
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25">
                  <Icons.Globe className="w-8 h-8 text-white" />
                </div>
                
                {/* Connecting Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" style={{ width: '200px', height: '200px' }}>
                    <defs>
                      <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1"/>
                      </radialGradient>
                    </defs>
                    <circle 
                      cx="100" 
                      cy="100" 
                      r="80" 
                      fill="none" 
                      stroke="url(#hubGradient)" 
                      strokeWidth="2" 
                      strokeDasharray="8,4"
                      className="animate-spin"
                      style={{ animationDuration: '20s' }}
                    />
                    <circle 
                      cx="100" 
                      cy="100" 
                      r="60" 
                      fill="none" 
                      stroke="url(#hubGradient)" 
                      strokeWidth="1" 
                      strokeDasharray="4,6"
                      className="animate-spin"
                      style={{ animationDuration: '15s', animationDirection: 'reverse' }}
                    />
                  </svg>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mt-4 max-w-md mx-auto">
                {t('about.locations.tagline')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section - Dark Tech */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
          {/* Tech Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="aboutPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="2" fill="#22c55e"/>
                  <line x1="50" y1="0" x2="50" y2="30" stroke="#22c55e" strokeWidth="1"/>
                  <line x1="50" y1="70" x2="50" y2="100" stroke="#22c55e" strokeWidth="1"/>
                  <line x1="0" y1="50" x2="30" y2="50" stroke="#22c55e" strokeWidth="1"/>
                  <line x1="70" y1="50" x2="100" y2="50" stroke="#22c55e" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#aboutPattern)"/>
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-white via-green-100 to-green-300 bg-clip-text text-transparent">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('about.cta.subtitle')}
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 text-lg px-8 py-3 shadow-lg shadow-green-500/25"
            >
              {t('about.cta.button')}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}