import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

export type Language = 'en' | 'zh-cn' | 'zh-tw' | 'ja' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first, then browser language, fallback to English
    const saved = localStorage.getItem('ucyx-language') as Language;
    if (saved && ['en', 'zh-cn', 'zh-tw', 'ja', 'ko'].includes(saved)) {
      return saved;
    }
    
    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh-tw') || browserLang === 'zh-hk') return 'zh-tw';
    if (browserLang.startsWith('zh')) return 'zh-cn';
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('ko')) return 'ko';
    
    return 'en'; // Default to English
  });

  useEffect(() => {
    localStorage.setItem('ucyx-language', language);
  }, [language]);

  const t = (key: string, params?: Record<string, string | number>): string => {
    // Import translation dynamically based on current language
    const translations = getTranslations(language);
    let translation = getNestedValue(translations, key) || key;
    
    // Replace parameters if provided
    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        translation = translation.replace(`{{${paramKey}}}`, String(value));
      });
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Helper function to get nested object values using dot notation
function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Translation loader function
function getTranslations(language: Language) {
  switch (language) {
    case 'en':
      return enTranslations;
    case 'zh-cn':
      return zhTranslations;
    case 'zh-tw':
      return zhTwTranslations;
    case 'ja':
      return jaTranslations;
    case 'ko':
      return koTranslations;
    default:
      return enTranslations;
  }
}

// English translations (default)
const enTranslations = {
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    close: 'Close',
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    contactUs: 'Contact Us',
    submit: 'Submit',
    submitting: 'Submitting...',
    thankYou: 'Thank you! We will contact you within 24 hours.',
    createFuture: 'Create the Future with Us',
    connectVision: 'We look forward to connecting with visionary brands, investors, and partners. If our philosophy resonates with you, feel free to reach out.',
    companyAddress: 'UCYX Ltd.\nShop S068, 2/F, Capital Building, 61-65 Chatham Road South, Tsim Sha Tsui, Hong Kong'
  },
  header: {
    brand: 'UCYX',
    services: 'Services',
    whoWeServe: 'Who We Serve',
    successStories: 'Success Stories',
    methodology: 'Methodology',
    novochoice: 'Novochoice',
    startYourGrowthJourney: 'Start Your Growth Journey'
  },
  navigation: {
    sellToChina: 'Sell to China',
    sellToWorld: 'Sell to The World',
    partnershipOpportunities: 'Partnership Opportunities',
    startFreeConsultation: 'Start Free Consultation',
    visitOurBlog: 'Visit Our Blog',
    learnMoreAboutMethodology: 'Learn More About Methodology',
    viewSellToChina: 'View Sell to China',
    backToHome: 'Back to Home'
  },
  hero: {
    title: 'You See Your X-traordinary',
    subtitle: 'Transform Your Business with Data-Powered Cross-Border Commerce Solutions',
    description: 'UCYX empowers global brands to achieve exponential growth through our proprietary AI tools and proven 4-step methodology. From market intelligence to sales optimization, we turn data into revenue.',
    cta: 'Start Your Growth Journey',
    watchDemo: 'Discover Our Methodology',
    dataInsights: 'Data-Driven Insights',
    dataDescription: 'Every strategic recommendation we make is rooted in deep learning and analysis of massive datasets.',
    categories: 'Core E-commerce Categories',
    products: 'Active Products',
    keywords: 'Industry Keywords',
    reviews: 'Consumer Reviews'
  },
  services: {
    title: 'Our Services',
    subtitle: 'Comprehensive Solutions for Global E-commerce Success',
    extraordinaryGrowth: 'Extraordinary Growth',
    cta: 'Discover how we can accelerate your growth',
    start: {
      title: 'Start',
      subtitle: 'Launch Your Journey',
      sellToChina: {
        title: 'Sell to China',
        description: 'Reach 1 billion consumers'
      },
      sellToWorld: {
        title: 'Sell to The World',
        description: 'Global market expansion'
      }
    },
    choice: {
      title: 'Choice',
      subtitle: 'Smart Decisions',
      novochoice: {
        title: 'Novochoice',
        description: 'AI-powered market intelligence'
      }
    },
    sell: {
      title: 'Sell',
      subtitle: 'Drive Growth',
      sellToWorld: {
        title: 'Sell to The World',
        description: 'Global market expansion'
      },
      uccopilot: {
        title: 'UCcopilot Services',
        description: 'AI-driven sales optimization'
      },
      ucMmm: {
        title: 'UC-MMM',
        description: 'Maximize marketing ROI'
      }
    },
    manage: {
      title: 'Manage',
      subtitle: 'Scale Operations',
      ucMmm: {
        title: 'UC-MMM',
        description: 'Maximize marketing ROI'
      }
    },
    grid: {
      marketIntelligence: {
        title: 'Market Intelligence',
        description: 'Comprehensive market analysis and competitor research to identify untapped opportunities and market gaps.',
        tag1: 'Market Research',
        tag2: 'Competitive Analysis'
      },
      productStrategy: {
        title: 'Product Strategy',
        description: 'Strategic product development and positioning to create compelling value propositions that resonate with your target audience.',
        tag1: 'Product Development',
        tag2: 'Value Proposition'
      },
      brandDevelopment: {
        title: 'Brand Development',
        description: 'Complete brand identity creation and messaging strategy to establish a strong, memorable presence in the marketplace.',
        tag1: 'Brand Identity',
        tag2: 'Brand Messaging'
      },
      digitalMarketing: {
        title: 'Digital Marketing',
        description: 'Multi-channel digital marketing campaigns designed to drive traffic, engagement, and conversions across all platforms.',
        tag1: 'Digital Campaigns',
        tag2: 'Multi-channel'
      },
      salesOptimization: {
        title: 'Sales Optimization',
        description: 'Advanced sales funnel optimization and conversion rate improvements to maximize revenue from every visitor.',
        tag1: 'Conversion Rate',
        tag2: 'Sales Funnel'
      },
      growthAnalytics: {
        title: 'Growth Analytics',
        description: 'Continuous performance monitoring and data-driven insights to scale your business efficiently and sustainably.',
        tag1: 'Performance Metrics',
        tag2: 'Data Analytics'
      }
    }
  },
  whoWeServe: {
    title: 'Who We Serve',
    subtitle: 'We partner with global market pioneers, whether you are an established brand seeking expansion or a startup with a great product.',
    establishedBrands: 'Established Brands',
    establishedBrandsDescription: 'You have successful products and a stable business but are eager to enter new markets to find your next growth curve.',
    startupsWithIdeas: 'Startups with Great Ideas',
    startupsWithIdeasDescription: 'You have created an outstanding ideas but lack the approach to turn into product and brand.',
    traditionalManufacture: 'Traditional Manufacture',
    traditionalManufactureDescription: 'You have a great product but lack the go-to-market strategy and brand marketing experience for platforms like Amazon or Shopify.'
  },
  successStories: {
    title: 'Success Stories',
    subtitle: 'Real Results from Real Businesses',
    description: 'Our clients achieve measurable growth through our AI-driven approach and proven methodology.',
    provenResults: 'Proven Results',
    revenueGrowth: 'Revenue Growth',
    revenueImpact: 'Revenue Impact',
    marketExpansion: 'Market Expansion',
    customerAcquisition: 'Customer Acquisition',
    roi: 'ROI Improvement',
    verifiedSuccess: 'Verified Success',
    cases: {
      skincare: {
        brand: 'North American Skincare Brand',
        title: 'Entering the Asian Market from Scratch',
        description: 'Using the Novochoice™ data platform, we identified a high-potential niche market on China e-commerce platforms and with UCselection™ service, we helped defining a value proposition tailored to Asian consumer preferences, exceeding sales forecasts by 300% in the first month.',
        metric: '+300%',
        metricLabel: 'First-Month Sales Target',
        industry: 'Beauty & Personal Care',
        region: 'Asia-Pacific',
        duration: '1 Month'
      },
      smartHome: {
        brand: 'European Smart Home Brand',
        title: 'Reshaping User Loyalty with Review Insights',
        description: 'We analyze 5k customer reviews amongst the top 10 hot selling items, and uncovered core produce improvement opportunities and optimized selling material which increased the repeat purchase rate by 50% within six months.',
        metric: '+50%',
        metricLabel: 'Repeat Purchase Rate',
        industry: 'Smart Home Technology',
        region: 'Europe',
        duration: '6 Months'
      },
      networkStorage: {
        brand: 'China-based Network Storage Brand',
        title: 'Amazon New Product Launch Optimization',
        description: 'Leveraging UCcopilot™ for intelligent ad campaign optimization, we increased the click-through conversion rate for their new product on Amazon US by 75% and reduced ACoS by 40%, without increasing the ad budget.',
        metric: '-40%',
        metricLabel: 'Advertising Cost of Sales (ACoS)',
        industry: 'Technology Hardware',
        region: 'North America',
        duration: '3 Months'
      },
      stationery: {
        brand: 'Japanese Designer Stationery Brand',
        title: 'Shopify DTC Sales Forecasting',
        description: 'With the UCforecast™ model, we provided an accurate sales forecast for their new product line targeting the North American market. This helped optimize their inventory strategy, achieving a 95% sell-through rate for the initial stock.',
        metric: '95%',
        metricLabel: 'Initial Stock Sell-Through Rate',
        industry: 'Consumer Goods',
        region: 'North America',
        duration: '4 Months'
      },
      outdoorGear: {
        brand: 'Australian Outdoor Gear Brand',
        title: 'Cross-Platform Expansion Strategy',
        description: 'Through comprehensive market analysis and strategic platform selection, we helped expand from a single marketplace to five different platforms across three countries, resulting in 280% revenue growth within 8 months.',
        metric: '+280%',
        metricLabel: 'Revenue Growth',
        industry: 'Outdoor & Recreation',
        region: 'Multi-Regional',
        duration: '8 Months'
      },
      petCare: {
        brand: 'Canadian Pet Care Brand',
        title: 'AI-Driven Product Development',
        description: 'Using consumer sentiment analysis and competitive intelligence, we identified gaps in the pet wellness market and guided the development of three new product lines, achieving 89% success rate in market acceptance.',
        metric: '89%',
        metricLabel: 'Market Acceptance Rate',
        industry: 'Pet Care & Wellness',
        region: 'North America',
        duration: '5 Months'
      }
    }
  },
  methodology: {
    title: 'The UCYX Value Growth Methodology™',
    subtitle: 'Our Proven 4-Step Framework for Exponential Growth',
    description: 'Built on years of cross-border e-commerce expertise and powered by proprietary AI tools, our methodology delivers consistent, measurable results.',
    steps: {
      analyze: {
        title: 'Analyze',
        description: 'Deep market intelligence and competitor analysis using Novochoice™ AI platform'
      },
      strategize: {
        title: 'Strategize',
        description: 'Data-driven strategy development with UCselection™ and market insights'
      },
      execute: {
        title: 'Execute',
        description: 'Seamless implementation with UCcopilot™ optimization and real-time monitoring'
      },
      optimize: {
        title: 'Optimize',
        description: 'Continuous improvement through UCforecast™ predictive analytics and performance tuning'
      }
    }
  },
  ai: {
    title: 'Meet Novochoice™',
    subtitle: 'Your AI-Powered Consumer Insight Partner',
    description: 'Our proprietary AI platform transforms customer feedback into actionable business intelligence, helping you understand what customers truly want and how to deliver it better than your competitors.',
    accessPlatform: 'Access Novochoice Platform',
    badgeText: 'AI-POWERED CONSUMER INTELLIGENCE',
    coreCapabilities: 'Core Capabilities',
    capabilities: {
      globalMarkets: 'Customer feedback analysis across all major e-commerce platforms',
      nicheDiscovery: 'Product feature importance discovery with competitive benchmarking',
      reviewAnalysis: 'Deep customer sentiment analysis to uncover hidden needs',
      predictiveForecasting: 'Purchase decision modeling with feature impact scoring'
    },
    dataPoints: {
      marketDatasets: 'Review Datasets',
      nicheMarkets: 'Product Categories',
      successRate: 'Insight Accuracy',
      activeInsights: 'Active Insights'
    },
    dashboard: {
      title: 'NOVOCHOICE DASHBOARD',
      scanning: 'Analyzing customer reviews...',
      processing: 'Processing 2.4M customer feedback entries...',
      analyzing: '⟨ Mapping features to customer needs... ⟩',
      analysisComplete: 'Consumer insight analysis complete',
      opportunitiesFound: '147 improvement opportunities identified',
      reviewAnalysisComplete: 'Hidden needs analysis: 23 unmet desires discovered',
      liveInsights: 'LIVE CONSUMER INSIGHTS',
      score: 'Impact Score',
      aiModels: 'AI Models',
      accuracy: 'Accuracy',
      monitoring: 'Monitoring',
      active: 'Active'
    },
    features: {
      intelligence: {
        title: 'Consumer Intelligence',
        description: 'Transform customer feedback into strategic advantages',
        details: 'Understand what features matter most to your customers and how you compare to competitors'
      },
      optimization: {
        title: 'Feature Optimization',
        description: 'Prioritize product improvements based on customer impact',
        details: 'Focus your resources on high-impact features that drive purchase decisions'
      },
      forecasting: {
        title: 'Hidden Needs Discovery',
        description: 'Uncover unexpressed customer desires and market gaps',
        details: 'Identify opportunities your competitors haven\'t discovered yet through advanced sentiment analysis'
      },
      automation: {
        title: 'Competitive Benchmarking',
        description: 'See exactly where you lead and where you need to catch up',
        details: 'Get precise feature-by-feature comparison with market leaders based on real customer feedback'
      }
    }
  },
  cta: {
    title: 'Ready to Transform Your Global E-commerce?',
    subtitle: 'Join hundreds of brands achieving exponential growth with UCYX',
    description: 'Get started with a free consultation and discover how our AI-driven methodology can accelerate your business growth.',
    button: 'Start Your Growth Journey',
    features: {
      consultation: 'Free Strategy Consultation',
      analysis: 'Market Opportunity Analysis',
      roadmap: 'Custom Growth Roadmap'
    },
    form: {
      name: 'Your Name',
      email: 'your@email.com',
      message: 'Tell us about your business goals...'
    }
  },
  footer: {
    tagline: 'AI-Driven E-commerce',
    description: 'Future-focused consultancy helping global brands achieve exponential growth in cross-border e-commerce through data-driven insights and AI-powered strategies.',
    services: 'Services',
    company: 'Company',
    resources: 'Resources',
    about: 'About UCYX',
    partnership: 'Partnership',
    blog: 'Blog',
    contact: 'Contact us',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
    copyright: '© 2025 UCYX. All rights reserved. AI-Driven Global E-commerce Consultancy.',
    language: 'Language'
  },
  about: {
    title: 'About UCYX',
    subtitle: 'Pioneering AI-Driven Global E-commerce Growth',
    vision: {
      title: 'Our Vision',
      description: 'To empower every brand with the tools and insights needed to succeed in the global e-commerce ecosystem, making cross-border commerce accessible, profitable, and sustainable for businesses of all sizes.'
    },
    mission: {
      title: 'Our Mission',
      description: 'We bridge the gap between ambitious brands and global markets through cutting-edge AI technology, deep market intelligence, and proven growth strategies that deliver measurable results.'
    },
    team: {
      title: 'Our Elite Team',
      subtitle: 'Industry Veterans from Leading Tech Companies',
      description: 'Our team comprises seasoned professionals with extensive experience from leading global technology companies, bringing together deep expertise in e-commerce, AI, data science, and international business.',
      experience: {
        title: 'Combined Expertise',
        years: '50+ Years',
        description: 'of collective experience in e-commerce, AI, and cross-border business'
      },
      leaders: {
        title: 'Industry Leaders',
        description: 'Former executives from Alibaba, Amazon, Google, Microsoft, Tencent, and other leading technology companies and industry pioneers'
      }
    },
    locations: {
      title: 'Global Team Distribution',
      subtitle: 'International Expertise Network',
      description: 'Our diverse team spans across key global markets, bringing local insights and international perspective to every project.',
      tagline: 'Connected globally, acting locally - delivering world-class expertise wherever you are',
      offices: {
        hongkong: {
          city: 'Hong Kong',
          country: 'China',
          description: 'Asia-Pacific headquarters and financial hub'
        },
        shenzhen: {
          city: 'Shenzhen',
          country: 'China',
          description: 'Technology innovation center and manufacturing base'
        },
        taipei: {
          city: 'Taipei',
          country: 'Taiwan',
          description: 'Regional operations and strategic partnerships'
        },
        usa: {
          city: 'United States',
          country: 'North America',
          description: 'Strategic market expansion base'
        }
      }
    },
    values: {
      title: 'Our Core Values',
      innovation: {
        title: 'Innovation First',
        description: 'We leverage cutting-edge AI and data science to stay ahead of market trends'
      },
      results: {
        title: 'Results-Driven',
        description: 'Every strategy we develop is designed to deliver measurable, sustainable growth'
      },
      partnership: {
        title: 'True Partnership',
        description: 'We work as an extension of your team, invested in your long-term success'
      },
      excellence: {
        title: 'Operational Excellence',
        description: 'We maintain the highest standards in everything we do, from strategy to execution'
      }
    },
    cta: {
      title: 'Ready to Partner with Us?',
      subtitle: 'Join the brands already transforming their global e-commerce presence with UCYX',
      button: 'Start Your Growth Journey'
    }
  },
  uccopilot: {
    hero: {
      badge: 'AI-Powered E-commerce Assistant',
      title: 'UCcopilot™',
      subtitle: 'Your Intelligent E-commerce Growth Partner',
      description: 'Advanced AI-driven platform that automates and optimizes your entire e-commerce operation. From inventory management to customer service, UCcopilot handles it all while you focus on growing your business.',
      cta: 'Start Free Trial',
      heroFeatures: {
        hassleFreee: 'Hassle-Free Service',
        deepPartnership: 'Deep Partnership',
        endToEndStrategy: 'End-to-End Strategy',
        dedicatedSupport: 'Dedicated Support'
      }
    },
    features: {
      title: 'Why Choose UCcopilot?',
      zeroStress: {
        title: 'Zero Stress Setup',
        description: 'Get started in minutes with our intuitive onboarding process. No technical expertise required.',
        items: {
          setup: 'Complete platform setup',
          integration: 'Integration management',
          configuration: 'Technical configuration',
          testing: 'Quality assurance testing'
        }
      },
      support: {
        title: '24/7 Proactive Support',
        description: 'Our AI monitors your business around the clock and provides instant support when you need it.',
        items: {
          monitoring: 'Continuous monitoring',
          resolution: 'Proactive issue resolution',
          optimization: 'Performance optimization',
          emergency: 'Emergency response team'
        }
      },
      automation: {
        title: 'Automated Operations',
        description: 'Let AI handle routine tasks while you focus on strategic decisions and business growth.',
        items: {
          inventory: 'Inventory automation',
          processing: 'Order processing',
          communications: 'Customer communications',
          analytics: 'Reporting & analytics'
        }
      }
    },
    cta: {
      title: 'Talk to Our Experts',
      description: 'Ready to transform your e-commerce business? Our team is here to help you get started.',
      button: 'Schedule Consultation'
    },
    growthCta: {
      title: 'Ready for Hassle-Free Growth?',
      description: 'Experience the power of true partnership with UCcopilot™. Let us handle the complexity while you focus on building your brand and growing your business.',
      primaryButton: 'Start Your Partnership',
      secondaryButton: 'Schedule Consultation'
    },
    contact: {
      email: {
        title: 'Email Partnership Team',
        description: 'Detailed partnership discussions',
        address: 'partnerships@ucyx.com'
      },
      schedule: {
        title: 'Schedule Strategy Session',
        description: '30-minute strategy consultation',
        offer: 'Free Initial Assessment'
      }
    }
  },
  ucMmm: {
    hero: {
      badge: 'Advanced Analytics Tool',
      title: 'UC-MMM™',
      subtitle: 'Marketing Mix Modeling for E-commerce Excellence',
      description: 'Advanced multi-dimensional analysis tool designed specifically for Amazon and self-built website platforms. Optimize your marketing investments and maximize ROI through data-driven insights.',
      platforms: {
        amazon: 'Amazon Optimization',
        shopify: 'Shopify Analytics',
        website: 'Website Tracking',
        roi: 'ROI Optimization'
      }
    },
    features: {
      title: 'Core Capabilities',
      dataIntegration: {
        title: 'Data Integration',
        description: 'Seamlessly connect all your marketing channels and sales data for comprehensive analysis.',
        items: {
          advertising: 'Advertising spend data',
          sales: 'Sales and revenue metrics', 
          seasonal: 'Seasonal trends',
          competitive: 'Competitive intelligence'
        }
      },
      statisticalAnalysis: {
        title: 'Statistical Analysis',
        description: 'Advanced statistical modeling to understand the true impact of each marketing channel.',
        items: {
          regression: 'Regression analysis',
          attribution: 'Attribution modeling',
          incremental: 'Incremental impact',
          saturation: 'Media saturation curves'
        }
      },
      optimization: {
        title: 'Optimization',
        description: 'AI-powered recommendations to optimize your marketing mix and maximize ROI.',
        items: {
          budget: 'Budget reallocation',
          performance: 'Channel performance',
          scenario: 'Scenario planning',
          forecasting: 'ROI forecasting'
        }
      }
    },
    howItWorks: {
      title: 'How UC-MMM™ Works',
      description: 'Our streamlined process transforms your marketing data into actionable insights in just four simple steps.',
      dataCollection: {
        title: 'Data Collection',
        description: 'Gather data from all marketing touchpoints and sales channels.'
      },
      statisticalModeling: {
        title: 'Statistical Modeling',
        description: 'Apply advanced statistical techniques to model marketing effectiveness.'
      },
      insightGeneration: {
        title: 'Insight Generation',
        description: 'Generate actionable insights about channel performance and optimization opportunities.'
      },
      continuousOptimization: {
        title: 'Continuous Optimization',
        description: 'Continuously refine and optimize your marketing strategy based on real-time data.'
      }
    },
    cta: {
      title: 'Ready to Optimize Your Marketing Mix?',
      description: 'Transform your marketing strategy with data-driven insights from UC-MMM™. Start your analysis today and discover new opportunities for growth.',
      button: 'Start Analysis'
    }
  },
  sellToWorld: {
    badge: 'Global E-commerce Expansion',
    hero: {
      title: 'Expand Your Business to Global Markets',
      subtitle: 'Comprehensive solutions for international e-commerce success',
      description: 'Transform your local business into a global powerhouse with our proven strategies, advanced tools, and expert guidance.',
      cta: 'Start Global Expansion'
    },
    features: {
      globalAccess: 'Global Market Access',
      strategies: 'Proven Growth Strategies',
      endToEndSupport: 'End-to-End Support'
    },
    platforms: {
      title: 'Multi-Platform Excellence',
      subtitle: 'Choose your preferred platform or let us help you decide the best strategy for your brand'
    },
    services: {
      amazon: {
        title: 'Amazon Global Selling',
        description: 'Leverage the world\'s largest marketplace to reach millions of customers globally',
        activeUsers: '300M+ Active Users',
        countries: '190+ Countries',
        fba: 'FBA Fulfillment',
        prime: 'Prime Integration',
        whatWeProvide: 'What We Provide:',
        services: {
          setup: 'Account setup and optimization',
          listing: 'Product listing creation and management',
          ppc: 'PPC advertising campaigns',
          inventory: 'Inventory management and logistics',
          analytics: 'Performance analytics and reporting'
        }
      },
      shopify: {
        title: 'Shopify Store Development', 
        description: 'Build your own digital presence and brand authority',
        design: 'Custom Design',
        seo: 'SEO Optimized',
        mobile: 'Mobile Responsive',
        analytics: 'Analytics Integration',
        whatWeProvide: 'What We Provide:',
        services: {
          design: 'Website design and development',
          seoStrategy: 'SEO strategy and implementation',
          content: 'Content marketing and creation',
          social: 'Social media integration',
          conversion: 'Conversion rate optimization'
        }
      },
      ucyx: {
        title: 'UCYX Partnership Program',
        description: 'We sell your products through our dedicated UCYX stores',
        credibility: 'Immediate market entry with established UCYX brand credibility',
        investment: 'Lower initial investment and reduced risk',
        templates: 'Access to our optimized store templates and proven strategies',
        setup: 'Store setup',
        optimization: 'Product optimization',
        management: 'Order management',
        service: 'Customer service',
        campaigns: 'Marketing campaigns',
        reporting: 'Performance reporting',
        advantage: 'Your brand identity maintained throughout the customer journey'
      }
    },
    serviceModels: {
      title: 'Service Models',
      subtitle: 'Choose the partnership model that best fits your business needs and growth stage',
      fullService: {
        title: 'Full-Service Operations',
        subtitle: 'Complete end-to-end e-commerce management for your brand',
        forBrands: 'For Established Brands',
        keyBenefits: 'Key Benefits',
        benefits: {
          strategy: 'Custom strategy development based on your unique value proposition',
          control: 'Full control and ownership of customer relationships',
          dedicated: 'Dedicated team and resources for your brand'
        },
        serviceIncludes: 'Service Includes:',
        services: {
          consulting: 'Strategy consulting',
          brand: 'Brand development',
          platform: 'Platform management',
          marketing: 'Marketing & advertising',
          analytics: 'Analytics & optimization',
          support: 'Ongoing support'
        }
      },
      partnership: {
        title: 'UCYX Partnership Program',
        subtitle: 'Recommended for New Brands',
        serviceIncludes: 'Service Includes:',
        benefits: {
          resources: 'Shared marketing resources and cross-promotion opportunities'
        },
        services: {
          setup: 'Store setup',
          optimization: 'Product optimization', 
          management: 'Order management',
          service: 'Customer service',
          campaigns: 'Marketing campaigns',
          reporting: 'Performance reporting'
        }
      }
    },
    stats: {
      markets: 'Global Markets',
      growth: 'Avg. Revenue Growth',
      success: 'Client Success Rate',
      support: 'Support Available'
    },
    cta: {
      title: 'Start Your Global Expansion',
      subtitle: 'Tell us about your business and we\'ll create a customized growth strategy for your global success'
    },
    form: {
      title: 'Get Started with Global Expansion',
      subtitle: 'Tell us about your business and goals',
      fields: {
        name: 'Name',
        email: 'Email',
        companyName: 'Company Name',
        website: 'Website',
        productCategory: 'Product Category',
        mainObjective: 'Main Objective',
        serviceType: 'Service Type Needed',
        goals: 'Business Goals',
        platforms: 'Current Platforms',
        revenue: 'Monthly Revenue Range',
        markets: 'Target Markets',
        fullName: 'Full Name',
        phone: 'Phone Number',
        message: 'Additional Information'
      },
      placeholders: {
        companyName: 'Your company name',
        website: 'https://yourwebsite.com',
        productCategory: 'Select your main product category',
        fullName: 'Your full name',
        email: 'your.email@company.com',
        phone: 'Your phone number',
        message: 'Tell us more about your business goals and challenges...',
        revenue: 'Select your current monthly revenue range',
        markets: 'Select target markets for expansion',
        additionalInfo: 'Tell us more about your business goals, challenges, or specific requirements...'
      },
      options: {
        categories: {
          electronics: 'Electronics',
          fashion: 'Fashion & Apparel',
          home: 'Home & Garden',
          health: 'Health & Beauty',
          sports: 'Sports & Outdoors',
          automotive: 'Automotive',
          books: 'Books & Media',
          toys: 'Toys & Games',
          food: 'Food & Beverages',
          other: 'Other'
        },
        goals: {
          newMarkets: 'Enter new international markets',
          increaseSales: 'Increase sales in existing markets',
          optimizeOperations: 'Optimize current operations',
          buildBrand: 'Build brand awareness globally'
        },
        platforms: {
          amazon: 'Amazon',
          ebay: 'eBay',
          shopify: 'Shopify',
          woocommerce: 'WooCommerce',
          magento: 'Magento',
          ownWebsite: 'Own Website',
          physicalStores: 'Physical Stores Only',
          none: 'None'
        },
        revenue: {
          under10k: 'Under $10,000',
          '10k-50k': '$10,000 - $50,000',
          '50k-100k': '$50,000 - $100,000',
          '100k-500k': '$100,000 - $500,000',
          '500k-1m': '$500,000 - $1,000,000',
          over1m: 'Over $1,000,000'
        },
        markets: {
          us: 'United States',
          canada: 'Canada',
          uk: 'United Kingdom',
          germany: 'Germany',
          france: 'France',
          japan: 'Japan',
          australia: 'Australia',
          other: 'Other'
        },
        serviceTypes: {
          proxySales: 'Proxy Sales (sell through UCYX stores)',
          fullService: 'Full-Service Operations (complete management)',
          consultation: 'Consultation & Strategy Only',
          notSure: 'Not sure, need guidance'
        }
      },
      buttons: {
        submit: 'Get Free Consultation',
        startExpansion: 'Start My Global Expansion',
        submitting: 'Submitting...'
      },
      success: {
        title: 'Thank You!',
        message: 'We\'ve received your information and will contact you within 24 hours to discuss your global expansion strategy.',
        backButton: 'Back to Services'
      }
    }
  },
  partnership: {
    hero: {
      badge: 'Partnership Opportunities',
      title: 'Partner With UCYX',
      description: 'Join our global network of partners and help businesses succeed in the digital marketplace. Together, we can drive growth and innovation in e-commerce.',
      features: {
        globalReach: {
          title: 'Global Reach',
          description: 'Access to international markets and cross-border opportunities'
        },
        growthFocus: {
          title: 'Growth Focus',
          description: 'Proven methodologies and AI-driven solutions for scaling'
        },
        expertSupport: {
          title: 'Expert Support',
          description: 'Dedicated partnership team and comprehensive resources'
        }
      }
    },
    benefits: {
      title: 'Partner Benefits',
      subtitle: 'Join the UCYX Partner Program and enjoy exclusive benefits and support',
      items: {
        revenue: {
          title: 'Revenue Sharing',
          description: 'Earn competitive commissions and revenue sharing through client referrals'
        },
        training: {
          title: 'Training Support',
          description: 'Access comprehensive product training and sales support materials'
        },
        marketing: {
          title: 'Marketing Support',
          description: 'Use our marketing materials and brand resources to promote services'
        },
        priority: {
          title: 'Priority Support',
          description: 'Enjoy priority customer support and technical assistance'
        }
      }
    },
    types: {
      title: 'Partnership Types',
      subtitle: 'Choose the partnership model that best fits your business',
      referral: {
        title: 'Referral Partner',
        description: 'Earn commissions by referring clients to use our services',
        features: {
          commission: 'Commission for each successful referral',
          materials: 'Marketing materials and referral links',
          tracking: 'Real-time tracking of referral status and earnings',
          support: 'Dedicated partner support team'
        },
        cta: 'Become a Referral Partner'
      },
      reseller: {
        title: 'Reseller Partner',
        description: 'Sell our services as an authorized reseller',
        features: {
          pricing: 'Special partner pricing',
          territory: 'Exclusive sales territory protection',
          training: 'Comprehensive product and sales training',
          cobranding: 'Co-branding marketing opportunities'
        },
        cta: 'Become a Reseller'
      },
      technology: {
        title: 'Technology Partner',
        description: 'Integrate our technology solutions into your platform',
        features: {
          api: 'API access and technical documentation',
          integration: 'Technical integration support',
          certification: 'Partner certification program',
          development: 'Joint product development opportunities'
        },
        cta: 'Technology Partnership'
      }
    },
    process: {
      title: 'How to Become a Partner',
      subtitle: 'Simple four-step process to start our partnership',
      steps: {
        apply: {
          title: 'Submit Application',
          description: 'Fill out the partner application form and tell us about your business and goals'
        },
        review: {
          title: 'Application Review',
          description: 'Our team will review your application and assess partnership opportunities'
        },
        onboard: {
          title: 'Onboarding Training',
          description: 'Complete partner training and get the necessary resources and tools'
        },
        launch: {
          title: 'Start Partnership',
          description: 'Officially begin the partnership, start promoting our services and earning revenue'
        }
      }
    },
    success: {
      title: 'Thank You for Your Interest!',
      description: 'We\'ve received your partnership application and will review it carefully. Our team will get back to you within 2-3 business days.',
      emailConfirmation: 'A confirmation email has been sent to:',
      returnButton: 'Return to Home'
    },
    form: {
      title: 'Partnership Application',
      subtitle: 'Tell us about your business and partnership interests. All information will be kept confidential.',
      cardTitle: 'Partnership Information Form',
      sections: {
        company: 'Company Information',
        contact: 'Contact Information',
        partnership: 'Partnership Details',
        business: 'Business Information',
        additional: 'Additional Information'
      },
      fields: {
        companyName: 'Company Name',
        website: 'Website',
        industry: 'Industry',
        companySize: 'Company Size',
        headquarters: 'Headquarters',
        contactName: 'Contact Name',
        title: 'Title',
        email: 'Email Address',
        phone: 'Phone Number',
        partnershipType: 'Partnership Type',
        services: 'Services of Interest',
        regions: 'Target Regions',
        timeline: 'Partnership Timeline',
        budget: 'Estimated Budget Range',
        currentRevenue: 'Current Annual Revenue',
        targetMarkets: 'Target Markets',
        businessModel: 'Business Model',
        existingPartners: 'Existing Partnerships',
        relevantExperience: 'Relevant Experience',
        expectations: 'Partnership Expectations',
        resources: 'Resources & Capabilities',
        additionalInfo: 'Additional Information'
      },
      placeholders: {
        companyName: 'Your company name',
        website: 'https://yourwebsite.com',
        industry: 'Select your industry',
        companySize: 'Select company size',
        headquarters: 'City, Country',
        contactName: 'Your full name',
        title: 'Your job title',
        email: 'your.email@company.com',
        phone: 'Your phone number',
        partnershipType: 'Select partnership type',
        timeline: 'Select timeline',
        budget: 'Select budget range',
        currentRevenue: 'Select revenue range',
        targetMarkets: 'Describe your target markets and customer segments...',
        businessModel: 'Describe your business model and how you generate revenue...',
        existingPartners: 'List any existing partnerships or strategic alliances...',
        relevantExperience: 'Describe your relevant experience in your industry...',
        expectations: 'What are your expectations from this partnership?...',
        additionalInfo: 'Any additional information you would like to share...',
        resources: 'What resources, capabilities, or expertise can you bring to this partnership?'
      },
      options: {
        industries: {
          retail: 'Retail',
          manufacturing: 'Manufacturing',
          technology: 'Technology',
          consulting: 'Consulting',
          marketing: 'Marketing Agency',
          logistics: 'Logistics',
          other: 'Other'
        },
        companySizes: {
          startup: 'Startup (1-10 employees)',
          small: 'Small (11-50 employees)',
          medium: 'Medium (51-200 employees)',
          large: 'Large (201-1000 employees)',
          enterprise: 'Enterprise (1000+ employees)'
        },
        partnershipTypes: {
          reseller: 'Reseller Partner',
          integration: 'Technology Integration',
          channel: 'Channel Partner',
          strategic: 'Strategic Alliance',
          affiliate: 'Affiliate Program'
        },
        timelines: {
          immediate: 'Immediate (within 30 days)',
          quarter: 'This Quarter',
          halfYear: 'Within 6 months',
          year: 'Within a year',
          exploring: 'Just exploring'
        },
        budgets: {
          under50k: 'Under $50,000',
          '50k-100k': '$50,000 - $100,000',
          '100k-250k': '$100,000 - $250,000',
          '250k-500k': '$250,000 - $500,000',
          over500k: 'Over $500,000',
          tbd: 'To be determined'
        },
        revenues: {
          under1m: 'Under $1M',
          '1m-5m': '$1M - $5M',
          '5m-10m': '$5M - $10M',
          '10m-50m': '$10M - $50M',
          over50m: 'Over $50M',
          confidential: 'Confidential'
        },
        services: {
          ucMmm: 'UC-MMM™ (Marketing Mix Modeling)',
          sellToChina: 'Sell to China Program',
          sellToWorld: 'Sell to the World Program',
          uccopilot: 'UCcopilot™ Services',
          aiAnalytics: 'AI-Powered Analytics',
          consulting: 'E-commerce Consulting'
        },
        regions: {
          northAmerica: 'North America',
          europe: 'Europe',
          asiaPacific: 'Asia Pacific',
          china: 'China',
          japan: 'Japan',
          southKorea: 'South Korea',
          southeastAsia: 'Southeast Asia',
          middleEast: 'Middle East',
          africa: 'Africa',
          latinAmerica: 'Latin America'
        }
      },
      labels: {
        servicesOfInterest: 'Services of Interest (Select all that apply)',
        targetRegions: 'Target Regions (Select all that apply)'
      },
      buttons: {
        submit: 'Submit Application',
        submitting: 'Submitting...'
      },
      success: {
        title: 'Application Submitted!',
        message: 'Thank you for your interest in partnering with UCYX. We will review your application and contact you within 48 hours.',
        backButton: 'Back to Home'
      }
    }
  },
  sellToChina: {
    hero: {
      title: 'Your Premier Partner for China Market Entry',
      subtitle: 'We help you partner with Tmall Global to reach hundreds of millions of consumers',
      description: 'We provide comprehensive brand entry, store management, digital marketing, and data analytics services to eliminate all barriers to entering the Chinese market.',
      cta: 'Get Free Entry Consultation'
    },
    coreServices: {
      title: 'Core Services',
      brandEntry: {
        title: 'Rapid Brand Entry',
        description: 'Professional guidance from qualification review to store setup, ensuring efficiency and worry-free market entry.'
      },
      storeManagement: {
        title: 'Precision Store Operations',
        description: 'Daily operations, customer service, product and inventory management - we handle everything so you can focus on brand development.'
      },
      digitalMarketing: {
        title: 'Integrated Digital Marketing',
        description: 'Tailored to Chinese market characteristics, providing content marketing, social media promotion, KOL partnerships and more.'
      },
      dataAnalytics: {
        title: 'Data-Driven Decisions',
        description: 'Provide in-depth sales data analysis to help brands optimize strategies, improve ROI, and achieve sustained growth.'
      }
    },
    opportunity: {
      title: 'A Massive Opportunity You Cannot Miss',
      subtitle: 'China\'s cross-border e-commerce market is growing at unprecedented speed. Let us show you with data why now is the best time to enter this blue ocean.',
      stats: {
        growth: {
          title: 'Cross-border E-commerce Import Annual Growth',
          description: '2015-2022 CAGR, huge growth potential, far exceeding other consumer channels.'
        },
        consumers: {
          title: 'Premium Import Consumers',
          description: 'Tmall Global serves over 100 million high-purchasing-power users who actively seek global quality products.'
        },
        platform: {
          title: 'Market Leading Platform',
          description: 'Tmall Global continues to lead market share, the preferred and most trusted channel for overseas brands entering China.'
        }
      }
    },
    strategy: {
      title: 'How We Leverage Tmall Global to Open the Door to Success for You',
      partnership: 'Tmall Global × UCYX',
      description1: 'We view Tmall Global as a powerful engine for your brand\'s success, not just a sales channel. It\'s an official platform that allows you to directly reach hundreds of millions of consumers without establishing a company in China.',
      description2: 'Our professional team will help you navigate this platform, utilizing its mature bonded warehouse system, efficient logistics, and consumer-trusted authentic product guarantee system to create seamless and efficient business operations in China.',
      benefits: {
        noCompany: 'No need to establish a company in China, lowering entry barriers',
        warehouse: 'Official bonded warehouse system ensuring authenticity and efficient logistics',
        consumers: 'Direct access to over 100 million high-purchasing-power premium consumers',
        trust: 'Complete consumer trust and guarantee mechanisms'
      }
    },
    process: {
      title: 'The Path to Success We Pave for You',
      subtitle: 'We simplify complex processes into clear, controllable steps for you, accompanying you throughout until success.',
      steps: {
        assessment: {
          title: 'Initial Assessment',
          description: 'Deep understanding of your brand positioning, product advantages, and business objectives.'
        },
        customization: {
          title: 'Solution Customization',
          description: 'Tailor exclusive entry, operations, and marketing solutions for your brand.'
        },
        officialEntry: {
          title: 'Official Entry',
          description: 'We handle all complex application materials and processes, saving you time.'
        },
        storeLaunch: {
          title: 'Store Launch',
          description: 'Professionally design and launch your Tmall Global store, creating an excellent brand image.'
        },
        continuousGrowth: {
          title: 'Continuous Growth',
          description: 'Achieve dual growth in sales and brand influence through precision operations and marketing.'
        }
      }
    },
    pricing: {
      title: 'Tailored Partnership Plans for Your Brand',
      subtitle: 'We offer flexible partnership models - no matter what stage of development you\'re in, you can find the most suitable plan.',
      plans: {
        basic: {
          name: 'Basic',
          description: 'Suitable for brands hoping to quickly and cost-effectively complete platform entry and manage operations independently.',
          features: {
            assessment: 'Entry qualification assessment',
            guidance: 'Complete entry guidance',
            setup: 'Basic store setup'
          },
          cta: 'Learn Plan Details'
        },
        growth: {
          name: 'Growth',
          recommended: 'Recommended Plan',
          description: 'Designed for brands seeking stable growth in the Chinese market, including core daily operation services.',
          features: {
            basicIncluded: 'Includes all Basic services',
            operations: 'Daily store operations and maintenance',
            customerService: 'Customer service management',
            reports: 'Monthly data reports'
          },
          cta: 'Contact Us for Quote'
        },
        flagship: {
          name: 'Flagship',
          description: 'One-stop fully managed service designed to maximize your brand\'s potential and influence in the Chinese market.',
          features: {
            growthIncluded: 'Includes all Growth services',
            marketing: 'Integrated digital marketing strategy and execution',
            kol: 'KOL and content marketing',
            analytics: 'In-depth data analysis and strategic consulting'
          },
          cta: 'Learn Plan Details'
        }
      }
    }
  }
};

