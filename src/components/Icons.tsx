export const Icons = {
  AI: () => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.11 7 14 7.9 14 9S13.11 11 12 11 10 10.11 10 9 10.9 7 12 7M18 9C18 10.11 17.11 11 16 11S14 10.11 14 9 14.9 7 16 7 18 7.9 18 9M6 9C6 10.11 5.11 11 4 11S2 10.11 2 9 2.9 7 4 7 6 7.9 6 9Z"/>
      </svg>
    </div>
  ),
  
  Globe: ({ className }: { className?: string } = {}) => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    </div>
  ),
  
  Analytics: () => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    </div>
  ),
  
  Target: ({ className }: { className?: string } = {}) => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    </div>
  ),
  
  Innovation: () => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
      </svg>
    </div>
  ),
  
  Settings: () => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
      </svg>
    </div>
  ),
  
  ShoppingCart: ({ className }: { className?: string } = {}) => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    </div>
  ),
  
  CreditCard: ({ className }: { className?: string } = {}) => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
      </svg>
    </div>
  ),
  
  MapPin: ({ className }: { className?: string } = {}) => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </div>
  ),
  
  Building: ({ className }: { className?: string } = {}) => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    </div>
  ),
  
  Eye: ({ className }: { className?: string } = {}) => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    </div>
  ),
  
  Clock: ({ className }: { className?: string } = {}) => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    </div>
  ),
  
  Zap: ({ className }: { className?: string } = {}) => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
      </svg>
    </div>
  ),
  
  TrendUp: ({ className }: { className?: string } = {}) => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    </div>
  ),
  
  Users: ({ className }: { className?: string } = {}) => (
    <div className="w-16 h-16 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-200 transition-all duration-300">
      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    </div>
  )
};
