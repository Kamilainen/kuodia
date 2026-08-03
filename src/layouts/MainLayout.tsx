import React, { useState, createContext, useContext } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CalculatorModal from '../components/CTA/CalculatorModal';
// import ContactMascot from '../components/FloatingLabel/ContactMascot';

interface LayoutContextType {
  openCalculator: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a MainLayout');
  }
  return context;
};

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  const openCalculator = () => setIsCalcOpen(true);
  const closeCalculator = () => setIsCalcOpen(false);

  return (
    <LayoutContext.Provider value={{ openCalculator }}>
      <div className="min-h-screen flex flex-col bg-slate-50/50">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        <CalculatorModal isOpen={isCalcOpen} onClose={closeCalculator} />
        {/* <ContactMascot /> */}
      </div>
    </LayoutContext.Provider>
  );
};

export default MainLayout;