// Chinese translations
const zhTranslations = {
  common: {
    loading: '加载中...',
    error: '错误',
    success: '成功',
    cancel: '取消',
    confirm: '确认',
    save: '保存',
    delete: '删除',
    edit: '编辑',
    back: '返回',
    next: '下一步',
    previous: '上一步',
    close: '关闭',
    learnMore: '了解更多',
    getStarted: '开始使用',
    contactUs: '联系我们',
    submit: '提交',
    submitting: '提交中...',
    thankYou: '谢谢！我们将在24小时内联系您。',
    createFuture: '与我们共创未来',
    connectVision: '我们期待与有远见的品牌、投资者、合作伙伴建立联系。如果我们的理念与您产生共鸣，请随时联系我们。',
    companyAddress: 'UCYX Ltd.\n香港尖沙咀漆咸道南61-65号冠达世纪广场2楼S068室'
  },
  header: {
    brand: 'UCYX',
    services: '服务',
    whoWeServe: '服务对象',
    successStories: '成功案例',
    methodology: '方法论',
    novochoice: 'Novochoice',
    startYourGrowthJourney: '开始您的增长之旅'
  },
  navigation: {
    sellToChina: '销售到中国',
    sellToWorld: '销售到全球',
    partnershipOpportunities: '合作机会',
    startFreeConsultation: '开始免费咨询',
    visitOurBlog: '访问我们的博客',
    learnMoreAboutMethodology: '了解更多方法论',
    viewSellToChina: '查看销售到中国',
    backToHome: '返回首页'
  },
  hero: {
    title: '你看见你的非凡',
    subtitle: '通过数据驱动的跨境电商解决方案转型您的业务',
    description: 'UCYX通过我们专有的AI工具和经过验证的4步方法论，帮助全球品牌实现指数级增长。从市场情报到销售优化，我们将数据转化为收入。',
    cta: '开始您的增长之旅',
    watchDemo: '了解我们的方法论',
    dataInsights: '数据驱动洞察',
    dataDescription: '我们提出的每一个战略建议都基于对大量数据集的深度学习和分析。',
    categories: '核心电商类别',
    products: '活跃产品',
    keywords: '行业关键词',
    reviews: '消费者评价'
  },
  services: {
    title: '我们的服务',
    subtitle: '全球电商成功的综合解决方案',
    extraordinaryGrowth: '卓越增长',
    cta: '了解我们如何加速您的增长',
    start: {
      title: '开始',
      subtitle: '启动您的旅程',
      sellToChina: {
        title: '销售到中国',
        description: '触达10亿消费者'
      },
      sellToWorld: {
        title: '销售到全球',
        description: '全球市场扩张'
      }
    },
    choice: {
      title: '选择',
      subtitle: '智慧决策',
      novochoice: {
        title: 'Novochoice',
        description: 'AI驱动的市场信息'
      }
    },
    sell: {
      title: '销售',
      subtitle: '推动增长',
      sellToWorld: {
        title: '销售到全球',
        description: '全球市场扩张'
      },
      uccopilot: {
        title: 'UCcopilot服务',
        description: 'AI驱动的销售优化'
      },
      ucMmm: {
        title: 'UC-MMM',
        description: '最大化营销投资回报率'
      }
    },
    manage: {
      title: '管理',
      subtitle: '规模化运营',
      ucMmm: {
        title: 'UC-MMM',
        description: '最大化营销投资回报率'
      }
    },
    grid: {
      marketIntelligence: {
        title: '市场情报',
        description: '全面的市场分析和竞争对家研究，识别未开发的机遇和市场空白。',
        tag1: '市场研究',
        tag2: '竞争分析'
      },
      productStrategy: {
        title: '产品策略',
        description: '战略产品开发和定位，创造与目标受众的引人注目的价值主张。',
        tag1: '产品开发',
        tag2: '价值主张'
      },
      brandDevelopment: {
        title: '品牌发展',
        description: '完整的品牌识别创建和信息传达策略，在市场中建立强大、难忘的存在感。',
        tag1: '品牌识别',
        tag2: '品牌信息'
      },
      digitalMarketing: {
        title: '数字营销',
        description: '多渠道促进流量、参与度和转化的数字营销活动。',
        tag1: '数字活动',
        tag2: '多渠道'
      },
      salesOptimization: {
        title: '销售优化',
        description: '先进的销售漏斗优化和转化率改进，以最大化每个访客的收入。',
        tag1: '转化率',
        tag2: '销售漏斗'
      },
      growthAnalytics: {
        title: '增长分析',
        description: '持续的性能监测和数据驱动的洞察，高效且可持续地扩展您的业务。',
        tag1: '性能指标',
        tag2: '数据分析'
      }
    }
  },
  whoWeServe: {
    title: '服务对象',
    subtitle: '我们与全球市场的先锋合作，无论您是寻求扩张的成熟品牌还是拥有优秀产品的初创公司。',
    establishedBrands: '成熟品牌',
    establishedBrandsDescription: '您拥有成功的产品和稳定的业务，但渴望进入新市场寻找下一个增长曲线。',
    startupsWithIdeas: '有伟大创意的初创公司',
    startupsWithIdeasDescription: '您创造了卓越的想法，但缺乏将其转化为产品和品牌的方法。',
    traditionalManufacture: '传统制造业',
    traditionalManufactureDescription: '您有优秀的产品，但在亚马逊或Shopify等平台上缺乏市场进入策略和品牌营销经验。'
  },
  successStories: {
    title: '成功案例',
    subtitle: '来自真实业务的真实成果',
    description: '我们的客户通过我们的AI驱动方法和经过验证的方法论实现了可量化的增长。',
    provenResults: '经过检验的结果',
    revenueGrowth: '收入增长',
    revenueImpact: '收入影响',
    marketExpansion: '市场扩大',
    customerAcquisition: '客户获得',
    roi: 'ROI改善',
    verifiedSuccess: '验证成功的成功',
    cases: {
      skincare: {
        brand: '北美护肤品牌',
        title: '从零开始进入亚洲市场',
        description: '利用Novochoice™数据平台，我们识别了在中国的电商平台上高潜力的细分市场，并通过UCselection™服务，协助制定按照亚洲消费者的偏好量身定制的价值主张，第一个月的销售预测超过了300%。',
        metric: '+300%',
        metricLabel: '第一个月的销售目标',
        industry: '美容和个人护理',
        region: '亚太地区',
        duration: '1个月'
      },
      smartHome: {
        brand: '欧洲智能家居品牌',
        title: '通过评价洞察重构用户忠诚度',
        description: '我们分析了前10个热销产品中的5000个客户评价，发现了核心产品改进的机会，并优化了销售材料，在6个月内将复购率提高了50%。',
        metric: '+50%',
        metricLabel: '重复购买率',
        industry: '智能家居技术',
        region: '欧洲',
        duration: '6个月'
      },
      networkStorage: {
        brand: '中国网络存储品牌',
        title: '优化亚马逊的新产品发布',
        description: '利用UCcopilot™进行智能广告活动优化，我们成功提高了新产品在亚马逊美国的点击转化率75%，并在不增加广告预算的情况下将ACoS降低了40%。',
        metric: '-40%',
        metricLabel: '广告投入成本(ACoS)',
        industry: '技术硬件',
        region: '北美',
        duration: '3个月'
      },
      stationery: {
        brand: '日本设计文具品牌',
        title: 'Shopify DTC销售预测',
        description: '通过UCforecast™模型，我们为其针对北美市场的新产品线提供了准确的销售预测。这有助于优化其库存策略，实现95%的初始库存销售率。',
        metric: '95%',
        metricLabel: '初始库存销售率',
        industry: '消费品',
        region: '北美',
        duration: '4个月'
      },
      outdoorGear: {
        brand: '澳大利亚户外装备品牌',
        title: 'Cross-Platform Expansion Strategy',
        description: '通过全面的市场分析和战略平台选择，我们协助从一个市场扩展至三个国家的五个不同平台，在8个月内实现了280%的收入增长。',
        metric: '+280%',
        metricLabel: '收入增长',
        industry: '户外和娱乐',
        region: '多地区',
        duration: '8个月'
      },
      petCare: {
        brand: '加拿大宠物护理品牌',
        title: 'AI驱动型产品开发',
        description: '通过消费者情感分析和竞争情报，我们识别了宠物健康市场的空白，并指导开发了三个新产品线，市场接受度达到了89%。',
        metric: '89%',
        metricLabel: '市场接受率',
        industry: '宠物护理和健康',
        region: '北美',
        duration: '5个月'
      }
    }
  },
  methodology: {
    title: 'UCYX价值增长方法论™',
    subtitle: '我们经过验证的指数增长框架的四个步骤',
    description: '基于多年跨境电商专业知识和专有的人工智能工具，我们的方法持续提供一致且可量测的结果。',
    steps: {
      analyze: {
        title: '分析',
        description: '使用Novochoice™ AI平台进行深入的市场情报和竞争者分析'
      },
      strategize: {
        title: '制訂策略',
        description: '通过UCselection™和市场情报进行数据驱动的策略发展'
      },
      execute: {
        title: '执行',
        description: '使用UCcopilot™最佳化和实时监控进行无缝执行'
      },
      optimize: {
        title: '优化',
        description: '通过UCforecast™预测性分析及表现调校持续改进'
      }
    }
  },
  ai: {
    title: '认识Novochoice™',
    subtitle: '您的AI驱动消费者洞察伙伴',
    description: '我们的专有AI平台将客户反馈转化为可执行的商业智能，帮助您了解客户真正想要什么，以及如何比竞争对手更好地满足他们。',
    accessPlatform: '访问Novochoice平台',
    badgeText: 'AI驱动的消费者智能',
    coreCapabilities: '核心能力',
    capabilities: {
      globalMarkets: '跨所有主要电商平台的客户反馈分析',
      nicheDiscovery: '产品特征重要性发现与竞争基准对比',
      reviewAnalysis: '深度客户情感分析，挖掘隐藏需求',
      predictiveForecasting: '购买决策建模与特征影响评分'
    },
    dataPoints: {
      marketDatasets: '评论数据集',
      nicheMarkets: '产品类别',
      successRate: '洞察准确率',
      activeInsights: '活跃洞察'
    },
    dashboard: {
      title: 'NOVOCHOICE仪表板',
      scanning: '分析客户评论中...',
      processing: '处理240万条客户反馈...',
      analyzing: '⟨将特征映射到客户需求...⟩',
      analysisComplete: '消费者洞察分析完成',
      opportunitiesFound: '识别出147个改进机会',
      reviewAnalysisComplete: '隐藏需求分析：发现23个未满足的愿望',
      liveInsights: '实时消费者洞察',
      score: '影响评分',
      aiModels: 'AI模型',
      accuracy: '准确率',
      monitoring: '监控',
      active: '活跃'
    },
    features: {
      intelligence: {
        title: '消费者智能',
        description: '将客户反馈转化为战略优势',
        details: '了解哪些特征对客户最重要，以及您与竞争对手的比较情况'
      },
      optimization: {
        title: '特征优化',
        description: '基于客户影响优先考虑产品改进',
        details: '将资源集中在推动购买决策的高影响特征上'
      },
      forecasting: {
        title: '隐藏需求发现',
        description: '挖掘未表达的客户愿望和市场空白',
        details: '通过高级情感分析识别竞争对手尚未发现的机会'
      },
      automation: {
        title: '竞争基准对比',
        description: '准确了解您的领先之处和需要追赶的地方',
        details: '基于真实客户反馈获得与市场领导者的精确特征对比'
      }
    }
  },
  cta: {
    title: '准备好转型您的全球电子商务了吗？',
    subtitle: '与数百个实现指数增长的品牌合作',
    description: '开始免费咨询，并发掘我们的AI驱动方式如何加速您业务的增长。',
    button: '开始您的增长之旅',
    features: {
      consultation: '免费策略咨询',
      analysis: '市场机会分析',
      roadmap: '自订增长路线图'
    },
    form: {
      name: '您的姓名',
      email: 'your@email.com',
      message: '请告诉我们您的业务目标...'
    }
  },
  footer: {
    tagline: 'AI驱动的电子商务',
    description: '通过数据驱动的洞察和AI驱动的策略帮助全球品牌在跨境电子商务中达成指数增长的资讯顾问。',
    services: '服务',
    company: '公司',
    resources: '资源',
    about: '关于UCYX',
    partnership: '合作',
    blog: '博客',
    contact: '联系我们',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    cookiePolicy: 'Cookie政策',
    copyright: '© 2025 UCYX. 保留所有权利。AI驱动的全球电子商务顾问。',
    language: '语言'
  },
  about: {
    title: '关于UCYX',
    subtitle: '开创AI驱动的全球电子商务成长',
    vision: {
      title: '我们的愿景',
      description: '为每一个品牌赋能所需的工具和洞察，以在全球电子商务生态系统中展现成功，让跨境商务对各种规模的企业变得可接触、具盈利性及持续性。'
    },
    mission: {
      title: '我们的使命',
      description: '利用尖端AI技术、深度市场情报，以及经过验证的改进策略，缩短多方之间的距离以迎接挑战，提供可见及可衡量的成果。'
    },
    team: {
      title: '我们的精英团队',
      subtitle: '来自科技产业的资深人士',
      description: '我们的团队由来自顶尖科技公司的资深专业人士组成，融合电子商务、AI、数据科学以及国际企业的专业知识。',
      experience: {
        title: '综合专业知识',
        years: '50+年',
        description: '在电子商务、AI、和跨境业务的共同经验。'
      },
      leaders: {
        title: '行业领袖',
        description: '来自阿里巴巴、亚马逊、谷歌、微软、腾讯等领先科技公司和行业先驱的前高管'
      }
    },
    locations: {
      title: '全球团队分布',
      subtitle: '国际专业知识网络',
      description: '我们的多元化团队遍布各大全球市场，为每一个项目带来本地视野与国际视角。',
      tagline: '全球连接，本地行动 - 无论您身在何处，都能提供世界级的专业服务',
      offices: {
        hongkong: {
          city: '香港',
          country: '中国',
          description: '亚太地区总部与金融中心'
        },
        shenzhen: {
          city: '深圳',
          country: '中国',
          description: '科技创新中心及制造基地'
        },
        taipei: {
          city: '台北',
          country: '台湾',
          description: '区域运作与策略合作'
        },
        usa: {
          city: '美国',
          country: '北美',
          description: '战略创新基地'
        }
      }
    },
    values: {
      title: '我们的核心价值',
      innovation: {
        title: '创新优先',
        description: '利用前沿AI和数据科技领导收益及市场趋势'
      },
      results: {
        title: '重视结果',
        description: '我们开发的每一项策略都是要达成具体且可持续性的增长'
      },
      partnership: {
        title: '真挚合作',
        description: '我们是您团队的延伸，诚心助您获得长期成功'
      },
      excellence: {
        title: '卓越运营',
        description: '我们的每一行动皆维持最高标准，从策略至执行'
      }
    },
    cta: {
      title: '准备好与我们合作了吗？',
      subtitle: '立即与已转型全球电商的品牌共同成长',
      button: '开始您的成长之旅'
    }
  },
  uccopilot: {
    hero: {
      badge: 'AI驱动的电商助手',
      title: 'UCcopilot™',
      subtitle: '您的智能电商增长伙伴',
      description: '先进的AI驱动平台，自动化和优化您的整个电商运营。从库存管理到客户服务，UCcopilot处理一切，让您专注于业务增长。',
      cta: '开始免费试用',
      heroFeatures: {
        hassleFreee: '无忧服务',
        deepPartnership: '深度合作',
        endToEndStrategy: '端到端策略',
        dedicatedSupport: '专属支持'
      }
    },
    features: {
      title: '为什么选择UCcopilot？',
      zeroStress: {
        title: '零压力设置',
        description: '通过我们直观的入门流程，几分钟内即可开始。无需技术专业知识。',
        items: {
          setup: '完整平台设置',
          integration: '集成管理',
          configuration: '技术配置',
          testing: '质量保证测试'
        }
      },
      support: {
        title: '24/7主动支持',
        description: '我们的AI全天候监控您的业务，在您需要时提供即时支持。',
        items: {
          monitoring: '持续监控',
          resolution: '主动问题解决',
          optimization: '性能优化',
          emergency: '紧急响应团队'
        }
      },
      automation: {
        title: '自动化运营',
        description: '让AI处理日常任务，您专注于战略决策和业务增长。',
        items: {
          inventory: '库存自动化',
          processing: '订单处理',
          communications: '客户沟通',
          analytics: '报告和分析'
        }
      }
    },
    cta: {
      title: '与我们的专家交谈',
      description: '准备好转型您的电商业务了吗？我们的团队在这里帮助您开始。',
      button: '安排咨询'
    },
    growthCta: {
      title: '准备好无忧增长了吗？',
      description: '体验UCcopilot™真正合作伙伴关系的力量。让我们处理复杂性，而您专注于建立品牌和发展业务。',
      primaryButton: '开始合作',
      secondaryButton: '预约咨询'
    },
    contact: {
      email: {
        title: '联系合作团队',
        description: '详细的合作讨论',
        address: 'partnerships@ucyx.com'
      },
      schedule: {
        title: '预约策略会议',
        description: '30分钟策略咨询',
        offer: '免费初步评估'
      }
    }
  },
  ucMmm: {
    hero: {
      badge: '高级分析工具',
      title: 'UC-MMM™',
      subtitle: '电商卓越营销组合建模',
      description: '专为亚马逊和自建网站平台设计的高级多维分析工具。通过数据驱动的洞察优化您的营销投资并最大化投资回报率。',
      platforms: {
        amazon: '亚马逊优化',
        shopify: 'Shopify分析',
        website: '网站跟踪',
        roi: 'ROI优化'
      }
    },
    features: {
      title: '核心功能',
      dataIntegration: {
        title: '数据整合',
        description: '无缝连接所有营销渠道和销售数据，进行全面分析。',
        items: {
          advertising: '广告支出数据',
          sales: '销售和收入指标',
          seasonal: '季节性趋势',
          competitive: '竞争情报'
        }
      },
      statisticalAnalysis: {
        title: '统计分析',
        description: '高级统计建模，了解每个营销渠道的真实影响。',
        items: {
          regression: '回归分析',
          attribution: '归因建模',
          incremental: '增量影响',
          saturation: '媒体饱和曲线'
        }
      },
      optimization: {
        title: '优化',
        description: 'AI驱动的建议，优化您的营销组合并最大化投资回报率。',
        items: {
          budget: '预算重新分配',
          performance: '渠道性能',
          scenario: '情景规划',
          forecasting: 'ROI预测'
        }
      }
    },
    howItWorks: {
      title: 'UC-MMM™ 工作原理',
      description: '我们的简化流程将您的营销数据转化为可操作的洞察，只需四个简单步骤。',
      dataCollection: {
        title: '数据收集',
        description: '从所有营销接触点和销售渠道收集数据。'
      },
      statisticalModeling: {
        title: '统计建模',
        description: '应用高级统计技术来建模营销效果。'
      },
      insightGeneration: {
        title: '洞察生成',
        description: '生成关于渠道性能和优化机会的可操作洞察。'
      },
      continuousOptimization: {
        title: '持续优化',
        description: '基于实时数据持续完善和优化您的营销策略。'
      }
    },
    cta: {
      title: '准备好优化您的营销组合了吗？',
      description: '通过UC-MMM™的数据驱动洞察转变您的营销策略。立即开始分析，发现新的增长机会。',
      button: '开始分析'
    }
  },
  sellToWorld: {
    badge: '全球电商扩张',
    hero: {
      title: '将您的业务扩展到全球市场',
      subtitle: '国际电商成功的综合解决方案',
      description: '通过我们经过验证的策略、先进工具和专家指导，将您的本地业务转变为全球强势品牌。',
      cta: '开始全球扩张'
    },
    features: {
      globalAccess: '全球市场准入',
      strategies: '经过验证的增长策略',
      endToEndSupport: '端到端支持'
    },
    platforms: {
      title: '多平台卓越',
      subtitle: '选择您偏好的平台，或让我们帮您决定最适合您品牌的策略'
    },
    services: {
      amazon: {
        title: '亚马逊全球销售',
        description: '利用世界最大的市场平台，触达全球数百万客户',
        activeUsers: '3亿+活跃用户',
        countries: '190+国家',
        fba: 'FBA配送',
        prime: 'Prime集成',
        whatWeProvide: '我们提供的服务：',
        services: {
          setup: '账户设置和优化',
          listing: '产品列表创建和管理',
          ppc: 'PPC广告活动',
          inventory: '库存管理和物流',
          analytics: '性能分析和报告'
        }
      },
      shopify: {
        title: 'Shopify商店开发',
        description: '建立您自己的数字存在和品牌权威',
        design: '定制设计',
        seo: 'SEO优化',
        mobile: '移动响应式',
        analytics: '分析集成',
        whatWeProvide: '我们提供的服务：',
        services: {
          design: '网站设计和开发',
          seoStrategy: 'SEO策略和实施',
          content: '内容营销和创作',
          social: '社交媒体集成',
          conversion: '转化率优化'
        }
      },
      ucyx: {
        title: 'UCYX合作伙伴计划',
        description: '我们通过专门的UCYX商店销售您的产品',
        credibility: '通过成熟的UCYX品牌信誉立即进入市场',
        investment: '较低的初始投资和降低的风险',
        templates: '访问我们优化的商店模板和经过验证的策略',
        setup: '商店设置',
        optimization: '产品优化',
        management: '订单管理',
        service: '客户服务',
        campaigns: '营销活动',
        reporting: '绩效报告',
        advantage: '在整个客户旅程中保持您的品牌身份'
      }
    },
    serviceModels: {
      title: '服务模式',
      subtitle: '选择最适合您业务需求和发展阶段的合作模式',
      fullService: {
        title: '全方位服务运营',
        subtitle: '为您的品牌提供完整的端到端电商管理',
        forBrands: '适合成熟品牌',
        keyBenefits: '主要优势',
        benefits: {
          strategy: '基于您独特价值主张的定制策略开发',
          control: '完全控制和拥有客户关系',
          dedicated: '为您的品牌提供专门的团队和资源'
        },
        serviceIncludes: '服务包括：',
        services: {
          consulting: '策略咨询',
          brand: '品牌发展',
          platform: '平台管理',
          marketing: '营销和广告',
          analytics: '分析和优化',
          support: '持续支持'
        }
      },
      partnership: {
        title: 'UCYX合作伙伴计划',
        subtitle: '推荐给新品牌',
        serviceIncludes: '服务包括：',
        benefits: {
          resources: '共享营销资源和交叉推广机会'
        },
        services: {
          setup: '商店设置',
          optimization: '产品优化',
          management: '订单管理', 
          service: '客户服务',
          campaigns: '营销活动',
          reporting: '绩效报告'
        }
      }
    },
    stats: {
      markets: '全球市场',
      growth: '平均收入增长',
      success: '客户成功率',
      support: '支持服务'
    },
    cta: {
      title: '开始您的全球扩张',
      subtitle: '告诉我们您的业务情况，我们将为您的全球成功制定定制化增长策略'
    },
    form: {
      title: '开始全球扩张',
      subtitle: '告诉我们您的业务和目标',
      fields: {
        name: '姓名',
        email: '邮箱',
        companyName: '公司名称',
        website: '网站',
        productCategory: '产品类别',
        mainObjective: '主要目标',
        serviceType: '所需服务类型',
        goals: '业务目标',
        platforms: '当前平台',
        revenue: '月收入范围',
        markets: '目标市场',
        fullName: '全名',
        phone: '电话号码',
        message: '附加信息'
      },
      placeholders: {
        companyName: '您的公司名称',
        website: 'https://您的网站.com',
        productCategory: '选择您的主要产品类别',
        fullName: '您的全名',
        email: '您的邮箱@公司.com',
        phone: '您的电话号码',
        message: '告诉我们更多关于您的业务目标和挑战...',
        revenue: '选择您当前的月收入范围',
        markets: '选择扩张的目标市场',
        additionalInfo: '告诉我们更多关于您的业务目标、挑战或具体要求...'
      },
      options: {
        categories: {
          electronics: '电子产品',
          fashion: '时尚服装',
          home: '家居园艺',
          health: '健康美容',
          sports: '运动户外',
          automotive: '汽车用品',
          books: '图书媒体',
          toys: '玩具游戏',
          food: '食品饮料',
          other: '其他'
        },
        goals: {
          newMarkets: '进入新的国际市场',
          increaseSales: '增加现有市场的销售',
          optimizeOperations: '优化当前运营',
          buildBrand: '在全球建立品牌知名度'
        },
        platforms: {
          amazon: '亚马逊',
          ebay: 'eBay',
          shopify: 'Shopify',
          woocommerce: 'WooCommerce',
          magento: 'Magento',
          ownWebsite: '自有网站',
          physicalStores: '仅实体店',
          none: '无'
        },
        revenue: {
          under10k: '低于 $10,000',
          '10k-50k': '$10,000 - $50,000',
          '50k-100k': '$50,000 - $100,000',
          '100k-500k': '$100,000 - $500,000',
          '500k-1m': '$500,000 - $1,000,000',
          over1m: '超过 $1,000,000'
        },
        markets: {
          us: '美国',
          canada: '加拿大',
          uk: '英国',
          germany: '德国',
          france: '法国',
          japan: '日本',
          australia: '澳大利亚',
          other: '其他'
        },
        serviceTypes: {
          proxySales: '代理销售（通过UCYX商店销售）',
          fullService: '全方位服务运营（完整管理）',
          consultation: '仅咨询和策略',
          notSure: '不确定，需要指导'
        }
      },
      buttons: {
        submit: '获取免费咨询',
        startExpansion: '开始我的全球扩张',
        submitting: '提交中...'
      },
      success: {
        title: '谢谢您！',
        message: '我们已收到您的信息，将在24小时内联系您讨论您的全球扩张策略。',
        backButton: '返回服务'
      }
    }
  },
  partnership: {
    hero: {
      badge: '合作机会',
      title: '与UCYX合作',
      description: '加入我们的全球合作伙伴网络，帮助企业在数字市场中取得成功。让我们共同推动电商领域的增长和创新。',
      features: {
        globalReach: {
          title: '全球覆盖',
          description: '接触国际市场和跨境机会'
        },
        growthFocus: {
          title: '增长专注',
          description: '经过验证的方法论和AI驱动的扩展解决方案'
        },
        expertSupport: {
          title: '专家支持',
          description: '专门的合作伙伴团队和全面的资源'
        }
      },
      cta: '成为合作伙伴'
    },
    benefits: {
      title: '合作伙伴福利',
      subtitle: '加入UCYX合作伙伴计划，享受独家福利和支持',
      items: {
        revenue: {
          title: '收入分成',
          description: '通过推荐客户获得有竞争力的佣金和收入分成'
        },
        training: {
          title: '培训支持',
          description: '获得全面的产品培训和销售支持材料'
        },
        marketing: {
          title: '营销支持',
          description: '使用我们的营销材料和品牌资源来推广服务'
        },
        priority: {
          title: '优先支持',
          description: '享受优先客户支持和技术援助'
        }
      }
    },
    types: {
      title: '合作伙伴类型',
      subtitle: '选择最适合您业务的合作模式',
      referral: {
        title: '推荐合作伙伴',
        description: '通过推荐客户使用我们的服务来赚取佣金',
        features: {
          commission: '每次成功推荐可获得佣金',
          materials: '营销材料和推荐链接',
          tracking: '实时跟踪推荐状态和收入',
          support: '专门的合作伙伴支持团队'
        },
        cta: '成为推荐合作伙伴'
      },
      reseller: {
        title: '经销商合作伙伴',
        description: '作为我们的授权经销商销售我们的服务',
        features: {
          pricing: '特殊的合作伙伴定价',
          territory: '专属销售区域保护',
          training: '全面的产品和销售培训',
          cobranding: '联合品牌营销机会'
        },
        cta: '成为经销商'
      },
      technology: {
        title: '技术合作伙伴',
        description: '集成我们的技术解决方案到您的平台',
        features: {
          api: 'API访问和技术文档',
          integration: '技术集成支持',
          certification: '合作伙伴认证计划',
          development: '联合产品开发机会'
        },
        cta: '技术合作'
      }
    },
    process: {
      title: '如何成为合作伙伴',
      subtitle: '简单的四步流程开始我们的合作',
      steps: {
        apply: {
          title: '提交申请',
          description: '填写合作伙伴申请表，告诉我们您的业务和目标'
        },
        review: {
          title: '申请审核',
          description: '我们的团队将审核您的申请并评估合作机会'
        },
        onboard: {
          title: '入驻培训',
          description: '完成合作伙伴培训并获得必要的资源和工具'
        },
        launch: {
          title: '开始合作',
          description: '正式开始合作，开始推广我们的服务并赚取收入'
        }
      }
    },
    form: {
      title: '合作伙伴申请',
      subtitle: '告诉我们您的业务和合作兴趣。所有信息将严格保密。',
      cardTitle: '合作伙伴信息表',
      sections: {
        company: '公司信息',
        contact: '联系信息',
        partnership: '合作详情',
        business: '业务信息',
        additional: '附加信息'
      },
      fields: {
        companyName: '公司名称',
        website: '网站',
        industry: '行业',
        companySize: '公司规模',
        headquarters: '总部',
        contactName: '联系人姓名',
        title: '职位',
        email: '邮箱地址',
        phone: '电话号码',
        partnershipType: '合作类型',
        services: '感兴趣的服务',
        regions: '目标区域',
        timeline: '合作时间表',
        budget: '预估预算范围',
        currentRevenue: '当前年收入',
        targetMarkets: '目标市场',
        businessModel: '商业模式',
        existingPartners: '现有合作伙伴',
        relevantExperience: '相关经验',
        expectations: '合作期望',
        resources: '资源和能力',
        additionalInfo: '附加信息'
      },
      placeholders: {
        companyName: '您的公司名称',
        website: 'https://您的网站.com',
        industry: '选择您的行业',
        companySize: '选择公司规模',
        headquarters: '城市，国家',
        contactName: '您的全名',
        title: '您的职位',
        email: '您的邮箱@公司.com',
        phone: '您的电话号码',
        partnershipType: '选择合作类型',
        timeline: '选择时间表',
        budget: '选择预算范围',
        currentRevenue: '选择收入范围',
        targetMarkets: '描述您的目标市场和客户群体...',
        businessModel: '描述您的商业模式和收入来源...',
        existingPartners: '列出任何现有的合作伙伴或战略联盟...',
        relevantExperience: '描述您在行业中的相关经验...',
        expectations: '您对这次合作的期望是什么？...',
        additionalInfo: '您想分享的任何附加信息...',
        resources: '您能为这次合作带来什么资源、能力或专业知识？'
      },
      options: {
        industries: {
          retail: '零售',
          manufacturing: '制造业',
          technology: '技术',
          consulting: '咨询',
          marketing: '营销代理',
          logistics: '物流',
          other: '其他'
        },
        companySizes: {
          startup: '初创公司 (1-10人)',
          small: '小型 (11-50人)',
          medium: '中型 (51-200人)',
          large: '大型 (201-1000人)',
          enterprise: '企业级 (1000+人)'
        },
        partnershipTypes: {
          reseller: '经销商合作伙伴',
          integration: '技术集成',
          channel: '渠道合作伙伴',
          strategic: '战略联盟',
          affiliate: '联盟计划'
        },
        timelines: {
          immediate: '立即 (30天内)',
          quarter: '本季度',
          halfYear: '6个月内',
          year: '一年内',
          exploring: '仅在探索'
        },
        budgets: {
          under50k: '低于 $50,000',
          '50k-100k': '$50,000 - $100,000',
          '100k-250k': '$100,000 - $250,000',
          '250k-500k': '$250,000 - $500,000',
          over500k: '超过 $500,000',
          tbd: '待定'
        },
        revenues: {
          under1m: '低于 $1M',
          '1m-5m': '$1M - $5M',
          '5m-10m': '$5M - $10M',
          '10m-50m': '$10M - $50M',
          over50m: '超过 $50M',
          confidential: '保密'
        },
        services: {
          ucMmm: 'UC-MMM™ (营销组合建模)',
          sellToChina: '销售到中国计划',
          sellToWorld: '销售到全球计划',
          uccopilot: 'UCcopilot™ 服务',
          aiAnalytics: 'AI驱动分析',
          consulting: '电商咨询'
        },
        regions: {
          northAmerica: '北美',
          europe: '欧洲',
          asiaPacific: '亚太地区',
          china: '中国',
          japan: '日本',
          southKorea: '韩国',
          southeastAsia: '东南亚',
          middleEast: '中东',
          africa: '非洲',
          latinAmerica: '拉丁美洲'
        }
      },
      buttons: {
        submit: '提交申请',
        submitting: '提交中...'
      },
      success: {
        title: '申请已提交！',
        message: '感谢您对与UCYX合作的兴趣。我们将审核您的申请并在48小时内联系您。',
        backButton: '返回首页'
      }
    }
  },
  sellToChina: {
    hero: {
      title: '中国市场参入的首选合作伙伴',
      subtitle: '我们帮助您与天猫全球进行合作，触及数亿消费者',
      description: '我们提供全方位的品牌入市、商店管理、数字营销及数据分析服务，解决所有的进入障碍。',
      cta: '免费入市咨询'
    },
    coreServices: {
      title: '核心服务',
      brandEntry: {
        title: '迅速的品牌入市',
        description: '从资格审核到商店设置的专有指导，确保高效且无忧的市场入市。'
      },
      storeManagement: {
        title: '精准商店运营',
        description: '日常运营、客户服务、产品及库存管理 - 我们处理一切，让您专注于品牌发展。'
      },
      digitalMarketing: {
        title: '整合数字营销',
        description: '根据中国市场特性提供定制化的内容营销、社交媒体推广、KOL合作等。'
      },
      dataAnalytics: {
        title: '数据驱动型决策',
        description: '提供深入的销售数据分析，协助品牌优化策略、提升ROI及持续增长。'
      }
    },
    opportunity: {
      title: '您无法错过的巨大机会',
      subtitle: '中国的跨境电子商务市场正在以前所未有的速度成长。让我们用数据为您呈现推进月度成长的最佳契机。',
      stats: {
        growth: {
          title: '跨境电子商务进口的年度增长率',
          description: '2015-2022年CAGR，其他消费渠道大幅超越，巨大成长潜力。'
        },
        consumers: {
          title: '优质进口消费者',
          description: '天猫全球服务超过1亿高消费能力的消费者。他们积极寻找全球优质产品。'
        },
        platform: {
          title: '市场领导平台',
          description: '天猫全球持续在市场占有率中领先，成为海外品牌进入中国的首选及绝对信赖的平台。'
        }
      }
    },
    strategy: {
      title: '如何利用天猫全球为您成功铺路',
      partnership: '天猫全球 × UCYX',
      description1: '我们不仅将天猫全球视为销售渠道，更是品牌成功的动力来源。您无需在中国设立公司，便可直接联系到数亿名的消费者。',
      description2: '我们的专业团队将协助您探索这平台，利用其成熟保税仓库系统、高效物流、及消费者信任的正品保障系统，创造迅速高效的业务运营。',
      benefits: {
        noCompany: '无需在中国设立公司，减少使用入口门槛',
        warehouse: '官方保税仓库系统确保正品和高效率',
        consumers: '让超过1亿高消费的客户稳定存入',
        trust: '完整的消费者信任和保障机制'
      }
    },
    process: {
      title: '为您铺设成功之路',
      subtitle: '简化复杂的过程，变得可控，直到成功我们一同注解每一步。',
      steps: {
        assessment: {
          title: '初步审核',
          description: '深入了解您的品牌定位、产品的优势与商业目标。'
        },
        customization: {
          title: '解决方案的定制',
          description: '为您量身定制的入市、运营和营销方案。'
        },
        officialEntry: {
          title: '正式入市',
          description: '处理所有复杂申请材料和流程，为您节省时间。'
        },
        storeLaunch: {
          title: '商店启动',
          description: '给予您的Tmall Global商店专业设计，打造丰富的品牌形象。'
        },
        continuousGrowth: {
          title: '持续增长',
          description: '通过精准的运营和营销，争取在业务与品牌援助上的双重增长。'
        }
      }
    },
    pricing: {
      title: '为您量身定制的合作计划',
      subtitle: '我们提供弹性合夥模式 - 无论您处于哪个发展阶段，都能找到最适合的计划。',
      plans: {
        basic: {
          name: '基础',
          description: '希望能迅速而经济地完成平台的入市、并能独立管理运营的品牌最适配。',
          features: {
            assessment: '入市资格评估',
            guidance: '完整的入市指导',
            setup: '基础商店设置'
          },
          cta: '了解计划详情'
        },
        growth: {
          name: '成长',
          recommended: '推荐方案',
          description: '那些需要稳定地在中国市场成长的品牌适用，包含重要的日常运营服务。',
          features: {
            basicIncluded: '包含所有基础服务',
            operations: '日常商店运营与维护',
            customerService: '客服的管理',
            reports: '月次报告'
          },
          cta: '联系我们的报价'
        },
        flagship: {
          name: '旗舰',
          description: '为您的品牌目标及影响力打造全面的服务，以推广在中国市场。',
          features: {
            growthIncluded: '包含所有成长服务',
            marketing: '综合形式的营销策略与执行',
            kol: 'KOL与内容营销',
            analytics: '深入的数据分析和指导'
          },
          cta: '了解计划详情'
        }
      }
    }
  }
};

