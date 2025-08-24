import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';

interface PolicyDialogProps {
  trigger: React.ReactNode;
  type: 'privacy' | 'terms' | 'cookie';
}

export function PolicyDialog({ trigger, type }: PolicyDialogProps) {
  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">Information We Collect</h3>
                <p className="text-sm text-gray-600 mb-3">
                  We collect information you provide directly to us, such as when you create an account, 
                  subscribe to our services, or contact us for support.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Business information (company name, website, industry)</li>
                  <li>Usage data and analytics</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">How We Use Your Information</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Analyze usage patterns and improve user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Data Security</h3>
                <p className="text-sm text-gray-600">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Your Rights</h3>
                <p className="text-sm text-gray-600 mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                <p className="text-sm text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:services@ucyx.com" className="text-green-600 hover:underline">
                    services@ucyx.com
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs text-gray-500">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </section>
            </div>
          )
        };

      case 'terms':
        return {
          title: 'Terms of Service',
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">Acceptance of Terms</h3>
                <p className="text-sm text-gray-600">
                  By accessing and using UCYX services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Service Description</h3>
                <p className="text-sm text-gray-600 mb-3">
                  UCYX provides AI-driven e-commerce consulting services including:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Marketing mix modeling (UC-MMM™)</li>
                  <li>E-commerce optimization tools</li>
                  <li>Global market expansion consulting</li>
                  <li>AI-powered business insights</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">User Responsibilities</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Use services in compliance with applicable laws</li>
                  <li>Not interfere with or disrupt the services</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Payment Terms</h3>
                <p className="text-sm text-gray-600">
                  Payment terms are specified in your service agreement. All fees are non-refundable 
                  unless otherwise stated in writing.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Intellectual Property</h3>
                <p className="text-sm text-gray-600">
                  All content, features, and functionality are owned by UCYX and are protected by 
                  international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Limitation of Liability</h3>
                <p className="text-sm text-gray-600">
                  UCYX shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages resulting from your use of our services.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Termination</h3>
                <p className="text-sm text-gray-600">
                  We may terminate or suspend your account and access to services immediately, without 
                  prior notice, for any breach of these Terms.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                <p className="text-sm text-gray-600">
                  For questions about these Terms, contact us at{' '}
                  <a href="mailto:services@ucyx.com" className="text-green-600 hover:underline">
                    services@ucyx.com
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs text-gray-500">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </section>
            </div>
          )
        };

      case 'cookie':
        return {
          title: 'Cookie Policy',
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">What Are Cookies</h3>
                <p className="text-sm text-gray-600">
                  Cookies are small text files that are placed on your computer or mobile device when 
                  you visit our website. They help us provide you with a better experience.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Types of Cookies We Use</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Essential Cookies</h4>
                    <p className="text-sm text-gray-600">
                      These cookies are necessary for the website to function properly. They enable 
                      basic functions like page navigation and access to secure areas.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">
                      We use analytics cookies to understand how visitors interact with our website, 
                      helping us improve our services.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">
                      These cookies track your browsing habits to show you relevant advertisements 
                      and measure the effectiveness of our marketing campaigns.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Preference Cookies</h4>
                    <p className="text-sm text-gray-600">
                      These cookies remember your preferences and settings to provide a personalized 
                      experience on future visits.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Managing Cookies</h3>
                <p className="text-sm text-gray-600 mb-3">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                  <li>Third-party tools: Use privacy tools to manage tracking</li>
                  <li>Opt-out links: Many advertising networks provide opt-out options</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Third-Party Cookies</h3>
                <p className="text-sm text-gray-600">
                  Our website may contain content from third parties (like embedded videos or social 
                  media widgets) that may set their own cookies.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Updates to This Policy</h3>
                <p className="text-sm text-gray-600">
                  We may update this Cookie Policy from time to time. Any changes will be posted on 
                  this page with an updated revision date.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                <p className="text-sm text-gray-600">
                  If you have questions about our use of cookies, contact us at{' '}
                  <a href="mailto:services@ucyx.com" className="text-green-600 hover:underline">
                    services@ucyx.com
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs text-gray-500">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </section>
            </div>
          )
        };

      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getContent();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          {content}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}