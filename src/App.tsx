import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <LanguageProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </LanguageProvider>
  );
}

export default App;
