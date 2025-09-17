import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import PoemInput from '../components/PoemInput';
import LyricsResult from '../components/LyricsResult';
import AudioPreview from '../components/AudioPreview';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const [poem, setPoem] = useState('');
  const [result, setResult] = useState<{lyrics: string, chords: string, melodyUrl: string} | null>(null);

  const { t } = useTranslation();
  return (
    <div className="max-w-2xl mx-auto px-2 sm:px-4 py-6 flex flex-col">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">{t('title')}</h1>
      <div className="flex-1 flex flex-col justify-start">
        <PoemInput poem={poem} setPoem={setPoem} setResult={setResult} />
        {result ? (
          <div className="animate-fadein">
            <LyricsResult lyrics={result.lyrics} chords={result.chords} />
            <AudioPreview url={result.melodyUrl} />
          </div>
        ) : (
          <div className="text-center text-gray-400 mt-10">
            <div dangerouslySetInnerHTML={{ __html: t('guide_main') }} />
            <div className="mt-2 text-sm" dangerouslySetInnerHTML={{ __html: t('guide_example') }} />
          </div>
        )}
      </div>
  <FeedbackForm />
  <FeedbackList />
    </div>
  );
}
