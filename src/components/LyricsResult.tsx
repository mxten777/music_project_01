type Props = {
  lyrics: string;
  chords: string;
};


import { useState } from 'react';

export default function LyricsResult({ lyrics, chords }: Props) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(`가사\n${lyrics}\n\n코드 진행: ${chords}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
  <div className="mb-6 border-t pt-6 border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/80 rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 animate-fadein max-w-xl mx-auto" aria-live="polite">
      <h2 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white" id="lyrics-result-heading">🎵 변환 결과</h2>
      <div className="mb-2 text-gray-500 dark:text-gray-300 text-sm">아래는 입력하신 시를 기반으로 생성된 가사와 코드입니다.</div>
  <pre className="bg-gray-50 dark:bg-gray-800 dark:text-white p-3 rounded-lg whitespace-pre-wrap mb-2 border border-gray-200 dark:border-gray-700 text-base shadow-inner" aria-label="가사 결과">{lyrics}</pre>
      <div className="flex items-center gap-2 mb-2">
        <div className="text-sm text-gray-700 dark:text-gray-200">코드 진행: <span className="font-mono font-semibold">{chords}</span></div>
  <button onClick={handleCopy} className="ml-2 px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded border border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:scale-105 shadow-sm" aria-label="가사와 코드 복사">
          {copied ? '복사됨!' : '복사'}
        </button>
      </div>
    </div>
  );
}
