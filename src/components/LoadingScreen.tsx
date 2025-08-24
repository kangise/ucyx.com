import { useState, useEffect } from 'react';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-teal-600 rounded-full animate-spin"></div>
        <div className="text-2xl text-gray-900">UCYX</div>
        <div className="text-sm text-gray-600">AI-Driven Global E-commerce Consultancy</div>
      </div>
    </div>
  );
}