// Traditional Chinese translations
const zhTwTranslations = {
  common: {
    loading: '載入中...',
    error: '錯誤',
    success: '成功',
    cancel: '取消',
    confirm: '確認',
    save: '保存',
    delete: '刪除',
    edit: '編輯',
    back: '返回',
    next: '下一步',
    previous: '上一步',
    close: '關閉',
    learnMore: '了解更多',
    getStarted: '開始使用',
    contactUs: '聯絡我們',
    submit: '提交',
    submitting: '提交中...',
    thankYou: '謝謝！我們將在24小時內聯絡您。',
    createFuture: '與我們共創未來',
    connectVision: '我們期待與有遠見的品牌、投資者、合作夥伴建立聯繫。如果我們的理念與您產生共鳴，請隨時聯絡我們。',
    companyAddress: 'UCYX Ltd.\n香港尖沙咀漆咸道南61-65號冠達世紀廣場2樓S068室'
  },
  header: {
    brand: 'UCYX',
    services: '服務',
    whoWeServe: '服務對象',
    successStories: '成功案例',
    methodology: '方法論',
    novochoice: 'Novochoice',
    startYourGrowthJourney: '開始您的增長之旅'
  },
  navigation: {
    sellToChina: '銷售到中國',
    sellToWorld: '銷售到全球',
    partnershipOpportunities: '合作機會',
    startFreeConsultation: '開始免費諮詢',
    visitOurBlog: '訪問我們的部落格',
    learnMoreAboutMethodology: '了解更多方法論',
    viewSellToChina: '查看銷售到中國',
    backToHome: '返回首頁'
  },
  hero: {
    title: '你看見你的非凡',
    subtitle: '透過數據驅動的跨境電商解決方案轉型您的業務',
    description: 'UCYX透過我們專有的AI工具和經過驗證的4步方法論，幫助全球品牌實現指數級增長。從市場情報到銷售優化，我們將數據轉化為收入。',
    cta: '開始您的增長之旅',
    watchDemo: '了解我們的方法論',
    dataInsights: '數據驅動洞察',
    dataDescription: '我們提出的每一個戰略建議都基於對大量數據集的深度學習和分析。',
    categories: '核心電商類別',
    products: '活躍產品',
    keywords: '行業關鍵詞',
    reviews: '消費者評價'
  },
  services: {
    title: '我們的服務',
    subtitle: '全球電商成功的綜合解決方案',
    extraordinaryGrowth: '卓越增長',
    cta: '了解我們如何加速您的增長',
    start: {
      title: '開始',
      subtitle: '啟動您的旅程',
      sellToChina: {
        title: '銷售到中國',
        description: '觸達10億消費者'
      },
      sellToWorld: {
        title: '銷售到全球',
        description: '全球市場擴張'
      }
    },
    choice: {
      title: '選擇',
      subtitle: '智慧決策',
      novochoice: {
        title: 'Novochoice',
        description: 'AI驅動型市場信息'
      }
    },
    sell: {
      title: '銷售',
      subtitle: '推動增長',
      sellToWorld: {
        title: '銷售到全球',
        description: '全球市場擴張'
      },
      uccopilot: {
        title: 'UCcopilot服務',
        description: 'AI驅動型銷售優化'
      },
      ucMmm: {
        title: 'UC-MMM',
        description: '最大化行銷投資回報率'
      }
    },
    manage: {
      title: '管理',
      subtitle: '擴大營運',
      ucMmm: {
        title: 'UC-MMM',
        description: '最大化行銷投資回報率'
      }
    },
    grid: {
      marketIntelligence: {
        title: '市場情報',
        description: '包括性的市場分析和競爭對手研究，識別未開發的機會和市場空白。',
        tag1: '市場研究',
        tag2: '競爭分析'
      },
      productStrategy: {
        title: '產品策略',
        description: '戰略產品開發和定位，創造與目標觀眾的引人注目的價值主張。',
        tag1: '產品開發',
        tag2: '價值主張'
      },
      brandDevelopment: {
        title: '品牌發展',
        description: '完整的品牌識別創建和信息傳遞策略，在市場中建立強力且難忘的存在感。',
        tag1: '品牌識別',
        tag2: '品牌信息'
      },
      digitalMarketing: {
        title: '數位行銷',
        description: '多渠道促進流量、參與度和轉化的數位行銷活動。',
        tag1: '數位活動',
        tag2: '多渠道'
      },
      salesOptimization: {
        title: '銷售優化',
        description: '先進的銷售漏斗優化和轉化率改進，以最大化每個訪問者的收入。',
        tag1: '轉化率',
        tag2: '銷售漏斗'
      },
      growthAnalytics: {
        title: '增長分析',
        description: '持續的性能監測和數據驅動的洞察，高效且可持續的擴展您的業務。',
        tag1: '性能指標',
        tag2: '數據分析'
      }
    }
  },
  whoWeServe: {
    title: '服務對象',
    subtitle: '我們與全球市場的先驅合作，無論您是尋求擴張的成熟品牌，還是擁有卓越產品的初創企業。',
    establishedBrands: '成熟品牌',
    establishedBrandsDescription: '您擁有成功的產品和穩定的業務，但渴望進入新市場尋找下一個成長曲線。',
    startupsWithIdeas: '有出色觀念的初創企業',
    startupsWithIdeasDescription: '您創造了卓越的思想，但缺乏將其轉變為產品和品牌的方法。',
    traditionalManufacture: '傳統製造業',
    traditionalManufactureDescription: '您擁有優秀的產品，但在亞馬遜或Shopify等平台上缺乏市場進入策略和品牌營銷經驗。'
  },
  successStories: {
    title: '成功案例',
    subtitle: '來自真實業務的真實成果',
    description: '我們的客戶通過我們基於AI的方法和經過驗證的方法論實現可量化的增長。',
    provenResults: '經過檢驗的結果',
    revenueGrowth: '收入增長',
    revenueImpact: '收入影響',
    marketExpansion: '市場擴大',
    customerAcquisition: '顧客獲得',
    roi: 'ROI改善',
    verifiedSuccess: '已驗證的成功',
    cases: {
      skincare: {
        brand: '北美護膚品牌',
        title: '從零開始進入亞洲市場',
        description: '利用Novochoice™數據平台，我們識別了在中國的電商平台上高潛力的細分市場，並通過UCselection™服務，協助制定按照亞洲消費者的偏好量身定制的價值主張，第一個月超過預測的300%銷售。',
        metric: '+300%',
        metricLabel: '第一個月的銷售目標',
        industry: '美容和個人護理',
        region: '亞太地區',
        duration: '1個月'
      },
      smartHome: {
        brand: '歐洲智能家居品牌',
        title: '通過評價洞察重構用戶忠誠度',
        description: '我們分析了前10個熱銷產品中的5000個顧客評價，發現了核心產品改進的機會，並優化了銷售材料，在6個月內將復購率提高了50%。',
        metric: '+50%',
        metricLabel: '重複購買率',
        industry: '智能家居技術',
        region: '歐洲',
        duration: '6個月'
      },
      networkStorage: {
        brand: '中國網絡存儲品牌',
        title: '優化亞馬遜的新產品發布',
        description: '利用UCcopilot™進行智能廣告活動優化，我們成功提高了新產品在亞馬遜美國的點擊轉換率75%，並在不增加廣告預算的情況下將ACoS降低了40%。',
        metric: '-40%',
        metricLabel: '廣告投入成本(ACoS)',
        industry: '技術硬件',
        region: '北美',
        duration: '3個月'
      },
      stationery: {
        brand: '日本設計文具品牌',
        title: 'Shopify DTC銷售預測',
        description: '通過UCforecast™模型，我們為其針對北美市場的新產品線提供準確的銷售預測，這有助於優化其庫存策略，實現95%的初始庫存銷售率。',
        metric: '95%',
        metricLabel: '初始庫存銷售率',
        industry: '消費財',
        region: '北美',
        duration: '4個月'
      },
      outdoorGear: {
        brand: '澳大利亞戶外裝備品牌',
        title: 'Cross-Platform Expansion Strategy',
        description: '通過全面的市場分析和戰略平台選擇，我們協助從一個市場擴展至三個國家的五個不同平台，在8個月内實現280%的收入增長。',
        metric: '+280%',
        metricLabel: '收入增長',
        industry: '戶外和娛樂',
        region: '多地區',
        duration: '8個月'
      },
      petCare: {
        brand: '加拿大寵物護理品牌',
        title: '基於AI的產品開發',
        description: '通過消費者情感分析和競爭情報，我們識別了寵物健康市場的空白，並指導開發了三個新產品線，市場接受度達到了89%。',
        metric: '89%',
        metricLabel: '市場接受率',
        industry: '寵物護理和健康',
        region: '北美',
        duration: '5個月'
      }
    }
  },
  methodology: {
    title: 'UCYX價值增長方法論™',
    subtitle: '我們經過驗證的指數增長框架的四個步驟',
    description: '基於長年跨境電子商務的專業知識和專有的人工智慧工具，我們的方法持續提供一致且可量測的結果。',
    steps: {
      analyze: {
        title: '分析',
        description: '使用Novochoice™ AI平台進行深入的市場情報和競爭者分析'
      },
      strategize: {
        title: '制訂策略',
        description: '透過UCselection™和市場情報進行資料驅動的策略發展'
      },
      execute: {
        title: '執行',
        description: '使用UCcopilot™最佳化和即時監控進行無縫執行'
      },
      optimize: {
        title: '優化',
        description: '透過UCforecast™預測性分析及表現調校持續改進'
      }
    }
  },
  ai: {
    title: '認識Novochoice™',
    subtitle: '您的AI驅動消費者洞察夥伴',
    description: '我們的專有AI平台將客戶反饋轉化為可執行的商業智能，幫助您了解客戶真正想要什麼，以及如何比競爭對手更好地滿足他們。',
    accessPlatform: '訪問Novochoice平台',
    badgeText: 'AI驅動的消費者智能',
    coreCapabilities: '核心能力',
    capabilities: {
      globalMarkets: '跨所有主要電商平台的客戶反饋分析',
      nicheDiscovery: '產品特徵重要性發現與競爭基準對比',
      reviewAnalysis: '深度客戶情感分析，挖掘隱藏需求',
      predictiveForecasting: '購買決策建模與特徵影響評分'
    },
    dataPoints: {
      marketDatasets: '評論數據集',
      nicheMarkets: '產品類別',
      successRate: '洞察準確率',
      activeInsights: '活躍洞察'
    },
    dashboard: {
      title: 'NOVOCHOICE儀表板',
      scanning: '分析客戶評論中...',
      processing: '處理240萬條客戶反饋...',
      analyzing: '⟨將特徵映射到客戶需求...⟩',
      analysisComplete: '消費者洞察分析完成',
      opportunitiesFound: '識別出147個改進機會',
      reviewAnalysisComplete: '隱藏需求分析：發現23個未滿足的願望',
      liveInsights: '即時消費者洞察',
      score: '影響評分',
      aiModels: 'AI模型',
      accuracy: '準確率',
      monitoring: '監控',
      active: '活躍'
    },
    features: {
      intelligence: {
        title: '消費者智能',
        description: '將客戶反饋轉化為戰略優勢',
        details: '了解哪些特徵對客戶最重要，以及您與競爭對手的比較情況'
      },
      optimization: {
        title: '特徵優化',
        description: '基於客戶影響優先考慮產品改進',
        details: '將資源集中在推動購買決策的高影響特徵上'
      },
      forecasting: {
        title: '隱藏需求發現',
        description: '挖掘未表達的客戶願望和市場空白',
        details: '通過高級情感分析識別競爭對手尚未發現的機會'
      },
      automation: {
        title: '競爭基準對比',
        description: '準確了解您的領先之處和需要追趕的地方',
        details: '基於真實客戶反饋獲得與市場領導者的精確特徵對比'
      }
    }
  },
  cta: {
    title: '準備好轉型您的全球電子商務了嗎？',
    subtitle: '與數百個實現指數增長的品牌合作',
    description: '開始免費諮詢，並發掘我們的AI驅動方式如何加速您業務的增長。',
    button: '開始您的增長之旅',
    features: {
      consultation: '免費策略諮詢',
      analysis: '市場機會分析',
      roadmap: '自訂增長路線圖'
    },
    form: {
      name: '您的姓名',
      email: 'your@email.com',
      message: '請告訴我們您的業務目標...'
    }
  },
  footer: {
    tagline: 'AI驅動型電子商務',
    description: '透過數據驅動的洞察和AI驅動型策略幫助全球品牌在跨境電子商務中達成指數增長的資訊顧問。',
    services: '服務',
    company: '公司',
    resources: '資源',
    about: '關於UCYX',
    partnership: '合作',
    blog: '部落格',
    contact: '聯絡我們',
    privacyPolicy: '隱私政策',
    termsOfService: '服務條款',
    cookiePolicy: 'Cookie政策',
    copyright: '© 2025 UCYX. 全權預約。AI驅動型全球電子商務諮詢。',
    language: '語言'
  },
  about: {
    title: '關於UCYX',
    subtitle: '創造AI驅動型全球電子商務成長',
    vision: {
      title: '我們的願景',
      description: '為每一個品牌賦能所需的工具和洞察，以在全球電子商務生態系統中展現成功，讓跨境商務對各種規模的企業變得可接觸、具盈利性及持續性。'
    },
    mission: {
      title: '我們的使命',
      description: '利用尖端AI技術、深度市場情報，以及經過驗證的改進策略，縮短多方之間的距離以迎接挑戰，提供可見及可衡量的成果。'
    },
    team: {
      title: '我們的精英團隊',
      subtitle: '來自科技產業的資深人士',
      description: '我們的團隊由來自頂尖科技公司的資深專業人員組成，融合電子商務、AI、數據科學以及國際企業的專業知識。',
      experience: {
        title: '綜合專業知識',
        years: '50+年',
        description: '在電子商務、AI、和跨境業務的共同經驗。'
      },
      leaders: {
        title: '行業領袖',
        description: '來自阿里巴巴、亞馬遜、谷歌、微軟、騰訊等領先科技公司和行業先驅的前高管'
      }
    },
    locations: {
      title: '全球團隊分布',
      subtitle: '國際專業知識網絡',
      description: '我們的多樣化團隊遍佈各大全球市場，為每一個專案帶來本地視野與國際視角。',
      tagline: '全球連接，本地行動 - 無論您身在何處，都能提供世界級的專業服務',
      offices: {
        hongkong: {
          city: '香港',
          country: '中國',
          description: '亞太地區總部與金融中心'
        },
        shenzhen: {
          city: '深圳',
          country: '中國',
          description: '科技創新中心及製造基地'
        },
        taipei: {
          city: '台北',
          country: '台灣',
          description: '區域運作與策略合作'
        },
        usa: {
          city: '美國',
          country: '北美',
          description: '戰略創新基地'
        }
      }
    },
    values: {
      title: '我們的核心價值',
      innovation: {
        title: '創新優先',
        description: '利用前沿AI和數據科技領導收益及市場趨勢'
      },
      results: {
        title: '重視結果',
        description: '我們開發的每一項策略都是要達成具體且可持續性的增長'
      },
      partnership: {
        title: '真誠合作',
        description: '我們是您團隊的延伸，誠心助您獲得長期成功'
      },
      excellence: {
        title: '卓越運營',
        description: '我們的每一行動皆維持最高標準，從策略至執行'
      }
    },
    cta: {
      title: '準備好與我們合作了嗎？',
      subtitle: '立即與已轉型全球電商的品牌共同成長',
      button: '開始您的成長之旅'
    }
  },
  uccopilot: {
    hero: {
      badge: 'AI驅動型電商助手',
      title: 'UCcopilot™',
      subtitle: '您的智能電商增長夥伴',
      description: '先進的AI驅動平台，自動化和優化您的整個電商運營。從庫存管理到客戶服務，UCcopilot處理一切，讓您專注於業務增長。',
      cta: '開始免費試用',
      heroFeatures: {
        hassleFreee: '無憂服務',
        deepPartnership: '深度合作',
        endToEndStrategy: '端到端策略',
        dedicatedSupport: '專屬支持'
      }
    },
    features: {
      title: '為什麼選擇UCcopilot？',
      zeroStress: {
        title: '零壓力設置',
        description: '通過我們直觀的入門流程，幾分鐘內即可開始。無需技術專業知識。',
        items: {
          setup: '完整平台設置',
          integration: '集成管理',
          configuration: '技術配置',
          testing: '質量保證測試'
        }
      },
      support: {
        title: '24/7主動支持',
        description: '我們的AI全天候監控您的業務，在您需要時提供即時支持。',
        items: {
          monitoring: '持續監控',
          resolution: '主動問題解決',
          optimization: '性能優化',
          emergency: '緊急響應團隊'
        }
      },
      automation: {
        title: '自動化運營',
        description: '讓AI處理日常任務，您專注於戰略決策和業務增長。',
        items: {
          inventory: '庫存自動化',
          processing: '訂單處理',
          communications: '客戶溝通',
          analytics: '報告和分析'
        }
      }
    },
    growthCta: {
      title: '準備好無憂增長了嗎？',
      description: '體驗UCcopilot™真正合作夥伴關係的力量。讓我們處理複雜性，而您專注於建立品牌和發展業務。',
      primaryButton: '開始合作',
      secondaryButton: '預約諮詢'
    },
    cta: {
      title: '與我們的專家交談',
      description: '準備好轉型您的電商業務了嗎？我們的團隊在這裡幫助您開始。',
      button: '安排諮詢'
    }
  },
  ucMmm: {
    hero: {
      badge: '高級分析工具',
      title: 'UC-MMM™',
      subtitle: '電商卓越行銷組合建模',
      description: '專為亞馬遜和自建網站平台設計的高級多維分析工具。透過數據驅動的洞察優化您的行銷投資並最大化投資回報率。',
      platforms: {
        amazon: '亞馬遜優化',
        shopify: 'Shopify分析',
        website: '網站追蹤',
        roi: 'ROI優化'
      }
    },
    features: {
      title: '核心功能',
      dataIntegration: {
        title: '數據整合',
        description: '無縫連接所有行銷渠道和銷售數據，進行全面分析。',
        items: {
          advertising: '廣告支出數據',
          sales: '銷售和收入指標',
          seasonal: '季節性趨勢',
          competitive: '競爭情報'
        }
      },
      statisticalAnalysis: {
        title: '統計分析',
        description: '高級統計建模，了解每個行銷渠道的真實影響。',
        items: {
          regression: '回歸分析',
          attribution: '歸因建模',
          incremental: '增量影響',
          saturation: '媒體飽和曲線'
        }
      },
      optimization: {
        title: '優化',
        description: 'AI驅動的建議，優化您的行銷組合並最大化投資回報率。',
        items: {
          budget: '預算重新分配',
          performance: '渠道性能',
          scenario: '情景規劃',
          forecasting: 'ROI預測'
        }
      }
    },
    howItWorks: {
      title: 'UC-MMM™ 工作原理',
      description: '我們的簡化流程將您的行銷數據轉化為可操作的洞察，只需四個簡單步驟。',
      dataCollection: {
        title: '數據收集',
        description: '從所有行銷接觸點和銷售渠道收集數據。'
      },
      statisticalModeling: {
        title: '統計建模',
        description: '應用高級統計技術來建模行銷效果。'
      },
      insightGeneration: {
        title: '洞察生成',
        description: '生成關於渠道性能和優化機會的可操作洞察。'
      },
      continuousOptimization: {
        title: '持續優化',
        description: '基於即時數據持續完善和優化您的行銷策略。'
      }
    },
    cta: {
      title: '準備好優化您的行銷組合了嗎？',
      description: '通過UC-MMM™的數據驅動洞察轉變您的行銷策略。立即開始分析，發現新的增長機會。',
      button: '開始分析'
    }
  },
  sellToWorld: {
    badge: '全球電商擴張',
    hero: {
      title: '將您的業務擴展到全球市場',
      subtitle: '國際電商成功的綜合解決方案',
      description: '通過我們經過驗證的策略、先進工具和專家指導，將您的本地業務轉變為全球強勢品牌。',
      cta: '開始全球擴張'
    },
    features: {
      globalAccess: '全球市場準入',
      strategies: '經過驗證的增長策略',
      endToEndSupport: '端到端支持'
    },
    platforms: {
      title: '多平台卓越',
      subtitle: '選擇您偏好的平台，或讓我們幫您決定最適合您品牌的策略'
    },
    services: {
      amazon: {
        title: '亞馬遜全球銷售',
        description: '利用世界最大的市場平台，觸達全球數百萬客戶',
        activeUsers: '3億+活躍用戶',
        countries: '190+國家',
        fba: 'FBA配送',
        prime: 'Prime集成',
        whatWeProvide: '我們提供的服務：',
        services: {
          setup: '帳戶設置',
          listing: '產品列表優化',
          ppc: 'PPC廣告管理',
          inventory: '庫存管理',
          analytics: '績效分析'
        }
      },
      shopify: {
        title: 'Shopify商店開發',
        description: '建立您自己的數位存在和品牌權威',
        design: '定制設計',
        seo: 'SEO優化',
        mobile: '移動響應式',
        analytics: '分析集成',
        whatWeProvide: '我們提供的服務：',
        services: {
          design: '商店設計與開發',
          seoStrategy: 'SEO策略實施',
          content: '內容創建與管理',
          social: '社交媒體整合',
          conversion: '轉化率優化'
        }
      },
      ucyx: {
        title: 'UCYX合作夥伴計劃',
        description: '我們通過專門的UCYX商店銷售您的產品',
        credibility: '通過成熟的UCYX品牌信譽立即進入市場',
        investment: '較低的初始投資和降低的風險',
        templates: '訪問我們優化的商店模板和經過驗證的策略',
        setup: '商店設置',
        optimization: '產品優化',
        management: '訂單管理',
        service: '客戶服務',
        campaigns: '營銷活動',
        reporting: '績效報告',
        advantage: '在整個客戶旅程中保持您的品牌身份'
      }
    },
    serviceModels: {
      title: '服務模式',
      subtitle: '選擇最適合您業務需求和成長階段的合作模式',
      fullService: {
        title: '全方位服務運營',
        subtitle: '為您的品牌提供完整的端到端電商管理',
        forBrands: '適合成熟品牌',
        keyBenefits: '主要優勢',
        benefits: {
          strategy: '基於您獨特價值主張的定制策略開發',
          control: '完全控制和擁有客戶關係',
          dedicated: '為您的品牌提供專門的團隊和資源'
        },
        serviceIncludes: '服務包括：',
        services: {
          consulting: '策略諮詢',
          brand: '品牌發展',
          platform: '平台管理',
          marketing: '營銷和廣告',
          analytics: '分析和優化',
          support: '持續支持'
        }
      },
      partnership: {
        title: 'UCYX合作夥伴計劃',
        subtitle: '推薦給新品牌',
        serviceIncludes: '服務包括：',
        benefits: {
          resources: '共享營銷資源和交叉推廣機會'
        },
        services: {
          setup: '商店設置',
          optimization: '產品優化',
          management: '訂單管理',
          service: '客戶服務',
          campaigns: '營銷活動',
          reporting: '績效報告'
        }
      }
    },
    stats: {
      markets: '全球市場',
      growth: '平均收入增長',
      success: '客戶成功率',
      support: '支持服務'
    },
    cta: {
      title: '開始您的全球擴張',
      subtitle: '告訴我們您的業務情況，我們將為您的全球成功制定定制化增長策略'
    },
    form: {
      title: '開始全球擴張',
      subtitle: '告訴我們您的業務和目標',
      fields: {
        name: '姓名',
        email: '郵箱',
        companyName: '公司名稱',
        website: '網站',
        productCategory: '產品類別',
        mainObjective: '主要目標',
        serviceType: '所需服務類型',
        goals: '業務目標',
        platforms: '當前平台',
        revenue: '月收入範圍',
        markets: '目標市場',
        fullName: '全名',
        phone: '電話號碼',
        message: '附加信息'
      },
      placeholders: {
        companyName: '您的公司名稱',
        website: 'https://yourwebsite.com',
        productCategory: '選擇您的主要產品類別',
        fullName: '您的全名',
        email: 'your.email@company.com',
        phone: '您的電話號碼',
        message: '告訴我們更多關於您的業務目標和挑戰...',
        revenue: '選擇您當前的月收入範圍',
        markets: '選擇擴張的目標市場',
        additionalInfo: '告訴我們更多關於您的業務目標、挑戰或具體要求...'
      },
      options: {
        categories: {
          electronics: '電子產品',
          fashion: '時尚服裝',
          home: '家居園藝',
          health: '健康美容',
          sports: '運動戶外',
          automotive: '汽車用品',
          books: '書籍媒體',
          toys: '玩具遊戲',
          food: '食品飲料',
          other: '其他'
        },
        goals: {
          newMarkets: '進入新的國際市場',
          increaseSales: '增加現有市場的銷售',
          optimizeOperations: '優化當前運營',
          buildBrand: '在全球建立品牌知名度'
        },
        platforms: {
          amazon: '亞馬遜',
          ebay: 'eBay',
          shopify: 'Shopify',
          woocommerce: 'WooCommerce',
          magento: 'Magento',
          ownWebsite: '自有網站',
          physicalStores: '僅實體店',
          none: '無'
        },
        revenue: {
          under10k: '低於 $10,000',
          '10k-50k': '$10,000 - $50,000',
          '50k-100k': '$50,000 - $100,000',
          '100k-500k': '$100,000 - $500,000',
          '500k-1m': '$500,000 - $1,000,000',
          over1m: '超過 $1,000,000'
        },
        markets: {
          us: '美國',
          canada: '加拿大',
          uk: '英國',
          germany: '德國',
          france: '法國',
          japan: '日本',
          australia: '澳大利亞',
          other: '其他'
        },
        serviceTypes: {
          proxySales: '代理銷售（通過UCYX商店銷售）',
          fullService: '全方位服務運營（完整管理）',
          consultation: '僅諮詢和策略',
          notSure: '不確定，需要指導'
        }
      },
      buttons: {
        submit: '獲取免費諮詢',
        startExpansion: '開始我的全球擴張',
        submitting: '提交中...'
      },
      success: {
        title: '謝謝您！',
        message: '我們已收到您的信息，將在24小時內聯繫您討論您的全球擴張策略。',
        backButton: '返回服務'
      }
    }
  },
  partnership: {
    hero: {
      badge: '合作機會',
      title: '與UCYX合作',
      description: '加入我們的全球合作夥伴網絡，幫助企業在數字市場中取得成功。讓我們共同推動電商領域的增長和創新。',
      features: {
        globalReach: {
          title: '全球覆蓋',
          description: '接觸國際市場和跨境機會'
        },
        growthFocus: {
          title: '增長專注',
          description: '經過驗證的方法論和AI驅動的擴展解決方案'
        },
        expertSupport: {
          title: '專家支持',
          description: '專門的合作夥伴團隊和全面的資源'
        }
      }
    },
    form: {
      title: '合作夥伴申請',
      subtitle: '告訴我們您的業務和合作目標',
      cardTitle: '合作夥伴信息表',
      sections: {
        company: '公司信息',
        contact: '聯繫信息',
        partnership: '合作詳情',
        business: '業務信息',
        additional: '附加信息'
      },
      fields: {
        companyName: '公司名稱',
        website: '網站',
        industry: '行業',
        companySize: '公司規模',
        headquarters: '總部',
        contactName: '聯繫人姓名',
        title: '職位',
        email: '郵箱地址',
        phone: '電話號碼',
        partnershipType: '合作類型',
        services: '感興趣的服務',
        regions: '目標區域',
        timeline: '合作時間表',
        budget: '預估預算範圍',
        currentRevenue: '當前年收入',
        targetMarkets: '目標市場',
        businessModel: '商業模式',
        existingPartners: '現有合作夥伴',
        relevantExperience: '相關經驗',
        expectations: '合作期望',
        resources: '資源和能力',
        additionalInfo: '附加信息'
      },
      placeholders: {
        companyName: '您的公司名稱',
        website: 'https://您的網站.com',
        industry: '選擇您的行業',
        companySize: '選擇公司規模',
        headquarters: '城市，國家',
        contactName: '您的全名',
        title: '您的職位',
        email: '您的郵箱@公司.com',
        phone: '您的電話號碼',
        partnershipType: '選擇合作類型',
        timeline: '選擇時間表',
        budget: '選擇預算範圍',
        currentRevenue: '選擇收入範圍',
        targetMarkets: '描述您的目標市場和客戶群體...',
        businessModel: '描述您的商業模式和收入來源...',
        existingPartners: '列出任何現有的合作夥伴或戰略聯盟...',
        relevantExperience: '描述您在行業中的相關經驗...',
        expectations: '您對這次合作的期望是什麼？...',
        additionalInfo: '您想分享的任何附加信息...',
        resources: '您能為這次合作帶來什麼資源、能力或專業知識？'
      },
      options: {
        industries: {
          retail: '零售',
          manufacturing: '製造業',
          technology: '技術',
          consulting: '諮詢',
          marketing: '營銷代理',
          logistics: '物流',
          other: '其他'
        },
        companySizes: {
          startup: '初創公司 (1-10人)',
          small: '小型 (11-50人)',
          medium: '中型 (51-200人)',
          large: '大型 (201-1000人)',
          enterprise: '企業級 (1000+人)'
        },
        partnershipTypes: {
          reseller: '經銷商合作夥伴',
          integration: '技術集成',
          channel: '渠道合作夥伴',
          strategic: '戰略聯盟',
          affiliate: '聯盟計劃'
        },
        timelines: {
          immediate: '立即 (30天內)',
          quarter: '本季度',
          halfYear: '6個月內',
          year: '一年內',
          exploring: '僅在探索'
        },
        budgets: {
          under50k: '低於 $50,000',
          '50k-100k': '$50,000 - $100,000',
          '100k-250k': '$100,000 - $250,000',
          '250k-500k': '$250,000 - $500,000',
          over500k: '超過 $500,000',
          tbd: '待定'
        },
        revenues: {
          under1m: '低於 $1M',
          '1m-5m': '$1M - $5M',
          '5m-10m': '$5M - $10M',
          '10m-50m': '$10M - $50M',
          over50m: '超過 $50M',
          confidential: '保密'
        },
        services: {
          ucMmm: 'UC-MMM™ (營銷組合建模)',
          sellToChina: '銷售到中國計劃',
          sellToWorld: '銷售到全球計劃',
          uccopilot: 'UCcopilot™ 服務',
          aiAnalytics: 'AI驅動分析',
          consulting: '電商諮詢'
        },
        regions: {
          northAmerica: '北美',
          europe: '歐洲',
          asiaPacific: '亞太地區',
          china: '中國',
          japan: '日本',
          southKorea: '韓國',
          southeastAsia: '東南亞',
          middleEast: '中東',
          africa: '非洲',
          latinAmerica: '拉丁美洲'
        }
      },
      labels: {
        servicesOfInterest: '感興趣的服務（選擇所有適用項）',
        targetRegions: '目標區域（選擇所有適用項）'
      },
      buttons: {
        submit: '提交申請',
        submitting: '提交中...'
      },
      success: {
        title: '申請已提交！',
        message: '感謝您對與UCYX合作的興趣。我們將審核您的申請並在48小時內聯繫您。',
        backButton: '返回首頁'
      }
    }
  },
  sellToChina: {
    hero: {
      title: '中國市場的首選合作夥伴',
      subtitle: '我們幫助您與天貓全球進行合作，觸及數億消費者',
      description: '我們提供全方位的品牌入市、商店管理、數位行銷及數據分析服務，解決所有的進入障礙。',
      cta: '免費入市諮詢'
    },
    coreServices: {
      title: '核心服務',
      brandEntry: {
        title: '快速品牌入市',
        description: '從資格審核到商店設置的專業指導，確保高效且無憂的市場入市。'
      },
      storeManagement: {
        title: '精確商店運營',
        description: '日常營運、顧客服務、產品及庫存管理 - 我們處理一切，讓您專注於品牌發展。'
      },
      digitalMarketing: {
        title: '整合數位行銷',
        description: '根據中國市場特性提供內容行銷、社交媒體推廣、KOL合作等。'
      },
      dataAnalytics: {
        title: '數據驅動型決策',
        description: '提供深入的銷售數據分析，協助品牌優化策略、提升ROI及持續增長。'
      }
    },
    opportunity: {
      title: '您無法錯過的巨大機會',
      subtitle: '中國的跨境電商市場正在以空前速度成長。讓我們用數據為您呈現推進月度成長的最佳契機。',
      stats: {
        growth: {
          title: '跨境電商進口的年度成長率',
          description: '2015-2022年CAGR，其他消費渠道大幅超越，巨大成長潛力。'
        },
        consumers: {
          title: '優質進口消費者',
          description: '天貓全球服務超過1億高消費能力的消費者。他們積極尋找全球優質產品。'
        },
        platform: {
          title: '市場領導平台',
          description: '天貓全球持續在市場占有率中領先，成為海外品牌進入中國的首选及絕對信賴的平台。'
        }
      }
    },
    strategy: {
      title: '如何利用天貓全球為成功鋪路',
      partnership: '天貓全球 × UCYX',
      description1: '我們不僅將天貓全球視為販售管道，更是品牌成功的動力來源。您無需在中國創立公司，便可直接聯繫到數億名的消費者。',
      description2: '我們的專業團隊將協助您探索這平台，利用其成熟保稅倉庫系統、高效物流、及消費者信任的正品保障系統，創造迅速高效的企業運作。',
      benefits: {
        noCompany: '無需在中國創立公司，減少使用入口門檻',
        warehouse: '官方保稅倉庫系統確保正品和高效率',
        consumers: '讓超過1億高消費的客戶穩定存入',
        trust: '完整的消費者信任和保障機制'
      }
    },
    process: {
      title: '為您鋪設成功之路',
      subtitle: '簡化複雜的過程，變得可控，直到成功我們一同注解每一步。',
      steps: {
        assessment: {
          title: '初步審核',
          description: '深入了解您的品牌定位、產品的優勢與商業目標。'
        },
        customization: {
          title: '解決方案的定制',
          description: '為您量身定制的入市、運營和行銷方案。'
        },
        officialEntry: {
          title: '正式入市',
          description: '處理所有複雜申請材料和流程，為您節省時間。'
        },
        storeLaunch: {
          title: '商店啟動',
          description: '給予您的Tmall Global商店專業設計，打造豐富的品牌形象。'
        },
        continuousGrowth: {
          title: '持續增長',
          description: '透過精準的運營和行銷，爭取在業務與品牌援助上的雙重增長。'
        }
      }
    },
    pricing: {
      title: '為您的品牌量身定制的合作計劃',
      subtitle: '我們提供彈性合夥模式 - 無論您當前所處的階段，都能找到最適合的計劃。',
      plans: {
        basic: {
          name: '基本',
          description: '希望能迅速而經濟地完成平台的入市、並能獨立管理運營的品牌最適合。',
          features: {
            assessment: '入市資格評估',
            guidance: '完整的入市指導',
            setup: '基本商店設置'
          },
          cta: '了解計劃詳細'
        },
        growth: {
          name: '成長',
          recommended: '推薦方案',
          description: '那些需要穩定地在中国市场成长的品牌适用，包含重要的日常运营服务。',
          features: {
            basicIncluded: '包含所有基础服务',
            operations: '日常商店运营与维护',
            customerService: '客服的管理',
            reports: '月次报告'
          },
          cta: '联系我们的报价'
        },
        flagship: {
          name: '旗艦',
          description: '為您的品牌目標及影响力打造全面的服务，以推广在中国市场。',
          features: {
            growthIncluded: '包含所有成长服务',
            marketing: '综合形式的行銷策略與執行',
            kol: 'KOL與內容行銷',
            analytics: '深入的數據分析和指導'
          },
          cta: '了解計劃詳細'
        }
      }
    }
  }
};

