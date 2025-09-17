import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import PoemInput from '../components/PoemInput';
import LyricsResult from '../components/LyricsResult';
import AudioPreview from '../components/AudioPreview';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const [poem, setPoem] = useState('');
  const [result, setResult] = useState<{lyrics: string, chords: string, melodyUrl: string} | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    console.log('[DEBUG] MainPage 렌더링, poem:', poem, 'result:', result);
  });

  return (
    <main className="w-full min-h-[calc(100vh-4rem)] flex justify-center items-start bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-2 sm:py-6 md:py-10">
      <section className="w-full max-w-4xl flex flex-col gap-12 px-0 sm:px-4 md:px-8 lg:px-0">
        {/* 히어로 섹션 */}
        <div className="flex flex-col items-center gap-2 mb-2 sm:mb-6 px-2 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white tracking-tight drop-shadow-lg leading-tight">
            <span className="inline-block align-middle mr-2">🎼</span>{t('title', 'AI 작사·작곡 도우미')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mt-2">
            {t('main_subtitle', '감성적인 시 한 줄이 음악이 되는 마법! AI가 당신의 창작을 도와드립니다.')}
          </p>
        </div>
        {/* 입력/결과 카드 섹션 */}
  <div className="w-full flex flex-col gap-8 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl p-3 sm:p-6 md:p-10 lg:p-12 xl:p-14 transition-all duration-300 hover:shadow-2xl hover:scale-[1.015] focus-within:shadow-accent/30">
          <PoemInput poem={poem} setPoem={setPoem} setResult={setResult} />
          <div className="w-full flex flex-col gap-4">
            {result ? (
              <>
                <LyricsResult lyrics={result.lyrics} chords={result.chords} />
                <AudioPreview url={result.melodyUrl} />
              </>
            ) : (
              <div className="text-center text-gray-400 mt-8 transition-all duration-300 hover:scale-105 hover:text-accent">
                <div className="text-base sm:text-lg md:text-xl font-medium" dangerouslySetInnerHTML={{ __html: t('guide_main', '아래 입력창에 시를 입력해보세요!<br/>AI가 가사·코드·멜로디를 만들어줍니다.') }} />
                <div className="mt-2 text-sm md:text-base opacity-80" dangerouslySetInnerHTML={{ __html: t('guide_example', '예시: <br/>하늘을 나는 새처럼 자유롭게') }} />
              </div>
            )}
          </div>
        </div>
        {/* 피드백 카드 섹션 */}
  <div className="w-full flex flex-col gap-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl p-3 sm:p-6 md:p-10 lg:p-12 xl:p-14 transition-all duration-300 hover:shadow-2xl hover:scale-[1.015] focus-within:shadow-accent/30">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('feedback_section', '피드백 & 의견')}</h2>
          <FeedbackForm />
          <FeedbackList />
        </div>
        {/* 안내/푸터 */}
        <footer className="w-full text-center text-xs md:text-sm text-gray-400 dark:text-gray-600 mt-8 mb-2 px-2 md:px-0">
          {t('footer_guide', '본 서비스는 AI 기반 창작 도우미 데모입니다. 모든 결과물은 참고용이며, 데이터는 저장되지 않습니다.')}
        </footer>
      </section>
    </main>
  );
}