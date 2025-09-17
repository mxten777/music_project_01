import { useState } from 'react';
import { generateLyricsAndChords } from '../utils/lyricHelper';
import { enkaPoems } from '../utils/enkaPoems';
import { useTranslation } from 'react-i18next';

type Props = {
  poem: string;
  setPoem: (v: string) => void;
  setResult: (v: {lyrics: string, chords: string, melodyUrl: string}) => void;
};

export default function PoemInput({ poem, setPoem, setResult }: Props) {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const minLen = 5;
  const maxLen = 500;
  const tooShort = poem.trim().length > 0 && poem.trim().length < minLen;
  const tooLong = poem.length > maxLen;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // 샘플 변환 로직
    const { lyrics, chords, melodyUrl } = generateLyricsAndChords(poem);
    setResult({ lyrics, chords, melodyUrl });
    setLoading(false);
  };

  const handleExample = () => {
    const random = enkaPoems[Math.floor(Math.random() * enkaPoems.length)];
    setPoem(random);
  };

  return (
  <form onSubmit={handleSubmit} className="mb-6 bg-white/90 dark:bg-gray-800/80 rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 animate-fadein border border-gray-100 dark:border-gray-700 max-w-xl mx-auto">
      <label htmlFor="poem-input" className="block text-sm font-medium text-gray-700 mb-1 sr-only">
        {t('input_placeholder')}
      </label>
      <textarea
        id="poem-input"
  className="w-full h-32 sm:h-40 p-2 border rounded mb-1 text-base sm:text-lg resize-y bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 hover:shadow-md"
        placeholder={t('input_placeholder')}
        value={poem}
        onChange={e => setPoem(e.target.value)}
        required
  aria-label={t('input_placeholder')}
  autoFocus
        maxLength={maxLen}
      />
  <div className="text-right text-xs text-gray-400 dark:text-gray-300 mb-1" aria-live="polite">{t('char_count', { count: poem.length })}</div>
      {tooShort && (
        <div className="text-xs text-red-500 mb-1">{t('too_short')}</div>
      )}
      {tooLong && (
        <div className="text-xs text-red-500 mb-1">{t('too_long')}</div>
      )}
  <div className="flex flex-col sm:flex-row gap-2 mt-2">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-200 dark:disabled:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:scale-105 hover:bg-blue-600 dark:hover:bg-blue-400"
          disabled={loading || poem.trim().length < minLen || tooLong}
          aria-label={t('convert')}
        >
          {loading ? t('convert') + '...' : t('convert')}
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded border focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-600"
          onClick={handleExample}
          aria-label={t('example')}
        >
          {t('example')}
        </button>
      </div>
    </form>
  );
}
