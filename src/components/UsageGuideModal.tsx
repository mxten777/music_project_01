import { useState } from 'react';

export default function UsageGuideModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 px-5 py-2.5 bg-pink-200/90 text-[#222] rounded-full shadow-xl hover:bg-pink-300/90 transition-all font-bold border border-pink-100/60"
        onClick={() => setOpen(true)}
        aria-label="사용법 보기"
      >
        🌸 사용법
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40" onClick={() => setOpen(false)} />
          <div className="fixed bottom-20 right-6 z-50 bg-pink-50/95 dark:bg-pink-200/10 rounded-2xl shadow-2xl max-w-lg w-[90vw] p-7 animate-fadein border border-pink-100/60 dark:border-pink-200/20" style={{minWidth: 280, backdropFilter: 'blur(8px)'}}>
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-pink-600 dark:hover:text-pink-200 text-xl"
              onClick={() => setOpen(false)}
              aria-label="닫기"
            >
              ×
            </button>
            <h2 className="text-lg font-bold mb-2" style={{color: 'var(--color-japan-red)'}}>Storybook 사용법</h2>
            <ol className="list-decimal pl-5 text-sm text-gray-800 dark:text-gray-100 space-y-2">
              <li>우측 하단 <b>사용법</b> 버튼을 클릭하면 이 안내가 열립니다.</li>
              <li>Storybook 실행: <code>pnpm storybook</code> 또는 <code>npm run storybook</code> 명령어를 사용하세요.</li>
              <li>브라우저에서 <code>http://localhost:6006</code> 접속 후, 좌측에서 원하는 컴포넌트를 선택해 UI/동작을 확인할 수 있습니다.</li>
              <li>새 컴포넌트는 <code>src/components/컴포넌트명.stories.tsx</code> 파일을 추가해 문서화할 수 있습니다.</li>
              <li>자세한 내용은 <a href="https://storybook.js.org/docs/react" target="_blank" rel="noopener noreferrer" className="underline text-pink-600 dark:text-pink-200">공식 문서</a> 참고</li>
            </ol>
          </div>
        </>
      )}
    </>
  );
}
