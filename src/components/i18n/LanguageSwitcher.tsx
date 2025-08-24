import { useState } from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { useLanguage, Language } from './LanguageContext';

const languages = [
  { code: 'en' as Language, region: 'Global', language: 'English' },
  { code: 'zh-cn' as Language, region: '中国大陆', language: '中文简体' },
  { code: 'zh-tw' as Language, region: '香港', language: '中文繁體' },
  { code: 'zh-tw' as Language, region: '台湾', language: '中文繁體' },
  { code: 'ja' as Language, region: '日本', language: '日本語' },
  { code: 'ko' as Language, region: '韩國', language: '한국어' },
];

interface LanguageSwitcherProps {
  variant?: 'default' | 'minimal';
  align?: 'start' | 'center' | 'end';
}

export function LanguageSwitcher({ 
  variant = 'default',
  align = 'end' 
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setOpen(false);
  };

  if (variant === 'minimal') {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-gray-600 hover:text-gray-900"
          >
            <Globe className="h-4 w-4" />
            <span className="sr-only">Change language</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-2" align={align}>
          <div className="space-y-1">
            <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100">
              国家/地区 | 语言
            </div>
            {languages.map((lang, index) => (
              <button
                key={`${lang.code}-${index}`}
                onClick={() => handleLanguageChange(lang.code)}
                className="flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1 text-left">
                  <div className="font-medium">{lang.region}</div>
                  <div className="text-xs text-gray-500">{lang.language}</div>
                </div>
                {language === lang.code && (
                  <Check className="h-4 w-4 text-green-600" />
                )}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between min-w-[140px]"
        >
          <div className="flex items-center">
            <span>{currentLanguage?.region}</span>
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2" align={align}>
        <div className="space-y-1">
          <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100">
            国家/地区 | 语言
          </div>
          {languages.map((lang, index) => (
            <button
              key={`${lang.code}-${index}`}
              onClick={() => handleLanguageChange(lang.code)}
              className="flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
            >
              <div className="flex-1 text-left">
                <div className="font-medium">{lang.region}</div>
                <div className="text-xs text-gray-500">{lang.language}</div>
              </div>
              {language === lang.code && (
                <Check className="h-4 w-4 text-green-600" />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}