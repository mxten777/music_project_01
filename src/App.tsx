import MainPage from './pages/MainPage';
import './i18n';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import UsageGuideModal from './components/UsageGuideModal';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-16 px-2 sm:px-4 max-w-2xl w-full mx-auto">
        {/* 언어/다크모드 토글은 헤더로 이동 예정, 임시로 숨김 처리 */}
        {/* <div className="flex justify-between items-center mb-4"> ... </div> */}
        <MainPage />
      </main>
      <Footer />
      <UsageGuideModal />
    </div>
  );
}

export default App;