// Japanese translations
const jaTranslations = {
  common: {
    loading: '読み込み中...',
    error: 'エラー',
    success: '成功',
    cancel: 'キャンセル',
    confirm: '確認',
    save: '保存',
    delete: '削除',
    edit: '編集',
    back: '戻る',
    next: '次へ',
    previous: '前へ',
    close: '閉じる',
    learnMore: '詳細を見る',
    getStarted: '始める',
    contactUs: 'お問い合わせ',
    submit: '送信',
    submitting: '送信中...',
    thankYou: 'ありがとうございます！24時間以内にご連絡いたします。',
    createFuture: '私たちと一緒に未来を創造しましょう',
    connectVision: '私たちは先見性のあるブランド、投資家、パートナーとのつながりを期待しています。私たちの理念に共感していただけましたら、お気軽にお声がけください。',
    companyAddress: 'UCYX Ltd.\n香港尖沙咀漆咸道南61-65号冠达世纪广场2楼S068室'
  },
  header: {
    brand: 'UCYX',
    services: 'サービス',
    whoWeServe: 'サービス対象',
    successStories: '成功事例',
    methodology: '方法論',
    novochoice: 'Novochoice',
    startYourGrowthJourney: '成長の旅を始める'
  },
  navigation: {
    sellToChina: '中国への販売',
    sellToWorld: '世界への販売',
    partnershipOpportunities: 'パートナーシップ機会',
    startFreeConsultation: '無料相談を始める',
    visitOurBlog: 'ブログを見る',
    learnMoreAboutMethodology: '方法論について詳しく見る',
    viewSellToChina: '中国への販売を見る',
    backToHome: 'ホームに戻る'
  },
  hero: {
    title: 'あなたの非凡を見つけよう',
    subtitle: 'データ駆動型クロスボーダー コマースソリューションでビジネスを変革',
    description: 'UCYXは独自のAIツールと実証済みの4ステップ方法論を通じて、グローバルブランドの指数関数的成長を支援します。市場インテリジェンスから販売最適化まで、データを収益に変換します。',
    cta: '成長の旅を始める',
    watchDemo: '方法論を発見する',
    dataInsights: 'データ駆動型洞察',
    dataDescription: '私たちが提案するすべての戦略的推奨事項は、大規模なデータセットの深層学習と分析に基づいています。',
    categories: 'コアEコマースカテゴリー',
    products: 'アクティブ製品',
    keywords: '業界キーワード',
    reviews: '消費者レビュー'
  },
  services: {
    title: '私たちのサービス',
    subtitle: 'グローバルEコマース成功のための包括的ソリューション',
    extraordinaryGrowth: '卓越した成長',
    cta: '私たちがどのように成長を加速できるかを発見',
    start: {
      title: 'スタート',
      subtitle: '旅を始める',
      sellToChina: {
        title: '中国への販売',
        description: '10億人の消費者にリーチ'
      },
      sellToWorld: {
        title: '世界への販売',
        description: 'グローバル市場拡大'
      }
    },
    choice: {
      title: '選択',
      subtitle: 'スマートな意思決定',
      novochoice: {
        title: 'Novochoice',
        description: 'AI駆動型市場インテリジェンス'
      }
    },
    sell: {
      title: '販売',
      subtitle: '成長を推進',
      sellToWorld: {
        title: '世界への販売',
        description: 'グローバル市場拡大'
      },
      uccopilot: {
        title: 'UCcopilotサービス',
        description: 'AI駆動型販売最適化'
      },
      ucMmm: {
        title: 'UC-MMM',
        description: 'マーケティングROIの最大化'
      }
    },
    manage: {
      title: '管理',
      subtitle: '運営のスケール',
      ucMmm: {
        title: 'UC-MMM',
        description: 'マーケティングROIの最大化'
      }
    },
    grid: {
      marketIntelligence: {
        title: '市場インテリジェンス',
        description: '包括的な市場分析と競合他社調査により、未開拓の機会と市場ギャップを特定します。',
        tag1: '市場調査',
        tag2: '競合分析'
      },
      productStrategy: {
        title: '製品戦略',
        description: '戦略的製品開発とポジショニングにより、ターゲットオーディエンスに響く魅力的な価値提案を創造します。',
        tag1: '製品開発',
        tag2: '価値提案'
      },
      brandDevelopment: {
        title: 'ブランド開発',
        description: '完全なブランドアイデンティティの創造とメッセージング戦略により、市場での強力で記憶に残る存在感を確立します。',
        tag1: 'ブランドアイデンティティ',
        tag2: 'ブランドメッセージング'
      },
      digitalMarketing: {
        title: 'デジタルマーケティング',
        description: 'すべてのプラットフォームでトラフィック、エンゲージメント、コンバージョンを促進するマルチチャネルデジタルマーケティングキャンペーン。',
        tag1: 'デジタルキャンペーン',
        tag2: 'マルチチャネル'
      },
      salesOptimization: {
        title: '販売最適化',
        description: '高度な販売ファネル最適化とコンバージョン率改善により、すべての訪問者からの収益を最大化します。',
        tag1: 'コンバージョン率',
        tag2: '販売ファネル'
      },
      growthAnalytics: {
        title: '成長分析',
        description: '継続的なパフォーマンスモニタリングとデータ駆動型インサイトにより、効率的かつ持続可能にビジネスを拡大します。',
        tag1: 'パフォーマンス指標',
        tag2: 'データ分析'
      }
    }
  },
  whoWeServe: {
    title: 'サービス対象',
    subtitle: '私たちは、拡張を求める確立されたブランドであっても、優れた製品を持つスタートアップであっても、グローバル市場のパイオニアとパートナーシップを組みます。',
    establishedBrands: '確立されたブランド',
    establishedBrandsDescription: '成功した製品と安定したビジネスを持っているが、新しい市場に参入して次の成長曲線を見つけることを熱望している。',
    startupsWithIdeas: '優れたアイデアを持つスタートアップ',
    startupsWithIdeasDescription: '優れたアイデアを創造したが、それを製品とブランドに転換するアプローチが不足している。',
    traditionalManufacture: '伝統的製造業',
    traditionalManufactureDescription: '優れた製品を持っているが、AmazonやShopifyなどのプラットフォームでの市場参入戦略とブランドマーケティング経験が不足している。'
  },
  successStories: {
    title: '成功事例',
    subtitle: '実際のビジネスからの実際の結果',
    description: '私たちのクライアントは、AI駆動型アプローチと実証済みの方法論を通じて測定可能な成長を実現しています。',
    provenResults: '実証された結果',
    revenueGrowth: '収益成長',
    revenueImpact: '収益影響',
    marketExpansion: '市場拡大',
    customerAcquisition: '顧客獲得',
    roi: 'ROI改善',
    verifiedSuccess: '検証された成功',
    cases: {
      skincare: {
        brand: '北米スキンケアブランド',
        title: 'ゼロからアジア市場への参入',
        description: 'Novochoice™データプラットフォームを使用して、中国のEコマースプラットフォームで高ポテンシャルのニッチ市場を特定し、UCselection™サービスで、アジアの消費者の好みに合わせた価値提案の定義を支援し、初月の売上予測を300%上回りました。',
        metric: '+300%',
        metricLabel: '初月売上目標',
        industry: '美容・パーソナルケア',
        region: 'アジア太平洋',
        duration: '1ヶ月'
      },
      smartHome: {
        brand: 'ヨーロッパスマートホームブランド',
        title: 'レビューインサイトでユーザーロイヤルティを再構築',
        description: 'トップ10のベストセラー商品の中から5千件の顧客レビューを分析し、コア製品改善機会を発見し、販売資料を最適化することで、6ヶ月以内にリピート購入率を50%向上させました。',
        metric: '+50%',
        metricLabel: 'リピート購入率',
        industry: 'スマートホーム技術',
        region: 'ヨーロッパ',
        duration: '6ヶ月'
      },
      networkStorage: {
        brand: '中国ベースのネットワークストレージブランド',
        title: 'Amazon新製品ローンチ最適化',
        description: 'UCcopilot™を活用したインテリジェント広告キャンペーン最適化により、Amazon USでの新製品のクリックスルー コンバージョン率を75%向上させ、広告予算を増やすことなくACoSを40%削減しました。',
        metric: '-40%',
        metricLabel: '広告売上コスト(ACoS)',
        industry: 'テクノロジーハードウェア',
        region: '北米',
        duration: '3ヶ月'
      },
      stationery: {
        brand: '日本デザイナー文具ブランド',
        title: 'Shopify DTC売上予測',
        description: 'UCforecast™モデルにより、北米市場をターゲットとした新製品ラインの正確な売上予測を提供しました。これにより在庫戦略の最適化を支援し、初期在庫の95%売上率を達成しました。',
        metric: '95%',
        metricLabel: '初期在庫売上率',
        industry: '消費財',
        region: '北米',
        duration: '4ヶ月'
      },
      outdoorGear: {
        brand: 'オーストラリアアウトドアギアブランド',
        title: 'クロスプラットフォーム拡張戦略',
        description: '包括的な市場分析と戦略的プラットフォーム選択により、単一のマーケットプレイスから3カ国の5つの異なるプラットフォームへの拡張を支援し、8ヶ月以内に280%の収益成長を実現しました。',
        metric: '+280%',
        metricLabel: '収益成長',
        industry: 'アウトドア・レクリエーション',
        region: 'マルチリージョナル',
        duration: '8ヶ月'
      },
      petCare: {
        brand: 'カナダペットケアブランド',
        title: 'AI駆動型製品開発',
        description: '消費者感情分析と競合インテリジェンスを使用して、ペットウェルニス市場のギャップを特定し、3つの新製品ラインの開発を指導し、市場受容性で89%の成功率を達成しました。',
        metric: '89%',
        metricLabel: '市場受容率',
        industry: 'ペットケア・ウェルニス',
        region: '北米',
        duration: '5ヶ月'
      }
    }
  },
  methodology: {
    title: 'UCYX価値成長方法論™',
    subtitle: '実証済みの4ステップ指数関数成長フレームワーク',
    description: '長年のクロスボーダーEコマース専門知識に基づき、独自のAIツールによって駆動される私たちの方法論は、一貫して測定可能な結���を提供します。',
    steps: {
      analyze: {
        title: '分析',
        description: 'Novochoice™ AIプラットフォームを使用した深層市場インテリジェンスと競合分析'
      },
      strategize: {
        title: '戦略化',
        description: 'UCselection™と市場インサイトを活用したデータ駆動型戦略開発'
      },
      execute: {
        title: '実行',
        description: 'UCcopilot™最適化とリアルタイムモニタリングを活用したシームレスな実装'
      },
      optimize: {
        title: '最適化',
        description: 'UCforecast™予測分析とパフォーマンス調整を活用した継続的改善'
      }
    }
  },
  ai: {
    title: 'Novochoice™に会いましょう',
    subtitle: 'あなたのAI駆動型消費者インサイトパートナー',
    description: '私たちの独自のAIプラットフォームは、顧客フィードバックを実行可能なビジネスインテリジェンスに変換し、顧客が本当に求めているものと、競合他社よりも優れた提供方法を理解するお手伝いをします。',
    accessPlatform: 'Novochoiceプラットフォームにアクセス',
    badgeText: 'AI駆動型消費者インテリジェンス',
    coreCapabilities: 'コア機能',
    capabilities: {
      globalMarkets: '全ての主要Eコマースプラットフォームでの顧客フィードバック分析',
      nicheDiscovery: '競合ベンチマークによる製品特徴重要度発見',
      reviewAnalysis: '隠れたニーズを発見する深層顧客感情分析',
      predictiveForecasting: '特徴影響スコアリングによる購買決定モデリング'
    },
    dataPoints: {
      marketDatasets: 'レビューデータセット',
      nicheMarkets: '製品カテゴリー',
      successRate: 'インサイト精度',
      activeInsights: 'アクティブインサイト'
    },
    dashboard: {
      title: 'NOVOCHOICEダッシュボード',
      scanning: '顧客レビューを分析中...',
      processing: '240万件の顧客フィードバックを処理中...',
      analyzing: '⟨ 特徴を顧客ニーズにマッピング中... ⟩',
      analysisComplete: '消費者インサイト分析完了',
      opportunitiesFound: '147の改善機会を特定',
      reviewAnalysisComplete: '隠れたニーズ分析：23の未満足な願望を発見',
      liveInsights: 'ライブ消費者インサイト',
      score: 'インパクトスコア',
      aiModels: 'AIモデル',
      accuracy: '精度',
      monitoring: 'モニタリング',
      active: 'アクティブ'
    },
    features: {
      intelligence: {
        title: '消費者インテリジェンス',
        description: '顧客フィードバックを戦略的優位性に変換',
        details: '顧客にとって最も重要な特徴と競合他社との比較を理解'
      },
      optimization: {
        title: '特徴最適化',
        description: '顧客インパクトに基づく製品改善の優先順位付け',
        details: '購買決定を促進する高インパクト特徴にリソースを集中'
      },
      forecasting: {
        title: '隠れたニーズ発見',
        description: '未表現の顧客願望と市場ギャップを発見',
        details: '高度感情分析により競合他社がまだ発見していない機会を特定'
      },
      automation: {
        title: '競合ベンチマーキング',
        description: 'リードしている分野と追いつく必要がある分野を正確に把握',
        details: '実際の顧客フィードバックに基づく市場リーダーとの精密な特徴別比較'
      }
    }
  },
  cta: {
    title: 'グローバルEコマースの変革準備はできていますか？',
    subtitle: 'UCYXで指数関数的成長を達成している数百のブランドに参加',
    description: '無料相談を開始し、私たちのAI駆動型方法論がどのようにビジネス成長を加速できるかを発見してください。',
    button: '成長の旅を始める',
    features: {
      consultation: '無料戦略相談',
      analysis: '市場機会分析',
      roadmap: 'カスタム成長ロードマップ'
    },
    form: {
      name: 'お名前',
      email: 'your@email.com',
      message: 'ビジネス目標について教えてください...'
    }
  },
  footer: {
    tagline: 'AI駆動型Eコマース',
    description: 'データ駆動型洞察とAI駆動型戦略を通じて、グローバルブランドのクロスボーダーEコマースでの指数関数的成長を支援する未来志向のコンサルタンシー。',
    services: 'サービス',
    company: '会社',
    resources: 'リソース',
    about: 'UCYXについて',
    partnership: 'パートナーシップ',
    blog: 'ブログ',
    contact: 'お問い合わせ',
    privacyPolicy: 'プライバシーポリシー',
    termsOfService: '利用規約',
    cookiePolicy: 'Cookieポリシー',
    copyright: '© 2025 UCYX. 全権利予約。AI駆動型グローバルEコマースコンサルタンシー。',
    language: '言語'
  },
  about: {
    title: 'UCYXについて',
    subtitle: 'AI駆動型グローバルEコマース成長の先駆者',
    vision: {
      title: '私たちのビジョン',
      description: 'すべてのブランドに、グローバルEコマースエコシステムで成功するために必要なツールとインサイトを提供し、あらゆる規模のビジネスにとってクロスボーダー コマースをアクセス可能、収益性があり、持続可能にすることです。'
    },
    mission: {
      title: '私たちのミッション',
      description: '最先端のAI技術、深い市場インテリジェンス、測定可能な結果を提供する実証済みの成長戦略を通じて、野心的なブランドとグローバル市場の間のギャップを埋めます。'
    },
    team: {
      title: '私たちのエリートチーム',
      subtitle: '大手テック企業出身の業界ベテラン',
      description: '私たちのチームは、グローバルテクノロジー企業での豊富な経験を持つ熟練した専門家で構成され、Eコマース、AI、データサイエンス、国際ビジネスに深い専門知識を結集しています。',
      experience: {
        title: '総合専門知識',
        years: '50+年',
        description: 'Eコマース、AI、クロスボーダービジネスでの集合的経験'
      },
      leaders: {
        title: '業界リーダー',
        description: 'アリババ、アマゾン、グーグル、マイクロソフト、テンセントなどの大手テクノロジー企業や業界パイオニアの元幹部'
      }
    },
    locations: {
      title: 'グローバルチーム分布',
      subtitle: '国際専門知識ネットワーク',
      description: '私たちの多様なチームは主要なグローバル市場に広がり、すべてのプロジェクトにローカルインサイトと国際的視点をもたらします。',
      tagline: 'グローバルに接続し、ローカルに行動 - どこにいても世界クラスの専門知識を提供',
      offices: {
        hongkong: {
          city: '香港',
          country: '中国',
          description: 'アジア太平洋本部および金融ハブ'
        },
        shenzhen: {
          city: '深圳',
          country: '中国',
          description: 'テクノロジーイノベーションセンターおよび製造拠点'
        },
        taipei: {
          city: '台北',
          country: '台湾',
          description: '地域運営および戦略的パートナーシップ'
        },
        usa: {
          city: 'アメリカ合衆国',
          country: '北米',
          description: '戦略的市場拡大拠点'
        }
      }
    },
    values: {
      title: '私たちのコア価値',
      innovation: {
        title: 'イノベーション第一',
        description: '最先端のAIとデータサイエンスを活用して市場トレンドの先を行く'
      },
      results: {
        title: '結果志向',
        description: '私たちが開発するすべての戦略は、測定可能で持続可能な成長を提供するように設計されています'
      },
      partnership: {
        title: '真のパートナーシップ',
        description: 'あなたのチームの延長として働き、長期的な成功に投資する'
      },
      excellence: {
        title: '運営の卓越性',
        description: '戦略から実行まで、すべてにおいて最高水準を維持します'
      }
    },
    cta: {
      title: '私たちとパートナーシップを組む準備はできていますか？',
      subtitle: 'UCYXでグローバルEコマースプレゼンスを変革している既存のブランドに参加',
      button: '成長の旅を始める'
    }
  },
  uccopilot: {
    hero: {
      badge: 'AI駆動型Eコマースアシスタント',
      title: 'UCcopilot™',
      subtitle: 'あなたのインテリジェントEコマース成長パートナー',
      description: '高度なAI駆動プラットフォームで、Eコマース運営全体を自動化・最適化します。在庫管理からカスタマーサービスまで、UCcopilotがすべてを処理し、あなたはビジネス成長に集中できます。',
      cta: '無料トライアル開始',
      heroFeatures: {
        hassleFreee: 'ハッスルフリーサービス',
        deepPartnership: 'ディープパートナーシップ',
        endToEndStrategy: 'エンドツーエンド戦略',
        dedicatedSupport: '専任サポート'
      }
    },
    features: {
      title: 'UCcopilotを選ぶ理由',
      zeroStress: {
        title: 'ゼロストレス設定',
        description: '直感的なオンボーディングプロセスで数分で開始。技術的専門知識は不要です。',
        items: {
          setup: '完全プラットフォーム設定',
          integration: '統合管理',
          configuration: '技術設定',
          testing: '品質保証テスト'
        }
      },
      support: {
        title: '24/7プロアクティブサポート',
        description: '私たちのAIがあなたのビジネスを24時間監視し、必要な時に即座にサポートを提供します。',
        items: {
          monitoring: '継続的監視',
          resolution: 'プロアクティブ問題解決',
          optimization: 'パフォーマンス最適化',
          emergency: '緊急対応チーム'
        }
      },
      automation: {
        title: '自動化運営',
        description: 'AIに日常業務を任せ、あなたは戦略的決定とビジネス成長に集中してください。',
        items: {
          inventory: '在庫自動化',
          processing: '注文処理',
          communications: '顧客コミュニケーション',
          analytics: 'レポート・分析'
        }
      }
    },
    growthCta: {
      title: 'ハッスルフリー成長の準備はできていますか？',
      description: 'UCcopilot™の真のパートナーシップの力を体験してください。複雑さは私たちが処理し、あなたはブランド構築とビジネス成長に集中できます。',
      primaryButton: 'パートナーシップを開始',
      secondaryButton: 'コンサルテーション予約'
    },
    cta: {
      title: '専門家と話す',
      description: 'Eコマースビジネスの変革準備はできていますか？私たちのチームがスタートをサポートします。',
      button: 'コンサルテーション予約'
    }
  },
  ucMmm: {
    hero: {
      badge: '高度分析ツール',
      title: 'UC-MMM™',
      subtitle: 'Eコマース卓越マーケティングミックスモデリング',
      description: 'AmazonとセルフビルトWebサイトプラットフォーム専用に設計された高度多次元分析ツール。データ駆動型インサイトを通じてマーケティング投資を最適化し、ROIを最大化します。',
      platforms: {
        amazon: 'Amazon最適化',
        shopify: 'Shopify分析',
        website: 'Webサイト追跡',
        roi: 'ROI最適化'
      }
    },
    features: {
      title: 'コア機能',
      dataIntegration: {
        title: 'データ統合',
        description: 'すべてのマーケティングチャネルと販売データをシームレスに接続し、包括的な分析を実行します。',
        items: {
          advertising: '広告支出データ',
          sales: '売上・収益指標',
          seasonal: '季節トレンド',
          competitive: '競合インテリジェンス'
        }
      },
      statisticalAnalysis: {
        title: '統計分析',
        description: '各マーケティングチャネルの真の影響を理解するための高度統計モデリング。',
        items: {
          regression: '回帰分析',
          attribution: 'アトリビューションモデリング',
          incremental: 'インクリメンタル影響',
          saturation: 'メディア飽和曲線'
        }
      },
      optimization: {
        title: '最適化',
        description: 'AI駆動型推奨事項でマーケティングミックスを最適化し、ROIを最大化します。',
        items: {
          budget: '予算再配分',
          performance: 'チャネルパフォーマンス',
          scenario: 'シナリオプランニング',
          forecasting: 'ROI予測'
        }
      }
    },
    howItWorks: {
      title: 'UC-MMM™の仕組み',
      description: '私たちの合理化されたプロセスは、マーケティングデータを実行可能なインサイトに変換します。わずか4つの簡単なステップで。',
      dataCollection: {
        title: 'データ収集',
        description: 'すべてのマーケティングタッチポイントと販売チャネルからデータを収集します。'
      },
      statisticalModeling: {
        title: '統計モデリング',
        description: 'マーケティング効果をモデル化するための高度統計技術を適用します。'
      },
      insightGeneration: {
        title: 'インサイト生成',
        description: 'チャネルパフォーマンスと最適化機会に関する実行可能なインサイトを生成します。'
      },
      continuousOptimization: {
        title: '継続的最適化',
        description: 'リアルタイムデータに基づいてマーケティング戦略を継続的に改善・最適化します。'
      }
    },
    cta: {
      title: 'マーケティングミックスの最適化準備はできていますか？',
      description: 'UC-MMM™のデータ駆動型インサイトでマーケティング戦略を変革しましょう。今すぐ分析を開始し、成長の新しい機会を発見してください。',
      button: '分析開始'
    }
  },
  sellToWorld: {
    badge: 'グローバルEコマース拡張',
    hero: {
      title: 'ビジネスをグローバル市場に拡大',
      subtitle: '国際Eコマース成功のための包括的ソリューション',
      description: '実証済みの戦略、先進ツール、専門家のガイダンスで、ローカルビジネスをグローバル強豪ブランドに変革します。',
      cta: 'グローバル拡張を開始'
    },
    features: {
      globalAccess: 'グローバル市場アクセス',
      strategies: '実証済み成長戦略',
      endToEndSupport: 'エンドツーエンドサポート'
    },
    platforms: {
      title: 'マルチプラットフォーム卓越性',
      subtitle: 'お好みのプラットフォームを選択するか、ブランドに最適な戦略を決定するお手伝いをします'
    },
    services: {
      amazon: {
        title: 'Amazonグローバル販売',
        description: '世界最大のマーケットプレイスを活用し、グローバルに数百万の顧客にリーチ',
        activeUsers: '3億+アクティブユーザー',
        countries: '190+カ国',
        fba: 'FBA配送',
        prime: 'Prime統合',
        whatWeProvide: '提供サービス：',
        services: {
          setup: 'アカウント設定',
          listing: '商品リスト最適化',
          ppc: 'PPC広告管理',
          inventory: '在庫管理',
          analytics: 'パフォーマンス分析'
        }
      },
      shopify: {
        title: 'Shopifyストア開発',
        description: '独自のデジタルプレゼンスとブランド権威を構築',
        design: 'カスタムデザイン',
        seo: 'SEO最適化',
        mobile: 'モバイル対応',
        analytics: 'アナリティクス統合',
        whatWeProvide: '提供サービス：',
        services: {
          design: 'ストアデザイン・開発',
          seoStrategy: 'SEO戦略実装',
          content: 'コンテンツ作成・管理',
          social: 'ソーシャルメディア統合',
          conversion: 'コンバージョン率最適化'
        }
      },
      ucyx: {
        title: 'UCYXパートナーシッププログラム',
        description: '専用UCYXストアを通じてお客様の製品を販売',
        credibility: '確立されたUCYXブランドの信頼性で即座に市場参入',
        investment: '初期投資の削減とリスク軽減',
        templates: '最適化されたストアテンプレートと実証済み戦略へのアクセス',
        setup: 'ストア設定',
        optimization: '製品最適化',
        management: '注文管理',
        service: 'カスタマーサービス',
        campaigns: 'マーケティングキャンペーン',
        reporting: 'パフォーマンスレポート',
        advantage: 'カスタマージャーニー全体でブランドアイデンティティを維持'
      }
    },
    serviceModels: {
      title: 'サービスモデル',
      subtitle: 'ビジネスニーズと成長段階に最適なパートナーシップモデルを選択',
      fullService: {
        title: 'フルサービス運営',
        subtitle: 'ブランドのための完全なエンドツーエンドEコマース管理',
        forBrands: '確立されたブランド向け',
        keyBenefits: '主要メリット',
        benefits: {
          strategy: 'ユニークな価値提案に基づくカスタム戦略開発',
          control: '顧客関係の完全なコントロールと所有権',
          dedicated: 'ブランド専用チームとリソース'
        },
        serviceIncludes: 'サービス内容：',
        services: {
          consulting: '戦略コンサルティング',
          brand: 'ブランド開発',
          platform: 'プラットフォーム管理',
          marketing: 'マーケティング・広告',
          analytics: '分析・最適化',
          support: '継続サポート'
        }
      },
      partnership: {
        title: 'UCYXパートナーシッププログラム',
        subtitle: '新ブランドにおすすめ',
        serviceIncludes: 'サービス内容：',
        benefits: {
          resources: '共有マーケティングリソースとクロスプロモーション機会'
        },
        services: {
          setup: 'ストア設定',
          optimization: '製品最適化',
          management: '注文管理',
          service: 'カスタマーサービス',
          campaigns: 'マーケティングキャンペーン',
          reporting: 'パフォーマンスレポート'
        }
      }
    },
    stats: {
      markets: 'グローバル市場',
      growth: '平均収益成長',
      success: 'クライアント成功率',
      support: 'サポート利用可能'
    },
    cta: {
      title: 'グローバル拡張を開始',
      subtitle: 'ビジネスについて教えてください。グローバル成功のためのカスタマイズされた成長戦略を作成します'
    },
    form: {
      title: 'グローバル拡張を開始',
      subtitle: 'ビジネスと目標について教えてください',
      fields: {
        name: '名前',
        email: 'メール',
        companyName: '会社名',
        website: 'ウェブサイト',
        productCategory: '製品カテゴリー',
        mainObjective: '主な目標',
        serviceType: '必要なサービスタイプ',
        goals: 'ビジネス目標',
        platforms: '現在のプラットフォーム',
        revenue: '月間売上範囲',
        markets: 'ターゲット市場',
        fullName: 'フルネーム',
        phone: '電話番号',
        message: '追加情報'
      },
      placeholders: {
        companyName: '会社名を入力',
        website: 'https://yourwebsite.com',
        productCategory: '主要製品カテゴリーを選択',
        fullName: 'フルネームを入力',
        email: 'your.email@company.com',
        phone: '電話番号を入力',
        message: 'ビジネス目標や課題について詳しく教えてください...',
        revenue: '現在の月間売上範囲を選択',
        markets: '拡張対象市場を選択',
        additionalInfo: 'ビジネス目標、課題、具体的な要件について詳しく教えてください...'
      },
      options: {
        categories: {
          electronics: '電子機器',
          fashion: 'ファッション・アパレル',
          home: 'ホーム・ガーデン',
          health: 'ヘルス・ビューティー',
          sports: 'スポーツ・アウトドア',
          automotive: '自動車用品',
          books: '書籍・メディア',
          toys: 'おもちゃ・ゲーム',
          food: '食品・飲料',
          other: 'その他'
        },
        goals: {
          newMarkets: '新しい国際市場への参入',
          increaseSales: '既存市場での売上増加',
          optimizeOperations: '現在の運営最適化',
          buildBrand: 'グローバルブランド認知度向上'
        },
        platforms: {
          amazon: 'Amazon',
          ebay: 'eBay',
          shopify: 'Shopify',
          woocommerce: 'WooCommerce',
          magento: 'Magento',
          ownWebsite: '自社ウェブサイト',
          physicalStores: '実店舗のみ',
          none: 'なし'
        },
        revenue: {
          under10k: '$10,000未満',
          '10k-50k': '$10,000 - $50,000',
          '50k-100k': '$50,000 - $100,000',
          '100k-500k': '$100,000 - $500,000',
          '500k-1m': '$500,000 - $1,000,000',
          over1m: '$1,000,000超'
        },
        markets: {
          us: 'アメリカ',
          canada: 'カナダ',
          uk: 'イギリス',
          germany: 'ドイツ',
          france: 'フランス',
          japan: '日本',
          australia: 'オーストラリア',
          other: 'その他'
        },
        serviceTypes: {
          proxySales: 'プロキシ販売（UCYXストア経由販売）',
          fullService: 'フルサービス運営（完全管理）',
          consultation: 'コンサルティング・戦略のみ',
          notSure: '不明、ガイダンスが必要'
        }
      },
      buttons: {
        submit: '無料相談を受ける',
        startExpansion: 'グローバル拡張を開始',
        submitting: '送信中...'
      },
      success: {
        title: 'ありがとうございます！',
        message: '情報を受け取りました。24時間以内にグローバル拡張戦略についてご連絡いたします。',
        backButton: 'サービスに戻る'
      }
    }
  },
  partnership: {
    hero: {
      badge: 'パートナーシップ機会',
      title: 'UCYXとのパートナーシップ',
      description: 'グローバルパートナーネットワークに参加し、デジタルマーケットプレイスでビジネスの成功を支援しましょう。共に成長とイノベーションを推進します。',
      features: {
        globalReach: {
          title: 'グローバルリーチ',
          description: '国際市場とクロスボーダー機会へのアクセス'
        },
        growthFocus: {
          title: '成長フォーカス',
          description: '実証済みの方法論とAI駆動のスケーリングソリューション'
        },
        expertSupport: {
          title: '専門サポート',
          description: '専任パートナーシップチームと包括的なリソース'
        }
      }
    },
    form: {
      title: 'パートナーシップ申請',
      subtitle: 'あなたのビジネスとパートナーシップ目標について教えてください',
      cardTitle: 'パートナーシップ情報フォーム',
      sections: {
        company: '会社情報',
        contact: '連絡先情報',
        partnership: 'パートナーシップ詳細',
        business: 'ビジネス情報',
        additional: '追加情報'
      },
      fields: {
        companyName: '会社名',
        website: 'ウェブサイト',
        industry: '業界',
        companySize: '会社規模',
        headquarters: '本社',
        contactName: '連絡先氏名',
        title: '役職',
        email: 'メールアドレス',
        phone: '電話番号',
        partnershipType: 'パートナーシップタイプ',
        services: '興味のあるサービス',
        regions: 'ターゲット地域',
        timeline: 'パートナーシップタイムライン',
        budget: '予算範囲',
        currentRevenue: '現在の年収',
        targetMarkets: 'ターゲット市場',
        businessModel: 'ビジネスモデル',
        existingPartners: '既存のパートナー',
        relevantExperience: '関連経験',
        expectations: 'パートナーシップへの期待',
        resources: 'リソースと能力',
        additionalInfo: '追加情報'
      },
      placeholders: {
        companyName: 'あなたの会社名',
        website: 'https://あなたのウェブサイト.com',
        industry: '業界を選択',
        companySize: '会社規模を選択',
        headquarters: '都市、国',
        contactName: 'あなたの氏名',
        title: 'あなたの役職',
        email: 'あなたのメール@会社.com',
        phone: 'あなたの電話番号',
        partnershipType: 'パートナーシップタイプを選択',
        timeline: 'タイムラインを選択',
        budget: '予算範囲を選択',
        currentRevenue: '収入範囲を選択',
        targetMarkets: 'ターゲット市場と顧客セグメントを説明...',
        businessModel: 'ビジネスモデルと収益源を説明...',
        existingPartners: '既存のパートナーシップや戦略的提携をリスト...',
        relevantExperience: '業界での関連経験を説明...',
        expectations: 'このパートナーシップへの期待は何ですか？...',
        additionalInfo: '共有したい追加情報...',
        resources: 'このパートナーシップに何のリソース、能力、専門知識を提供できますか？'
      },
      options: {
        industries: {
          retail: '小売',
          manufacturing: '製造業',
          technology: 'テクノロジー',
          consulting: 'コンサルティング',
          marketing: 'マーケティングエージェンシー',
          logistics: '物流',
          other: 'その他'
        },
        companySizes: {
          startup: 'スタートアップ (1-10名)',
          small: '小規模 (11-50名)',
          medium: '中規模 (51-200名)',
          large: '大規模 (201-1000名)',
          enterprise: 'エンタープライズ (1000名以上)'
        },
        partnershipTypes: {
          reseller: 'リセラーパートナー',
          integration: 'テクノロジー統合',
          channel: 'チャネルパートナー',
          strategic: '戦略的提携',
          affiliate: 'アフィリエイトプログラム'
        },
        timelines: {
          immediate: '即座 (30日以内)',
          quarter: '今四半期',
          halfYear: '6ヶ月以内',
          year: '1年以内',
          exploring: '探索中'
        },
        budgets: {
          under50k: '$50,000未満',
          '50k-100k': '$50,000 - $100,000',
          '100k-250k': '$100,000 - $250,000',
          '250k-500k': '$250,000 - $500,000',
          over500k: '$500,000超',
          tbd: '未定'
        },
        revenues: {
          under1m: '$1M未満',
          '1m-5m': '$1M - $5M',
          '5m-10m': '$5M - $10M',
          '10m-50m': '$10M - $50M',
          over50m: '$50M超',
          confidential: '機密'
        },
        services: {
          ucMmm: 'UC-MMM™ (マーケティングミックスモデリング)',
          sellToChina: '中国販売プログラム',
          sellToWorld: '世界販売プログラム',
          uccopilot: 'UCcopilot™ サービス',
          aiAnalytics: 'AI駆動分析',
          consulting: 'Eコマースコンサルティング'
        },
        regions: {
          northAmerica: '北米',
          europe: 'ヨーロッパ',
          asiaPacific: 'アジア太平洋',
          china: '中国',
          japan: '日本',
          southKorea: '韓国',
          southeastAsia: '東南アジア',
          middleEast: '中東',
          africa: 'アフリカ',
          latinAmerica: 'ラテンアメリカ'
        }
      },
      labels: {
        servicesOfInterest: '興味のあるサービス（該当するものをすべて選択）',
        targetRegions: 'ターゲット地域（該当するものをすべて選択）'
      },
      buttons: {
        submit: '申請を提出',
        submitting: '提出中...'
      },
      success: {
        title: '申請が提出されました！',
        message: 'UCYXとのパートナーシップにご興味をお持ちいただき、ありがとうございます。申請を審査し、48時間以内にご連絡いたします。',
        backButton: 'ホームに戻る'
      }
    }
  },
  sellToChina: {
    hero: {
      title: '中国市場参入のプレミアパートナー',
      subtitle: 'Tmall Globalとのパートナーシップで数億人の消費者にリーチを支援',
      description: '包括的なブランド参入、店舗管理、デジタルマーケティング、データ分析サービスを提供し、中国市場参入のすべての障壁を排除します。',
      cta: '無料参入相談を受ける'
    },
    coreServices: {
      title: 'コアサービス',
      brandEntry: {
        title: '迅速なブランド参入',
        description: '資格審査から店舗設定まで、専門的指導により効率的で心配のない市場参入を確保します。'
      },
      storeManagement: {
        title: '精密店舗運営',
        description: '日常運営、カスタマーサービス、製品および在庫管理 - すべてを私たちが処理するので、ブランド開発に集中できます。'
      },
      digitalMarketing: {
        title: '統合デジタルマーケティング',
        description: '中国市場の特性に合わせてカスタマイズされ、コンテンツマーケティング、ソーシャルメディアプロモーション、KOLパートナーシップなどを提供します。'
      },
      dataAnalytics: {
        title: 'データ駆動型意思決定',
        description: 'ブランドの戦略最適化、ROI向上、持続的成長を支援する深層的な販売データ分析を提供します。'
      }
    },
    opportunity: {
      title: '見逃せない巨大なチャンス',
      subtitle: '中国のクロスボーダーEコマース市場は前例のない速度で成長しています。なぜ今がこのブルーオーシャンに参入する最適な時期なのかをデータで示します。',
      stats: {
        growth: {
          title: 'クロスボーダーEコマース輸入年間成長率',
          description: '2015-2022年CAGR、他の消費チャネルを大幅に上回る巨大な成長ポテンシャル。'
        },
        consumers: {
          title: 'プレミアム輸入消費者',
          description: 'Tmall Globalは1億人以上の高購買力ユーザーにサービスを提供し、彼らは積極的にグローバル品質製品を求めています。'
        },
        platform: {
          title: '市場リーディングプラットフォーム',
          description: 'Tmall Globalは市場シェアをリードし続け、海外ブランドの中国参入において最も好まれ信頼されるチャネルです。'
        }
      }
    },
    strategy: {
      title: 'Tmall Globalを活用してあなたの成功の扉を開く方法',
      partnership: 'Tmall Global × UCYX',
      description1: '私たちはTmall Globalを単なる販売チャネルではなく、あなたのブランドの成功のための強力なエンジンとして捉えています。これは中国に会社を設立することなく、数億人の消費者に直接リーチできる公式プラットフォームです。',
      description2: '私たちの専門チームは、成熟した保税倉庫システム、効率的な物流、消費者が信頼する真正品保証システムを活用して、中国でのシームレスで効率的なビジネス運営を創造するお手伝いをします。',
      benefits: {
        noCompany: '中国に会社を設立する必要がなく、参入障壁が下がる',
        warehouse: '真正性と効率的な物流を確保する公式保税倉庫システム',
        consumers: '1億人以上の高購買力プレミアム消費者への直接アクセス',
        trust: '完全な消費者信頼と保証メカニズム'
      }
    },
    process: {
      title: 'あなたのために舗装する成功への道',
      subtitle: '複雑なプロセスを明確で制御可能なステップに簡素化し、成功まで全行程をサポートします。',
      steps: {
        assessment: {
          title: '初期評価',
          description: 'あなたのブランドポジショニング、製品の優位性、ビジネス目標の深い理解。'
        },
        customization: {
          title: 'ソリューションカスタマイゼーション',
          description: 'あなたのブランドのための独占的な参入、運営、マーケティングソリューションをカスタマイズします。'
        },
        officialEntry: {
          title: '公式参入',
          description: 'すべての複雑な申請資料とプロセスを私たちが処理し、時間を節約します。'
        },
        storeLaunch: {
          title: 'ストアローンチ',
          description: 'あなたのTmall Globalストアを専門的にデザインしローンチし、優れたブランドイメージを創造します。'
        },
        continuousGrowth: {
          title: '継続的成長',
          description: '精密な運営とマーケティングにより、売上とブランド影響力の二重成長を達成します。'
        }
      }
    },
    pricing: {
      title: 'あなたのブランドのためのカスタマイズされたパートナーシッププラン',
      subtitle: '柔軟なパートナーシップモデルを提供 - どの開発段階にいても、最適なプランを見つけることができます。',
      plans: {
        basic: {
          name: 'ベーシック',
          description: '迅速かつコスト効率よくプラットフォーム参入を完了し、運営を独立して管理したいブランドに適しています。',
          features: {
            assessment: '参入資格評価',
            guidance: '完全な参入ガイダンス',
            setup: 'ベーシックストア設定'
          },
          cta: 'プラン詳細を見る'
        },
        growth: {
          name: 'グロース',
          recommended: '推奨プラン',
          description: '中国市場での安定した成長を求めるブランド向けに設計され、コア日常運営サービスを含みます。',
          features: {
            basicIncluded: 'すべてのベーシックサービスを含む',
            operations: '日常ストア運営とメンテナンス',
            customerService: 'カスタマーサービス管理',
            reports: '月次データレポート'
          },
          cta: '見積もりのお問い合わせ'
        },
        flagship: {
          name: 'フラッグシップ',
          description: '中国市場でのあなたのブランドのポテンシャルとインパクトを最大化するワンストップフルマネージドサービス。',
          features: {
            growthIncluded: 'すべてのグロースサービスを含む',
            marketing: '統合デジタルマーケティング戦略と実行',
            kol: 'KOLとコンテンツマーケティング',
            analytics: '深層データ分析と戦略コンサルティング'
          },
          cta: 'プラン詳細を見る'
        }
      }
    }
  }
};

