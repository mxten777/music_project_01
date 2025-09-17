

import MainPage from './pages/MainPage';
import './i18n';
import UsageGuideModal from './components/UsageGuideModal';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });
  useEffect(() => {
    console.log('[DEBUG] App 렌더링');
  });
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(document.documentElement.classList.contains('dark'));
  };
  return (
  <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
      <Header />
      {/* 다크모드 토글 버튼을 Header로 이동 */}
  <main className="flex-1 pt-20 pb-16">
        <MainPage />
      </main>
      <Footer />
      <UsageGuideModal />
    </div>
  );
}

export default App;
