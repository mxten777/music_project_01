type Props = {
  lyrics: string;
  chords: string;
};


import { useState, useEffect } from 'react';

export default function LyricsResult({ lyrics, chords }: Props) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(`가사\n${lyrics}\n\n코드 진행: ${chords}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  useEffect(() => {
    console.log('[DEBUG] LyricsResult 렌더링', { lyrics, chords });
  });
  return (
  <div style={{background: 'var(--color-card)', backdropFilter: 'var(--color-blur)'}} className="mb-8 border-t pt-8 rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-500 animate-fadein hover:shadow-2xl hover:scale-[1.015]" aria-live="polite" role="region" aria-labelledby="lyrics-result-heading">
  <h2 className="font-semibold mb-2 text-lg" style={{color: 'var(--color-accent)'}} id="lyrics-result-heading">🎵 변환 결과</h2>
  <div className="mb-2 text-sm" style={{color: 'var(--color-text-secondary)'}}>아래는 입력하신 시를 기반으로 생성된 가사와 코드입니다.</div>
  <pre className="p-3 rounded-lg whitespace-pre-wrap mb-2 border text-base shadow-inner" style={{background: 'var(--color-bg-secondary)', color: 'var(--color-text)'}} aria-label="가사 결과">{lyrics}</pre>
      <div className="flex items-center gap-2 mb-2">
  <div className="text-sm" style={{color: 'var(--color-text)'}}>코드 진행: <span className="font-mono font-semibold">{chords}</span></div>
        <button onClick={handleCopy} className="ml-2 px-2 py-1 text-xs rounded-xl border shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 hover:scale-[1.04] active:scale-95" style={{background: 'var(--color-bg-secondary)', color: 'var(--color-accent)', borderColor: 'var(--color-accent)'}} aria-label="가사와 코드 복사" aria-live="polite" aria-pressed={copied}>
          {copied ? '복사됨!' : '복사'}
        </button>
      </div>
    </div>
  );
}
