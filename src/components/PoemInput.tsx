import { useState, useEffect } from 'react';
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

  useEffect(() => {
    console.log('[DEBUG] PoemInput 렌더링, poem:', poem);
  });

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
  <form onSubmit={handleSubmit} style={{background: 'rgba(250,218,221,0.25)', backdropFilter: 'blur(10px)'}} className="mb-8 rounded-3xl shadow-2xl p-8 sm:p-14 transition-all duration-500 animate-fadein max-w-3xl w-full mx-auto border border-[rgba(250,218,221,0.45)] hover:shadow-pink-200/60 focus-within:shadow-pink-300/70 hover:scale-[1.018] focus-within:scale-[1.01]" role="form" aria-labelledby="poem-form-heading">
      {/* 디버깅: PoemInput 렌더링 */}
  <label htmlFor="poem-input" className="block text-sm font-medium mb-1 sr-only" style={{color: 'var(--color-text-secondary)'}}>
        {t('input_placeholder')}
      </label>
      <textarea
        id="poem-input"
        className="w-full h-40 sm:h-56 p-6 border-0 rounded-2xl mb-4 text-lg sm:text-xl resize-y transition-all duration-200 shadow-inner focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-200/60 hover:shadow-pink-100/40 bg-white/80 dark:bg-gray-800/80"
        style={{color: 'var(--color-text)', fontFamily: 'inherit'}} 
        placeholder={t('input_placeholder')}
        value={poem}
        onChange={e => setPoem(e.target.value)}
        required
        aria-label={t('input_placeholder')}
        aria-required="true"
        aria-describedby="poem-charcount poem-error"
        aria-invalid={tooShort || tooLong}
        autoFocus
        maxLength={maxLen}
      />
  <div id="poem-charcount" className="text-right text-xs mb-1" style={{color: 'var(--color-text-secondary)'}} aria-live="polite">{t('char_count', { count: poem.length })}</div>
      <div id="poem-error" aria-live="assertive">
        {tooShort && (
          <div className="flex items-center gap-1 text-xs mb-1 animate-pulse" style={{color: 'var(--color-danger)'}}>
            <span aria-hidden>⚠️</span>{t('too_short', '5자 이상 입력하세요.')}
          </div>
        )}
        {tooLong && (
          <div className="flex items-center gap-1 text-xs mb-1 animate-pulse" style={{color: 'var(--color-danger)'}}>
            <span aria-hidden>⚠️</span>{t('too_long', '500자 이하로 입력하세요.')}
          </div>
        )}
      </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            type="submit"
            className="px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-200/60 text-lg sm:text-xl disabled:opacity-60 flex items-center justify-center gap-2 hover:scale-[1.04] active:scale-95 bg-pink-200/80 text-[#222] hover:bg-pink-300/90"
            disabled={loading || poem.trim().length < minLen || tooLong}
            aria-label={t('convert', 'AI 작사·작곡')}
          >
            {loading ? (
              <span className="flex items-center gap-1 animate-pulse"><span className="inline-block w-3 h-3 rounded-full bg-white animate-bounce" />{t('loading', '생성 중...')}</span>
            ) : t('convert', 'AI 작사·작곡')}
          </button>
          <button
            type="button"
            className="px-8 py-4 rounded-2xl border shadow-lg transition-all duration-200 text-lg sm:text-xl font-bold focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 hover:scale-[1.04] active:scale-95 bg-white/80 dark:bg-gray-800/80 text-[#222] dark:text-gray-100 border-pink-200/60"
            onClick={handleExample}
            aria-label={t('example', '예시 불러오기')}
          >
            {t('example', '예시 불러오기')}
          </button>
        </div>
    </form>
  );
}