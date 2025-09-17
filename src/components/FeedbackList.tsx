import { useEffect, useState } from 'react';

export type Feedback = {
  text: string;
  date: string;
};

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    try {
      const data = localStorage.getItem('feedbacks');
      if (data) {
        setFeedbacks(JSON.parse(data));
      }
    } catch {}
  }, []);

  if (feedbacks.length === 0) {
    return (
      <div className="text-sm mt-4" style={{color: 'var(--color-text-secondary)'}} role="status" aria-live="polite">아직 피드백이 없습니다.</div>
    );
  }

  useEffect(() => {
    console.log('[DEBUG] FeedbackList 렌더링', { feedbacks });
  });
  return (
  <div style={{background: 'var(--color-card)', backdropFilter: 'var(--color-blur)'}} className="mt-12 rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-500 animate-fadein hover:shadow-2xl hover:scale-[1.015]" role="region" aria-labelledby="feedback-list-heading">
  <h4 id="feedback-list-heading" className="font-semibold mb-2 text-sm" style={{color: 'var(--color-accent)'}}>피드백 목록</h4>
      <ul className="space-y-4">
        {feedbacks.map((fb, i) => (
          <li key={i} className="p-4 rounded-xl shadow-md bg-white/70 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]" style={{backdropFilter: 'blur(4px)'}} tabIndex={0} aria-label={`피드백 ${i+1}: ${fb.text}`}> 
            <div className="text-xs mb-1" style={{color: 'var(--color-text-secondary)'}}>{new Date(fb.date).toLocaleString()}</div>
            <div className="text-sm whitespace-pre-line" style={{color: 'var(--color-text)'}}>{fb.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