// Korean translations
const koTranslations = {
  common: {
    loading: '로딩 중...',
    error: '오류',
    success: '성공',
    cancel: '취소',
    confirm: '확인',
    save: '저장',
    delete: '삭제',
    edit: '편집',
    back: '뒤로',
    next: '다음',
    previous: '이전',
    close: '닫기',
    learnMore: '자세히 보기',
    getStarted: '시작하기',
    contactUs: '문의하기',
    submit: '제출',
    submitting: '제출 중...',
    thankYou: '감사합니다! 24시간 이내에 연락드리겠습니다.',
    createFuture: '우리와 함께 미래를 창조하세요',
    connectVision: '우리는 비전 있는 브랜드, 투자자, 파트너와의 연결을 기대합니다. 우리의 철학이 여러분과 공감한다면 언제든지 연락해 주세요.',
    companyAddress: 'UCYX Ltd.\n홍콩 침사추이 채텀로드 사우스 61-65호 캐피탈 빌딩 2층 S068호'
  },
  header: {
    brand: 'UCYX',
    services: '서비스',
    whoWeServe: '서비스 대상',
    successStories: '성공 사례',
    methodology: '방법론',
    novochoice: 'Novochoice',
    startYourGrowthJourney: '성장 여정 시작하기'
  },
  navigation: {
    sellToChina: '중국 판매',
    sellToWorld: '글로벌 판매',
    partnershipOpportunities: '파트너십 기회',
    startFreeConsultation: '무료 상담 시작',
    visitOurBlog: '블로그 보기',
    learnMoreAboutMethodology: '방법론 자세히 보기',
    viewSellToChina: '중국 판매 보기',
    backToHome: '홈으로 돌아가기'
  },
  hero: {
    title: '당신의 특별함을 발견하세요',
    subtitle: '데이터 기반 크로스보더 커머스 솔루션으로 비즈니스를 변화시키세요',
    description: 'UCYX는 독점적인 AI 도구와 검증된 4단계 방법론을 통해 글로벌 브랜드의 기하급수적 성장을 지원합니다. 시장 인텔리전스부터 판매 최적화까지, 데이터를 수익으로 전환합니다.',
    cta: '성장 여정 시작하기',
    watchDemo: '방법론 발견하기',
    dataInsights: '데이터 기반 인사이트',
    dataDescription: '우리가 제안하는 모든 전략적 권장사항은 대규모 데이터셋의 딥러닝과 분석에 기반을 두고 있습니다.',
    categories: '핵심 이커머스 카테고리',
    products: '활성 제품',
    keywords: '업계 키워드',
    reviews: '소비자 리뷰'
  },
  services: {
    title: '우리의 서비스',
    subtitle: '글로벌 이커머스 성공을 위한 종합 솔루션',
    extraordinaryGrowth: '탁월한 성장',
    cta: '우리가 어떻게 성장을 가속화할 수 있는지 발견하세요',
    start: {
      title: '시작',
      subtitle: '여정 시작하기',
      sellToChina: {
        title: '중국 판매',
        description: '10억 소비자에게 도달'
      },
      sellToWorld: {
        title: '세계 판매',
        description: '글로벌 시장 확장'
      }
    },
    choice: {
      title: '선택',
      subtitle: '스마트한 의사결정',
      novochoice: {
        title: 'Novochoice',
        description: 'AI 기반 시장 인텔리전스'
      }
    },
    sell: {
      title: '판매',
      subtitle: '성장 추진',
      sellToWorld: {
        title: '세계 판매',
        description: '글로벌 시장 확장'
      },
      uccopilot: {
        title: 'UCcopilot 서비스',
        description: 'AI 기반 판매 최적화'
      },
      ucMmm: {
        title: 'UC-MMM',
        description: '마케팅 ROI 최대화'
      }
    },
    manage: {
      title: '관리',
      subtitle: '운영 규모 확장',
      ucMmm: {
        title: 'UC-MMM',
        description: '마케팅 ROI 최대화'
      }
    },
    grid: {
      marketIntelligence: {
        title: '시장 인텔리전스',
        description: '포괄적인 시장 분석과 경쟁사 조사를 통해 미개발 기회와 시장 공백을 식별합니다.',
        tag1: '시장 조사',
        tag2: '경쟁 분석'
      },
      productStrategy: {
        title: '제품 전략',
        description: '전략적 제품 개발과 포지셔닝을 통해 타겟 고객에게 공감하는 매력적인 가치 제안을 창조합니다.',
        tag1: '제품 개발',
        tag2: '가치 제안'
      },
      brandDevelopment: {
        title: '브랜드 개발',
        description: '완전한 브랜드 아이덴티티 창조와 메시징 전략을 통해 시장에서 강력하고 기억에 남는 존재감을 확립합니다.',
        tag1: '브랜드 아이덴티티',
        tag2: '브랜드 메시징'
      },
      digitalMarketing: {
        title: '디지털 마케팅',
        description: '모든 플랫폼에서 트래픽, 참여, 전환을 촉진하도록 설계된 멀티 채널 디지털 마케팅 캠페인.',
        tag1: '디지털 캠페인',
        tag2: '멀티 채널'
      },
      salesOptimization: {
        title: '판매 최적화',
        description: '고급 판매 퍼널 최적화와 전환율 개선을 통해 모든 방문자로부터의 수익을 최대화합니다.',
        tag1: '전환율',
        tag2: '판매 퍼널'
      },
      growthAnalytics: {
        title: '성장 분석',
        description: '지속적인 성능 모니터링과 데이터 기반 인사이트를 통해 효율적이고 지속 가능하게 비즈니스를 확장합니다.',
        tag1: '성능 지표',
        tag2: '데이터 분석'
      }
    }
  },
  whoWeServe: {
    title: '서비스 대상',
    subtitle: '우리는 확장을 추구하는 기존 브랜드든 훌륭한 제품을 가진 스타트업이든 글로벌 시장 개척자와 파트너십을 맺습니다.',
    establishedBrands: '기존 브랜드',
    establishedBrandsDescription: '성공적인 제품과 안정적인 비즈니스를 보유하고 있지만 새로운 시장에 진입하여 다음 성장 곡선을 찾고자 하는 기업.',
    startupsWithIdeas: '훌륭한 아이디어를 가진 스타트업',
    startupsWithIdeasDescription: '뛰어난 아이디어를 창조했지만 이를 제품과 브랜드로 전환하는 접근법이 부족한 기업.',
    traditionalManufacture: '전통 제조업',
    traditionalManufactureDescription: '훌륭한 제품을 보유하고 있지만 Amazon이나 Shopify 같은 플랫폼에서의 시장 진입 전략과 브랜드 마케팅 경험이 부족한 기업.'
  },
  successStories: {
    title: '성공 사례',
    subtitle: '실제 비즈니스의 실제 결과',
    description: '우리의 클라이언트들은 AI 기반 접근법과 검증된 방법론을 통해 측정 가능한 성장을 달성하고 있습니다.',
    provenResults: '검증된 결과',
    revenueGrowth: '수익 성장',
    revenueImpact: '수익 영향',
    marketExpansion: '시장 확장',
    customerAcquisition: '고객 획득',
    roi: 'ROI 개선',
    verifiedSuccess: '검증된 성공',
    cases: {
      skincare: {
        brand: '북미 스킨케어 브랜드',
        title: '아시아 시장 처음부터 진입',
        description: 'Novochoice™ 데이터 플랫폼을 사용하여 중국 이커머스 플랫폼에서 높은 잠재력의 틈새 시장을 식별하고, UCselection™ 서비스로 아시아 소비자 선호도에 맞춘 가치 제안 정의를 도와 첫 달 판매 예측을 300% 초과달성했습니다.',
        metric: '+300%',
        metricLabel: '첫 달 판매 목표',
        industry: '뷰티 & 퍼스널케어',
        region: '아시아태평양',
        duration: '1개월'
      },
      smartHome: {
        brand: '유럽 스마트홈 브랜드',
        title: '리뷰 인사이트로 사용자 충성도 재구성',
        description: '상위 10개 베스트셀러 상품 중 5천 개의 고객 리뷰를 분석하여 핵심 제품 개선 기회를 발견하고 판매 자료를 최적화하여 6개월 내에 재구매율을 50% 향상시켰습니다.',
        metric: '+50%',
        metricLabel: '재구매율',
        industry: '스마트홈 기술',
        region: '유럽',
        duration: '6개월'
      },
      networkStorage: {
        brand: '중국 기반 네트워크 스토리지 브랜드',
        title: 'Amazon 신제품 출시 최적화',
        description: 'UCcopilot™을 활용한 지능형 광고 캠페인 최적화로 Amazon US에서 신제품의 클릭 전환율을 75% 향상시키고 광고 예산을 늘리지 않고 ACoS를 40% 감소시켰습니다.',
        metric: '-40%',
        metricLabel: '광고 판매 비용(ACoS)',
        industry: '기술 하드웨어',
        region: '북미',
        duration: '3개월'
      },
      stationery: {
        brand: '일본 디자이너 문구 브랜드',
        title: 'Shopify DTC 판매 예측',
        description: 'UCforecast™ 모델로 북미 시장을 타겟으로 한 신제품 라인의 정확한 판매 예측을 제공했습니다. 이는 재고 전략 최적화에 도움이 되어 초기 재고의 95% 판매율을 달성했습니다.',
        metric: '95%',
        metricLabel: '초기 재고 판매율',
        industry: '소비재',
        region: '북미',
        duration: '4개월'
      },
      outdoorGear: {
        brand: '호주 아웃도어 기어 브랜드',
        title: '크로스 플랫폼 확장 전략',
        description: '포괄적인 시장 분석과 전략적 플랫폼 선택을 통해 단일 마켓플레이스에서 3개국의 5개 다른 플랫폼으로 확장을 도와 8개월 내에 280% 수익 성장을 달성했습니다.',
        metric: '+280%',
        metricLabel: '수익 성장',
        industry: '아웃도어 & 레크리에이션',
        region: '다중 지역',
        duration: '8개월'
      },
      petCare: {
        brand: '캐나다 펫케어 브랜드',
        title: 'AI 기반 제품 개발',
        description: '소비자 감정 분석과 경쟁 인텔리전스를 사용하여 펫 웰니스 시장의 공백을 식별하고 3개의 새로운 제품 라인 개발을 안내하여 시장 수용성에서 89% 성공률을 달성했습니다.',
        metric: '89%',
        metricLabel: '시장 수용률',
        industry: '펫케어 & 웰니스',
        region: '북미',
        duration: '5개월'
      }
    }
  },
  methodology: {
    title: 'UCYX 가치 성장 방법론™',
    subtitle: '검증된 4단계 기하급수적 성장 프레임워크',
    description: '다년간의 크로스보더 이커머스 전문성을 바탕으로 독점 AI 도구로 구동되는 우리의 방법론은 일관되고 측정 가능한 결과를 제공합니다.',
    steps: {
      analyze: {
        title: '분석',
        description: 'Novochoice™ AI 플랫폼을 사용한 깊이 있는 시장 인텔리전스와 경쟁사 분석'
      },
      strategize: {
        title: '전략화',
        description: 'UCselection™과 시장 인사이트를 통한 데이터 기반 전략 개발'
      },
      execute: {
        title: '실행',
        description: 'UCcopilot™ 최적화와 실시간 모니터링을 통한 원활한 구현'
      },
      optimize: {
        title: '최적화',
        description: 'UCforecast™ 예측 분석과 성능 조정을 통한 지속적 개선'
      }
    }
  },
  ai: {
    title: 'Novochoice™를 만나보세요',
    subtitle: '당신의 AI 기반 소비자 인사이트 파트너',
    description: '우리의 독점 AI 플랫폼은 고객 피드백을 실행 가능한 비즈니스 인텔리전스로 변환하여, 고객이 진정으로 원하는 것과 경쟁사보다 더 나은 서비스 제공 방법을 이해하도록 도와드립니다.',
    accessPlatform: 'Novochoice 플랫폼 접근',
    badgeText: 'AI 기반 소비자 인텔리전스',
    coreCapabilities: '핵심 역량',
    capabilities: {
      globalMarkets: '모든 주요 이커머스 플랫폼의 고객 피드백 분석',
      nicheDiscovery: '경쟁 벤치마킹을 통한 제품 특성 중요도 발견',
      reviewAnalysis: '숨겨진 니즈를 발견하는 심층 고객 감정 분석',
      predictiveForecasting: '특성 영향 점수를 통한 구매 결정 모델링'
    },
    dataPoints: {
      marketDatasets: '리뷰 데이터셋',
      nicheMarkets: '제품 카테고리',
      successRate: '인사이트 정확도',
      activeInsights: '활성 인사이트'
    },
    dashboard: {
      title: 'NOVOCHOICE 대시보드',
      scanning: '고객 리뷰 분석 중...',
      processing: '240만 건의 고객 피드백 처리 중...',
      analyzing: '⟨ 특성을 고객 니즈에 매핑 중... ⟩',
      analysisComplete: '소비자 인사이트 분석 완료',
      opportunitiesFound: '147개 개선 기회 식별',
      reviewAnalysisComplete: '숨겨진 니즈 분석: 23개 미충족 욕구 발견',
      liveInsights: '실시간 소비자 인사이트',
      score: '영향 점수',
      aiModels: 'AI 모델',
      accuracy: '정확도',
      monitoring: '모니터링',
      active: '활성'
    },
    features: {
      intelligence: {
        title: '소비자 인텔리전스',
        description: '고객 피드백을 전략적 우위로 변환',
        details: '고객에게 가장 중요한 특성과 경쟁사와의 비교 상황 이해'
      },
      optimization: {
        title: '특성 최적화',
        description: '고객 영향을 기반으로 한 제품 개선 우선순위 설정',
        details: '구매 결정을 촉진하는 고영향 특성에 리소스 집중'
      },
      forecasting: {
        title: '숨겨진 니즈 발견',
        description: '표현되지 않은 고객 욕구와 시장 공백 발견',
        details: '고급 감정 분석을 통해 경쟁사가 아직 발견하지 못한 기회 식별'
      },
      automation: {
        title: '경쟁 벤치마킹',
        description: '리드하는 영역과 따라잡아야 할 영역을 정확히 파악',
        details: '실제 고객 피드백을 기반으로 한 시장 리더와의 정밀한 특성별 비교'
      }
    }
  },
  cta: {
    title: '글로벌 이커머스 변화 준비가 되셨나요？',
    subtitle: 'UCYX와 함께 기하급수적 성장을 달성하는 수백 개 브랜드에 합류하세요',
    description: '무료 상담을 시작하고 우리의 AI 기반 방법론이 어떻게 비즈니스 성장을 가속화할 수 있는지 발견하세요.',
    button: '성장 여정 시작하기',
    features: {
      consultation: '무료 전략 상담',
      analysis: '시장 기회 분석',
      roadmap: '맞춤형 성장 로드맵'
    },
    form: {
      name: '성함',
      email: 'your@email.com',
      message: '비즈니스 목표에 대해 알려주세요...'
    }
  },
  footer: {
    tagline: 'AI 기반 이커머스',
    description: '데이터 기반 인사이트와 AI 기반 전략을 통해 글로벌 브랜드의 크로스보더 이커머스에서 기하급수적 성장을 돕는 미래 지향적 컨설팅 회사.',
    services: '서비스',
    company: '회사',
    resources: '리소스',
    about: 'UCYX 소개',
    partnership: '파트너십',
    blog: '블로그',
    contact: '문의하기',
    privacyPolicy: '개인정보 정책',
    termsOfService: '서비스 약관',
    cookiePolicy: '쿠키 정책',
    copyright: '© 2025 UCYX. 모든 권리 보유. AI 기반 글로벌 이커머스 컨설팅.',
    language: '언어'
  },
  about: {
    title: 'UCYX 소개',
    subtitle: 'AI 기반 글로벌 이커머스 성장의 선구자',
    vision: {
      title: '우리의 비전',
      description: '모든 브랜드에게 글로벌 이커머스 생태계에서 성공하는 데 필요한 도구와 인사이트를 제공하여, 모든 규모의 비즈니스에게 크로스보더 커머스를 접근 가능하고 수익성 있으며 지속 가능하게 만드는 것입니다.'
    },
    mission: {
      title: '우리의 사명',
      description: '최첨단 AI 기술, 깊은 시장 인텔리전스, 측정 가능한 결과를 제공하는 검증된 성장 전략을 통해 야심찬 브랜드와 글로벌 시장 사이의 격차를 메웁니다.'
    },
    team: {
      title: '우리의 엘리트 팀',
      subtitle: '선도적인 기술 회사 출신의 업계 베테랑',
      description: '우리 팀은 선도적인 글로벌 기술 회사에서 풍부한 경험을 가진 숙련된 전문가들로 구성되어 있으며, 이커머스, AI, 데이터 사이언스, 국제 비즈니스에 대한 깊은 전문 지식을 결집하고 있습니다.',
      experience: {
        title: '종합 전문성',
        years: '50+년',
        description: '이커머스, AI, 크로스보더 비즈니스에서의 집합적 경험'
      },
      leaders: {
        title: '업계 리더',
        description: '알리바바, 아마존, 구글, 마이크로소프트, 텐센트 등 선도적인 기술 회사와 업계 선구자들의 전 임원진'
      }
    },
    locations: {
      title: '글로벌 팀 분포',
      subtitle: '국제 전문성 네트워크',
      description: '우리의 다양한 팀은 주요 글로벌 시장에 걸쳐 있으며, 모든 프로젝트에 현지 인사이트와 국제적 관점을 가져다줍니다.',
      tagline: '글로벌하게 연결되고 로컬하게 행동 - 어디에 있든 세계 수준의 전문성을 제공',
      offices: {
        hongkong: {
          city: '홍콩',
          country: '중국',
          description: '아시아태평양 본부 및 금융 허브'
        },
        shenzhen: {
          city: '선전',
          country: '중국',
          description: '기술 혁신 센터 및 제조 기지'
        },
        taipei: {
          city: '타이베이',
          country: '대만',
          description: '지역 운영 및 전략적 파트너십'
        },
        usa: {
          city: '미국',
          country: '북미',
          description: '전략적 시장 확장 기지'
        }
      }
    },
    values: {
      title: '우리의 핵심 가치',
      innovation: {
        title: '혁신 우선',
        description: '최첨단 AI와 데이터 사이언스를 활용하여 시장 트렌드를 앞서갑니다'
      },
      results: {
        title: '결과 중심',
        description: '우리가 개발하는 모든 전략은 측정 가능하고 지속 가능한 성장을 제공하도록 설계됩니다'
      },
      partnership: {
        title: '진정한 파트너십',
        description: '우리는 귀하의 팀의 연장선으로 일하며 장기적인 성공에 투자합니다'
      },
      excellence: {
        title: '운영 우수성',
        description: '전략에서 실행까지 모든 일에서 최고 수준을 유지합니다'
      }
    },
    cta: {
      title: '우리와 파트너십을 맺을 준비가 되셨나요？',
      subtitle: 'UCYX와 함께 글로벌 이커머스 존재감을 변화시키고 있는 브랜드들에 합류하세요',
      button: '성장 여정 시작하기'
    }
  },
  uccopilot: {
    hero: {
      badge: 'AI 기반 이커머스 어시스턴트',
      title: 'UCcopilot™',
      subtitle: '당신의 지능형 이커머스 성장 파트너',
      description: '고급 AI 기반 플랫폼으로 전체 이커머스 운영을 자동화하고 최적화합니다. 재고 관리부터 고객 서비스까지, UCcopilot이 모든 것을 처리하여 비즈니스 성장에 집중할 수 있게 합니다.',
      cta: '무료 체험 시작',
      heroFeatures: {
        hassleFreee: '번거로움 없는 서비스',
        deepPartnership: '깊은 파트너십',
        endToEndStrategy: '엔드투엔드 전략',
        dedicatedSupport: '전담 지원'
      }
    },
    features: {
      title: 'UCcopilot을 선택하는 이유',
      zeroStress: {
        title: '제로 스트레스 설정',
        description: '직관적인 온보딩 프로세스로 몇 분 안에 시작하세요. 기술적 전문 지식이 필요하지 않습니다.',
        items: {
          setup: '완전한 플랫폼 설정',
          integration: '통합 관리',
          configuration: '기술 구성',
          testing: '품질 보증 테스트'
        }
      },
      support: {
        title: '24/7 사전 지원',
        description: '우리의 AI가 비즈니스를 24시간 모니터링하고 필요할 때 즉시 지원을 제공합니다.',
        items: {
          monitoring: '지속적 모니터링',
          resolution: '사전 문제 해결',
          optimization: '성능 최적화',
          emergency: '긴급 대응 팀'
        }
      },
      automation: {
        title: '자동화 운영',
        description: 'AI가 일상적인 작업을 처리하는 동안 전략적 결정과 비즈니스 성장에 집중하세요.',
        items: {
          inventory: '재고 자동화',
          processing: '주문 처리',
          communications: '고객 커뮤니케이션',
          analytics: '보고 및 분석'
        }
      }
    },
    growthCta: {
      title: '번거로움 없는 성장 준비가 되셨나요?',
      description: 'UCcopilot™의 진정한 파트너십의 힘을 경험하세요. 복잡함은 저희가 처리하고, 당신은 브랜드 구축과 비즈니스 성장에 집중하세요.',
      primaryButton: '파트너십 시작',
      secondaryButton: '상담 예약'
    },
    cta: {
      title: '전문가와 상담',
      description: '이커머스 비즈니스 혁신을 준비하셨나요? 우리 팀이 시작을 도와드립니다.',
      button: '상담 예약'
    }
  },
  ucMmm: {
    hero: {
      badge: '고급 분석 도구',
      title: 'UC-MMM™',
      subtitle: '이커머스 우수 마케팅 믹스 모델링',
      description: 'Amazon과 자체 구축 웹사이트 플랫폼을 위해 특별히 설계된 고급 다차원 분석 도구입니다. 데이터 기반 인사이트를 통해 마케팅 투자를 최적화하고 ROI를 최대화하세요.',
      platforms: {
        amazon: 'Amazon 최적화',
        shopify: 'Shopify 분석',
        website: '웹사이트 추적',
        roi: 'ROI 최적화'
      }
    },
    features: {
      title: '핵심 기능',
      dataIntegration: {
        title: '데이터 통합',
        description: '모든 마케팅 채널과 판매 데이터를 원활하게 연결하여 포괄적인 분석을 수행합니다.',
        items: {
          advertising: '광고 지출 데이터',
          sales: '판매 및 수익 지표',
          seasonal: '계절적 트렌드',
          competitive: '경쟁 인텔리전스'
        }
      },
      statisticalAnalysis: {
        title: '통계 분석',
        description: '각 마케팅 채널의 실제 영향을 이해하기 위한 고급 통계 모델링.',
        items: {
          regression: '회귀 분석',
          attribution: '어트리뷰션 모델링',
          incremental: '증분 영향',
          saturation: '미디어 포화 곡선'
        }
      },
      optimization: {
        title: '최적화',
        description: 'AI 기반 권장사항으로 마케팅 믹스를 최적화하고 ROI를 최대화합니다.',
        items: {
          budget: '예산 재배분',
          performance: '채널 성과',
          scenario: '시나리오 계획',
          forecasting: 'ROI 예측'
        }
      }
    },
    howItWorks: {
      title: 'UC-MMM™ 작동 방식',
      description: '우리의 간소화된 프로세스는 마케팅 데이터를 실행 가능한 인사이트로 변환합니다. 단 4개의 간단한 단계로.',
      dataCollection: {
        title: '데이터 수집',
        description: '모든 마케팅 터치포인트와 판매 채널에서 데이터를 수집합니다.'
      },
      statisticalModeling: {
        title: '통계 모델링',
        description: '마케팅 효과를 모델링하기 위한 고급 통계 기법을 적용합니다.'
      },
      insightGeneration: {
        title: '인사이트 생성',
        description: '채널 성능과 최적화 기회에 대한 실행 가능한 인사이트를 생성합니다.'
      },
      continuousOptimization: {
        title: '지속적 최적화',
        description: '실시간 데이터를 기반으로 마케팅 전략을 지속적으로 개선하고 최적화합니다.'
      }
    },
    cta: {
      title: '마케팅 믹스 최적화 준비가 되셨나요?',
      description: 'UC-MMM™의 데이터 기반 인사이트로 마케팅 전략을 혁신하세요. 오늘 분석을 시작하고 성장의 새로운 기회를 발견하세요.',
      button: '분석 시작'
    }
  },
  sellToWorld: {
    badge: '글로벌 이커머스 확장',
    hero: {
      title: '비즈니스를 글로벌 시장으로 확장',
      subtitle: '국제 이커머스 성공을 위한 종합 솔루션',
      description: '검증된 전략, 고급 도구, 전문가 가이드를 통해 로컬 비즈니스를 글로벌 강력 브랜드로 변화시킵니다.',
      cta: '글로벌 확장 시작'
    },
    features: {
      globalAccess: '글로벌 시장 접근',
      strategies: '검증된 성장 전략',
      endToEndSupport: '엔드투엔드 지원'
    },
    platforms: {
      title: '멀티플랫폼 우수성',
      subtitle: '선호하는 플랫폼을 선택하거나 브랜드에 가장 적합한 전략을 결정하는 데 도움을 드립니다'
    },
    services: {
      amazon: {
        title: 'Amazon 글로벌 판매',
        description: '세계 최대 마켓플레이스를 활용하여 전 세계 수백만 고객에게 도달',
        activeUsers: '3억+ 활성 사용자',
        countries: '190+ 국가',
        fba: 'FBA 배송',
        prime: 'Prime 통합',
        whatWeProvide: '제공 서비스：',
        services: {
          setup: '계정 설정',
          listing: '제품 리스팅 최적화',
          ppc: 'PPC 광고 관리',
          inventory: '재고 관리',
          analytics: '성과 분석'
        }
      },
      shopify: {
        title: 'Shopify 스토어 개발',
        description: '자체 디지털 존재감과 브랜드 권위 구축',
        design: '맞춤 디자인',
        seo: 'SEO 최적화',
        mobile: '모바일 반응형',
        analytics: '분석 통합',
        whatWeProvide: '제공 서비스：',
        services: {
          design: '스토어 디자인 및 개발',
          seoStrategy: 'SEO 전략 구현',
          content: '콘텐츠 생성 및 관리',
          social: '소셜 미디어 통합',
          conversion: '전환율 최적화'
        }
      },
      ucyx: {
        title: 'UCYX 파트너십 프로그램',
        description: '전용 UCYX 스토어를 통해 귀하의 제품을 판매',
        credibility: '확립된 UCYX 브랜드 신뢰성으로 즉시 시장 진입',
        investment: '낮은 초기 투자와 위험 감소',
        templates: '최적화된 스토어 템플릿과 검증된 전략에 대한 액세스',
        setup: '스토어 설정',
        optimization: '제품 최적화',
        management: '주문 관리',
        service: '고객 서비스',
        campaigns: '마케팅 캠페인',
        reporting: '성과 보고',
        advantage: '전체 고객 여정에서 브랜드 정체성 유지'
      }
    },
    serviceModels: {
      title: '서비스 모델',
      subtitle: '비즈니스 요구사항과 성장 단계에 가장 적합한 파트너십 모델을 선택하세요',
      fullService: {
        title: '풀서비스 운영',
        subtitle: '브랜드를 위한 완전한 엔드투엔드 이커머스 관리',
        forBrands: '기존 브랜드용',
        keyBenefits: '주요 혜택',
        benefits: {
          strategy: '고유한 가치 제안을 기반으로 한 맞춤 전략 개발',
          control: '고객 관계의 완전한 통제권과 소유권',
          dedicated: '브랜드 전용 팀과 리소스'
        },
        serviceIncludes: '서비스 포함：',
        services: {
          consulting: '전략 컨설팅',
          brand: '브랜드 개발',
          platform: '플랫폼 관리',
          marketing: '마케팅 및 광고',
          analytics: '분석 및 최적화',
          support: '지속적인 지원'
        }
      },
      partnership: {
        title: 'UCYX 파트너십 프로그램',
        subtitle: '신규 브랜드에 추천',
        serviceIncludes: '서비스 포함：',
        benefits: {
          resources: '공유 마케팅 리소스 및 교차 프로모션 기회'
        },
        services: {
          setup: '스토어 설정',
          optimization: '제품 최적화',
          management: '주문 관리',
          service: '고객 서비스',
          campaigns: '마케팅 캠페인',
          reporting: '성과 보고'
        }
      }
    },
    stats: {
      markets: '글로벌 시장',
      growth: '평균 수익 성장',
      success: '클라이언트 성공률',
      support: '지원 가능'
    },
    cta: {
      title: '글로벌 확장 시작',
      subtitle: '비즈니스에 대해 알려주시면 글로벌 성공을 위한 맞춤형 성장 전략을 만들어드립니다'
    },
    form: {
      title: '글로벌 확장 시작하기',
      subtitle: '비즈니스와 목표에 대해 알려주세요',
      fields: {
        name: '이름',
        email: '이메일',
        companyName: '회사명',
        website: '웹사이트',
        productCategory: '제품 카테고리',
        mainObjective: '주요 목표',
        serviceType: '필요한 서비스 유형',
        goals: '비즈니스 목표',
        platforms: '현재 플랫폼',
        revenue: '월 매출 범위',
        markets: '타겟 시장',
        fullName: '성명',
        phone: '전화번호',
        message: '추가 정보'
      },
      placeholders: {
        companyName: '회사명을 입력하세요',
        website: 'https://yourwebsite.com',
        productCategory: '주요 제품 카테고리를 선택하세요',
        fullName: '성명을 입력하세요',
        email: 'your.email@company.com',
        phone: '전화번호를 입력하세요',
        message: '비즈니스 목표와 과제에 대해 자세히 알려주세요...',
        revenue: '현재 월 매출 범위를 선택하세요',
        markets: '확장 대상 시장을 선택하세요',
        additionalInfo: '비즈니스 목표, 과제 또는 구체적인 요구사항에 대해 자세히 알려주세요...'
      },
      options: {
        categories: {
          electronics: '전자제품',
          fashion: '패션 및 의류',
          home: '홈 및 가든',
          health: '건강 및 미용',
          sports: '스포츠 및 아웃도어',
          automotive: '자동차 용품',
          books: '도서 및 미디어',
          toys: '장난감 및 게임',
          food: '식품 및 음료',
          other: '기타'
        },
        goals: {
          newMarkets: '새로운 국제 시장 진입',
          increaseSales: '기존 시장에서 매출 증가',
          optimizeOperations: '현재 운영 최적화',
          buildBrand: '글로벌 브랜드 인지도 구축'
        },
        platforms: {
          amazon: 'Amazon',
          ebay: 'eBay',
          shopify: 'Shopify',
          woocommerce: 'WooCommerce',
          magento: 'Magento',
          ownWebsite: '자체 웹사이트',
          physicalStores: '오프라인 매장만',
          none: '없음'
        },
        revenue: {
          under10k: '$10,000 미만',
          '10k-50k': '$10,000 - $50,000',
          '50k-100k': '$50,000 - $100,000',
          '100k-500k': '$100,000 - $500,000',
          '500k-1m': '$500,000 - $1,000,000',
          over1m: '$1,000,000 초과'
        },
        markets: {
          us: '미국',
          canada: '캐나다',
          uk: '영국',
          germany: '독일',
          france: '프랑스',
          japan: '일본',
          australia: '호주',
          other: '기타'
        },
        serviceTypes: {
          proxySales: '프록시 판매 (UCYX 스토어를 통한 판매)',
          fullService: '풀서비스 운영 (완전 관리)',
          consultation: '컨설팅 및 전략만',
          notSure: '확실하지 않음, 가이드 필요'
        }
      },
      buttons: {
        submit: '무료 상담 받기',
        startExpansion: '글로벌 확장 시작하기',
        submitting: '제출 중...'
      },
      success: {
        title: '감사합니다!',
        message: '정보를 받았으며 24시간 내에 글로벌 확장 전략에 대해 연락드리겠습니다.',
        backButton: '서비스로 돌아가기'
      }
    }
  },
  partnership: {
    hero: {
      badge: '파트너십 기회',
      title: 'UCYX와 파트너십',
      description: '글로벌 파트너 네트워크에 참여하여 디지털 마켓플레이스에서 비즈니스 성공을 도와주세요. 함께 성장과 혁신을 추진합시다.',
      features: {
        globalReach: {
          title: '글로벌 도달',
          description: '국제 시장과 국경 간 기회에 대한 접근'
        },
        growthFocus: {
          title: '성장 집중',
          description: '검증된 방법론과 AI 기반 확장 솔루션'
        },
        expertSupport: {
          title: '전문가 지원',
          description: '전담 파트너십 팀과 포괄적인 리소스'
        }
      }
    },
    form: {
      title: '파트너십 신청',
      subtitle: '귀하의 비즈니스와 파트너십 목표에 대해 알려주세요',
      cardTitle: '파트너십 정보 양식',
      sections: {
        company: '회사 정보',
        contact: '연락처 정보',
        partnership: '파트너십 세부사항',
        business: '비즈니스 정보',
        additional: '추가 정보'
      },
      fields: {
        companyName: '회사명',
        website: '웹사이트',
        industry: '업종',
        companySize: '회사 규모',
        headquarters: '본사',
        contactName: '연락처 이름',
        title: '직책',
        email: '이메일 주소',
        phone: '전화번호',
        partnershipType: '파트너십 유형',
        services: '관심 있는 서비스',
        regions: '대상 지역',
        timeline: '파트너십 일정',
        budget: '예상 예산 범위',
        currentRevenue: '현재 연간 수익',
        targetMarkets: '대상 시장',
        businessModel: '비즈니스 모델',
        existingPartners: '기존 파트너',
        relevantExperience: '관련 경험',
        expectations: '파트너십 기대사항',
        resources: '리소스 및 역량',
        additionalInfo: '추가 정보'
      },
      placeholders: {
        companyName: '귀하의 회사명',
        website: 'https://귀하의웹사이트.com',
        industry: '업종을 선택하세요',
        companySize: '회사 규모를 선택하세요',
        headquarters: '도시, 국가',
        contactName: '귀하의 성명',
        title: '귀하의 직책',
        email: '귀하의이메일@회사.com',
        phone: '귀하의 전화번호',
        partnershipType: '파트너십 유형을 선택하세요',
        timeline: '일정을 선택하세요',
        budget: '예산 범위를 선택하세요',
        currentRevenue: '수익 범위를 선택하세요',
        targetMarkets: '대상 시장과 고객 세그먼트를 설명하세요...',
        businessModel: '비즈니스 모델과 수익원을 설명하세요...',
        existingPartners: '기존 파트너십이나 전략적 제휴를 나열하세요...',
        relevantExperience: '업계에서의 관련 경험을 설명하세요...',
        expectations: '이 파트너십에 대한 기대사항은 무엇입니까?...',
        additionalInfo: '공유하고 싶은 추가 정보...',
        resources: '이 파트너십에 어떤 리소스, 역량, 전문성을 제공할 수 있습니까?'
      },
      options: {
        industries: {
          retail: '소매',
          manufacturing: '제조업',
          technology: '기술',
          consulting: '컨설팅',
          marketing: '마케팅 에이전시',
          logistics: '물류',
          other: '기타'
        },
        companySizes: {
          startup: '스타트업 (1-10명)',
          small: '소규모 (11-50명)',
          medium: '중간규모 (51-200명)',
          large: '대규모 (201-1000명)',
          enterprise: '기업급 (1000명 이상)'
        },
        partnershipTypes: {
          reseller: '리셀러 파트너',
          integration: '기술 통합',
          channel: '채널 파트너',
          strategic: '전략적 제휴',
          affiliate: '제휴 프로그램'
        },
        timelines: {
          immediate: '즉시 (30일 이내)',
          quarter: '이번 분기',
          halfYear: '6개월 이내',
          year: '1년 이내',
          exploring: '탐색 중'
        },
        budgets: {
          under50k: '$50,000 미만',
          '50k-100k': '$50,000 - $100,000',
          '100k-250k': '$100,000 - $250,000',
          '250k-500k': '$250,000 - $500,000',
          over500k: '$500,000 초과',
          tbd: '미정'
        },
        revenues: {
          under1m: '$1M 미만',
          '1m-5m': '$1M - $5M',
          '5m-10m': '$5M - $10M',
          '10m-50m': '$10M - $50M',
          over50m: '$50M 초과',
          confidential: '기밀'
        },
        services: {
          ucMmm: 'UC-MMM™ (마케팅 믹스 모델링)',
          sellToChina: '중국 판매 프로그램',
          sellToWorld: '세계 판매 프로그램',
          uccopilot: 'UCcopilot™ 서비스',
          aiAnalytics: 'AI 기반 분석',
          consulting: '전자상거래 컨설팅'
        },
        regions: {
          northAmerica: '북미',
          europe: '유럽',
          asiaPacific: '아시아 태평양',
          china: '중국',
          japan: '일본',
          southKorea: '한국',
          southeastAsia: '동남아시아',
          middleEast: '중동',
          africa: '아프리카',
          latinAmerica: '라틴 아메리카'
        }
      },
      labels: {
        servicesOfInterest: '관심 있는 서비스 (해당하는 모든 항목 선택)',
        targetRegions: '대상 지역 (해당하는 모든 항목 선택)'
      },
      buttons: {
        submit: '신청서 제출',
        submitting: '제출 중...'
      },
      success: {
        title: '신청서가 제출되었습니다!',
        message: 'UCYX와의 파트너십에 관심을 가져주셔서 감사합니다. 신청서를 검토한 후 48시간 내에 연락드리겠습니다.',
        backButton: '홈으로 돌아가기'
      }
    }
  },
  sellToChina: {
    hero: {
      title: '중국 시장 진입의 프리미어 파트너',
      subtitle: 'Tmall Global과의 파트너십으로 수억 명의 소비자에게 도달할 수 있도록 도와드립니다',
      description: '포괄적인 브랜드 입점, 스토어 관리, 디지털 마케팅, 데이터 분석 서비스를 제공하여 중국 시장 진입의 모든 장벽을 제거합니다.',
      cta: '무료 입점 상담 받기'
    },
    coreServices: {
      title: '핵심 서비스',
      brandEntry: {
        title: '신속한 브랜드 입점',
        description: '자격 심사부터 스토어 설정까지 전문적인 가이드를 제공하여 효율적이고 걱정 없는 시장 진입을 보장합니다.'
      },
      storeManagement: {
        title: '정밀한 스토어 운영',
        description: '일상 운영, 고객 서비스, 제품 및 재고 관리 - 모든 것을 처리하여 브랜드 개발에 집중할 수 있도록 합니다.'
      },
      digitalMarketing: {
        title: '통합 디지털 마케팅',
        description: '중국 시장 특성에 맞춰 맞춤 제작된 콘텐츠 마케팅, 소셜 미디어 프로모션, KOL 파트너십 등을 제공합니다.'
      },
      dataAnalytics: {
        title: '데이터 기반 의사결정',
        description: '브랜드가 전략을 최적화하고 ROI를 개선하며 지속적인 성장을 달성할 수 있도록 심층적인 판매 데이터 분석을 제공합니다.'
      }
    },
    opportunity: {
      title: '놓칠 수 없는 거대한 기회',
      subtitle: '중국의 크로스보더 이커머스 시장이 전례 없는 속도로 성장하고 있습니다. 지금이 이 블루오션에 진입하기 가장 좋은 시기인 이유를 데이터로 보여드리겠습니다.',
      stats: {
        growth: {
          title: '크로스보더 이커머스 수입 연간 성장률',
          description: '2015-2022 CAGR, 다른 소비자 채널을 훨씬 뛰어넘는 거대한 성장 잠재력.'
        },
        consumers: {
          title: '프리미엄 수입 소비자',
          description: 'Tmall Global은 글로벌 품질 제품을 적극적으로 찾는 1억 명 이상의 고구매력 사용자에게 서비스를 제공합니다.'
        },
        platform: {
          title: '시장 선도 플랫폼',
          description: 'Tmall Global은 지속적으로 시장 점유율을 선도하며, 해외 브랜드가 중국에 진입하는 데 선호되고 가장 신뢰받는 채널입니다.'
        }
      }
    },
    strategy: {
      title: 'Tmall Global을 활용하여 성공의 문을 여는 방법',
      partnership: 'Tmall Global × UCYX',
      description1: '우리는 Tmall Global을 단순한 판매 채널이 아닌 브랜드 성공을 위한 강력한 엔진으로 봅니다. 중국에 회사를 설립하지 않고도 수억 명의 소비자에게 직접 도달할 수 있는 공식 플랫폼입니다.',
      description2: '우리의 전문 팀이 이 플랫폼을 탐색하는 데 도움을 드리며, 성숙한 보세창고 시스템, 효율적인 물류, 소비자가 신뢰하는 정품 보장 시스템을 활용하여 중국에서 원활하고 효율적인 비즈니스 운영을 만들어드립니다.',
      benefits: {
        noCompany: '중국에 회사 설립 불필요, 진입 장벽 낮춤',
        warehouse: '정품성과 효율적인 물류를 보장하는 공식 보세창고 시스템',
        consumers: '1억 명 이상의 고구매력 프리미엄 소비자에게 직접 접근',
        trust: '완전한 소비자 신뢰 및 보장 메커니즘'
      }
    },
    process: {
      title: '성공을 위해 우리가 포장하는 길',
      subtitle: '복잡한 프로세스를 명확하고 제어 가능한 단계로 단순화하여 성공할 때까지 전 과정을 함께합니다.',
      steps: {
        assessment: {
          title: '초기 평가',
          description: '브랜드 포지셔닝, 제품 장점, 비즈니스 목표에 대한 깊은 이해.'
        },
        customization: {
          title: '솔루션 맞춤화',
          description: '브랜드를 위한 독점적인 입점, 운영 및 마케팅 솔루션을 맞춤 제작합니다.'
        },
        officialEntry: {
          title: '공식 입점',
          description: '모든 복잡한 신청 자료와 프로세스를 처리하여 시간을 절약해드립니다.'
        },
        storeLaunch: {
          title: '스토어 런칭',
          description: 'Tmall Global 스토어를 전문적으로 디자인하고 런칭하여 뛰어난 브랜드 이미지를 만듭니다.'
        },
        continuousGrowth: {
          title: '지속적인 성장',
          description: '정밀한 운영과 마케팅을 통해 매출과 브랜드 영향력의 이중 성장을 달성합니다.'
        }
      }
    },
    pricing: {
      title: '브랜드를 위한 맞춤형 파트너십 플랜',
      subtitle: '유연한 파트너십 모델을 제공합니다 - 어떤 개발 단계에 있든 가장 적합한 플랜을 찾을 수 있습니다.',
      plans: {
        basic: {
          name: '베이직',
          description: '빠르고 비용 효율적으로 플랫폼 입점을 완료하고 독립적으로 운영을 관리하고자 하는 브랜드에 적합합니다.',
          features: {
            assessment: '입점 자격 평가',
            guidance: '완전한 입점 가이드',
            setup: '기본 스토어 설정'
          },
          cta: '플랜 세부사항 보기'
        },
        growth: {
          name: '성장',
          recommended: '추천 플랜',
          description: '중국 시장에서 안정적인 성장을 추구하는 브랜드를 위해 설계되었으며, 핵심 일상 운영 서비스를 포함합니다.',
          features: {
            basicIncluded: '모든 베이직 서비스 포함',
            operations: '일상 스토어 운영 및 유지보수',
            customerService: '고객 서비스 관리',
            reports: '월간 데이터 보고서'
          },
          cta: '견적 문의하기'
        },
        flagship: {
          name: '플래그십',
          description: '중국 시장에서 브랜드의 잠재력과 영향력을 최대화하도록 설계된 원스톱 완전 관리 서비스입니다.',
          features: {
            growthIncluded: '모든 성장 서비스 포함',
            marketing: '통합 디지털 마케팅 전략 및 실행',
            kol: 'KOL 및 콘텐츠 마케팅',
            analytics: '심층 데이터 분석 및 전략 컨설팅'
          },
          cta: '플랜 세부사항 보기'
        }
      }
    }
  }
};
