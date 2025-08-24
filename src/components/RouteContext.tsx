import { createContext, useContext, ReactNode } from 'react';

interface RouteContextType {
  currentPage: string;
  navigateTo: (page: string) => void;
}

const RouteContext = createContext<RouteContextType | undefined>(undefined);

export function RouteProvider({ children, currentPage, navigateTo }: {
  children: ReactNode;
  currentPage: string;
  navigateTo: (page: string) => void;
}) {
  return (
    <RouteContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </RouteContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouteContext);
  if (context === undefined) {
    throw new Error('useRouter must be used within a RouteProvider');
  }
  return context;
}