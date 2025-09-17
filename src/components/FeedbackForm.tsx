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
  <div className="mt-10 border-t pt-6 max-w-xl mx-auto bg-white/90 dark:bg-gray-800/80 rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 animate-fadein border border-gray-100 dark:border-gray-700">
      <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-200 text-base">
        {t('feedback_title', '피드백 보내기')}
      </h3>
      {sent ? (
        <div className="text-green-600 dark:text-green-400 text-sm" role="status">
          {t('feedback_thanks', '소중한 의견 감사합니다!')}
        </div>
      ) : (
  <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <textarea
            className="w-full h-20 p-2 border rounded bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
            placeholder={t('feedback_placeholder', '의견, 버그, 개선점 등을 자유롭게 남겨주세요.')}
            value={value}
            onChange={e => setValue(e.target.value)}
            required
            maxLength={maxLen}
            aria-label={t('feedback_placeholder', '의견, 버그, 개선점 등을 자유롭게 남겨주세요.')}
          />
          <div className="text-right text-xs text-gray-400 dark:text-gray-300 mb-1" aria-live="polite">
            {t('char_count', { count: value.length })}
          </div>
          {tooShort && (
            <div className="text-xs text-red-500 mb-1">{t('too_short')}</div>
          )}
          {tooLong && (
            <div className="text-xs text-red-500 mb-1">{t('too_long')}</div>
          )}
          <button
            type="submit"
            className="self-end px-4 py-1 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-400 transition-all duration-200 hover:scale-105 disabled:bg-blue-200 dark:disabled:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={value.trim().length < minLen || tooLong}
            aria-label={t('feedback_submit', '제출')}
          >
            {t('feedback_submit', '제출')}
          </button>
        </form>
      )}
    </div>
  );
}
