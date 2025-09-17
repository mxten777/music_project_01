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
      <div className="text-sm text-gray-400 dark:text-gray-500 mt-4">아직 피드백이 없습니다.</div>
    );
  }

  return (
  <div className="mt-6 max-w-xl mx-auto bg-white/90 dark:bg-gray-800/80 rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 animate-fadein border border-gray-100 dark:border-gray-700">
      <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200 text-sm">피드백 목록</h4>
      <ul className="space-y-2">
        {feedbacks.map((fb, i) => (
          <li key={i} className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.01]">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{new Date(fb.date).toLocaleString()}</div>
            <div className="text-sm text-gray-800 dark:text-gray-100 whitespace-pre-line">{fb.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
