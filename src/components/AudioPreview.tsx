import { useState, useEffect } from 'react';

type Props = {
  url: string;
};

export default function AudioPreview({ url }: Props) {
  const [audioError, setAudioError] = useState(false);
  useEffect(() => {
    console.log('[DEBUG] AudioPreview 렌더링', { url });
  });
  return (
  <div style={{background: 'rgba(250,218,221,0.13)', backdropFilter: 'blur(8px)'}} className="mb-8 rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-500 animate-fadein hover:shadow-pink-200/60 hover:scale-[1.018]" role="region" aria-labelledby="audio-preview-heading">
  <h2 className="font-semibold mb-2" style={{color: 'var(--color-japan-red)'}} id="audio-preview-heading">🎶 멜로디 프리뷰</h2>
      {url ? (
        <>
          <audio
            controls
            src={url}
            className="w-full mb-2 bg-white dark:bg-gray-800"
            aria-label="멜로디 오디오 프리뷰"
            aria-describedby="audio-preview-heading"
            onError={() => setAudioError(true)}
            tabIndex={0}
          />
          {audioError && (
            <div className="text-xs mb-2" style={{color: 'var(--color-danger)'}} role="alert" aria-live="assertive">오디오를 재생할 수 없습니다. 네트워크 또는 파일 문제일 수 있습니다.</div>
          )}
            <a href={url} download className="inline-block px-3 py-1 text-xs rounded-xl border shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-200/60 hover:scale-[1.04] active:scale-95 bg-white/90 dark:bg-gray-900/80 text-[#222] dark:text-gray-100 border-pink-100/60 dark:border-pink-200/20" aria-label="오디오 다운로드" tabIndex={0}>오디오 다운로드</a>
        </>
      ) : (
  <div className="text-sm" style={{color: 'var(--color-text-secondary)'}} aria-live="polite">멜로디 오디오가 없습니다.</div>
      )}
    </div>
  );
}
