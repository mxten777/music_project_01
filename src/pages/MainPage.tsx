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
    <main className="w-full min-h-screen flex justify-center items-start bg-[url('/bg/sakura.jpg')] bg-cover bg-center bg-no-repeat relative py-0">
      {/* 오버레이: 벚꽃색 그라데이션 추가 */}
  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(250,218,221,0.45)] via-white/90 to-gray-100/90 dark:from-[rgba(233,84,107,0.25)] dark:via-gray-900/90 dark:to-gray-900/90 z-0" aria-hidden="true" />
      <section className="w-full max-w-4xl flex flex-col gap-2 px-0 sm:px-4 md:px-8 lg:px-0 justify-center items-center mt-0 relative z-10">
  {/* 히어로 섹션 */}
        <div className="flex flex-col items-center gap-2 mb-2 sm:mb-2 px-2 sm:px-0 mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight leading-tight" style={{color: '#222'}}>
            <span className="inline-block align-middle mr-2" aria-label="벚꽃">🌸</span>{t('title', 'AI 작사·작곡 도우미')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl mt-2" style={{color: 'var(--color-japan-red)'}}>
            {t('main_subtitle', '감성적인 시 한 줄이 음악이 되는 마법! AI가 당신의 창작을 도와드립니다.')}
          </p>
        </div>
  {/* 입력/결과 카드 섹션 */}
  <div className="w-full flex flex-col gap-8 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl p-3 sm:p-6 md:p-10 lg:p-12 xl:p-14 transition-all duration-300 hover:shadow-2xl hover:scale-[1.015] focus-within:shadow-accent/30 mt-0">
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
        <footer className="w-full text-center text-xs md:text-sm mt-8 mb-2 px-2 md:px-0 py-3 rounded-xl bg-pink-50/80 dark:bg-pink-200/10 text-pink-700 dark:text-pink-200 font-semibold shadow-sm border border-pink-100/60 dark:border-pink-200/20" style={{backdropFilter: 'blur(4px)'}}>
          {t('footer_guide', '본 서비스는 AI 기반 창작 도우미 데모입니다. 모든 결과물은 참고용이며, 데이터는 저장되지 않습니다.')}
        </footer>
      </section>
    </main>
  );
}