import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Industries from './pages/Industries';
import SolutionPlaceholder from './pages/SolutionPlaceholder';

// Helper component to handle scrolling to section hashes and top of page on route transitions
const ScrollToHash: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToHash />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions/farm" element={<Industries />} />
            <Route path="/solutions/:category" element={<SolutionPlaceholder />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
