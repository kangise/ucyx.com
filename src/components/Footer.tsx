import { Icons } from "./Icons";
import { useRouter } from "./RouteContext";
import { useLanguage } from "./i18n/LanguageContext";
import { LanguageSwitcher } from "./i18n/LanguageSwitcher";
import { PolicyDialog } from "./PolicyDialog";
import { Button } from "./ui/button";

export function Footer() {
  const { navigateTo } = useRouter();
  const { t } = useLanguage();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (path === "sell-to-china") {
      navigateTo("sell-to-china");
    } else if (path === "sell-to-world") {
      navigateTo("sell-to-world");
    } else if (path === "uc-mmm") {
      navigateTo("uc-mmm");
    } else if (path === "uccopilot") {
      navigateTo("uccopilot");
    } else if (path === "home") {
      navigateTo("home");
    } else if (path === "about") {
      navigateTo("about");
    } else if (path === "partnership") {
      navigateTo("partnership");
    } else if (path === "novochoice") {
      // Navigate to home page and scroll to Novochoice section
      navigateTo("home");
      setTimeout(() => {
        const element = document.querySelector("#novochoice");
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <h3 className="text-3xl">{t('header.brand')}</h3>
              <div className="text-sm text-gray-400">{t('footer.tagline')}</div>
            </div>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Language Switcher in Footer */}
            <div className="mb-6">
              <div className="text-sm text-gray-400 mb-3">{t('footer.language')} / 语言 / 言語 / 언어</div>
              <LanguageSwitcher />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, "sell-to-china")}
                >
                  {t('navigation.sellToChina')}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, "sell-to-world")}
                >
                  {t('navigation.sellToWorld')}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, "novochoice")}
                >
                  {t('header.novochoice')}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, "uccopilot")}
                >
                  UCcopilot™
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, "uc-mmm")}
                >
                  UC-MMM™
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6">{t('footer.company')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, "about")}
                >
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, "partnership")}
                >
                  {t('footer.partnership')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">{t('footer.resources')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.blog')}</a></li>
              <li>
                <a 
                  href="mailto:services@ucyx.com" 
                  className="hover:text-white transition-colors"
                >
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 text-gray-400">
              <PolicyDialog
                type="privacy"
                trigger={
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                    {t('footer.privacyPolicy')}
                  </Button>
                }
              />
              <PolicyDialog
                type="terms"
                trigger={
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                    {t('footer.termsOfService')}
                  </Button>
                }
              />
              <PolicyDialog
                type="cookie"
                trigger={
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto">
                    {t('footer.cookiePolicy')}
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}