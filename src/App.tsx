import MainPage from './pages/MainPage';
import './i18n';
// ...existing code...
import UsageGuideModal from './components/UsageGuideModal';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {



  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-16 px-2 sm:px-4 max-w-2xl w-full mx-auto">
        <MainPage />
      </main>
      <Footer />
      <UsageGuideModal />
    </div>
  );
}

export default App;
