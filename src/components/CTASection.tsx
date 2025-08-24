import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { useLanguage } from "./i18n/LanguageContext";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-green-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            {t('cta.title')}
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90">
            {t('cta.subtitle')}
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
            <CardContent className="p-10">
              <h3 className="text-2xl mb-6 text-center">{t('cta.button')}</h3>
              <p className="text-center mb-8 text-white">
                {t('cta.description')}
              </p>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <p className="text-lg">{t('common.thankYou')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder={t('cta.form.name')}
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/30 text-white placeholder-white h-12"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder={t('cta.form.email')}
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/30 text-white placeholder-white h-12"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder={t('cta.form.message')}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/30 text-white placeholder-white min-h-24"
                      rows={4}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-green-600 hover:bg-gray-100 h-12 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('common.submitting') : t('common.submit')}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl mb-4">{t('common.createFuture')}</h3>
            <p className="text-lg mb-6 opacity-90">
              {t('common.connectVision')}
            </p>
            <div className="space-y-2 text-sm opacity-80">
              <p className="leading-relaxed whitespace-pre-line">
                {t('common.companyAddress')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}