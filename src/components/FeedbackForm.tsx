import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FeedbackForm() {
  const [value, setValue] = useState('');
  const [sent, setSent] = useState(false);
  const { t } = useTranslation();
  const minLen = 5;
  const maxLen = 500;
  const tooShort = value.trim().length > 0 && value.trim().length < minLen;
  const tooLong = value.length > maxLen;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 피드백 로컬 저장
    const feedback = {
      text: value,
      date: new Date().toISOString(),
    };
    try {
      const prev = localStorage.getItem('feedbacks');
      const arr = prev ? JSON.parse(prev) : [];
      arr.push(feedback);
      localStorage.setItem('feedbacks', JSON.stringify(arr));
    } catch (err) {
      // 저장 실패 시 무시
    }
    setSent(true);
    setValue('');
  };

  return (
  <div style={{background: 'rgba(250,218,221,0.18)', backdropFilter: 'blur(8px)'}} className="mt-12 border-t pt-8 rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-500 animate-fadein hover:shadow-pink-200/60 hover:scale-[1.018]" role="region" aria-labelledby="feedback-form-heading">
  <h3 id="feedback-form-heading" className="font-semibold mb-2 text-base" style={{color: 'var(--color-japan-red)'}}>
        {t('feedback_title', '피드백 보내기')}
      </h3>
      {sent ? (
  <div className="text-sm" style={{color: 'var(--color-success)'}} role="status" aria-live="polite">
          {t('feedback_thanks', '소중한 의견 감사합니다!')}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2" role="form" aria-labelledby="feedback-form-heading">
            <textarea
              className="w-full h-20 p-4 border-0 rounded-2xl mb-2 text-base resize-y transition-all duration-200 shadow-inner focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-200/60 hover:shadow-pink-100/40 bg-white/80 dark:bg-gray-800/80 font-medium"
              style={{color: 'var(--color-text)', fontFamily: 'inherit'}} 
              placeholder={t('feedback_placeholder', '의견, 버그, 개선점 등을 자유롭게 남겨주세요.')}
              value={value}
              onChange={e => setValue(e.target.value)}
              required
              aria-label={t('feedback_placeholder', '의견, 버그, 개선점 등을 자유롭게 남겨주세요.')}
              aria-required="true"
              aria-describedby="feedback-charcount feedback-error"
              aria-invalid={tooShort || tooLong}
              maxLength={maxLen}
            />
          <div id="feedback-charcount" className="text-right text-xs mb-1" style={{color: 'var(--color-text-secondary)'}} aria-live="polite">
            {t('char_count', { count: value.length })}
          </div>
            <div id="feedback-error" aria-live="assertive">
              {tooShort && (
                <div className="flex items-center gap-1 text-xs mb-1 animate-pulse" style={{color: 'var(--color-danger)'}}><span aria-hidden>⚠️</span>{t('too_short', '5자 이상 입력하세요.')}</div>
              )}
              {tooLong && (
                <div className="flex items-center gap-1 text-xs mb-1 animate-pulse" style={{color: 'var(--color-danger)'}}><span aria-hidden>⚠️</span>{t('too_long', '500자 이하로 입력하세요.')}</div>
              )}
            </div>
            <button
              type="submit"
              className="self-end px-6 py-2 rounded-2xl font-semibold shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-200/60 text-base disabled:opacity-60 flex items-center gap-2 hover:scale-[1.04] active:scale-95 bg-pink-200/80 text-[#222] hover:bg-pink-300/90"
              disabled={value.trim().length < minLen || tooLong}
              aria-label={t('feedback_submit', '제출')}
            >
              <span aria-hidden>✉️</span>{t('feedback_submit', '제출')}
            </button>
        </form>
      )}
    </div>
  );
}
