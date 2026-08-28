import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import type { Language } from './context/LanguageContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Farms from './pages/Farm';
import Farm2 from './pages/Farm2';
import Industrie from './pages/Industrie';
import SolutionPlaceholder from './pages/SolutionPlaceholder';
import About from './pages/About';

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

// Wrapper component: đọc :lang param từ URL, inject vào LanguageProvider
const LangRouter: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <LanguageProvider initialLang={lang}>
      <ScrollToHash />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </LanguageProvider>
  );
};



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Tiếng Việt — no prefix (mặc định) */}
        <Route path="/*" element={<LangRouter lang="vi" />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="solutions/farm" element={<Farms />} />
          <Route path="solutions/farm2" element={<Farm2 />} />
          <Route path="solutions/industrie" element={<Industrie />} />
          <Route path="solutions/:category" element={<SolutionPlaceholder />} />
        </Route>

        {/* English — /en prefix */}
        <Route path="/en/*" element={<LangRouter lang="en" />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="solutions/farm" element={<Farms />} />
          <Route path="solutions/farm2" element={<Farm2 />} />
          <Route path="solutions/industrie" element={<Industrie />} />
          <Route path="solutions/:category" element={<SolutionPlaceholder />} />
        </Route>

        {/* Español — /es prefix */}
        <Route path="/es/*" element={<LangRouter lang="es" />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="solutions/farm" element={<Farms />} />
          <Route path="solutions/farm2" element={<Farm2 />} />
          <Route path="solutions/industrie" element={<Industrie />} />
          <Route path="solutions/:category" element={<SolutionPlaceholder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
