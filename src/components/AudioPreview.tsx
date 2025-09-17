import { useState } from 'react';

type Props = {
  url: string;
};

export default function AudioPreview({ url }: Props) {
  const [audioError, setAudioError] = useState(false);
  return (
  <div className="mb-4 bg-white/90 dark:bg-gray-800/80 rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 animate-fadein max-w-xl mx-auto">
  <h2 className="font-semibold mb-2 text-gray-900 dark:text-white" id="audio-preview-heading">🎶 멜로디 프리뷰</h2>
      {url ? (
        <>
          <audio
            controls
            src={url}
            className="w-full mb-2 bg-white dark:bg-gray-800"
            aria-label="멜로디 오디오 프리뷰"
            aria-describedby="audio-preview-heading"
            onError={() => setAudioError(true)}
          />
          {audioError && (
            <div className="text-xs text-red-500 mb-2">오디오를 재생할 수 없습니다. 네트워크 또는 파일 문제일 수 있습니다.</div>
          )}
          <a href={url} download className="inline-block px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded border border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:scale-105 shadow-sm" aria-label="오디오 다운로드">오디오 다운로드</a>
        </>
      ) : (
        <div className="text-gray-400 dark:text-gray-300 text-sm" aria-live="polite">멜로디 오디오가 없습니다.</div>
      )}
    </div>
  );
}
