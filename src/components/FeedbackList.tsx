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
  <div style={{background: 'rgba(250,218,221,0.13)', backdropFilter: 'blur(8px)'}} className="mt-12 rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-500 animate-fadein hover:shadow-pink-200/60 hover:scale-[1.018]" role="region" aria-labelledby="feedback-list-heading">
  <h4 id="feedback-list-heading" className="font-semibold mb-2 text-sm" style={{color: 'var(--color-japan-red)'}}>피드백 목록</h4>
      <ul className="space-y-4">
        {feedbacks.map((fb, i) => (
          <li key={i} className="p-4 rounded-2xl shadow-md bg-white/90 dark:bg-gray-900/80 border border-pink-100/60 dark:border-pink-200/20 transition-all duration-300 hover:shadow-pink-200/40 hover:scale-[1.012]" style={{backdropFilter: 'blur(4px)'}} tabIndex={0} aria-label={`피드백 ${i+1}: ${fb.text}`}> 
            <div className="text-xs mb-1" style={{color: 'var(--color-text-secondary)'}}>{new Date(fb.date).toLocaleString()}</div>
            <div className="text-sm whitespace-pre-line" style={{color: 'var(--color-text)'}}>{fb.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
